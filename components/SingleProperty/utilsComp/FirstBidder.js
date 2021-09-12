import { Col, Form, Button, Divider, Upload, DatePicker, Input, Collapse } from 'antd'
import InputField from './InputField'
import styles from '../../../styles/search.module.css'
import NumberField from './NumberField';
import CheckField from './CheckField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './DateField';
import moment from 'moment'

const FirstBidder = ({ data, inx }) => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <Divider orientation="center">Bidder - Trustee Site</Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <InputField label="Name of Bidder" id={`${inx ? inx : ""} nameOfBidder`} name={`${inx ? inx : ""} nameOfBidder`} htmlFor={`${inx ? inx : ""} nameOfBidder`} initVal={data.nameOfBidder ? data.nameOfBidder : ""} />
                <NumberField label="Bid Amount" id={`${inx ? inx : ""} bidAmount`} name={`${inx ? inx : ""} bidAmount`} htmlFor={`${inx ? inx : ""} bidAmount`} initVal={data.bidAmount ? data.bidAmount : ""} />
            </Col>

            <Divider orientation="left">Bidder
            </Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <InputField label="Name of Purchaser" id={`${inx ? inx : ""} nameOfPurchaser`} name={`${inx ? inx : ""} nameOfPurchaser`} htmlFor={`${inx ? inx : ""} nameOfPurchaser`} initVal={data.nameOfPurchaser ? data.nameOfPurchaser : ""} />
                <NumberField label="Amount of Bid" id={`${inx ? inx : ""} amountOfBid`} name={`${inx ? inx : ""} amountOfBid`} htmlFor={`${inx ? inx : ""} amountOfBid`} initVal={data.amountOfBid ? data.amountOfBid : ""} />
                <DateField label="Bid Date" id={`${inx ? inx : ""} bidDate`} name={`${inx ? inx : ""} bidDate`} htmlFor={`${inx ? inx : ""} bidDate`} initVal={data.bidDate ? moment(data.bidDate) : ""} />
                <DateField label="LDTUB" id={`${inx ? inx : ""} ldtub`} name={`${inx ? inx : ""} ldtub`} htmlFor={`${inx ? inx : ""} ldtub`} initVal={data.ldub ? moment(data.ldub) : ""} />

                <NumberField label="Min. Amount of Next UB" id={`${inx ? inx : ""} minAmountOfNX`} name={`${inx ? inx : ""} minAmountOfNX`} htmlFor={`${inx ? inx : ""} minAmountOfNX`} initVal={data.minAmountOfNextBid ? data.minAmountOfNextBid : ""} />

                <NumberField label="Deposit Required to Upset" id={`${inx ? inx : ""} depositToBid`} name={`${inx ? inx : ""} depositToBid`} htmlFor={`${inx ? inx : ""} depositToBid`} initVal={data.depositRequiredToIpset ? data.depositRequiredToIpset : ""} />
                <InputField label="Address" id={`${inx ? inx : ""} bidderAddress`} name={`${inx ? inx : ""} bidderAddress`} htmlFor={`${inx ? inx : ""} bidderAddress`} initVal={data.address ? data.address : ""} />
                <InputField label="Phone" id={`${inx ? inx : ""} bidderPhone`} name={`${inx ? inx : ""} bidderPhone`} htmlFor={`${inx ? inx : ""} bidderPhone`} initVal={data.phone ? data.phone : ""} />
                <InputField label="Email" id={`${inx ? inx : ""} bidderEmail`} name={`${inx ? inx : ""} bidderEmail`} htmlFor={`${inx ? inx : ""} bidderEmail`} initVal={data.email ? data.email : ""} />
                <InputField label="Fax" id={`${inx ? inx : ""} bidderFax`} name={`${inx ? inx : ""} bidderFax`} htmlFor={`${inx ? inx : ""} bidderFax`} initVal={data.fax ? data.fax : ""} />
                <DateField label="Date of Report" id={`${inx ? inx : ""} dateOFReport`} name={`${inx ? inx : ""} dateOFReport`} htmlFor={`${inx ? inx : ""} dateOFReport`} initVal={data.dateOfReport ? moment(data.dateOfReport) : ""} />
                <InputField label="Name of Mortgagee" id={`${inx ? inx : ""} nameOfMortgage`} name={`${inx ? inx : ""} nameOfMortgage`} htmlFor={`${inx ? inx : ""} nameOfMortgage`} initVal={data.nameOfMortgage ? data.nameOfMortgage : ""} />
                <InputField label="Cryer" id={`${inx ? inx : ""} cryer`} name={`${inx ? inx : ""} cryer`} htmlFor={`${inx ? inx : ""} cryer`} initVal={data.cryer ? data.cryer : ""} />
                <InputField label="IM By" id={`${inx ? inx : ""} fImBy`} name={`${inx ? inx : ""} fImBy`} htmlFor={`${inx ? inx : ""} fImBy`} initVal={data.imby ? data.imby : ""} />
                <DateField label="IM By Date" id={`${inx ? inx : ""} fImByDate`} name={`${inx ? inx : ""} fImByDate`} htmlFor={`${inx ? inx : ""} fImByDate`} initVal={data.imByDate ? moment(data.imByDate) : ""} />
                <CheckField label="Bid Confirmed" id={`${inx ? inx : ""} bidConfirmed`} name={`${inx ? inx : ""} bidConfirmed`} htmlFor={`${inx ? inx : ""} bidConfirmed`} initVal={data.bidConfirmed ? data.bidConfirmed : ""} />
                <CheckField label="Bid Upset" id={`${inx ? inx : ""} bidUpset`} name={`${inx ? inx : ""} bidUpset`} htmlFor={`${inx ? inx : ""} bidUpset`} initVal={data.bidUpset ? data.bidUpset : ""} />

                <InputField label="Auction" id={`${inx ? inx : ""} auction`} name={`${inx ? inx : ""} auction`} htmlFor={`${inx ? inx : ""} auction`} initVal={data.auction ? data.auction : ""} />
                <InputField label="NOS Name" id={`${inx ? inx : ""} nosName`} name={`${inx ? inx : ""} nosName`} htmlFor={`${inx ? inx : ""} nosName`} initVal={data.nosName ? data.nosName : ""} />
                <DateField label="NOS By Date" id={`${inx ? inx : ""} nosByDate`} name={`${inx ? inx : ""} nosByDate`} htmlFor={`${inx ? inx : ""} nosByDate`} initVal={data.nosDate ? moment(data.nosDate) : ""} />

                <Col xs={24} >
                    <Item label="Notes :" name={`${inx ? inx : ""} fBidderNote`} htmlFor={`${inx ? inx : ""} fBidderNote`} initialValue={data.notes ? data.notes : ""} >
                        <TextArea rows={4} id={`${inx ? inx : ""} fBidderNote`} style={{ margin: "0px" }} />
                    </Item>
                </Col>

            </Col>


            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Bidder Info Files
                    </Divider>

                    <InputField label="File Name" htmlFor="pdFile" name="pdFile" id="pdFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor={`${inx ? inx : ""} pdDate`} name={`${inx ? inx : ""} pdDate`}  >
                            <DatePicker placeholder="Select Date" id={`${inx ? inx : ""} pdDate`} style={{ width: "100%" }} />
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

export default FirstBidder
