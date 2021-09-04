import React from 'react'
import { Row, Col, Button, Form, Input, Select } from 'antd'
import styles from '../styles/search.module.css'
import { SyncOutlined } from '@ant-design/icons'

const AdvanceSearchForm = ({ advanceSearch, limitChange, onReset, form, isLoading }) => {
    const { Item } = Form
    const { Option } = Select
    return (
        <Form form={form} layout="vertical" name="control-hooks" className={styles.searchForm} onFinish={advanceSearch} initialValues={{ limit: "10" }}  >
            <h3 style={{ textAlign: "center", width: "100%" }}> Owner Info : </h3>
            <hr style={{ width: "100%", marginBottom: "10px" }}
            />

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Owner Name : " htmlFor="ownerFullName" name="ownerFullName"  >
                    <Input allowClear placeholder="Owner Name" id="ownerFullName" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Owner Address : " htmlFor="ownerAddress" name="ownerAddress"  >
                    <Input allowClear placeholder="Owner Address" id="ownerAddress" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Owner Phone : " htmlFor="ownerPhone" name="ownerPhone"  >
                    <Input allowClear placeholder="Owner Phone" id="ownerPhone" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Borrower Name : " htmlFor="borrowerName" name="borrowerName" >
                    <Input allowClear placeholder="Borrower Name" id="borrowerName" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Borrower Address : " htmlFor="borrowerAddress" name="borrowerAddress" >
                    <Input allowClear placeholder="Borrower Address" id="borrowerAddress" style={{ border: "1px solid black" }} />
                </Item>
            </Col>

            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                <Item label="Borrower Phone : " htmlFor="borrowerPhone" name="borrowerPhone" >
                    <Input allowClear placeholder="Borrower Phone" id="borrowerPhone" style={{ border: "1px solid black" }} />
                </Item>
            </Col>


            <Col span={24} >
                <h3 style={{ textAlign: "center", width: "100%" }}> Other Info : </h3>
                <hr style={{ width: "100%", marginBottom: "10px" }}
                />

                <div className={styles.searchItem}>

                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                        <Item label="Agent Name : " htmlFor="agentName" name="agentName" >
                            <Input allowClear placeholder="Agent Name" id="agentName" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>

                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                        <Item label="FB username : " htmlFor="fbusername" name="fbusername" >
                            <Input allowClear placeholder="FB username" id="fbusername" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>

                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                        <Item label="Strategy : " htmlFor="strategy" name="strategy" >
                            <Input allowClear placeholder="Strategy" id="strategy" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>


                </div>
            </Col>




            <Col span={24} >
                <h3 style={{ textAlign: "center", width: "100%" }}> Property Info : </h3>
                <hr style={{ width: "100%", marginBottom: "10px" }}
                />

                <div className={styles.searchItem}>

                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                        <Item label="Parcel : " htmlFor="parcelId" name="parcelId" >
                            <Input allowClear placeholder="Parcel Number" id="parcelId" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>

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
                        <Item label="Zip Code : " htmlFor="zipCode" name="zipCode" >
                            <Input allowClear placeholder="Zip Code" id="zipCode" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                        <Item label="Case Number : " htmlFor="caseNumber" name="caseNumber"  >
                            <Input allowClear placeholder="Case Number" id="caseNumber" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>



                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                        <Item label="Property Type : " htmlFor="propertyType" name="propertyType" >
                            <Input allowClear placeholder="Property Type" id="propertyType" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>



                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                        <Item label="Sale Type : " htmlFor="saleType" name="saleType" >
                            <Input allowClear placeholder="Sale Type" id="saleType" style={{ border: "1px solid black" }} />
                        </Item>
                    </Col>

                </div>
            </Col>


            <Col span={24} >
                <h3 style={{ textAlign: "center", width: "100%" }}> Sort Options : </h3>
                <hr style={{ width: "100%", marginBottom: "10px" }}
                />

                <div className={styles.searchItem}>

                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >
                        <Item label="1st Sort : " htmlFor="fSort" name="fSort" >
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

                        <Item label="Order : " htmlFor="fOrder" name="fOrder" >
                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Order" name="fOrder" id="fOrder" >
                                <Option value="ASC">ASC</Option>
                                <Option value="DESC">DESC</Option>
                            </Select>
                        </Item>
                    </Col>

                    <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                        <Item label="2nd Sort : " htmlFor="sSort" name="sSort" >
                            <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="sSort" id="sSort"  >
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

                            <Button htmlType="submit" type="primary" style={{ width: "100%" }}> {!isLoading ? "Submit" : <SyncOutlined spin />} </Button>
                        </Col>
                        <Col xs={12} sm={8} md={6} >
                            <Item label="Display Row" htmlFor="limit" name="limit" >
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

export default AdvanceSearchForm
