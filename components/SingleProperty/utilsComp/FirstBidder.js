import { Col, Form, Button, Divider, Upload, DatePicker, Input, Checkbox } from 'antd'
import styles from '../../../styles/search.module.css'
import DynamicNumberField from './DynamicNumberField'
import DynamicDateField from './DynamicDateField'
import { UploadOutlined } from '@ant-design/icons'
import DynamicInputField from './DynamicInputField'

const FirstBidder = ({ name, fieldKey, ...restField }) => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <Divider orientation="center">Bidder - Trustee Site</Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <DynamicInputField label="Name of Bidder"  {...restField} name={[name, "nameOfBidder"]} />
                <DynamicNumberField label="Bid Amount"  {...restField} name={[name, "bidAmount"]} />
            </Col>

            <Divider orientation="left">Bidder
            </Divider>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <DynamicInputField label="Name of Purchaser" {...restField} name={[name, "nameOfPurchaser"]} />
                <DynamicNumberField label="Amount of Bid"  {...restField} name={[name, "amountOfBid"]} />
                <DynamicDateField label="Bid Date" {...restField} name={[name, "bidDate"]} />
                <DynamicDateField label="LDTUB" {...restField} name={[name, "ldub"]} />

                <DynamicNumberField label="Min. Amount of Next UB" />

                <DynamicNumberField label="Deposit Required to Upset"  {...restField} name={[name, "depositRequiredToIpset"]} />
                <DynamicInputField label="Address" {...restField} name={[name, "address"]} />
                <DynamicInputField label="Phone" {...restField} name={[name, "phone"]} />
                <DynamicInputField label="Email" {...restField} name={[name, "email"]} />
                <DynamicInputField label="Fax" {...restField} name={[name, "fax"]} />
                <DynamicDateField label="Date of Report" {...restField} name={[name, "dateOfReport"]} />
                <DynamicInputField label="Name of Mortgagee" {...restField} name={[name, "nameOfMortgage"]} />
                <DynamicInputField label="Cryer"  {...restField} name={[name, "cryer"]} />
                <DynamicInputField label="IM By"  {...restField} name={[name, "imby"]} />
                <DynamicDateField label="IM By Date" {...restField} name={[name, "fimByDate"]} />

                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                    <Item  {...restField} name={[name, "bidConfirmed"]} >
                        <Checkbox>Bid Confirmed</Checkbox>
                    </Item>
                </Col>

                <Col xs={12} sm={8} md={6} lg={4} style={{ height: "65px" }} >
                    <Item  {...restField} name={[name, "bidUpset"]} >
                        <Checkbox>Bid Upset</Checkbox>
                    </Item>
                </Col>

                <DynamicInputField label="Auction" {...restField} name={[name, "auction"]} />
                <DynamicInputField label="NOS Name" {...restField} name={[name, "fnosName"]} />
                <DynamicDateField label="NOS By Date" {...restField} name={[name, "fnosDate"]} />

                <Col xs={24} >
                    <Item label="Notes :"  {...restField} name={[name, "notes"]} >
                        <TextArea rows={4} style={{ margin: "0px" }} />
                    </Item>
                </Col>

            </Col>


            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Bidder Info Files
                    </Divider>

                    <DynamicInputField label="File Name" htmlFor="pdFile" name="pdFile" id="pdFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : "  >
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


        </>
    )
}

export default FirstBidder
