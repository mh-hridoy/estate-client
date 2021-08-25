import React from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { Row, Col, Button, Form, Input, Select } from 'antd'
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
                                    <Input allowClear placeholder="308 james palace...." id="city" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6}  >
                                <Select label="State : " defaultValue="North Carolina" style={{ width: "100%" }} >
                                    <Option value="North Carolina">North Carolina</Option>
                                    <Option value="South Carolina">South Carolina</Option>
                                </Select>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="County : " htmlFor="county"  >
                                    <Input allowClear placeholder="308 james palace...." id="county" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Zip Code : " htmlFor="zipCode"  >
                                    <Input allowClear placeholder="308 james palace...." id="zipCode" />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} >
                                <Item label="Case Number : " htmlFor="caseNumber"  >
                                    <Input allowClear placeholder="308 james palace...." id="caseNumber" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Trustee : " htmlFor="trustee"  >
                                    <Input allowClear placeholder="308 james palace...." id="trustee" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Owner Name : " htmlFor="ownerName"  >
                                    <Input allowClear placeholder="308 james palace...." id="ownerName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Borrower Name : " htmlFor="borrowerName"  >
                                    <Input allowClear placeholder="308 james palace...." id="borrowerName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Entity | LLC Name : " htmlFor="llcName"  >
                                    <Input allowClear placeholder="308 james palace...." id="llcName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Subdivision : " htmlFor="subdivision"  >
                                    <Input allowClear placeholder="308 james palace...." id="subdivision" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Legal Description : " htmlFor="legalDesc"  >
                                    <Input allowClear placeholder="308 james palace...." id="legalDesc" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Property Type : " htmlFor="propertyType"  >
                                    <Input allowClear placeholder="308 james palace...." id="propertyType" />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} >
                                <Item label="Loan Type : " htmlFor="loanType"  >
                                    <Input allowClear placeholder="308 james palace...." id="loanType" />
                                </Item>
                            </Col>


                            <Col xs={12} sm={8} md={6} >
                                <Item label="Sale Type : " htmlFor="saleType"  >
                                    <Input allowClear placeholder="308 james palace...." id="saleType" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Bidder Name : " htmlFor="bidderName"  >
                                    <Input allowClear placeholder="308 james palace...." id="bidderName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Winning Bidder Name : " htmlFor="wBidderName"  >
                                    <Input allowClear placeholder="308 james palace...." id="wBidderName" />
                                </Item>
                            </Col>

                            <Col xs={12} sm={8} md={6} >
                                <Item label="Year Built : " htmlFor="yearBuilt"  >
                                    <Input allowClear placeholder="308 james palace...." id="yearBuilt" />
                                </Item>
                            </Col>

                        </Form>

                    </Col>
                </Row>

            </div>

        </ProtectedPage>
    )
}

export default search
