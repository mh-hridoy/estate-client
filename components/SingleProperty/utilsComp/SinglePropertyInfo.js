import { Row, Col, Form, Select, Input, Button, Divider, DatePicker, Upload, message } from 'antd'
import InputField from './InputField'
import styles from '../../../styles/search.module.css'
import NumberField from './NumberField';
import InputWithSuffix from './InputWithSuffix';
import propertyInfoVal from '../../../utils/propertyInfoVal'
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import useHttp from '../../../utils/useHttp'

const SinglePropertyInfo = ({ propertyinfo, data }) => {
    const { Item } = Form
    const { Option } = Select
    const { TextArea } = Input
    const [infoVal, setInfoVal] = useState(null)
    const [sendRequest, setSendRequest] = useState(false)
    const propertyId = useSelector((state) => state.property.propertyId)

    const initialVal = propertyInfoVal(data)

    const propertyVal = (values) => {
        setInfoVal(values)
        setSendRequest((prev) => ({ sendRequest: !prev }))
    }

    const { isLoading } = useHttp(sendRequest, `http://localhost:5000/api/update-property/${propertyId}`, "put", infoVal)



    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={propertyinfo} layout="vertical" className={styles.searchForm}
                        initialValues={initialVal} onFinish={propertyVal}
                    >
                        <InputField label="Property Address : " htmlFor="propertyAddress" name="propertyAddress" id="propertyAddress" />

                        <InputField label="City" htmlFor="city" name="city" id="city" />

                        <Col xs={12} sm={8} md={6} lg={4}  >
                            <Item label="State : " htmlFor="state" name="state" >
                                <Select style={{ width: "100%" }} placeholder="Select State" name="state" id="state" >
                                    <Option value="North Carolina">North Carolina</Option>
                                    <Option value="South Carolina">South Carolina</Option>
                                </Select>
                            </Item>
                        </Col>


                        <InputField label="County" htmlFor="county" name="county" id="county" />

                        <NumberField label="Zip Code" htmlFor="zip" name="zip" id="zip" />

                        <NumberField label="Lot Acres/Sqf" htmlFor="lotAcre" name="lotSqf" id="lotAcre" />

                        <NumberField label="Cost Per Sqf" htmlFor="costPerSqf" name="costPerSqf" id="costPerSqf" />

                        <NumberField label="Total Living Sqf" htmlFor="totalLiving" name="totalLivingSQF" id="totalLiving" />


                        <NumberField label="Main Floor Sqf" htmlFor="mainFloor" name="mainFloor" id="mainFloor" />
                        <NumberField label="Second Floor Sqf" htmlFor="secondFloor" name="secondFloor" id="secondFloor" />
                        <NumberField label="Third Floor Sqf" htmlFor="thirdFloor" name="thirdFloor" id="thirdFloor" />
                        <NumberField label="Year Built" htmlFor="yearBuilt" name="yearBuilt" id="yearBuilt" />
                        <NumberField label="Bed" htmlFor="bed" name="bed" id="bed" />
                        <NumberField label="Bath" htmlFor="bath" name="bath" id="bath" />
                        <NumberField label="Full Bath" htmlFor="fbath" name="fullBath" id="fbath" />
                        <NumberField label="1/2 Bath" htmlFor="hbath" name="halfBath" id="hbath" />
                        <NumberField label="3/4 Bath" htmlFor="tbath" name="oneThirdBath" id="tbath" />
                        <NumberField label="Basement" htmlFor="basement" name="basement" id="basement" />
                        <NumberField label="Finished Basement" htmlFor="fbasement" name="finishedBasement" id="fbasement" />

                        <NumberField label="Finished Attic" htmlFor="fAttic" name="finishedAttic" id="fAttic" />

                        <NumberField label="Garages" htmlFor="garages" name="garages" id="garages" />

                        <InputField label="Garage Type" htmlFor="garageType" name="garageType" id="garageType" />

                        <NumberField label="Garage Sqf" htmlFor="garageSqf" name="garageSqf" id="garageSqf" />

                        <NumberField label="Enclosed Porch" htmlFor="enclosedPorch" name="enclosedPorch" id="enclosedPorch" />

                        <NumberField label="Bonus Room" htmlFor="bonusRoom" name="bonusRoom" id="bonusRoom" />
                        <NumberField label="# of Families" htmlFor="family" name="family" id="family" />
                        <NumberField label="# of Kitchens" htmlFor="kitchen" name="kitchen" id="kitchen" />

                        <InputField label="Fireplaces" htmlFor="firePlaces" name="fireplace" id="firePlaces" />

                        <InputField label="Subdivision" htmlFor="subdivision" name="subdivision" id="subdivision" />



                        <Col xs={24} >
                            <Item label="Property Description :" name="PropertyDescription" >
                                <TextArea rows={4} style={{ margin: "0px" }} />
                            </Item>
                        </Col>

                        <Col xs={24} >
                            <Item label="Legal Description :" name="legalDesc" >
                                <TextArea rows={4} style={{ margin: "0px" }} />
                            </Item>
                        </Col>

                        <InputField label="Ext Wall" htmlFor="extWall" name="extWall" id="extWall" />
                        <InputField label="Roofing" htmlFor="roofing" name="roofing" id="roofing" />
                        <InputField label="AC" htmlFor="ac" name="ac" id="ac" />
                        <InputField label="Heating" htmlFor="heating" name="heating" id="heating" />
                        <InputField label="Pool/SPA" htmlFor="pool" name="poolSpa" id="pool" />
                        <InputField label="Stories" htmlFor="stories" name="stories" id="stories" />

                        <InputField label="Property Type" htmlFor="propertyType" name="propertyType" id="propertyType" />

                        <InputField label="Specific Property Type" htmlFor="specificType" name="specificPropertyType" id="specificType" />

                        <InputField label="Parcel Id" htmlFor="parcelId" name="parcelId" id="parcelId" />

                        <InputField label="County Value" htmlFor="countyValue" name="countyValue" id="countyValue" />

                        <InputWithSuffix label="PRC URL" htmlFor="prcUrl" name="prcURL" id="prcUrl" />

                        <InputWithSuffix label="County Assessor URL" htmlFor="countyAssUrl" name="countyAssessorURL" id="countyAssUrl" />

                        <InputWithSuffix label="GIS URL" htmlFor="gisUrl" name="gisURL" id="gisUrl" />

                        <InputWithSuffix label="Treasurer URL" htmlFor="treasurerUrl" name="treasurerURL" id="treasurerUrl" />

                        <InputWithSuffix label="Tax Bill URL" htmlFor="taxBillUrl" name="taxBillUrl" id="taxBillUrl" />



                        <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                            <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                                <Divider orientation="center">Property Info Files
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


                        <Divider orientation="center">Local Real Estate Details
                        </Divider>

                        <InputWithSuffix label="Zillow URL" htmlFor="zillowUrl" name="zillowURL" id="zillowUrl" />
                        <NumberField label="Zestimate" htmlFor="zestimate" name="zestimate" id="zestimate" />


                        <Col xs={24} md={8} lg={4} >

                            <Button
                                type="primary"
                                style={{ marginTop: 8, width: "100%" }}>
                                Zillow Search
                            </Button>
                        </Col>

                        <InputWithSuffix label="Redfin URL" htmlFor="redfinUrl" name="redfinUrl" id="redfinUrl" />
                        <NumberField label="Redfin Est" htmlFor="redfinEst" name="redfinEst" id="redfinEst" />


                        <Col xs={24} md={8} lg={4} >

                            <Button
                                type="primary"
                                style={{ marginTop: 8, width: "100%" }}>
                                Redfin Search
                            </Button>
                        </Col>


                        <InputWithSuffix label="Realtor URL" htmlFor="realtorUrl" name="realtorURL" id="realtorUrl" />
                        <NumberField label="Realtor Est" htmlFor="realtorEst" name="realtorEst" id="realtorEst" />


                        <Col xs={24} md={8} lg={4} >

                            <Button
                                type="primary"
                                style={{ marginTop: 8, width: "100%" }}>
                                Realtor Search
                            </Button>
                        </Col>

                        <InputWithSuffix label="Trulia URL" htmlFor="truliaUrl" name="truliaURL" id="truliaUrl" />
                        <NumberField label="Trulia Est" htmlFor="truliaEst" name="truliaEst" id="truliaEst" />


                        <Col xs={24} md={8} lg={4} >

                            <Button
                                type="primary"
                                style={{ marginTop: 8, width: "100%" }}>
                                Trulia Search
                            </Button>
                        </Col>

                        <InputWithSuffix label="Har URL" htmlFor="harUrl" name="harUrl" id="harUrl" />
                        <NumberField label="Har Est" htmlFor="harEst" name="harEst" id="harEst" />


                        <Col xs={24} md={8} lg={4} >

                            <Button
                                type="primary"
                                style={{ marginTop: 8, width: "100%" }}>
                                Har Search
                            </Button>
                        </Col>

                        <InputWithSuffix label="Beenverified URL" htmlFor="bvUrl" name="beenVerifiedURL" id="bvUrl" />


                        <Divider orientation="center">Schools & Neighborhood
                        </Divider>

                        <InputField label="Elementary School" htmlFor="elemSchool" name="ename" id="elemSchool" />
                        <InputField label="Ranking" htmlFor="ranking" name="eranking" id="ranking" />
                        <InputField label="Distance" htmlFor="distance" name="edistance" id="distance" />
                        <InputField label="Middle School" htmlFor="middleSchool" name="mname" id="mname" />
                        <InputField label="Ranking" htmlFor="mranking" name="mranking" id="mranking" />
                        <InputField label="Distance" htmlFor="mDistance" name="mdistance" id="mDistance" />

                        <InputField label="High School" htmlFor="highSchool" name="hname" id="highSchool" />
                        <InputField label="Ranking" htmlFor="hranking" name="hranking" id="hranking" />
                        <InputField label="Distance" htmlFor="hDistance" name="hdistance" id="hDistance" />


                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                            <Button
                                loading={isLoading}
                                type="primary"
                                htmlType="submit"
                                style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                                Save Property Data
                            </Button>
                        </Col>


                    </Form>


                </Col>
            </Row>


        </>
    )
}

export default SinglePropertyInfo;
