import React from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { Row, Col, Button, Form, Input, Select, DatePicker, Space, Tabs } from 'antd'
import styles from '../../../styles/search.module.css'

const search = () => {
    const { Item } = Form
    const { Option } = Select

    const [form] = Form.useForm();
    const { TabPane } = Tabs;

    const basicSearch = (values) => {

        //setup an array for single URI
        const arrayOfURI = []

        for (const [key, value] of Object.entries(values)) {

            //first delete all the undefined values.
            if (values[key] !== undefined) {
                delete values[key]
                // console.log(`${key}: ${value}`);
                arrayOfURI.push(`${key.trim()}=${value.split(' ').join("+")}`)
            }
        }

        const URI = arrayOfURI.join("&")

        console.log(URI)


        //propertyAddress=308+james+palace

    };

    const advanceSearch = (values) => {
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

                        <Tabs type="card" size="large">
                            <TabPane tab="Basic Search" key="1">

                                <Form form={form} layout="vertical" name="control-hooks" className={styles.searchForm} onFinish={basicSearch} >
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
                                        <Item label="Zip Code : " htmlFor="zipCode" name="zipCode" >
                                            <Input allowClear placeholder="Zip Code" id="zipCode" style={{ border: "1px solid black" }} />
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
                                        <Item label="Owner Name : " htmlFor="ownerName" name="ownerName"  >
                                            <Input allowClear placeholder="Owner Name" id="ownerName" style={{ border: "1px solid black" }} />
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
                                        <Item label="Winning Bidder Name : " htmlFor="wBidderName" name="wBidderName"  >
                                            <Input allowClear placeholder="Winning Bidder Name" id="wBidderName" style={{ border: "1px solid black" }} />
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
                                                        <Item label="Start Date : " htmlFor="sStartDate" name="sStartDate"  >
                                                            <DatePicker allowClear placeholder="Select Start Date" id="sStartDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                                        </Item>
                                                    </Col>

                                                    <Col xs={24} md={12} style={{ height: "70px" }} >
                                                        <Item label="End Date : " htmlFor="sEndDate" name="sEndDate"  >
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
                                                        <Item label="Start Date : " htmlFor="rStartDate" name="rStartDate" >
                                                            <DatePicker allowClear placeholder="Select Start Date" id="rStartDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                                        </Item>
                                                    </Col>

                                                    <Col xs={24} md={12} style={{ height: "70px" }} >
                                                        <Item label="End Date : " htmlFor="rEndDate" name="rEndDate"  >
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
                                                        <Item label="Start : " htmlFor="aStart" name="aStart"  >
                                                            <Input allowClear placeholder="Acre" id="aStart" style={{ border: "1px solid black" }} />
                                                        </Item>
                                                    </Col>

                                                    <Col xs={24} md={12} style={{ height: "70px" }} >
                                                        <Item label="End : " htmlFor="aEnd" name="aEnd" >
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
                                                        <Item label="Start : " htmlFor="lStart" name="lStart" >
                                                            <Input allowClear placeholder="Sqf" id="lStart" style={{ border: "1px solid black" }} />
                                                        </Item>
                                                    </Col>

                                                    <Col xs={24} md={12} style={{ height: "70px" }} >
                                                        <Item label="End : " htmlFor="lEnd" name="lEnd" >
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
                                                <Item label="1st Sort : " htmlFor="fSort" name="fSort" >
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

                                                <Item label="Order : " htmlFor="fOrder" name="fOrder" >
                                                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="fOrder" id="fOrder" >
                                                        <Option value="ASC">ASC</Option>
                                                        <Option value="DESC">DESC</Option>
                                                    </Select>
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                                                <Item label="2nd Sort : " htmlFor="sSort" name="sSort" >
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

                                                    <Button htmlType="submit" type="primary" style={{ width: "100%" }}>Submit</Button>
                                                </Col>
                                                <Col xs={12} sm={8} md={6} >
                                                    <Item label="Display Row" htmlFor="displayRow" name="displayRow" >
                                                        <Select style={{ border: "1px solid black", width: "100%" }} placeholder="10" name="displayRow" id="displayRow" >
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

                            </TabPane>

                            <TabPane tab="Advance Search" key="2">
                                <Form form={form} layout="vertical" name="control-hooks" className={styles.searchForm} onFinish={advanceSearch} >
                                    <h3 style={{ textAlign: "center", width: "100%" }}> Owner Info : </h3>
                                    <hr style={{ width: "100%", marginBottom: "10px" }}
                                    />

                                    <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                        <Item label="Owner Name : " htmlFor="aownerName" name="aownerName"  >
                                            <Input allowClear placeholder="Owner Name" id="aownerName" style={{ border: "1px solid black" }} />
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
                                        <Item label="Borrower Name : " htmlFor="aborrowerName" name="aborrowerName" >
                                            <Input allowClear placeholder="Borrower Name" id="aborrowerName" style={{ border: "1px solid black" }} />
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
                                                <Item label="Parcel : " htmlFor="parcel" name="parcel" >
                                                    <Input allowClear placeholder="Parcel Number" id="parcel" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                                <Item label="Property Address : " htmlFor="apropertyAddress" name="apropertyAddress" >
                                                    <Input allowClear placeholder="308 james palace...." id="apropertyAddress" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                                                <Item label="City : " htmlFor="acity" name="acity"  >
                                                    <Input allowClear placeholder="City Name" id="acity" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                                <Item label="State : " htmlFor="astate" name="astate" >
                                                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select State" name="astate" id="astate" >
                                                        <Option value="North Carolina">North Carolina</Option>
                                                        <Option value="South Carolina">South Carolina</Option>
                                                    </Select>
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                                <Item label="County : " htmlFor="acounty" name="acounty" >
                                                    <Input allowClear placeholder="County Name" id="acounty" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }}>
                                                <Item label="Zip Code : " htmlFor="azipCode" name="azipCode" >
                                                    <Input allowClear placeholder="Zip Code" id="azipCode" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>


                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                                <Item label="Case Number : " htmlFor="acaseNumber" name="acaseNumber"  >
                                                    <Input allowClear placeholder="Case Number" id="acaseNumber" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>



                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                                <Item label="Property Type : " htmlFor="apropertyType" name="apropertyType" >
                                                    <Input allowClear placeholder="Property Type" id="apropertyType" style={{ border: "1px solid black" }} />
                                                </Item>
                                            </Col>



                                            <Col xs={12} sm={8} md={6} lg={4} style={{ height: "70px" }} >
                                                <Item label="Sale Type : " htmlFor="asaleType" name="asaleType" >
                                                    <Input allowClear placeholder="Sale Type" id="asaleType" style={{ border: "1px solid black" }} />
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
                                                <Item label="1st Sort : " htmlFor="afSort" name="afSort" >
                                                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="afSort" id="afSort" >
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

                                                <Item label="Order : " htmlFor="afOrder" name="afOrder" >
                                                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="afOrder" id="afOrder" >
                                                        <Option value="ASC">ASC</Option>
                                                        <Option value="DESC">DESC</Option>
                                                    </Select>
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} style={{ height: "70px" }} >

                                                <Item label="2nd Sort : " htmlFor="asSort" name="asSort" >
                                                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="asSort" id="asSort" >
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

                                                <Item label="Order : " htmlFor="asOrder" name="asOrder" >
                                                    <Select style={{ width: "100%", border: "1px solid black" }} placeholder="Select Sort" name="asOrder" id="asOrder" >
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
                                                    <Item label="Display Row" htmlFor="adisplayRow" name="adisplayRow" >
                                                        <Select style={{ border: "1px solid black", width: "100%" }} placeholder="10" name="adisplayRow" id="adisplayRow" >
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
                            </TabPane>

                        </Tabs>

                    </Col>
                </Row>

            </div>

        </ProtectedPage >
    )
}

export default search
