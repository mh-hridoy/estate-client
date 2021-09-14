import { Col, Form, DatePicker, InputNumber, Input, Button } from 'antd'
import moment from 'moment'


const PriceHistory = ({ data }) => {

    const [priceHistoryForm] = Form.useForm()

    const { List, Item } = Form


    const priceHistoryHandler = (values) => {
        console.log(values)
    }

    const correctedHistory = data.map((history) => {
        history.date = moment(history.data)
        return history
    })


    return (
        <>
            <Form form={priceHistoryForm} name="priceHistoryForm"
                onFinish={priceHistoryHandler}
                layout="vertical"
                initialValues={{ priceHistory: correctedHistory.length != 0 ? correctedHistory : [""] }}
            >

                <List name="priceHistory" >
                    {(fields, { add, remove }) => (
                        <>

                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                <Col key={key} span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
                                    <Col xs={12} sm={8} md={6} lg={4}  >

                                        <Item label="Date : " name={[name, "date"]} {...restField} >
                                            <DatePicker style={{ margin: "0px", width: "100%" }} />
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} lg={4}  >

                                        <Item label="Price :" name={[name, "price"]} {...restField} >
                                            <InputNumber style={{ margin: "0px", width: "100%" }} />
                                        </Item>
                                    </Col>


                                    <Col xs={12} sm={8} md={6} lg={4}  >

                                        <Item label="Cost per Sqft" name={[name, "costPerSqf"]} {...restField} >
                                            <Input style={{ margin: "0px" }} />
                                        </Item>
                                    </Col>


                                    <Col xs={12} sm={8} md={6} lg={4}  >

                                        <Item label="Source" name={[name, "source"]} {...restField} >
                                            <Input style={{ margin: "0px" }} />
                                        </Item>
                                    </Col>


                                    <Col xs={12} sm={8} md={6} lg={4}  >

                                        <Item label="Description" name={[name, "Description"]} {...restField} >
                                            <Input style={{ margin: "0px" }} />
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} lg={4} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

                                        <Button type="ghost" onClick={() => remove(name)}> Delete </Button>
                                    </Col>


                                </Col>

                            ))}
                            <Item style={{ marginTop: "20px", marginLeft: "20px" }} >
                                <Button type="primary" onClick={() => add()}> Add Field </Button>
                            </Item>

                        </>
                    )}

                </List>
                <Col xs={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                        Save Price History
                    </Button>
                </Col>
            </Form>

        </>
    )
}

export default PriceHistory
