import React from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { Row, Col, Button, Form, Input, Select, DatePicker } from 'antd'
import styles from '../../../styles/search.module.css'

const search = () => {
    const { Item } = Form
    const { Option } = Select

    return (
        <ProtectedPage>

            <h1 style={{ textAlign: "center", textTransform: "capitalize", fontWeight: "bold" }}>Search your desire properties.</h1>

            <div className={styles.searchUi}>
                <Row gutter={[15, 15]} wrap={true} justify="center">
                    <Col span={24} >

                        <Form layout="vertical" className={styles.searchForm} >
                            <h3 style={{ textAlign: "center", width: "100%" }}> Property Descripton Search : </h3>
                            <hr style={{ width: "100%", marginBottom: "10px" }}
                            />
                            <Col xs={12} sm={8} md={6} >
                                <Item label="Property Address : " htmlFor="propertyAddress"  >
                                    <Input allowClear placeholder="308 james palace...." id="propertyAddress" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="City : " htmlFor="city"  >
                                    <Input allowClear placeholder="City Name" id="city" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6}  >
                                <Item label="State : " htmlFor="state" >
                                    <Select style={{ width: "100%" }} placeholder="Select State" name="state" id="state" >
                                        <Option value="North Carolina">North Carolina</Option>
                                        <Option value="South Carolina">South Carolina</Option>
                                    </Select>
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="County : " htmlFor="county"  >
                                    <Input allowClear placeholder="County Name" id="county" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Zip Code : " htmlFor="zipCode"  >
                                    <Input allowClear placeholder="Zip Code" id="zipCode" />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} >
                                <Item label="Case Number : " htmlFor="caseNumber"  >
                                    <Input allowClear placeholder="Case Number" id="caseNumber" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Trustee : " htmlFor="trustee"  >
                                    <Input allowClear placeholder="Trustee Name" id="trustee" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Owner Name : " htmlFor="ownerName"  >
                                    <Input allowClear placeholder="Owner Name" id="ownerName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Borrower Name : " htmlFor="borrowerName"  >
                                    <Input allowClear placeholder="Borrower Name" id="borrowerName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Entity | LLC Name : " htmlFor="llcName"  >
                                    <Input allowClear placeholder="LLC Name" id="llcName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Subdivision : " htmlFor="subdivision"  >
                                    <Input allowClear placeholder="Subdivision Name" id="subdivision" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Legal Description : " htmlFor="legalDesc"  >
                                    <Input allowClear placeholder="Legal Description" id="legalDesc" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Property Type : " htmlFor="propertyType"  >
                                    <Input allowClear placeholder="Property Type" id="propertyType" />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} >
                                <Item label="Loan Type : " htmlFor="loanType"  >
                                    <Input allowClear placeholder="Loan Type" id="loanType" />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} >
                                <Item label="Sale Type : " htmlFor="saleType"  >
                                    <Input allowClear placeholder="Sale Type" id="saleType" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Bidder Name : " htmlFor="bidderName"  >
                                    <Input allowClear placeholder="Bidder Name" id="bidderName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Winning Bidder Name : " htmlFor="wBidderName"  >
                                    <Input allowClear placeholder="Winning Bidder Name" id="wBidderName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Year Built : " htmlFor="yearBuilt"  >
                                    <Input allowClear placeholder="Year Built" id="yearBuilt" />
                                </Item>
                            </Col>

                            <Col span={24} >
                                <div className={styles.saleAndRedemp}>
                                    <div className={styles.saleDate}>

                                        <h3 style={{ textAlign: "center", width: "100%" }}> Sale Date Search : </h3>
                                        <hr style={{ width: "100%", marginBottom: "10px" }}
                                        />
                                        <div className={styles.searchItem}>

                                            <Col xs={24} md={12}  >
                                                <Item label="Start Date : " htmlFor="sStartDate"  >
                                                    <DatePicker allowClear placeholder="Select Start Date" id="sStartDate" style={{ width: '100%' }} />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12}  >
                                                <Item label="End Date : " htmlFor="sEndDate"  >
                                                    <DatePicker allowClear placeholder="Select End Date" id="sEndDate" style={{ width: '100%' }} />
                                                </Item>
                                            </Col>
                                        </div>

                                    </div>


                                    <div className={styles.redemp}>
                                        <h3 style={{ textAlign: "center", width: "100%" }}> Redemption Search : </h3>
                                        <hr style={{ width: "100%", marginBottom: "10px" }}
                                        />

                                        <div className={styles.searchItem}>
                                            <Col xs={24} md={12}  >
                                                <Item label="Start Date : " htmlFor="rStartDate"  >
                                                    <DatePicker allowClear placeholder="Select Start Date" id="rStartDate" style={{ width: '100%' }} />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12}  >
                                                <Item label="End Date : " htmlFor="rEndDate"  >
                                                    <DatePicker allowClear placeholder="Select End Date" id="rEndDate" style={{ width: '100%' }} />
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

                                            <Col xs={24} md={12}  >
                                                <Item label="Start : " htmlFor="aStart"  >
                                                    <Input allowClear placeholder="Acre" id="aStart" />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12}  >
                                                <Item label="End : " htmlFor="aEnd"  >
                                                    <Input allowClear placeholder="Acre" id="aEnd" />
                                                </Item>
                                            </Col>
                                        </div>

                                    </div>


                                    <div className={styles.redemp}>
                                        <h3 style={{ textAlign: "center", width: "100%" }}> Living SQFT : </h3>
                                        <hr style={{ width: "100%", marginBottom: "10px" }}
                                        />

                                        <div className={styles.searchItem}>
                                            <Col xs={24} md={12}  >
                                                <Item label="Start : " htmlFor="lStart"  >
                                                    <Input allowClear placeholder="Acre" id="lStart" />
                                                </Item>
                                            </Col>

                                            <Col xs={24} md={12}  >
                                                <Item label="End : " htmlFor="lEnd"  >
                                                    <Input allowClear placeholder="Acre" id="lEnd" />
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

                                    <Col xs={12} sm={8} md={6}  >
                                        <Item label="1st Sort : " htmlFor="fSort" >
                                            <Select style={{ width: "100%" }} placeholder="Select Sort" name="fSort" id="fSort" >
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


                                    <Col xs={12} sm={8} md={6}  >

                                        <Item label="Order : " htmlFor="fOrder" >
                                            <Select style={{ width: "100%" }} placeholder="Select Sort" name="fOrder" id="fOrder" >
                                                <Option value="ASC">ASC</Option>
                                                <Option value="DESC">DESC</Option>
                                            </Select>
                                        </Item>
                                    </Col>

                                    <Col xs={12} sm={8} md={6}  >

                                        <Item label="2nd Sort : " htmlFor="sSort" >
                                            <Select style={{ width: "100%" }} placeholder="Select Sort" name="sSort" id="sSort" >
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

                                    <Col xs={12} sm={8} md={6}  >

                                        <Item label="Order : " htmlFor="sOrder" >
                                            <Select style={{ width: "100%" }} placeholder="Select Sort" name="sOrder" id="sOrder" >
                                                <Option value="ASC">ASC</Option>
                                                <Option value="DESC">DESC</Option>
                                            </Select>
                                        </Item>
                                    </Col>
                                </div>

                            </Col>


                        </Form>

                    </Col>
                </Row>

            </div>

        </ProtectedPage >
    )
}

export default search
