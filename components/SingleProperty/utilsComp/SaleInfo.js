import { Col, Form, Button, Divider, Space, Upload, DatePicker, Input, Collapse } from 'antd'
import InputField from './InputField'
import styles from '../../../styles/search.module.css'
import InputWithSuffix from './InputWithSuffix';
import NumberField from './NumberField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './DateField';

const SaleInfo = () => {
    const { TextArea } = Input
    const { Item } = Form

    return (
        <>
            <DateField label="Sale Date" id="saleDate" />
            <InputField label="Case NO" id="case" />
            <NumberField label="Opening Bid" id="openingBid" />
            <InputField label="Sale Type" id="saleType" />
            <InputField label="Sale Status" id="saleStatus" />
            <InputField label="Sale Place" id="salePlace" />
            <InputField label="Sale Time" id="saleTime" />
            <InputField label="Trustee File" id="trusteeFile" />
            <InputField label="Precinct" id="precinct" />
            <InputField label="Trustee" id="trustee" />
            <InputWithSuffix label="Trustee URL" id="trusteeUrl" />
            <InputField label="Trustee Address" id="trusteeAddress" />
            <InputField label="Trustee Phone" id="trusteePhone" />
            <InputField label="Trustee Hours" id="trusteeHours" />
            <InputField label="Notice of Foreclosure" id="trusteeHours" />
            <Col xs={24} >
                <Item label="Notice of Foreclosure :"   >
                    <TextArea rows={4} id="noticeOfFcl" style={{ margin: "0px" }} />
                </Item>
            </Col>

            <InputWithSuffix label="Newspaper/Legal Notice URL" id="newspaperLegal" />
            <DateField label="Date Pulled" id="datePulled" />
            <InputField label="Book" id="trBook" />
            <InputField label="Page" id="trPage" />
            <InputField label="IM By" id="imBy" />
            <DateField label="IM By Date" id="imByDate" />
            <InputField label="NOS Name" id="nosName" />
            <DateField label="NOS Date" id="nosDate" />
            <InputWithSuffix label="Auction.Com URL" id="auctionUrl" />
            <DateField label="Date Pulled" id="acDatePulled" />
            <DateField label="Date Pulled" id="acDatePulled" />
            <InputField label="Auction By" id="acBy" />
            <DateField label="Auction By Date" id="acByDate" />

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Sale Info Files
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
            <Col xs={24} >
                <Item label="Before Sale Trustee Notes:"   >
                    <TextArea rows={4} id="beforeSaleNote" style={{ margin: "0px" }} />
                </Item>
            </Col>

            <Col xs={24} >
                <Item label="After Sale Trustee Notes:"   >
                    <TextArea rows={4} id="afterSaleNotes" style={{ margin: "0px" }} />
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
