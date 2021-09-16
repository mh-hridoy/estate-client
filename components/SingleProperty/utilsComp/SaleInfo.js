import { Col, Form, Button, Divider, Space, Upload, DatePicker, Input } from 'antd'
import styles from '../../../styles/search.module.css'
import { UploadOutlined } from '@ant-design/icons'
import DynamicDateField from './DynamicDateField'
import DynamicInputField from './DynamicInputField'
import DynamicNumberField from './DynamicNumberField'
import DynamicInputWithSuffix from './DynamicInputWithSuffix'

const SaleInfo = ({ name, fieldKey, ...restField }) => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <DynamicDateField label="Sale Date" {...restField} name={name} fieldname="saleDate" />
            <DynamicInputField label="Case NO"  {...restField} name={name} fieldname="caseNumber" />
            <DynamicNumberField label="Opening Bid"  {...restField} name={name} fieldname="openingBid" />
            <DynamicInputField label="Sale Type"  {...restField} name={name} fieldname="saleType" />
            <DynamicInputField label="Sale Status"  {...restField} name={name} fieldname="saleStatus" />
            <DynamicInputField label="Sale Place"  {...restField} name={name} fieldname="salePlace" />
            <DynamicInputField label="Sale Time"  {...restField} name={name} fieldname="saleTime" />
            <DynamicInputField label="Trustee File"   {...restField} name={name} fieldname="truesteeFile" />
            <DynamicInputField label="Precinct"  {...restField} name={name} fieldname="precinct" />
            <DynamicInputField label="Trustee"  {...restField} name={name} fieldname="trustee" />
            <DynamicInputWithSuffix label="Trustee URL" {...restField} name={name} fieldname="trusteeUrl" />
            <DynamicInputField label="Trustee Address"  {...restField} name={name} fieldname="trusteeAddress" />
            <DynamicInputField label="Trustee Phone"  {...restField} name={name} fieldname="trusteePhone" />
            <DynamicInputField label="Trustee Hours"  {...restField} name={name} fieldname="trusteeHours" />

            <Col xs={24} >
                <Item label="Notice of Foreclosure :"  {...restField} name={[name, "noticeOfForclosure"]}   >
                    <TextArea rows={4} style={{ margin: "0px" }} />
                </Item>
            </Col>

            <DynamicInputWithSuffix label="Newspaper/Legal Notice URL"  {...restField} name={name} fieldname="legalNoticeURL" />
            <DynamicDateField label="Date Pulled"  {...restField} name={name} fieldname="datePulled" />
            <DynamicInputField label="Book"  {...restField} name={name} fieldname="book" />
            <DynamicInputField label="Page" {...restField} name={name} fieldname="page" />
            <DynamicInputField label="IM By"  {...restField} name={name} fieldname="imBy" />
            <DynamicDateField label="IM By Date"  {...restField} name={name} fieldname="imByDate" />
            <DynamicInputField label="NOS Name"  {...restField} name={name} fieldname="nosName" />
            <DynamicDateField label="NOS Date"  {...restField} name={name} fieldname="nosDate" />
            <DynamicInputWithSuffix label="Auction.Com URL"   {...restField} name={name} fieldname="auctionUrl" />
            <DynamicDateField label="Date Pulled"  {...restField} name={name} fieldname="auctionDate" />

            <DynamicInputField label="Auction By" />
            <DynamicDateField label="Auction By Date" />

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Sale Info Files
                    </Divider>

                    <DynamicInputField label="File Name" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : "    >
                            <DatePicker placeholder="Select Date" style={{ width: "100%" }} />
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

                    <Col span={24} style={{ margin: "15px" }}>

                        <div className={styles.displayPFile}>
                            Files will be here

                        </div>

                    </Col>


                </Col>



            </Col>
            <Col xs={24} >
                <Item label="Before Sale Trustee Notes:"  {...restField} name={[name, "beforeSaleNotes"]} >
                    <TextArea rows={4} style={{ margin: "0px" }} />
                </Item>
            </Col>

            <Col xs={24} >
                <Item label="After Sale Trustee Notes:"  {...restField} name={[name, "afterSaleNotes"]} >
                    <TextArea rows={4} style={{ margin: "0px" }} />
                </Item>
            </Col>

            {/* <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                <Space>
                    <Button>
                        Add Bidder
                    </Button>
                    <Button>
                        Add More Sale Date
                    </Button>
                </Space>
            </Col> */}

        </>
    )
}

export default SaleInfo
