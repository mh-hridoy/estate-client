import { Row, Col, Form, Button, Divider, Space, Upload, DatePicker, Input, Collapse } from 'antd'
import InputField from './utilsComp/InputField'
import styles from '../../styles/search.module.css'
import InputWithSuffix from './utilsComp/InputWithSuffix';
import NumberField from './utilsComp/NumberField';
import CheckField from './utilsComp/CheckField';
import { UploadOutlined } from '@ant-design/icons'
import DateField from './utilsComp/DateField';
// import OtherBidder from './utilsComp/OtherBidder'


const SaleInfoComponent = ({ saleInfoForm }) => {
    const { TextArea } = Input
    const { Item } = Form
    const { Panel } = Collapse

    const saleInfoHandler = (values) => { }

    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={saleInfoForm} layout="vertical" className={styles.searchForm} onFinish={saleInfoHandler} >

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


                        {/* firstBidder data */}
                        <Col span={24} style={{ marginTop: "10px" }}>

                            <Collapse // onChange={callback}
                                expandIconPosition="right"
                                className="site-collapse-custom-collapse">

                                <Panel header="First Bidder" key="40" className="site-collapse-custom-panel" >
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


                                </Panel>

                                {/* it will be dynamic if ther's extra bidder info */}

                                <Panel header="Bidder 2" key="41" className="site-collapse-custom-panel" >

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
                                </Panel>




                            </Collapse>
                        </Col>

                        <Col xs={24} md={8} lg={4} style={{ position: "sticky", bottom: "20px" }}>
                            <Button
                                type="primary"
                                style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                                Save Sale Data
                            </Button>
                        </Col>

                    </Form>

                </Col>

            </Row>

        </>
    )
}

export default SaleInfoComponent
