import { Col, Form, Button, Divider, Upload, DatePicker, Input } from 'antd'
import InputField from './InputField'
import styles from '../../../styles/search.module.css'
import NumberField from './NumberField';
import CheckField from './CheckField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './DateField';
import moment from 'moment'

const UbBidder = ({ubData, index}) => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <Divider orientation="left">Bidder
                </Divider>

                <InputField label="Name of Upset Bidder" id={`${index ? index : ""}nameOfUBidder`} name={`${index ? index : ""}nameOfUBidder`} htmlFor={`${index ? index : ""}nameOfUBidder`} initVal={ubData ? ubData.nameOfUpsetBidder : ""} />
                <InputField label="Address Of Upset Bidder" id={`${index ? index : ""}addressOFUB`} name={`${index ? index : ""}addressOFUB`} htmlFor={`${index ? index : ""}addressOFUB`} initVal={ubData ? ubData.addressOfUpsetBidder : ""} />
                <InputField label="City Of Upset Bidder" id={`${index ? index : ""}cityOfUB`} name={`${index ? index : ""}cityOfUB`} htmlFor={`${index ? index : ""}cityOfUB`} initVal={ubData ? ubData.cityOfUpsetBidder : ""} />
                <NumberField label="Upset bidder Zipcode" id={`${index ? index : ""}UbZipcode`} htmlFor={`${index ? index : ""}UbZipcode`} name={`${index ? index : ""}UbZipcode`} initVal={ubData ? ubData.zipCode : ""} />
                <InputField label="Phone" id={`${index ? index : ""}UbPhone`} name={`${index ? index : ""}UbPhone`} htmlFor={`${index ? index : ""}UbPhone`} initVal={ubData ? ubData.phone : ""} />
                <InputField label="E-mail" id={`${index ? index : ""}UbEmail`} name={`${index ? index : ""}UbEmail`} htmlFor={`${index ? index : ""}UbEmail`} initVal={ubData ? ubData.email : ""} />
            </Col>

            <Divider orientation="left">UPST Report

            </Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <NumberField label="Amount of New Upset Bid" id={`${index ? index : ""}amountOfUbBid`} name={`${index ? index : ""}amountOfUbBid`} htmlFor={`${index ? index : ""}amountOfUbBid`} initVal={ubData ? ubData.amountOfBid : ""} />
                <DateField label="Bid Date" id={`${index ? index : ""}ubBidDate`} name={`${index ? index : ""}ubBidDate`} id={`${index ? index : ""}ubBidDate`} initVal={ubData ? moment(ubData.bidDate) : ""} />
                <DateField label="LDTUB" id={`${index ? index : ""}Ubldtub`} name={`${index ? index : ""}Ubldtub`} htmlFor={`${index ? index : ""}Ubldtub`} initVal={ubData ? moment(ubData.lastDateForNextUb) : ""} />
                <NumberField label="Deposit with the Clerk" id={`${index ? index : ""}depositWithClark`} name={`${index ? index : ""}depositWithClark`} htmlFor={`${index ? index : ""}depositWithClark`} initVal={ubData ? ubData.depositWithTheClerk : ""} />
                <NumberField label="Min. Amount of Next UB" id={`${index ? index : ""}UbminAmountOfNX`} name={`${index ? index : ""}UbminAmountOfNX`} htmlFor={`${index ? index : ""}UbminAmountOfNX`} initVal={ubData ? ubData.minAmountOfNextUb : ""} />
                <InputField label="Name of Attorney or Agent" id={`${index ? index : ""}nameOfAttorney`} name={`${index ? index : ""}nameOfAttorney`} htmlFor={`${index ? index : ""}nameOfAttorney`} initVal={ubData ? ubData.nameOfAttorneyOrAgent : ""} />
                <InputField label="Address of Attorney or Agent" id={`${index ? index : ""}addressOfAttorney`} name={`${index ? index : ""}addressOfAttorney`} htmlFor={`${index ? index : ""}addressOfAttorney`} initVal={ubData ? ubData.addressofAttorneyOrAgent : ""} />
                <InputField label="City of Attorney or Agent" id={`${index ? index : ""}cityOfAttorney`} name={`${index ? index : ""}cityOfAttorney`} htmlFor={`${index ? index : ""}cityOfAttorney`} initVal={ubData ? ubData.cityOfAttorneyOrAgent : ""} />
                <NumberField label="Zipcode" id={`${index ? index : ""}attorneyZipcode`} name={`${index ? index : ""}attorneyZipcode`} htmlFor={`${index ? index : ""}attorneyZipcode`} initVal={ubData ? ubData.zipCode : ""} />
                <NumberField label="Phone Number" id={`${index ? index : ""}attorneyPhone`} name={`${index ? index : ""}attorneyPhone`} id={`${index ? index : ""}attorneyPhone`} initVal={ubData ? ubData.phoneNumber : ""} />
                <DateField label="Date of Filling" id={`${index ? index : ""}ubDateOfFilling`} name={`${index ? index : ""}ubDateOfFilling`} htmlFor={`${index ? index : ""}ubDateOfFilling`} initVal={ubData ? moment(ubData.dateOfFilling) : ""} />

                <Col xs={24} >
                    <Item label="Notes :" name={`${index ? index : ""}UbBidderNote`} htmlFor={`${index ? index : ""}UbBidderNote`} initialValue={ubData ? ubData.Notes : ""}   >
                        <TextArea rows={4} id={`${index ? index : ""}UbBidderNote`} style={{ margin: "0px" }} />
                    </Item>
                </Col>


                <InputField label="IM By" id={`${index ? index : ""}ubImBy`} name={`${index ? index : ""}ubImBy`} htmlFor={`${index ? index : ""}ubImBy`} initVal={ubData ? ubData.imby : ""} />
                <DateField label="IM By Date" id={`${index ? index : ""}ubImByDate`} name={`${index ? index : ""}ubImByDate`} htmlFor={`${index ? index : ""}ubImByDate`} initVal={ubData ? moment(ubData.imByDate) : ""} />
                <InputField label="Auction" id={`${index ? index : ""}ubauction`} name={`${index ? index : ""}ubauction`} htmlFor={`${index ? index : ""}ubauction`} initVal={ubData ? ubData.auction : ""} />
                <InputField label="NOS Name" id={`${index ? index : ""}ubnosName`} name={`${index ? index : ""}ubnosName`} htmlFor={`${index ? index : ""}ubnosName`} initVal={ubData ? ubData.nosName : ""} />
                <InputField label="NOS By Date" id={`${index ? index : ""}ubnosByDate`} name={`${index ? index : ""}ubnosByDate`} htmlFor={`${index ? index : ""}ubnosByDate`} initVal={ubData ? ubData.nosDate : ""} />

                <CheckField label="Deputy CSC" id={`${index ? index : ""}deputyCSC`} name={`${index ? index : ""}deputyCSC`} htmlFor={`${index ? index : ""}deputyCSC`} initVal={ubData ? ubData.deputyCSC : ""} />
                <CheckField label="Assistant CSC" id={`${index ? index : ""}assistantCSC`} name={`${index ? index : ""}assistantCSC`} htmlFor={`${index ? index : ""}assistantCSC`} initVal={ubData ? ubData.assistantCSC : ""} />
                <CheckField label="Clerk Of Superior Court" id={`${index ? index : ""}clerkOfSuperiorCourt`} name={`${index ? index : ""}clerkOfSuperiorCourt`} htmlFor={`${index ? index : ""}clerkOfSuperiorCourt`} initVal={ubData ? ubData.clerkOfSuperiorCourt : ""} />

            </Col>


            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Bidder Info Files
                    </Divider>

                    <InputField label="File Name" id={`${index ? index : ""}ubFile`} name={`${index ? index : ""}ubFile`} htmlFor={`${index ? index : ""}ubFile`} />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date :" htmlFor={`${index ? index : ""}pdDate`} name={`${index ? index : ""}pdDate`}>
                            <DatePicker placeholder="Select Date" id={`${index ? index : ""}pdDate`} style={{ width: "100%" }} />
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
