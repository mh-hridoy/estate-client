import React from 'react'
import { Row, Col, Button, Form, Input, Select, DatePicker } from 'antd'
import styles from '../styles/search.module.css'
import { SyncOutlined } from '@ant-design/icons'

const BasicSearchForm = ({ basicSearch, isLoading, limitChange, onReset, basicForm }) => {
    const { Item } = Form
    const { Option } = Select



    return (
        <Form form={basicForm} layout="vertical" className={styles.searchForm} onFinish={basicSearch} initialValues={{ limit: "10" }} >
            <h3 style={{ textAlign: "center", width: "100%" }}> Property Descripton Search : </h3>
            <hr style={{ width: "100%", marginBottom: "10px" }}
            />
            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Property Address : " htmlFor="propertyAddress" name="propertyAddress" >
                    <Input allowClear placeholder="308 james palace...." id="propertyAddress" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="City : " htmlFor="city" name="city"  >
                    <Input allowClear placeholder="City Name" id="city" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="State : " htmlFor="state" name="state" >
                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select State" name="state" id="state" >
                        <Option value="North Carolina">North Carolina</Option>
                        <Option value="South Carolina">South Carolina</Option>
                    </Select>
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="County : " htmlFor="county" name="county" >
                    <Input allowClear placeholder="County Name" id="county" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="Zip Code : " htmlFor="zip" name="zip" >
                    <Input allowClear placeholder="Zip Code" id="zip" style={{ border: "1px solid black" }} />
                </Item>
            </Col>


            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Case Number : " htmlFor="caseNumber" name="caseNumber"  >
                    <Input allowClear placeholder="Case Number" id="caseNumber" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="Trustee : " htmlFor="trustee" name="trustee"  >
                    <Input allowClear placeholder="Trustee Name" id="trustee" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Owner Name : " htmlFor="ownerFullName" name="ownerFullName"  >
                    <Input allowClear placeholder="Owner Name" id="ownerFullName" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Borrower Name : " htmlFor="borrowerName" name="borrowerName" >
                    <Input allowClear placeholder="Borrower Name" id="borrowerName" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Entity | LLC Name : " htmlFor="llcName" name="llcName"  >
                    <Input allowClear placeholder="LLC Name" id="llcName" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Subdivision : " htmlFor="subdivision" name="subdivision"  >
                    <Input allowClear placeholder="Subdivision Name" id="subdivision" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Legal Description : " htmlFor="legalDesc" name="legalDesc"  >
                    <Input allowClear placeholder="Legal Description" id="legalDesc" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Property Type : " htmlFor="propertyType" name="propertyType" >
                    <Input allowClear placeholder="Property Type" id="propertyType" style={{ border: "1px solid black" }} />
                </Item>
            </Col>


            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Loan Type : " htmlFor="loanType" name="loanType"  >
                    <Input allowClear placeholder="Loan Type" id="loanType" style={{ border: "1px solid black" }} />
                </Item>
            </Col>


            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Sale Type : " htmlFor="saleType" name="saleType" >
                    <Input allowClear placeholder="Sale Type" id="saleType" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Bidder Name : " htmlFor="bidderName" name="bidderName" >
                    <Input allowClear placeholder="Bidder Name" id="bidderName" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Winning Bidder Name : " htmlFor="winningBidder" name="winningBidder"  >
                    <Input allowClear placeholder="Winning Bidder Name" id="winningBidder" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                <Item label="Year Built : " htmlFor="yearBuilt" name="yearBuilt" >
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
                                <Item label="Start Date : " htmlFor="startDate" name="startDate"  >
                                    <DatePicker placeholder="Select Start Date" id="startDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                <Item label="End Date : " htmlFor="endDate" name="endDate"  >
                                    <DatePicker placeholder="Select End Date" id="endDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
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
                                <Item label="Start Date : " htmlFor="rStartDate" name="rStartDate" >
                                    <DatePicker placeholder="Select Start Date" id="rStartDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                <Item label="End Date : " htmlFor="rEndDate" name="rEndDate"  >
                                    <DatePicker placeholder="Select End Date" id="rEndDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
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
                                <Item label="Start : " htmlFor="startAcre" name="startAcre"  >
                                    <Input allowClear placeholder="Acre" id="startAcre" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                <Item label="End : " htmlFor="endAcre" name="endAcre" >
                                    <Input allowClear placeholder="Acre" id="endAcre" style={{ border: "1px solid black" }} />
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
                                <Item label="Start : " htmlFor="startSqf" name="startSqf" >
                                    <Input allowClear placeholder="Sqf" id="startSqf" style={{ border: "1px solid black" }} />
                                </Item>
                            </Col>

                            <Col xs={24} md={12} style={{ height: "70px" }} >
                                <Item label="End : " htmlFor="endSqf" name="endSqf" >
                                    <Input allowClear placeholder="Sqf" id="endSqf" style={{ border: "1px solid black" }} />
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
                        <Item label="1st Sort : " htmlFor="fSort" name="fSort">
                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="fSort" id="fSort" >
                                <Option value="saleinfo.saleDate">Sale Date</Option>
                                <Option value="lotSqf">LotSqf</Option>
                                <Option value="propertyAddress">Property Address</Option>
                                <Option value="totalSqf">Total Sqf</Option>
                                <Option value="ownerInfo.ownerFullName">Owner Name</Option>
                                <Option value="borrowerInfo.borrowerName">Borrower Name</Option>
                            </Select>
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                        <Item label="Order : " htmlFor="fOrder" name="fOrder"  >
                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="fOrder" id="fOrder" >
                                <Option value="ASC">ASC</Option>
                                <Option value="DESC">DESC</Option>
                            </Select>
                        </Item>
                    </Col>

                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                        <Item label="2nd Sort : " htmlFor="sSort" name="sSort" >
                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="sSort" id="sSort" >
                                <Option value="saleinfo.saleDate">Sale Date</Option>
                                <Option value="lotSqf">LotSqf</Option>
                                <Option value="propertyAddress">Property Address</Option>
                                <Option value="totalSqf">Total Sqf</Option>
                                <Option value="ownerInfo.ownerFullName">Owner Name</Option>
                                <Option value="borrowerInfo.borrowerName">Borrower Name</Option>
                            </Select>
                        </Item>
                    </Col>

                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                        <Item label="Order : " htmlFor="sOrder" name="sOrder" >
                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Order" name="sOrder" id="sOrder" >
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

                            <Button htmlType="submit" type="primary" style={{ width: "100%" }}> {!isLoading ? "Submit" : <SyncOutlined spin />} </Button>
                        </Col>
                        <Col xs={12} sm={8} md={6} >
                            <Item label="Display Row" htmlFor="limit" name="limit" >
                                {/* //had to add the onchange function here to save the selected value */}
                                <Select style={{ border: "1px solid black", width: "100%" }} name="limit" id="limit" onChange={limitChange} >
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

    )
}

export default BasicSearchForm
