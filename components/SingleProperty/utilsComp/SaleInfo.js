import { Col, Form, Button, Divider, Space, Upload, DatePicker, Input, Collapse } from 'antd'
import InputField from './InputField'
import styles from '../../../styles/search.module.css'
import InputWithSuffix from './InputWithSuffix';
import NumberField from './NumberField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './DateField';
import moment from 'moment'

const SaleInfo = ({ data, inx }) => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <DateField label="Sale Date" id={`${inx ? inx : ""}saleDate`} name={`${inx ? inx : ""}saleDate`} htmlFor={`${inx ? inx : ""}saleDate`} initVal={data.saleDate ? moment(data.saleDate) : ""} />
            <InputField label="Case NO" name={`${inx ? inx : ""}case`} id={`${inx ? inx : ""}case`} htmlFor={`${inx ? inx : ""}case`} initVal={data.caseNumber ? data.caseNumber : ""} />
            <NumberField label="Opening Bid" id={`${inx ? inx : ""}openingBid`} name={`${inx ? inx : ""}openingBid`} htmlFor={`${inx ? inx : ""}openingBid`} initVal={data.openingBid ? data.openingBid : ""} />
            <InputField label="Sale Type" id={`${inx ? inx : ""}saleType`} name={`${inx ? inx : ""}saleType`} htmlFor={`${inx ? inx : ""}saleType`} initVal={data.saleType ? data.saleType : ""} />
            <InputField label="Sale Status" id={`${inx ? inx : ""}saleStatus`} name={`${inx ? inx : ""}saleStatus`} htmlFor={`${inx ? inx : ""}saleStatus`} initVal={data.saleStatus ? data.saleStatus : ""} />
            <InputField label="Sale Place" id={`${inx ? inx : ""}salePlace`} name={`${inx ? inx : ""}salePlace`} htmlFor={`${inx ? inx : ""}salePlace`} initVal={data.salePlace ? data.salePlace : ""} />
            <InputField label="Sale Time" id={`${inx ? inx : ""}saleTime`} name={`${inx ? inx : ""}saleTime`} htmlFor={`${inx ? inx : ""}saleTime`} initVal={data.saleTime ? data.saleTime : ""} />
            <InputField label="Trustee File" id={`${inx ? inx : ""}trusteeFile`} name={`${inx ? inx : ""}trusteeFile`} htmlFor={`${inx ? inx : ""}trusteeFile`} initVal={data.truesteeFile ? data.truesteeFile : ""} />
            <InputField label="Precinct" id={`${inx ? inx : ""}precinct`} name={`${inx ? inx : ""}precinct`} htmlFor={`${inx ? inx : ""}precinct`} initVal={data.precinct ? data.precinct : ""} />
            <InputField label="Trustee" id={`${inx ? inx : ""}trustee`} name={`${inx ? inx : ""}trustee`} htmlFor={`${inx ? inx : ""}trustee`} initVal={data.trustee ? data.trustee : ""} />
            <InputWithSuffix label="Trustee URL" id={`${inx ? inx : ""}trusteeUrl`} name={`${inx ? inx : ""}trusteeUrl`} htmlFor={`${inx ? inx : ""}trusteeUrl`} initVal={data.trusteeUrl ? data.trusteeUrl : ""} />
            <InputField label="Trustee Address" id={`${inx ? inx : ""}trusteeAddress`} name={`${inx ? inx : ""}trusteeAddress`} htmlFor={`${inx ? inx : ""}trusteeAddress`} initVal={data.trusteeAddress ? data.trusteeAddress : ""} />
            <InputField label="Trustee Phone" id={`${inx ? inx : ""}trusteePhone`} name={`${inx ? inx : ""}trusteePhone`} htmlFor={`${inx ? inx : ""}trusteePhone`} initVal={data.trusteePhone ? data.trusteePhone : ""} />
            <InputField label="Trustee Hours" id={`${inx ? inx : ""}trusteeHours`} name={`${inx ? inx : ""}trusteeHours`} htmlFor={`${inx ? inx : ""}trusteeHours`} initVal={data.trusteeHours ? data.trusteeHours : ""} />

            <Col xs={24} >
                <Item label="Notice of Foreclosure :" name={`${inx ? inx : ""}noticeOfFcl`} htmlFor={`${inx ? inx : ""}noticeOfFcl`} initialValue={data.noticeOfForclosure ? data.noticeOfForclosure : ""}   >
                    <TextArea rows={4} id={`${inx ? inx : ""}noticeOfFcl`} style={{ margin: "0px" }} />
                </Item>
            </Col>

            <InputWithSuffix label="Newspaper/Legal Notice URL" id={`${inx ? inx : ""}newspaperLegal`} name={`${inx ? inx : ""}newspaperLegal`} htmlFor={`${inx ? inx : ""}newspaperLegal`} initVal={data.legalNoticeURL ? data.legalNoticeURL : ""} />
            <DateField label="Date Pulled" id={`${inx ? inx : ""}datePulled`} name={`${inx ? inx : ""}datePulled`} htmlFor={`${inx ? inx : ""}datePulled`} initVal={data.datePulled ? moment(data.datePulled) : ""} />
            <InputField label="Book" id={`${inx ? inx : ""}trBook`} name={`${inx ? inx : ""}trBook`} htmlFor={`${inx ? inx : ""}trBook`} initVal={data.book ? data.book : ""} />
            <InputField label="Page" id={`${inx ? inx : ""}trPage`} name={`${inx ? inx : ""}trPage`} htmlFor={`${inx ? inx : ""}trPage`} initVal={data.page ? data.page : ""} />
            <InputField label="IM By" id={`${inx ? inx : ""}imBy`} name={`${inx ? inx : ""}imBy`} htmlFor={`${inx ? inx : ""}imBy`} initVal={data.imBy ? data.imBy : ""} />
            <DateField label="IM By Date" id={`${inx ? inx : ""}imByDate`} name={`${inx ? inx : ""}imByDate`} htmlFor={`${inx ? inx : ""}imByDate`} initVal={data.imByDate ? moment(data.imByDate) : ""} />
            <InputField label="NOS Name" id={`${inx ? inx : ""}nosName`} name={`${inx ? inx : ""}nosName`} htmlFor={`${inx ? inx : ""}nosName`} initVal={data.nosName ? data.nosName : ""} />
            <DateField label="NOS Date" id={`${inx ? inx : ""}nosDate`} name={`${inx ? inx : ""}nosDate`} htmlFor={`${inx ? inx : ""}nosDate`} initVal={data.nosDate ? moment(data.nosDate) : ""} />
            <InputWithSuffix label="Auction.Com URL" id={`${inx ? inx : ""}auctionUrl`} name={`${inx ? inx : ""}auctionUrl`} htmlFor={`${inx ? inx : ""}auctionUrl`} initVal={data.auctionUrl ? moment(data.auctionUrl) : ""} />
            <DateField label="Date Pulled" id={`${inx ? inx : ""}acDatePulled`} name={`${inx ? inx : ""}acDatePulled`} htmlFor={`${inx ? inx : ""}acDatePulled`} initVal={data.auctionDate ? moment(data.auctionDate) : ""} />

            <InputField label="Auction By" id={`${inx ? inx : ""}acBy`} name={`${inx ? inx : ""}acBy`} htmlFor={`${inx ? inx : ""}acBy`} />
            <DateField label="Auction By Date" id={`${inx ? inx : ""}acByDate`} name={`${inx ? inx : ""}acByDate`} htmlFor={`${inx ? inx : ""}acByDate`} />

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Sale Info Files
                    </Divider>

                    <InputField label="File Name" htmlFor={`${inx ? inx : ""}pdFile`} name={`${inx ? inx : ""}pdFile`} id={`${inx ? inx : ""}pdFile`} />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor={`${inx ? inx : ""}pdDate`} name={`${inx ? inx : ""}pdDate`}   >
                            <DatePicker placeholder="Select Date" id={`${inx ? inx : ""}pdDate`} style={{ width: "100%" }} />
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
            <Col xs={24} >
                <Item label="Before Sale Trustee Notes:" name={`${inx ? inx : ""}beforeSaleNote`} htmlFor={`${inx ? inx : ""}beforeSaleNote`} initialValue={data.beforeSaleNotes ? moment(data.beforeSaleNotes) : ""} >
                    <TextArea rows={4} id={`${inx ? inx : ""}beforeSaleNote`} style={{ margin: "0px" }} />
                </Item>
            </Col>

            <Col xs={24} >
                <Item label="After Sale Trustee Notes:" name={`${inx ? inx : ""}afterSaleNotes`} htmlFor={`${inx ? inx : ""}afterSaleNotes`} initialValue={data.afterSaleNotes ? moment(data.afterSaleNotes) : ""}  >
                    <TextArea rows={4} id={`${inx ? inx : ""}afterSaleNotes`} style={{ margin: "0px" }} />
                </Item>
            </Col>



            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                <Space>
                    <Button>
                        Add Bidder
                    </Button>
                    <Button>
                        Add More Sale Date
                    </Button>
                </Space>
            </Col>


        </>
    )
}

export default SaleInfo
