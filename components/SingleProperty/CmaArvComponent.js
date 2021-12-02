import { Row, Col, Form, Button, Collapse } from 'antd'
import styles from '../../styles/search.module.css'
import CompData from './utilsComp/CompData'
import moment from 'moment'
import { useState, useEffect } from 'react'
import useHttp from '../../utils/useHttp'
import { useSelector } from 'react-redux'



const CmaArvComponent = ({ cmaInfoForm, data }) => {
    const { Panel } = Collapse
    const [compValues, setCompValues] = useState()
    const [sendRequest, setSendRequest] = useState(false)
    const propertyId = useSelector((state) => state.property.propertyId)


    const cmaInfoHandler = (values) => {
        setCompValues(values)
        setSendRequest((prev) => ({ sendRequest: !prev }))
    }

    data.firstComp.date = data.firstComp && data.firstComp.date && moment(data.firstComp.date)
    data.secondComp.date = data.secondComp && data.secondComp.date && moment(data.secondComp.date)
    data.thirdComp.date = data.thirdComp && data.thirdComp.date && moment(data.thirdComp.date)

    useEffect(() => {
        if (sendRequest) {
            if (compValues.firstComp) {
                compValues.firstComp.date = compValues.firstComp && compValues.firstComp.date && moment(compValues.firstComp.date).toISOString()
            }
            if (compValues.secondComp) {

                compValues.secondComp.date = compValues.secondComp && compValues.secondComp.date && moment(compValues.secondComp.date).toISOString()
            }
            if (compValues.thirdComp) {

                compValues.thirdComp.date = compValues.thirdComp && compValues.thirdComp.date && moment(compValues.thirdComp.date).toISOString()
            }
        }

    }, [sendRequest])

    const { isLoading } = useHttp(sendRequest, `${process.env.NEXT_PUBLIC_MAIN_PROXY}/update-property/${propertyId}`, "put", compValues)

    return (
        <>
            <Row gutter={15} wrap={true} justify="start"  >
                <Col span={24}>
                    <Form form={cmaInfoForm} layout="vertical" className={styles.searchForm} onFinish={cmaInfoHandler} initialValues={data} >
                        <Col span={24}>
                            <Collapse defaultActiveKey={['50']}
                                expandIconPosition="right"
                                className="site-collapse-custom-collapse">
                                <Panel header="FIRST COMP" key="50" className="site-collapse-custom-panel" >
                                    <CompData name="FIRST COMP" value="firstComp" nameVal="firstDTC" />
                                </Panel>

                                <Panel header="SECOND COMP" key="51" className="site-collapse-custom-panel" >
                                    <CompData name="SECOND COMP" value="secondComp" nameVal="secondDCA" />
                                </Panel>

                                <Panel header="THIRD COMP" key="52" className="site-collapse-custom-panel" >
                                    <CompData name="THIRD COMP" value="thirdComp" nameVal="thirdDCA" />
                                </Panel>


                            </Collapse>

                        </Col>

                        <Col xs={24} md={8} lg={4} style={{ position: "sticky", bottom: "20px" }}>
                            <Button
                                type="primary"
                                loading={isLoading}
                                htmlType="submit"
                                style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                                Save Comp Data
                            </Button>
                        </Col>

                        {/* <Form.Item shouldUpdate>
                            {() => {
                                return <pre>{JSON.stringify(cmaInfoForm.getFieldsValue(), null, 4)}</pre>;
                            }}
                        </Form.Item> */}

                    </Form>

                </Col>

            </Row>


        </>
    )
}

export default CmaArvComponent
