import { Row, Col, Form, Button, Divider, Space, Upload, DatePicker, Input, Collapse } from 'antd'
import InputField from './utilsComp/InputField'
import styles from '../../styles/search.module.css'
import InputWithSuffix from './utilsComp/InputWithSuffix';
import NumberField from './utilsComp/NumberField';
import CheckField from './utilsComp/CheckField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './utilsComp/DateField';
import SaleInfo from './utilsComp/SaleInfo';
import FirstBidder from './utilsComp/FirstBidder';
import UbBidder from './utilsComp/UbBidder';
// import OtherBidder from './utilsComp/OtherBidder'


const SaleInfoComponent = ({ saleInfoForm }) => {
    const { TextArea } = Input
    const { Item } = Form
    const { Panel } = Collapse

    const saleInfoHandler = (values) => { }

    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={saleInfoForm} layout="vertical" className={styles.searchForm} onFinish={saleInfoHandler} >

                        <SaleInfo />


                        {/* firstBidder data */}
                        <Col span={24} style={{ marginTop: "10px" }}>

                            <Collapse // onChange={callback}
                                expandIconPosition="right"
                                className="site-collapse-custom-collapse">

                                <Panel header="First Bidder" key="40" className="site-collapse-custom-panel" >
                                    <FirstBidder />

                                </Panel>

                                {/* it will be dynamic if ther's extra bidder info */}

                                <Panel header="Bidder 2" key="41" className="site-collapse-custom-panel" >

                                    <UbBidder />
                                </Panel>




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

export default SaleInfoComponent
