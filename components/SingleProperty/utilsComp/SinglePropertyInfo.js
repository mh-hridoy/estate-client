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
import Resizer from "react-image-file-resizer";
import axios from 'axios';
import AdditionalPropertyInfo from './AdditionalPropertyInfo';




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



                        <AdditionalPropertyInfo files={data.infoTabFile} />

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
