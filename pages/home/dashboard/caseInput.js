import React, { useState, useEffect } from "react";
import ProtectedPage from "../../../components/ProtectedPage";
import styles from "../../../styles/search.module.css";
import CaseInputComponent from "../../../components/CaseInputComponent";
import axios from "axios";
import { useSelector } from "react-redux";
import { message, Form } from "antd";

const caseInput = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const [values, setValues] = useState(null);
  const token = useSelector((state) => state.user.token);
  const [caseInputForm] = Form.useForm();

  const addProperty = (values) => {
    setValues(values);
    setSendRequest(true);
  };

  const clearForm = () => {
    caseInputForm.resetFields();
  };

  useEffect(() => {
    document.title = "Add Property";
  });

  useEffect(() => {
    if (sendRequest && values !== null) {
      const addHandler = async () => {
        setIsLoading(true);
        message.loading({
          content: "Loading...",
          key: "10",
        });

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_MAIN_PROXY}/add-property`,
            values,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
          setIsLoading(false);
          message.success({
            content: data.message,
            key: "10",
          });
          const hostname = window.location.origin;
          const propertyLink = `${hostname}/home/property/${data.savedProperty}`;
          clearForm();
          window.open(propertyLink, "_blank");
        } catch (err) {
          console.log(err);
          setIsLoading(false);
          const errorMsg = err.response
            ? err.response.data.message
            : "Something went wrong!!!";
          message.error({ content: errorMsg, key: "10" });
        }
      };
      addHandler();
    }

    return () => {
      setSendRequest(false);
    };
  }, [sendRequest && values !== null]);

  return (
    <ProtectedPage>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        Add properties to the system.
      </h1>
      <div className={styles.searchUi}>
        <CaseInputComponent
          addProperty={addProperty}
          isLoading={isLoading}
          caseInputForm={caseInputForm}
          clearForm={clearForm}
        />
      </div>
    </ProtectedPage>
  );
};

export default caseInput;
