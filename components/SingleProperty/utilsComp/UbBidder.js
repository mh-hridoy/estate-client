import { Col, Form, Button, Divider, Upload, DatePicker, Input, Checkbox, Collapse, Row } from 'antd'
import DynamicInputField from './DynamicInputField'
import styles from '../../../styles/search.module.css'
import DynamicNumberField from './DynamicNumberField';
import { UploadOutlined } from '@ant-design/icons'
import DynamicDateField from './DynamicDateField';

const UbBidder = ({ name }) => {
    const { TextArea } = Input
    const { Item, List } = Form
    const { Panel } = Collapse

    return (
        <>
            <List name={[name, "bidderInfo"]} initialValue={[""]} >

                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Item key={key} {...restField}  >
                                <Collapse expandIconPosition="right"
                                    destroyInactivePanel
                                    className="site-collapse-custom-collapse">

                                    <Panel header={`Bidder ${key + 2}`} key={key + 1} className="site-collapse-custom-panel" style={{ margin: "0px" }} >
                                        <Divider orientation="center"> Bidder </Divider>

                                        {key > 0 &&
                                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                                                <Button onClick={() => { remove(name) }} >
                                                    Remove Bidder
                                                </Button>
                                            </Col>
                                        }
                                        <Row gutter={20} wrap={true} justify="start" >
                                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                                <DynamicInputField label="Name of Upset Bidder" {...restField} name={[name, "nameOfUpsetBidder"]} />
                                                <DynamicInputField label="Address Of Upset Bidder"  {...restField} name={[name, "addressOfUpsetBidder"]} />
                                                <DynamicInputField label="City Of Upset Bidder"  {...restField} name={[name, "cityOfUpsetBidder"]} />
                                                <DynamicNumberField label="Upset bidder Zipcode" {...restField} name={[name, "upsetBidderZipCode"]} />
                                                <DynamicInputField label="Phone" {...restField} name={[name, "phone"]} />
                                                <DynamicInputField label="E-mail"  {...restField} name={[name, "email"]} />
                                            </Col>

                                            <Divider orientation="left">UPST Report

                                            </Divider>
                                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                                <DynamicNumberField label="Amount of New Upset Bid"  {...restField} name={[name, "amountOfBid"]} />
                                                <DynamicDateField label="Bid Date"  {...restField} name={[name, "bidDate"]} />
                                                <DynamicDateField label="LDTUB"  {...restField} name={[name, "lastDateForNextUb"]} />
                                                <DynamicNumberField label="Deposit with the Clerk"  {...restField} name={[name, "depositWithTheClerk"]} />
                                                <DynamicNumberField label="Min. Amount of Next UB"  {...restField} name={[name, "minAmountOfNextUb"]} />
                                                <DynamicInputField label="Name of Attorney or Agent"  {...restField} name={[name, "nameOfAttorneyOrAgent"]} />
                                                <DynamicInputField label="Address of Attorney or Agent"  {...restField} name={[name, "addressofAttorneyOrAgent"]} />
                                                <DynamicInputField label="City of Attorney or Agent"   {...restField} name={[name, "cityOfAttorneyOrAgent"]} />
                                                <DynamicNumberField label="Zipcode" {...restField} name={[name, "zipCode"]} />
                                                <DynamicNumberField label="Phone Number" {...restField} name={[name, "phoneNumber"]} />
                                                <DynamicDateField label="Date of Filling"  {...restField} name={[name, "dateOfFilling"]} />

                                                <Col xs={24} >
                                                    <Item label="Notes :" {...restField} name={[name, "Notes"]} >
                                                        <TextArea rows={4} />
                                                    </Item>
                                                </Col>


                                                <DynamicInputField label="IM By"  {...restField} name={[name, "imby"]} />
                                                <DynamicDateField label="IM By Date"  {...restField} name={[name, "imByDate"]} />
                                                <DynamicInputField label="Auction" {...restField} name={[name, "auction"]} />
                                                <DynamicInputField label="NOS Name" {...restField} name={[name, "nosName"]} />
                                                <DynamicInputField label="NOS By Date" {...restField} name={[name, "nosDate"]} />

                                                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                                                    <Item  {...restField} name={[name, "deputyCSC"]} >
                                                        <Checkbox >Deputy CSC</Checkbox>
                                                    </Item>
                                                </Col>

                                                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                                                    <Item {...restField} name={[name, "assistantCSC"]} >
                                                        <Checkbox >Assistant CSC</Checkbox>
                                                    </Item>
                                                </Col>

                                                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                                                    <Item {...restField} name={[name, "clerkOfSuperiorCourt"]} >
                                                        <Checkbox >Clerk Of Superior Court</Checkbox>
                                                    </Item>
                                                </Col>

                                            </Col>


                                            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                                                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                                                    <Divider orientation="center">Bidder Info Files
                                                    </Divider>

                                                    <DynamicInputField label="File Name" />

                                                    <Col xs={12} sm={8} md={4} >
                                                        <Item label="Date :" >
                                                            <DatePicker placeholder="Select Date" />
                                                        </Item>
                                                    </Col>


                                                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "17px" }} >

                                                        <Upload id="pFile"
                                                        // {...props}
                                                        >
                                                            <Button
                                                                icon={<UploadOutlined />}>Select File</Button>
                                                        </Upload>

                                                    </Col>


                                                    <Col xs={12} sm={8} md={6} >

                                                        <Button
                                                            type="primary"
                                                            // onClick={this.handleUpload}
                                                            // disabled={fileList.length === 0}
                                                            // loading={uploading}
                                                            style={{ marginTop: 16, width: "100%" }}
                                                        >
                                                            Upload
                                                            {/* {uploading ? 'Uploading' : 'Start Upload'} */}
                                                        </Button>
                                                    </Col>


                                                </Col>

                                                <Col xs={12} sm={8} md={6} lg={4} style={{ marginTop: "15px" }}>

                                                    <div className={styles.displayPFile}>
                                                        Files will be here

                                                    </div>

                                                </Col>

                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>

                            </Item>
                        ))}
                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                            <Button onClick={() => add()} >
                                Add Bidder
                            </Button>
                        </Col>

                    </>

                )}


            </List>

        </>
    )
}

export default UbBidder;
