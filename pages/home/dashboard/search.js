import React from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { Row, Col, Button, Form, Input, Select, DatePicker, Space } from 'antd'
import styles from '../../../styles/search.module.css'

const search = () => {
    const { Item } = Form
    const { Option } = Select

    const [form] = Form.useForm();


    const onFinish = (values) => {
        console.log(values);
    };


    const onReset = () => {
        form.resetFields();
    };

    return (
        <ProtectedPage>

            <h1 style={{ textAlign: "center", textTransform: "capitalize", fontWeight: "bold" }}>Search your desire properties :</h1>

            <div className={styles.searchUi}>
                <Row gutter={15} wrap={true} justify="center">
                    <Col span={24} >

                        <Form layout="vertical" className={styles.searchForm} onFinish={onFinish} >
                            <h3 style={{ textAlign: "center", width: "100%" }}> Property Descripton Search : </h3>
                            <hr style={{ width: "100%", marginBottom: "10px" }}
                            />
                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Property Address : " htmlFor="propertyAddress"  >
                                    <Input allowClear placeholder="308 james palace...." id="propertyAddress" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                                <Item label="City : " htmlFor="city"  >
                                    <Input allowClear placeholder="City Name" id="city" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="State : " htmlFor="state" >
                                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select State" name="state" id="state" >
                                        <Option value="North Carolina">North Carolina</Option>
                                        <Option value="South Carolina">South Carolina</Option>
                                    </Select>
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="County : " htmlFor="county"  >
                                    <Input allowClear placeholder="County Name" id="county" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                                <Item label="Zip Code : " htmlFor="zipCode"  >
                                    <Input allowClear placeholder="Zip Code" id="zipCode" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Case Number : " htmlFor="caseNumber"  >
                                    <Input allowClear placeholder="Case Number" id="caseNumber" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                                <Item label="Trustee : " htmlFor="trustee"  >
                                    <Input allowClear placeholder="Trustee Name" id="trustee" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Owner Name : " htmlFor="ownerName"  >
                                    <Input allowClear placeholder="Owner Name" id="ownerName" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Borrower Name : " htmlFor="borrowerName"  >
                                    <Input allowClear placeholder="Borrower Name" id="borrowerName" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Entity | LLC Name : " htmlFor="llcName"  >
                                    <Input allowClear placeholder="LLC Name" id="llcName" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Subdivision : " htmlFor="subdivision"  >
                                    <Input allowClear placeholder="Subdivision Name" id="subdivision" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Legal Description : " htmlFor="legalDesc"  >
                                    <Input allowClear placeholder="Legal Description" id="legalDesc" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Property Type : " htmlFor="propertyType"  >
                                    <Input allowClear placeholder="Property Type" id="propertyType" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Loan Type : " htmlFor="loanType"  >
                                    <Input allowClear placeholder="Loan Type" id="loanType" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Sale Type : " htmlFor="saleType"  >
                                    <Input allowClear placeholder="Sale Type" id="saleType" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Bidder Name : " htmlFor="bidderName"  >
                                    <Input allowClear placeholder="Bidder Name" id="bidderName" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                <Item label="Winning Bidder Name : " htmlFor="wBidderName"  >
                                    <Input allowClear placeholder="Winning Bidder Name" id="wBidderName" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                                <Item label="Year Built : " htmlFor="yearBuilt"  >
                                    <Input allowClear placeholder="Year Built" id="yearBuilt" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col span={24} >
                                <div className={styles.saleAndRedemp}>
                                    <div className={styles.saleDate}>

                                        <h3 style={{ textAlign: "center", width: "100%" }}> Sale Date Search : </h3>
                                        <hr style={{ width: "100%", marginBottom: "10px" }}
                                        />
                                        <div className={styles.searchItem}>

                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="Start Date : " htmlFor="sStartDate"  >
                                                    <DatePicker allowClear placeholder="Select Start Date" id="sStartDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="End Date : " htmlFor="sEndDate"  >
                                                    <DatePicker allowClear placeholder="Select End Date" id="sEndDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>
                                        </div>

                                    </div>


                                    <div className={styles.redemp}>
                                        <h3 style={{ textAlign: "center", width: "100%" }}> Redemption Search : </h3>
                                        <hr style={{ width: "100%", marginBottom: "10px" }}
                                        />

                                        <div className={styles.searchItem}>
                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="Start Date : " htmlFor="rStartDate"  >
                                                    <DatePicker allowClear placeholder="Select Start Date" id="rStartDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="End Date : " htmlFor="rEndDate"  >
                                                    <DatePicker allowClear placeholder="Select End Date" id="rEndDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>
                                        </div>

                                    </div>
                                </div>

                            </Col>

                            <Col span={24} >
                                <div className={styles.saleAndRedemp}>
                                    <div className={styles.saleDate}>

                                        <h3 style={{ textAlign: "center", width: "100%" }}> Lot Acres/Sqft : </h3>
                                        <hr style={{ width: "100%", marginBottom: "10px" }}
                                        />
                                        <div className={styles.searchItem}>

                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="Start : " htmlFor="aStart"  >
                                                    <Input allowClear placeholder="Acre" id="aStart" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="End : " htmlFor="aEnd"  >
                                                    <Input allowClear placeholder="Acre" id="aEnd" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>
                                        </div>

                                    </div>


                                    <div className={styles.redemp}>
                                        <h3 style={{ textAlign: "center", width: "100%" }}> Living SQFT : </h3>
                                        <hr style={{ width: "100%", marginBottom: "10px" }}
                                        />

                                        <div className={styles.searchItem}>
                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="Start : " htmlFor="lStart"  >
                                                    <Input allowClear placeholder="Sqf" id="lStart" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                                <Item label="End : " htmlFor="lEnd"  >
                                                    <Input allowClear placeholder="Sqf" id="lEnd" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>
                                        </div>

                                    </div>
                                </div>

                            </Col>




                            <Col span={24} >
                                <h3 style={{ textAlign: "center", width: "100%" }}> Sort Options : </h3>
                                <hr style={{ width: "100%", marginBottom: "10px" }}
                                />

                                <div className={styles.searchItem}>

                                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >
                                        <Item label="1st Sort : " htmlFor="fSort" >
                                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="fSort" id="fSort" >
                                                <Option value="Sale Date">Sale Date</Option>
                                                <Option value="LotSqf">LotSqf</Option>
                                                <Option value="Property Address">Property Address</Option>
                                                <Option value="Total Sqf">Total Sqf</Option>
                                                <Option value="Owner Name">Owner Name</Option>
                                                <Option value="Borrower Name">Borrower Name</Option>
                                                <Option value="Bidder Name">Bidder Name</Option>
                                                <Option value="Winning Bidder Name">Winning Bidder Name</Option>
                                            </Select>
                                        </Item>
                                    </Col>


                                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                                        <Item label="Order : " htmlFor="fOrder" >
                                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="fOrder" id="fOrder" >
                                                <Option value="ASC">ASC</Option>
                                                <Option value="DESC">DESC</Option>
                                            </Select>
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                                        <Item label="2nd Sort : " htmlFor="sSort" >
                                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="sSort" id="sSort" >
                                                <Option value="Sale Date">Sale Date</Option>
                                                <Option value="LotSqf">LotSqf</Option>
                                                <Option value="Property Address">Property Address</Option>
                                                <Option value="Total Sqf">Total Sqf</Option>
                                                <Option value="Owner Name">Owner Name</Option>
                                                <Option value="Borrower Name">Borrower Name</Option>
                                                <Option value="Bidder Name">Bidder Name</Option>
                                                <Option value="Winning Bidder Name">Winning Bidder Name</Option>
                                            </Select>
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                                        <Item label="Order : " htmlFor="sOrder" >
                                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="sOrder" id="sOrder" >
                                                <Option value="ASC">ASC</Option>
                                                <Option value="DESC">DESC</Option>
                                            </Select>
                                        </Item>
                                    </Col>
                                </div>

                            </Col>
                            <hr style={{ width: "100%" }} />

                            <Row gutter={[20, 20]} align="middle" justify="space-between" style={{ width: "100%" }}>

                                <Col span={24} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div className={styles.actionSection}>


                                        <Col xs={12} sm={8} md={6} >

                                            <Button htmlType="submit" type="primary" style={{ width: "100%" }}>Submit</Button>
                                        </Col>
                                        <Col xs={12} sm={8} md={6} >
                                            <Item label="Display Row : " htmlFor="fSort" >
                                                <Select style={{ border: "1px solid black", width: "100%" }} placeholder="10" name="fSort" id="fSort" >
                                                    <Option value="10">10</Option>
                                                    <Option value="20">20</Option>
                                                    <Option value="100">100</Option>
                                                    <Option value="200">200</Option>
                                                    <Option value="500">500</Option>
                                                    <Option value="1000">1000</Option>
                                                    <Option value="2000">2000</Option>
                                                </Select>
                                            </Item>
                                        </Col>

                                        <Col xs={12} sm={8} md={6} >

                                            <Button htmlType="button" onClick={onReset} style={{ width: "100%" }}>Clear</Button>
                                        </Col>

                                    </div>

                                </Col>
                            </Row>


                        </Form>

                    </Col>
                </Row>

            </div>

        </ProtectedPage >
    )
}

export default search
