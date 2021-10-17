import React from "react";
import { Row, Col, Button, Form, Input, Select } from "antd";

const CaseInputComponent = ({
  addProperty,
  isLoading,
  caseInputForm,
  clearForm,
}) => {
  const { Item } = Form;
  const { Option } = Select;

  return (
    <>
      <Form form={caseInputForm} layout="vertical" onFinish={addProperty}>
        <Row gutter={15}>
          <Col span={24}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%",
                margin: "10px 0",
              }}
            >
              <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item
                  label="Property Address : "
                  htmlFor="propertyAddress"
                  name="propertyAddress"
                >
                  <Input
                    allowClear
                    placeholder="Property Address...."
                    id="propertyAddress"
                    style={{ border: "1px solid black" }}
                  />
                </Item>
              </Col>

              <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="City : " htmlFor="city" name="city">
                  <Input
                    allowClear
                    placeholder="City Name"
                    id="city"
                    style={{ border: "1px solid black" }}
                  />
                </Item>
              </Col>

              <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="State : " htmlFor="state" name="state">
                  <Select
                    style={{ width: "100%", border: "1px solid black" }}
                    placeholder="Select State"
                    name="state"
                    id="state"
                  >
                    <Option value="North Carolina">North Carolina</Option>
                    <Option value="South Carolina">South Carolina</Option>
                  </Select>
                </Item>
              </Col>

              <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="County : " htmlFor="county" name="county">
                  <Input
                    allowClear
                    placeholder="County Name"
                    id="county"
                    style={{ border: "1px solid black" }}
                  />
                </Item>
              </Col>

              <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="Zip Code : " htmlFor="zip" name="zip">
                  <Input
                    allowClear
                    placeholder="Zip Code"
                    id="zip"
                    style={{ border: "1px solid black" }}
                  />
                </Item>
              </Col>

              <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item
                  label="Case Number : "
                  htmlFor="caseNumber"
                  name="caseNumber"
                >
                  <Input
                    allowClear
                    placeholder="Case Number"
                    id="caseNumber"
                    style={{ border: "1px solid black" }}
                  />
                </Item>
              </Col>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              <Button
                loading={isLoading}
                htmlType="submit"
                type="primary"
                style={{ marginRight: 50 }}
              >
                Add Property
              </Button>
              <Button type="dashed" onClick={clearForm}>
                Clear
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CaseInputComponent;
