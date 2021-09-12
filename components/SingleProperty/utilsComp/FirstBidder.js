import { Col, Form, Button, Divider, Upload, DatePicker, Input, Collapse } from 'antd'
import InputField from './InputField'
import styles from '../../../styles/search.module.css'
import NumberField from './NumberField';
import CheckField from './CheckField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './DateField';

const FirstBidder = () => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <Divider orientation="center">Bidder - Trustee Site</Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <InputField label="Name of Bidder" id="nameOfBidder" />
                <NumberField label="Bid Amount" id="bidAmount" />
            </Col>

            <Divider orientation="left">Bidder
            </Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <InputField label="Name of Purchaser" id="nameOfPurchaser" />
                <NumberField label="Amount of Bid" id="amountOfBid" />
                <DateField label="Bid Date" id="bidDate" />
                <DateField label="LDTUB" id="ldtub" />
                <NumberField label="Min. Amount of Next UB" id="minAmountOfNX" />
                <NumberField label="Deposit Required to Upset" id="depositToBid" />
                <InputField label="Address" id="bidderAddress" />
                <InputField label="Phone" id="bidderPhone" />
                <InputField label="Email" id="bidderEmail" />
                <InputField label="Fax" id="bidderFax" />
                <DateField label="Date of Report" id="dateOFReport" />
                <InputField label="Name of Mortgagee" id="nameOfMortgage" />
                <InputField label="Cryer" id="cryer" />
                <InputField label="IM By" id="fImBy" />
                <InputField label="IM By Date" id="fImByDate" />
                <CheckField label="Bid Confirmed" />
                <CheckField label="Bid Upset" />
                <InputField label="Auction" id="auction" />
                <InputField label="NOS Name" id="nosName" />
                <InputField label="NOS By Date" id="nosByDate" />

                <Col xs={24} >
                    <Item label="Notes :" >
                        <TextArea rows={4} id="fBidderNote" style={{ margin: "0px" }} />
                    </Item>
                </Col>

            </Col>


            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Bidder Info Files
                    </Divider>

                    <InputField label="File Name" htmlFor="pdFile" name="pdFile" id="pdFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="pdDate" name="pdDate"  >
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

export default FirstBidder
