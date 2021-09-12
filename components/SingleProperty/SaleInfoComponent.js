import { Row, Col, Form, Button, Input, Collapse } from 'antd'
import styles from '../../styles/search.module.css'
import SaleInfo from './utilsComp/SaleInfo';
import FirstBidder from './utilsComp/FirstBidder';
import UbBidder from './utilsComp/UbBidder';
// import OtherBidder from './utilsComp/OtherBidder'


const SaleInfoComponent = ({ saleInfoForm, data, inx }) => {
    const { Panel } = Collapse

    const saleInfoHandler = (values) => { }

    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={saleInfoForm} layout="vertical" className={styles.searchForm} onFinish={saleInfoHandler} >

                        <SaleInfo data={data} inx={inx} />
                        {/* this will be dynamic */}

                        {/* firstBidder data */}
                        <Col span={24} style={{ marginTop: "10px" }}>

                            <Collapse // onChange={callback}
                                expandIconPosition="right"
                                className="site-collapse-custom-collapse">

                                <Panel header="First Bidder" key="40" className="site-collapse-custom-panel" >
                                    <FirstBidder data={data} inx={inx} />

                                </Panel>

                                {data.otherBidderInfo.length === 0 && <>
                                    <Panel header="Upset Bidder" key="41" className="site-collapse-custom-panel" >

                                        <UbBidder />
                                    </Panel>
                                </>
                                }

                                {data.otherBidderInfo.length !== 0 && <>

                                    {data.otherBidderInfo.map((ubData, index) => {
                                        <Panel header={`Upset Bidder ${index + 1}`} key={`41${+ index}`} className="site-collapse-custom-panel" >
                                            <UbBidder ubData={ubData} index={index} />
                                        </Panel>
                                    })}
                                </>}




                                {/* it will be dynamic if ther's extra bidder info */}


                            </Collapse>
                        </Col>

                        <Col xs={24} md={8} lg={4} style={{ position: "sticky", bottom: "20px" }}>
                            <Button
                                type="primary"
                                style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                                Save Sale Data
                            </Button>
                        </Col>

                    </Form>

                </Col>

            </Row>

        </>
    )
}

export default SaleInfoComponent;
