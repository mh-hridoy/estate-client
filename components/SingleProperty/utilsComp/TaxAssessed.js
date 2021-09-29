import { Col, Form, InputNumber, Button } from 'antd'
import useHttp from '../../../utils/useHttp'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const TaxAssessed = ({ data }) => {
    const [taxAssessedForm] = Form.useForm()
    const [sendRequest, setSendRequest] = useState(false)
    const [taxAssessedVal, setTaxAssessedVal] = useState(null)
    const propertyId = useSelector((state) => state.property.propertyId)
    const { List, Item } = Form


    const taxAssessedHandler = (values) => {
        setTaxAssessedVal(values)
        setSendRequest((prev) => ({ sendRequest: !prev }))
    }

    const { isLoading } = useHttp(sendRequest, `${process.env.NEXT_PUBLIC_MAIN_PROXY}/update-property/${propertyId}`, "put", taxAssessedVal)

    return (
        <>
            <Form form={taxAssessedForm} name="taxAssessedForm"
                onFinish={taxAssessedHandler}
                layout="vertical"
                initialValues={{ assesmentAndTaxes: data.length != 0 ? data : [""] }}
            >
                <List name="assesmentAndTaxes" >
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
                        loading={isLoading}
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
