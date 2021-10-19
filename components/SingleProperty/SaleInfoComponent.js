import { Row, Col, Form, Button, Collapse, Divider } from "antd";
import styles from "../../styles/search.module.css";
import SaleInfo from "./utilsComp/SaleInfo";
import FirstBidder from "./utilsComp/FirstBidder";
import UbBidder from "./utilsComp/UbBidder";
import moment from "moment";
import { useState, useEffect } from "react";
import useHttp from "../../utils/useHttp";
import { useSelector } from "react-redux";

const SaleInfoComponent = ({ data }) => {
  const { Panel } = Collapse;
  const [saleInfoForm] = Form.useForm();
  const { Item, List } = Form;
  const [saleValues, setSaleValues] = useState();
  const [sendRequest, setSendRequest] = useState(false);
  const propertyId = useSelector((state) => state.property.propertyId);

  const saleInfoHandler = (values) => {
    setSaleValues(values);
    setSendRequest((prev) => ({ sendRequest: !prev }));
  };
  //we can follow the same method for the submit value
  data.length !== 0 &&
    data.map((saleInfo) => {
      saleInfo.saleDate = saleInfo.saleDate && moment(saleInfo.saleDate);
      saleInfo.datePulled = saleInfo.datePulled && moment(saleInfo.datePulled);
      saleInfo.imByDate = saleInfo.imByDate && moment(saleInfo.imByDate);
      saleInfo.nosDate = saleInfo.nosDate && moment(saleInfo.nosDate);
      saleInfo.auctionDate =
        saleInfo.auctionDate && moment(saleInfo.auctionDate);
      saleInfo.bidDate = saleInfo.bidDate && moment(saleInfo.bidDate);
      saleInfo.ldub = saleInfo.ldub && moment(saleInfo.ldub);
      saleInfo.dateOfReport =
        saleInfo.dateOfReport && moment(saleInfo.dateOfReport);
      saleInfo.fimByDate = saleInfo.fimByDate && moment(saleInfo.fimByDate);
      saleInfo.fnosDate = saleInfo.fnosDate && moment(saleInfo.fnosDate);
      saleInfo.otherBidderInfo.length !== 0 &&
        saleInfo.otherBidderInfo.map((ub) => {
          ub.bidDate = ub.bidDate && moment(ub.bidDate);
          ub.lastDateForNextUb =
            ub.lastDateForNextUb && moment(ub.lastDateForNextUb);
          ub.dateOfFilling = ub.dateOfFilling && moment(ub.dateOfFilling);
          ub.imByDate = ub.imByDate && moment(ub.imByDate);
          ub.nosDate = ub.nosDate && moment(ub.nosDate);
          return ub;
        });

      return saleInfo;
    });

  useEffect(() => {
    if (sendRequest) {
      saleValues.saleinfo.map((saleInfo) => {
        saleInfo.saleDate =
          saleInfo.saleDate && moment(saleInfo.saleDate).toISOString();
        saleInfo.datePulled =
          saleInfo.datePulled && moment(saleInfo.datePulled).toISOString();
        saleInfo.imByDate =
          saleInfo.imByDate && moment(saleInfo.imByDate).toISOString();
        saleInfo.nosDate =
          saleInfo.nosDate && moment(saleInfo.nosDate).toISOString();
        saleInfo.auctionDate =
          saleInfo.auctionDate && moment(saleInfo.auctionDate).toISOString();
        saleInfo.bidDate =
          saleInfo.bidDate && moment(saleInfo.bidDate).toISOString();
        saleInfo.ldub = saleInfo.ldub && moment(saleInfo.ldub).toISOString();
        saleInfo.dateOfReport =
          saleInfo.dateOfReport && moment(saleInfo.dateOfReport).toISOString();
        saleInfo.fimByDate =
          saleInfo.fimByDate && moment(saleInfo.fimByDate).toISOString();
        saleInfo.fnosDate =
          saleInfo.fnosDate && moment(saleInfo.fnosDate).toISOString();
        saleInfo.otherBidderInfo &&
          saleInfo.otherBidderInfo.map((ub) => {
            ub.bidDate = ub.bidDate && moment(ub.bidDate).toISOString();
            ub.lastDateForNextUb =
              ub.lastDateForNextUb &&
              moment(ub.lastDateForNextUb).toISOString();
            ub.dateOfFilling =
              ub.dateOfFilling && moment(ub.dateOfFilling).toISOString();
            ub.nosDate = ub.nosDate && moment(ub.nosDate).toISOString();
            ub.imByDate = ub.imByDate && moment(ub.imByDate).toISOString();
            return ub;
          });

        return saleInfo;
      });
    }
  }, [sendRequest]);

  const { isLoading } = useHttp(
    sendRequest,
    `${process.env.NEXT_PUBLIC_MAIN_PROXY}/update-property/${propertyId}`,
    "put",
    saleValues
  );

  return (
    <>
      {/* declare collapse here */}

      {/* making dynamic form  */}
      <Form
        form={saleInfoForm}
        layout="vertical"
        className={styles.searchForm}
        onFinish={saleInfoHandler}
        initialValues={{ saleinfo: data.length !== 0 ? data : [""] }}
      >
        <Col span={24}>
          <List name="saleinfo">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Item key={key} {...restField}>
                    <Collapse
                      expandIconPosition="right"
                      destroyInactivePanel
                      className="site-collapse-custom-collapse"
                    >
                      <Panel
                        header={`Sale Date ${key + 1}`}
                        key={key + 1}
                        className="site-collapse-custom-panel"
                        style={{ margin: "0px" }}
                      >
                        <Row gutter={20} wrap={true} justify="start">
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                            }}
                          >
                            <Divider orientation="center"> Sale Info </Divider>

                            {key > 0 && (
                              <Col
                                span={24}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  flexWrap: "wrap",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  onClick={() => {
                                    remove(name)
                                  }}
                                >
                                  Remove Sale Info
                                </Button>
                              </Col>
                            )}

                            <SaleInfo
                              name={name}
                              fullSaleInfo={data[fieldKey]}
                              fieldKey={fieldKey}
                              {...restField}
                            />
                          </Col>

                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              justifyContent: "flex-end",
                              margin: "15px 0",
                            }}
                          >
                            <Button onClick={() => add()}>Add Sale Date</Button>
                          </Col>

                          <Col span={24}>
                            <Collapse
                              expandIconPosition="right"
                              destroyInactivePanel
                              className="site-collapse-custom-collapse"
                            >
                              <Panel
                                header="Bidder 1"
                                key="FirstBidder"
                                className="site-collapse-custom-panel"
                              >
                                <FirstBidder
                                  key={key}
                                  name={name}
                                  fieldKey={fieldKey}
                                  {...restField}
                                />
                              </Panel>
                            </Collapse>
                          </Col>

                          <Col span={24}>
                            <UbBidder name={name} data={data.otherBidderInfo} />
                          </Col>
                        </Row>
                      </Panel>
                    </Collapse>
                  </Item>
                ))}
              </>
            )}
          </List>
        </Col>

        <Col xs={4} style={{ position: "sticky", bottom: "20px" }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}
          >
            Save Property Data
          </Button>
        </Col>
      </Form>
    </>
  )
};

export default SaleInfoComponent;
