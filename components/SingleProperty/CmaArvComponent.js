import { Row, Col, Form, Button, Collapse } from 'antd'
import styles from '../../styles/search.module.css'
import CompData from './utilsComp/CompData';
import SecondCompData from './utilsComp/SecondCompData';
import ThirdCompData from './utilsComp/ThirdCompData';
import compInitVal from '../../utils/compInitVal'


const CmaArvComponent = ({ cmaInfoForm, firstComp, secondComp, thirdComp }) => {
    const { Panel } = Collapse
    const initialVal = compInitVal(firstComp, secondComp, thirdComp)

    const cmaInfoHandler = (values) => { }

    return (
        <>
            <Row gutter={15} wrap={true} justify="start"  >
                <Col span={24}>
                    <Form form={cmaInfoForm} layout="vertical" className={styles.searchForm} onFinish={cmaInfoHandler} initialValues={initialVal} >
                        <Col span={24}>
                            <Collapse defaultActiveKey={['50']}
                                // onChange={callback}
                                expandIconPosition="right"
                                className="site-collapse-custom-collapse">
                                <Panel header="FIRST COMP" key="50" className="site-collapse-custom-panel" >
                                    {/* cma arv info */}
                                    <CompData name="FIRST COMP" data={firstComp} />
                                </Panel>

                                <Panel header="SECOND COMP" key="51" className="site-collapse-custom-panel" >
                                    {/* cma arv info */}
                                    <SecondCompData name="SECOND COMP" data={secondComp} />
                                </Panel>

                                <Panel header="THIRD COMP" key="52" className="site-collapse-custom-panel" >
                                    {/* cma arv info */}
                                    <ThirdCompData name="THIRD COMP" data={thirdComp} />
                                </Panel>


                            </Collapse>

                        </Col>

                        <Col xs={24} md={8} lg={4} style={{ position: "sticky", bottom: "20px" }}>
                            <Button
                                type="primary"
                                style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                                Save Comp Data
                            </Button>
                        </Col>

                    </Form>

                </Col>

            </Row>

        </>
    )
}

export default CmaArvComponent
