import { Col, Form, DatePicker, InputNumber, Input, Button } from 'antd'
import moment from 'moment'
import { useState, useEffect } from 'react'
import useHttp from '../../utils/useHttp'
import { useSelector } from 'react-redux'

const PriceHistory = ({ data }) => {
    const [historyVal, setHistoryVal] = useState(null)
    const [sendRequest, setSendRequest] = useState(false)
    const propertyId = useSelector((state) => state.property.propertyId)

    const [priceHistoryForm] = Form.useForm()

    const { List, Item } = Form

    const priceHistoryHandler = (values) => {
        setHistoryVal(values)
        setSendRequest((prev) => ({ sendRequest: !prev })) //toggle the state each time otherwise it'll stay true and wont work for any further request.
    }

    //use this useEffect method otherwise moment conversion wont work perfectly.
    useEffect(() => {
        if (sendRequest) {
            historyVal && historyVal.priceHistory.map((history) => {
                if (typeof history.date === "object") {

                    history.date = history.date && moment(history.date).toISOString()
                }

                return history
            })
        }

    }, [sendRequest, historyVal])


    const { isLoading } = useHttp(sendRequest, `http://localhost:5000/api/update-property/${propertyId}`, "put", historyVal)


    data.map(history => {
        history.date = history.date && moment(history.date)

        return history;
    })

    return (
        <>
            <Form form={priceHistoryForm} name="priceHistoryForm"
                onFinish={priceHistoryHandler}
                layout="vertical"
                initialValues={{ priceHistory: data.length != 0 ? data : [""] }}
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
                                            <InputNumber style={{ margin: "0px", width: "100%" }} />
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
                        loading={isLoading}
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
