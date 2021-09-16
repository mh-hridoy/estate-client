import { Row, Col, Form, Button, Collapse } from 'antd'
import styles from '../../styles/search.module.css'
import CompData from './utilsComp/CompData'
import moment from 'moment'




const CmaArvComponent = ({ cmaInfoForm, data }) => {
    const { Panel } = Collapse


    const cmaInfoHandler = (values) => {
        console.log(values)
    }

    data.firstComp.date = data.firstComp.date && moment(data.firstComp.date)
    data.secondComp.date = data.secondComp.date && moment(data.secondComp.date)
    data.thirdComp.date = data.thirdComp.date && moment(data.thirdComp.date)



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
                                    <CompData name="FIRST COMP" value="firstComp" />
                                </Panel>

                                <Panel header="SECOND COMP" key="51" className="site-collapse-custom-panel" >
                                    <CompData name="SECOND COMP" value="secondComp" />
                                </Panel>

                                <Panel header="THIRD COMP" key="52" className="site-collapse-custom-panel" >
                                    <CompData name="THIRD COMP" value="thirdComp" />
                                </Panel>


                            </Collapse>

                        </Col>

                        <Col xs={24} md={8} lg={4} style={{ position: "sticky", bottom: "20px" }}>
                            <Button
                                type="primary"
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
