import { Col, Form, Button, Divider, Upload, DatePicker, Input, Checkbox, Collapse, Row } from 'antd'
import DynamicInputField from './DynamicInputField'
import styles from '../../../styles/search.module.css'
import DynamicNumberField from './DynamicNumberField';
import { UploadOutlined } from '@ant-design/icons'
import DynamicDateField from './DynamicDateField';
import { useState } from 'react';

const UbBidder = ({ data, name }) => {
    const { TextArea } = Input
    const { Item, List } = Form
    const { Panel } = Collapse
    const [dCscVal, setdCscVal] = useState()
    const [aCscVal, setaCscVal] = useState()
    const [clerkVal, setclerkVal] = useState()

    const dCscHandler = (e) => {
        setdCscVal(e.target.checked)
    }

    const aCscHandler = (e) => {
        setaCscVal(e.target.checked)
    }

    const clerkValHandler = (e) => {
        setclerkVal(e.target.checked)
    }


    return (
        <>
            <List name={[name, "otherBidderInfo"]}>

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

                                                <DynamicInputField label="Name of Upset Bidder" {...restField} name={name} fieldname="nameOfUpsetBidder" />
                                                <DynamicInputField label="Address Of Upset Bidder"  {...restField} name={name} fieldname="addressOfUpsetBidder" />
                                                <DynamicInputField label="City Of Upset Bidder"  {...restField} name={name} fieldname="cityOfUpsetBidder" />
                                                <DynamicNumberField label="Upset bidder Zipcode" {...restField} name={name} fieldname="upsetBidderZipCode" />
                                                <DynamicInputField label="Phone" {...restField} name={name} fieldname="phone" />
                                                <DynamicInputField label="E-mail"  {...restField} name={name} fieldname="email" />
                                            </Col>

                                            <Divider orientation="left">UPST Report

                                            </Divider>
                                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                                <DynamicNumberField label="Amount of New Upset Bid"  {...restField} name={name} fieldname="amountOfBid" />
                                                <DynamicDateField label="Bid Date"  {...restField} name={name} fieldname="bidDate" />
                                                <DynamicDateField label="LDTUB"  {...restField} name={name} fieldname="lastDateForNextUb" />
                                                <DynamicNumberField label="Deposit with the Clerk"  {...restField} name={name} fieldname="depositWithTheClerk" />
                                                <DynamicNumberField label="Min. Amount of Next UB"  {...restField} name={name} fieldname="minAmountOfNextUb" />
                                                <DynamicInputField label="Name of Attorney or Agent"  {...restField} name={name} fieldname="nameOfAttorneyOrAgent" />
                                                <DynamicInputField label="Address of Attorney or Agent"  {...restField} name={name} fieldname="addressofAttorneyOrAgent" />
                                                <DynamicInputField label="City of Attorney or Agent"   {...restField} name={name} fieldname="cityOfAttorneyOrAgent" />
                                                <DynamicNumberField label="Zipcode" {...restField} name={name} fieldname="zipCode" />
                                                <DynamicInputField label="Phone Number" {...restField} name={name} fieldname="phoneNumber" />
                                                <DynamicDateField label="Date of Filling"  {...restField} name={name} fieldname="dateOfFilling" />

                                                <Col xs={24} >
                                                    <Item label="Notes :" {...restField} name={[name, "Notes"]} >
                                                        <TextArea rows={4} />
                                                    </Item>
                                                </Col>


                                                <DynamicInputField label="IM By"  {...restField} name={name} fieldname="imby" />
                                                <DynamicDateField label="IM By Date"  {...restField} name={name} fieldname="imByDate" />
                                                <DynamicInputField label="Auction" {...restField} name={name} fieldname="auction" />
                                                <DynamicInputField label="NOS Name" {...restField} name={name} fieldname="nosName" />
                                                <DynamicInputField label="NOS By Date" {...restField} name={name} fieldname="nosDate" />

                                                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                                                    <Item  {...restField} valuePropName="checked" name={[name, "deputyCSC"]} >
                                                        <Checkbox onChange={dCscHandler} checked={dCscVal} >Deputy CSC</Checkbox>
                                                    </Item>
                                                </Col>

                                                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                                                    <Item {...restField} valuePropName="checked" name={[name, "assistantCSC"]} >
                                                        <Checkbox onChange={aCscHandler} checked={aCscVal} >Assistant CSC</Checkbox>
                                                    </Item>
                                                </Col>

                                                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                                                    <Item {...restField} valuePropName="checked" name={[name, "clerkOfSuperiorCourt"]} >
                                                        <Checkbox onChange={clerkValHandler} checked={clerkVal} >Clerk Of Superior Court</Checkbox>
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
