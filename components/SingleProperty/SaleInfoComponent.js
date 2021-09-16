import { Row, Col, Form, Button, Collapse, Divider } from 'antd'
import styles from '../../styles/search.module.css'
import SaleInfo from './utilsComp/SaleInfo';
import FirstBidder from './utilsComp/FirstBidder';
import UbBidder from './utilsComp/UbBidder';
import { DeleteOutlined } from '@ant-design/icons'


const SaleInfoComponent = ({ data, inx }) => {
    const { Panel } = Collapse
    const [saleInfoForm] = Form.useForm()
    const { Item, List } = Form

    const genExtra = (remove) => (
        <DeleteOutlined
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
                remove()
            }}
        />
    );

    const saleInfoHandler = (values) => { }


    return (
        <>
            {/* declare collapse here */}


            {/* making dynamic form  */}
            <Form form={saleInfoForm} layout="vertical" className={styles.searchForm} onFinish={saleInfoHandler} initialValues={{ saleinfo: [""] }}  >

                <Col span={24} >
                    <List name="saleinfo" >
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Item key={key} {...restField}  >
                                        Okay Im here
                                        <Collapse expandIconPosition="right"
                                            destroyInactivePanel
                                            className="site-collapse-custom-collapse"
                                        >
                                            <Panel header={`Sale Date ${key + 1}`} key={key + 1} className="site-collapse-custom-panel"   >
                                                <Row gutter={20} wrap={true} justify="start" >
                                                    <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
                                                        <Divider orientation="center"> Sale Info </Divider>

                                                        {key > 0 &&
                                                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                                                                <Button onClick={() => { remove(name) }} >
                                                                    Remove Sale Info
                                                                </Button>
                                                            </Col>
                                                        }

                                                        <SaleInfo name={name} fieldKey={fieldKey} {...restField} />


                                                    </Col>

                                                    <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end", margin: "15px 0" }}>
                                                        <Button onClick={() => add()} >
                                                            Add Sale Date
                                                        </Button>
                                                    </Col>

                                                    <Col span={24} >
                                                        <Collapse expandIconPosition="right"
                                                            destroyInactivePanel
                                                            className="site-collapse-custom-collapse">

                                                            <Panel header="Bidder 1" key="FirstBidder" className="site-collapse-custom-panel"  >

                                                                <FirstBidder key={key} name={name} fieldKey={fieldKey} {...restField} />

                                                            </Panel>

                                                        </Collapse>

                                                    </Col>

                                                    <Col span={24} >

                                                        <UbBidder name={name} />

                                                    </Col>


                                                </Row>

                                            </Panel>
                                        </Collapse>
                                    </Item>

                                ))}

                            </>
                        )}


                    </List>
                </Col>
            </Form>




        </>
    )
}

export default SaleInfoComponent;
