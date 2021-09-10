import { Row, Col, Form, Select, Input, DatePicker, Upload, Button, Divider } from 'antd'
import InputField from './utilsComp/InputField'
import styles from '../../styles/search.module.css'
import { UploadOutlined } from '@ant-design/icons';
import PriceHistory from './PriceHistory';
import NumberField from './utilsComp/NumberField';
import InputWithSuffix from './utilsComp/InputWithSuffix';
import TaxAssessed from './utilsComp/TaxAssessed';
import moment from 'moment'



const PropertyInfo = ({ propertyinfo, data }) => {
    const { Item } = Form
    const { Option } = Select
    const { TextArea } = Input

    const initialValue = {
        propertyAddress: data.propertyAddress,
        city: data.city,
        state: data.state,
        county: data.county,
        zip: data.zip,
        lotAcre: data.lotSqf,
        costPerSqf: data.costPerSqf,
        totalLiving: data.totalLivingSQF,
        mainFloor: data.mainFloor,
        secondFloor: data.secondFloor,
        thirdFloor: data.thirdFloor,
        yearBuilt: data.yearBuilt,
        bed: data.bed,
        bath: data.bath,
        fbath: data.fullBath,
        hbath: data.halfBath,
        tbath: data.oneThirdBath,
        basement: data.basement,
        fbasement: data.finishedBasement,
        fAttic: data.finishedAttic,
        garages: data.garages,
        garageType: data.garageType,
        garageSqf: data.garageSqf,
        enclosedPorch: data.enclosedPorch,
        bonusRoom: data.bonusRoom,
        family: data.family,
        kitchen: data.kitchen,
        firePlaces: data.fireplace,
        subdivision: data.subdivision,
        propertyDesc: data.PropertyDescription,
        legalDesc: data.legalDesc,
        extWall: data.extWall,
        roofing: data.roofing,
        ac: data.ac,
        heating: data.heating,
        pool: data.poolSpa,
        stories: data.stories,
        propertyType: data.propertyType,
        specificType: data.specificPropertyType,
        parcelId: data.parcelId,
        countyValue: data.countyValue,
        prcUrl: data.prcURL,
        countyAssUrl: data.countyAssessorURL,
        gisUrl: data.gisURL,
        treasurerUrl: data.treasurerURL,
        taxBillUrl: data.taxBillUrl,
        zillowUrl: data.zillowURL,
        zestimate: data.zestimate,
        redfinUrl: data.redfinUrl,
        redfinEst: data.redfinEst,
        realtorUrl: data.realtorURL,
        realtorEst: data.realtorEst,
        truliaUrl: data.truliaURL,
        truliaEst: data.truliaEst,
        harUrl: data.harUrl,
        harEst: data.harEst,
        bvUrl: data.beenVerifiedURL,
        elemSchool: data.schoolsAndNeighbors.elementarySchool.name,
        ranking: data.schoolsAndNeighbors.elementarySchool.ranking,
        distance: data.schoolsAndNeighbors.elementarySchool.distance,
        middleSchool: data.schoolsAndNeighbors.middleSchool.name,
        mranking: data.schoolsAndNeighbors.middleSchool.ranking,
        mDistance: data.schoolsAndNeighbors.middleSchool.distance,
        highSchool: data.schoolsAndNeighbors.highSchool.name,
        hranking: data.schoolsAndNeighbors.highSchool.ranking,
        hDistance: data.schoolsAndNeighbors.highSchool.distance
    }

    return (
        <Row gutter={20} wrap={true} justify="start" >
            <Col span={24}>
                <Form form={propertyinfo} layout="vertical" className={styles.searchForm} initialValues={initialValue}  >
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

                    <NumberField label="Lot Acres/Sqf" htmlFor="lotAcre" name="lotAcre" id="lotAcre" />

                    <NumberField label="Cost Per Sqf" htmlFor="costPerSqf" name="costPerSqf" id="costPerSqf" />

                    <NumberField label="Total Living Sqf" htmlFor="totalLiving" name="totalLiving" id="totalLiving" />


                    <NumberField label="Main Floor Sqf" htmlFor="mainFloor" name="mainFloor" id="mainFloor" />
                    <NumberField label="Second Floor Sqf" htmlFor="secondFloor" name="secondFloor" id="secondFloor" />
                    <NumberField label="Third Floor Sqf" htmlFor="thirdFloor" name="thirdFloor" id="thirdFloor" />
                    <NumberField label="Year Built" htmlFor="yearBuilt" name="yearBuilt" id="yearBuilt" />
                    <NumberField label="Bed" htmlFor="bed" name="bed" id="bed" />
                    <NumberField label="Bath" htmlFor="bath" name="bath" id="bath" />
                    <NumberField label="Full Bath" htmlFor="fbath" name="fbath" id="fbath" />
                    <NumberField label="1/2 Bath" htmlFor="hbath" name="hbath" id="hbath" />
                    <NumberField label="3/4 Bath" htmlFor="tbath" name="tbath" id="tbath" />
                    <NumberField label="Basement" htmlFor="basement" name="basement" id="basement" />
                    <NumberField label="Finished Basement" htmlFor="fbasement" name="fbasement" id="fbasement" />

                    <NumberField label="Finished Attic" htmlFor="fAttic" name="fAttic" id="fAttic" />

                    <NumberField label="Garages" htmlFor="garages" name="garages" id="garages" />

                    <InputField label="Garage Type" htmlFor="garageType" name="garageType" id="garageType" />

                    <NumberField label="Garage Sqf" htmlFor="garageSqf" name="garageSqf" id="garageSqf" />

                    <NumberField label="Enclosed Porch" htmlFor="enclosedPorch" name="enclosedPorch" id="enclosedPorch" />

                    <NumberField label="Bonus Room" htmlFor="bonusRoom" name="bonusRoom" id="bonusRoom" />
                    <NumberField label="# of Families" htmlFor="family" name="family" id="family" />
                    <NumberField label="# of Kitchens" htmlFor="kitchen" name="kitchen" id="kitchen" />

                    <InputField label="Fireplaces" htmlFor="firePlaces" name="firePlaces" id="firePlaces" />

                    <InputField label="Subdivision" htmlFor="subdivision" name="subdivision" id="subdivision" />



                    <Col xs={24} >
                        <Item label="Property Description :" htmlFor="propertyDesc" name="propertyDesc" >
                            <TextArea rows={4} id="propertyDesc" style={{  margin: "0px" }} />
                        </Item>
                    </Col>

                    <Col xs={24} >
                        <Item label="Legal Description :" htmlFor="legalDesc" name="legalDesc" >
                            <TextArea rows={4} id="legalDesc" style={{  margin: "0px" }} />
                        </Item>
                    </Col>

                    <InputField label="Ext Wall" htmlFor="extWall" name="extWall" id="extWall" />
                    <InputField label="Roofing" htmlFor="roofing" name="roofing" id="roofing" />
                    <InputField label="AC" htmlFor="ac" name="ac" id="ac" />
                    <InputField label="Heating" htmlFor="heating" name="heating" id="heating" />
                    <InputField label="Pool/SPA" htmlFor="pool" name="pool" id="pool" />
                    <InputField label="Stories" htmlFor="stories" name="stories" id="stories" />

                    <InputField label="Property Type" htmlFor="propertyType" name="propertyType" id="propertyType" />

                    <InputField label="Specific Property Type" htmlFor="specificType" name="specificType" id="specificType" />

                    <InputField label="Parcel Id" htmlFor="parcelId" name="parcelId" id="parcelId" />

                    <InputField label="County Value" htmlFor="countyValue" name="countyValue" id="countyValue" />

                    <InputWithSuffix label="PRC URL" htmlFor="prcUrl" name="prcUrl" id="prcUrl" />

                    <InputWithSuffix label="County Assessor URL" htmlFor="countyAssUrl" name="countyAssUrl" id="countyAssUrl" />

                    <InputWithSuffix label="GIS URL" htmlFor="gisUrl" name="gisUrl" id="gisUrl" />

                    <InputWithSuffix label="Treasurer URL" htmlFor="treasurerUrl" name="treasurerUrl" id="treasurerUrl" />

                    <InputWithSuffix label="Tax Bill URL" htmlFor="taxBillUrl" name="taxBillUrl" id="taxBillUrl" />

                    <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                        <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                            <Divider orientation="center">Property Info Files
                            </Divider>

                            <InputField label="File Name" htmlFor="pdFile" name="pdFile" id="pdFile" />

                            <Col xs={12} sm={8} md={4} >
                                <Item label="Date : " htmlFor="pdDate" name="pdDate"  >
                                    <DatePicker placeholder="Select Date" id="pdDate" style={{  width: "100%" }} />
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

                    <InputWithSuffix label="Zillow URL" htmlFor="zillowUrl" name="zillowUrl" id="zillowUrl" />
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


                    <InputWithSuffix label="Realtor URL" htmlFor="realtorUrl" name="realtorUrl" id="realtorUrl" />
                    <NumberField label="Realtor Est" htmlFor="realtorEst" name="realtorEst" id="realtorEst" />


                    <Col xs={24} md={8} lg={4} >

                        <Button
                            type="primary"
                            style={{ marginTop: 8, width: "100%" }}>
                            Realtor Search
                        </Button>
                    </Col>

                    <InputWithSuffix label="Trulia URL" htmlFor="truliaUrl" name="truliaUrl" id="truliaUrl" />
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

                    <InputWithSuffix label="Beenverified URL" htmlFor="bvUrl" name="bvUrl" id="bvUrl" />

                    {/* need to create priceHistory  */}
                    <Divider orientation="center">Price History
                    </Divider>

                    {/* loop here */}
                    {!data.priceHistory && <PriceHistory />}

                    {data.priceHistory && <>
                        {data.priceHistory.map((data, inx) => {
                            const date = data.date && data.date.split("T")[0]
                            const newDate = moment(date)
                            return <PriceHistory key={inx} index={inx} date={newDate} price={data.price} costPerSqf={data.costPerSqf} source={data.source} Description={data.Description} />
                        })}
                    </>
                    }


                    <Col xs={24} md={8} lg={4} style={{ flex: "1" }}>

                        <Button
                            type="primary"
                            style={{ marginTop: 20 }}>
                            Add More
                        </Button>
                    </Col>

                    <Divider orientation="center">Schools & Neighborhood
                    </Divider>

                    <InputField label="Elementary School" htmlFor="elemSchool" name="elemSchool" id="elemSchool" />
                    <InputField label="Ranking" htmlFor="ranking" name="ranking" id="ranking" />
                    <InputField label="Distance" htmlFor="distance" name="distance" id="distance" />
                    <InputField label="Middle School" htmlFor="middleSchool" name="middleSchool" id="middleSchool" />
                    <InputField label="Ranking" htmlFor="mranking" name="mranking" id="mranking" />
                    <InputField label="Distance" htmlFor="mDistance" name="mDistance" id="mDistance" />

                    <InputField label="High School" htmlFor="highSchool" name="highSchool" id="highSchool" />
                    <InputField label="Ranking" htmlFor="hranking" name="hranking" id="hranking" />
                    <InputField label="Distance" htmlFor="hDistance" name="hDistance" id="hDistance" />

                    <Divider orientation="center">Assessment & Taxes
                    </Divider>

                    {/* loop here */}
                    {!data.assesmentAndTaxes && !data.assesmentAndTaxes.length == 0 && <TaxAssessed />}

                    {data.assesmentAndTaxes && <>
                        {data.assesmentAndTaxes.map((data, index) => {
                            return <TaxAssessed key={index} index={index} propertyTaxOwed={data.propertyTaxOwed}
                                owedYear={data.owedYear}
                                taxAssessed={data.taxAssessed}
                                taxYear={data.taxYear} />
                        })}


                    </>
                    }


                    <Col xs={24} md={8} lg={4}>
                        <Button
                            type="primary"
                            style={{ width: "160px", borderRadius: "15px" }}>
                            Add More
                        </Button>
                    </Col>

                    <Col xs={4} style={{ position: "sticky", bottom: "20px" }}>
                        <Button
                            type="primary"
                            style={{ width: "160px", marginTop: "20px", borderRadius: "15px" }}>
                            Save Property Data
                        </Button>
                    </Col>

                </Form>

            </Col>


        </Row>
    )
}

export default PropertyInfo
