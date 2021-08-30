import React, { useState } from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { Row, Col, Button, Form, Input, Select, DatePicker, Tabs } from 'antd'
import styles from '../../../styles/search.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Results from '../../../components/Results'

const search = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState(null)
    const [limit, setLimit] = useState(10)
    const { Item } = Form
    const { Option } = Select
    const token = useSelector((state) => state.user.token)



    const [form] = Form.useForm();
    const { TabPane } = Tabs;


    const basicSearch = async (values) => {
        const arrayOfURI = []
        const allSort = []

        setLimit(values.limit)



        const { startDate, endDate, fSort, fOrder, sSort, sOrder } = { ...values }

        for (const [key, value] of Object.entries(values)) {

            // undefined the values before the conditional loop. otherwise it wont work. 
            values.fSort = undefined
            values.sSort = undefined
            values.fOrder = undefined
            values.sOrder = undefined
            values.startDate = undefined
            values.endDate = undefined
            if (values[key] !== undefined) {
                delete values[key]
                const iteratedData = `${key.trim()}=${value.split(' ').join("+")}`
                arrayOfURI.push(iteratedData)
            }
        }
        arrayOfURI.push(`page=1`)

        //sort and push to array
        const fSortBy = fSort && `${fOrder == "ASC" ? "" : "-"}${fSort ? fSort : ""}`
        const sSortBy = sSort && `${sOrder == "ASC" ? "" : "-"}${sSort ? sSort : ""}`
        allSort.push(fSortBy, sSortBy)
        const sortBy = allSort.join(",")
        const correctedSortBy = sortBy && `sort=${sortBy ? sortBy : ""}`
        arrayOfURI.push(correctedSortBy)

        const newSatartDate = startDate ? new Date(startDate._d).toISOString().split('T')[0] : ""
        const newEndDate = endDate ? new Date(endDate._d).toISOString().split('T')[0] : ""
        arrayOfURI.unshift(`endDate=${newEndDate && newEndDate}`)
        arrayOfURI.unshift(`startDate=${newSatartDate && newSatartDate}`)


        const URI = arrayOfURI.join("&")
        const URL = `http://localhost:5000/api/properties?${URI && URI}`

        const requestableURL = URL.replace(/,\s*$/, "");


        try {
            setIsLoading(true)
            const { data } = await axios.get(requestableURL, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }, withCredentials: true
            })
            setIsLoading(false)
            setResults(data)
            // console.log(data)


        } catch (err) {
            setIsLoading(false)
            const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
            toast.error(errorMsg)
        }
    };


    const advanceSearch = async (values) => {
        const arrayOfURI = []
        const allSort = []

        const { fSort, fOrder, sSort, sOrder } = { ...values }

        for (const [key, value] of Object.entries(values)) {

            // it worked... 
            values.fSort = undefined
            values.sSort = undefined
            values.fOrder = undefined
            values.sOrder = undefined
            if (values[key] !== undefined) {
                delete values[key]
                const iteratedData = `${key.trim()}=${value.split(' ').join("+")}`
                arrayOfURI.push(iteratedData)
            }
        }
        arrayOfURI.push(`page=1`)

        //sort and push to array
        const fSortBy = fSort && `${fOrder == "ASC" ? "" : "-"}${fSort ? fSort : ""}`
        const sSortBy = sSort && `${sOrder == "ASC" ? "" : "-"}${sSort ? sSort : ""}`
        allSort.push(fSortBy, sSortBy)
        const sortBy = allSort.join(",")
        const correctedSortBy = sortBy && `sort=${sortBy ? sortBy : ""}`
        arrayOfURI.push(correctedSortBy)

        const URI = arrayOfURI.join("&")
        const URL = `http://localhost:5000/api/properties?${URI && URI}`

        const requestableURL = URL.replace(/,\s*$/, "");

        try {
            setIsLoading(true)
            const { data } = await axios.get(requestableURL, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }, withCredentials: true
            })
            setIsLoading(false)

            console.log(data)

        } catch (err) {
            setIsLoading(false)
            const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
            toast.error(errorMsg)
        }

    };


    const onReset = () => {
        form.resetFields();
    };

    return (
        <ProtectedPage>

            <h1 style={{ textAlign: "center", textTransform: "capitalize", fontWeight: "bold" }}>Search your desire properties :</h1>

            <div className={styles.searchUi} >
                <Row gutter={15} wrap={true} justify="center">
                    <Col span={24} >

                        <Tabs type="card" size="large" animated>
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
                                                            <DatePicker allowClear placeholder="Select Start Date" id="startDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
                                                        </Item>
                                                    </Col>

                                                    <Col xs={24} md={12} style={{ height: "70px" }} >
                                                        <Item label="End Date : " htmlFor="endDate" name="endDate"  >
                                                            <DatePicker allowClear placeholder="Select End Date" id="endDate" style={{ width: '100%' }} style={{ border: "1px solid black" }} />
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

                                                    <Button htmlType="submit" loading={isLoading} disabled = {false} type="primary" style={{ width: "100%" }}>Submit</Button>
                                                </Col>
                                                <Col xs={12} sm={8} md={6} >
                                                    <Item label="Display Row" htmlFor="limit" name="limit" initialValue="10" >
                                                        <Select style={{ border: "1px solid black", width: "100%" }} name="limit" id="limit" >
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

                                                    <Button loading={isLoading} disabled={false} htmlType="submit" type="primary" style={{ width: "100%" }}>Submit</Button>
                                                </Col>
                                                <Col xs={12} sm={8} md={6} >
                                                    <Item label="Display Row" htmlFor="limit" name="limit" >
                                                        <Select style={{ border: "1px solid black", width: "100%" }} name="limit" id="limit" >
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

            {results && results.totalCount !== 0 &&
                <div className="result">
                <Results properties={results.allProperty} totalSearchedProperty={results.totalSearchedProperty} limit={limit} />

                </div>
            }

            {results && results.totalCount == 0 &&
                <div className="zeroResult" style={{ textAlign: "center" }} >
                    <h3>No Result Found</h3>
                </div>
            }



        </ProtectedPage >
    )
}

export default search
