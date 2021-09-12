import { Col, Form, Button, Divider, Upload, DatePicker, Input } from 'antd'
import InputField from './InputField'
import styles from '../../../styles/search.module.css'
import NumberField from './NumberField';
import CheckField from './CheckField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './DateField';

const UbBidder = ({ubData, index}) => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <Divider orientation="left">Bidder
                </Divider>

                <InputField label="Name of Upset Bidder" id="nameOfUBidder" />
                <InputField label="Address Of Upset Bidder" id="addressOFUB" />
                <InputField label="City Of Upset Bidder" id="cityOfUB" />
                <NumberField label="Upset bidder Zipcode" id="UbZipcode" />
                <InputField label="Phone" id="UbPhone" />
                <NumberField label="E-mail" id="UbEmail" />
            </Col>

            <Divider orientation="left">UPST Report

            </Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <NumberField label="Amount of New Upset Bid" id="amountOfUbBid" />
                <DateField label="Bid Date" id="ubBidDate" />
                <NumberField label="LDTUB" id="Ubldtub" />
                <NumberField label="Deposit with the Clerk" id="depositWithClark" />
                <NumberField label="Min. Amount of Next UB" id="UbminAmountOfNX" />
                <InputField label="Name of Attorney or Agent" id="nameOfAttorney" />
                <InputField label="Address of Attorney or Agent" id="addressOfAttorney" />
                <InputField label="City of Attorney or Agent" id="cityOfAttorney" />
                <NumberField label="Zipcode" id="attorneyZipcode" />
                <NumberField label="Phone Number" id="attorneyPhone" />
                <DateField label="Date of Filling" id="ubDateOfFilling" />

                <Col xs={24} >
                    <Item label="Notes :" >
                        <TextArea rows={4} id="UbBidderNote" style={{ margin: "0px" }} />
                    </Item>
                </Col>


                <InputField label="IM By" id="ubImBy" />
                <InputField label="IM By Date" id="ubImByDate" />
                <InputField label="Auction" id="ubauction" />
                <InputField label="NOS Name" id="ubnosName" />
                <InputField label="NOS By Date" id="ubnosByDate" />

                <CheckField label="Deputy CSC" />
                <CheckField label="Assistant CSC" />
                <CheckField label="Clerk Of Superior Court" />

            </Col>


            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Bidder Info Files
                    </Divider>

                    <InputField label="File Name" id="ubFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date :" >
                            <DatePicker placeholder="Select Date" id="pdDate" style={{ width: "100%" }} />
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


        </>
    )
}

export default UbBidder
