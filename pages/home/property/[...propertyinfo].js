import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Collapse, Form, Row, Col, Tabs, message } from "antd";
import PropertyInfoComponent from "../../../components/SingleProperty/PropertyInfoComponent";
import ProtectedPage from "../../../components/ProtectedPage";
import MortgageInfoComponent from "../../../components/SingleProperty/MortgageInfoComponent";
import OwnerInfoComponent from "../../../components/SingleProperty/OwnerInfoComponent";
import SaleInfoComponent from "../../../components/SingleProperty/SaleInfoComponent";
import CmaArvComponent from "../../../components/SingleProperty/CmaArvComponent";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../../../store/singleRecordSlice";
import PicturesAndMaps from "../../../components/SingleProperty/PicturesAndMaps";
import BottomSection from "../../../components/SingleProperty/BottomSection";

const singlePropertyInfo = () => {
  const router = useRouter();
  const { propertyinfo } = router.query;
  const { Panel } = Collapse;
  const [propertyInfoForm] = Form.useForm();
  const [ownerAndBorrower] = Form.useForm();
  const [cmaInfoForm] = Form.useForm();

  const [isLoading, setIsLoading] = useState(true);
  const [requestedData, setRequestedData] = useState(null);
  const user = useSelector((state) => state.user.user);

  const token = useSelector((state) => state.user.token);

  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  const requestedProperty = propertyinfo && propertyinfo[0];

  useEffect(() => {
    if (requestedProperty) {
      const fethSingleProperty = async () => {
        try {
          if (user == null) return router.push("/signup");
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_MAIN_PROXY}/requested-property/${requestedProperty}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("getting single record data");
          setRequestedData(data);
          document.title = `${
            data.propertyAddress ? data.propertyAddress : "No Property Address"
          } ${data.city ? data.city : ""}${
            data.state ? ", " + data.state : ""
          } ${data.zip ? data.zip : ""}`;
          // console.log(data)
          dispatch(storeData(data._id));
          setIsLoading(false);
        } catch (err) {
          const errorMsg = err.response
            ? err.response.data.message
            : "Something went wrong!!!";
          console.log(err.response);
          message.error(errorMsg);
          // setTimeout(() => {
          router.push("/home/dashboard");
          // }, 1500)
        }
      };
      fethSingleProperty();
    }
  }, [requestedProperty]);

  return (
    <ProtectedPage>
      {/* useTabHere */}

      {isLoading && (
        <div className="loadingDiv">
          <SyncOutlined spin size="large" className="pageLoading" />
        </div>
      )}

      {!isLoading && (
        <>
          <Tabs type="card" size="large" style={{ overflow: "unset" }}>
            <TabPane
              tab="Property Details"
              key="propertyInfoTab"
              style={{ overflow: "unset" }}
            >
              <Row gutter={15} wrap={true} justify="center">
                <Col span={23}>
                  <Collapse
                    defaultActiveKey={["1"]}
                    expandIconPosition="right"
                    className="site-collapse-custom-collapse"
                  >
                    <Panel
                      header="Property Details (Building, Land, Assessment)"
                      key="1"
                      className="site-collapse-custom-panel"
                    >
                      <PropertyInfoComponent
                        propertyInfo={propertyInfoForm}
                        data={requestedData}
                      />
                    </Panel>

                    <Panel
                      header="Mortgage, Other Liens"
                      key="2"
                      className="site-collapse-custom-panel"
                    >
                      <MortgageInfoComponent data={requestedData} />
                    </Panel>

                    <Panel
                      header="Owner & Borrower Info"
                      key="3"
                      className="site-collapse-custom-panel"
                    >
                      <OwnerInfoComponent
                        ownerAndBorrower={ownerAndBorrower}
                        data={requestedData}
                      />
                    </Panel>

                    <Panel
                      header="Sale Details or Foreclosure Info"
                      key="4"
                      className="site-collapse-custom-panel"
                    >
                      <SaleInfoComponent data={requestedData.saleinfo} />
                    </Panel>

                    <Panel
                      header="Pictures / Maps"
                      key="5"
                      className="site-collapse-custom-panel"
                    >
                      <PicturesAndMaps
                        data={requestedData.propertyImages}
                        geo={requestedData.geo}
                      />
                    </Panel>
                  </Collapse>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="CMA/ARV" key="cmaArv" style={{ overflow: "unset" }}>
              <Row gutter={15} wrap={true} justify="center">
                <Col span={23}>
                  <Collapse
                    defaultActiveKey={["60"]}
                    // onChange={callback}
                    expandIconPosition="right"
                    className="site-collapse-custom-collapse"
                  >
                    <Panel
                      header="CMA/ARV Recommendations"
                      key="60"
                      className="site-collapse-custom-panel"
                    >
                      <CmaArvComponent
                        cmaInfoForm={cmaInfoForm}
                        data={requestedData}
                      />
                    </Panel>
                  </Collapse>
                </Col>
              </Row>
            </TabPane>
          </Tabs>


          <BottomSection/>
          <div className="bottomPart" style={{ paddingBottom: "30px" }}>
            
          </div>

        </>
      )}
    </ProtectedPage>
  );
};

export default singlePropertyInfo;
