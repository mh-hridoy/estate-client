import { Col, Form, InputNumber, Button } from 'antd'
import moment from 'moment'

const TaxAssessed = ({ data }) => {
    const [taxAssessedForm] = Form.useForm()

    const { List, Item } = Form

    const taxAssessedHandler = (values) => {
        console.log(values)
    }

    return (
        <>
            <Form form={taxAssessedForm} name="taxAssessedForm"
                onFinish={taxAssessedHandler}
                layout="vertical"
                initialValues={{ taxAssessed: data.length != 0 ? data : [""] }}
            >
                <List name="taxAssessed" >
                    {(fields, { add, remove }) => (
                        <>

                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                <Col key={key} span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >

                                    <Col xs={12} sm={8} md={6} lg={4}  >
                                        <Item label="Property Tax Owed :" name={[name, "propertyTaxOwed"]} {...restField}  >
                                            <InputNumber style={{ margin: "0px", width: "100%" }} />
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} lg={4}  >
                                        <Item label="Owed Year :" name={[name, "owedYear"]} {...restField} >
                                            <InputNumber style={{ margin: "0px", width: "100%" }} />
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} lg={4}  >
                                        <Item label="Tax Assessed :" name={[name, "taxAssessed"]} {...restField} >
                                            <InputNumber style={{ margin: "0px", width: "100%" }} />
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} lg={4}  >
                                        <Item label="Tax Year :" name={[name, "taxYear"]} {...restField} >
                                            <InputNumber style={{ margin: "0px", width: "100%" }} />
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} lg={4} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

                                        <Button type="ghost" onClick={() => remove(name)}> Delete </Button>
                                    </Col>

                                </Col>
                            ))}
                            <Item style={{ marginTop: "20px", marginLeft: "20px" }} >
                                <Button type="primary" onClick={() => add()} > Add Field </Button>
                            </Item>
                        </>
                    )}

                </List>

                <Col xs={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                        Save Tax Assessed
                    </Button>
                </Col>


            </Form>

        </>
    )
}

export default TaxAssessed
