import { Button, Col, Form, Divider, Input, InputNumber } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import InputWithSuffix from "./InputWithSuffix"
import DateField from "./DateField"


const ThirdCompData = ({ name }) => {
    const { Group } = Input
    const { Item } = Form



    return (
        <>
            <Divider orientation="center">{name}</Divider>
            <div className="theaderPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%" }}>

                <InputField label="Specific Supply & Demand" id="tSSD" name="tSSD" htmlFor="tSSD" />
                <InputField label="General Supply & Demand" id="tGSD" name="tGSD" htmlFor="tGSD" />
                <NumberField label="Average Days on Market" id="tADOM" name="tADOM" htmlFor="tADOM" />
                <NumberField label="Phase of Renovation" id="tphaseOfRn" htmlFor="tphaseOfRn" name="tphaseOfRn" />


                <Col xs={12} sm={8} md={6}>
                    <Item label="Price/sq.ft.on Sale Comps" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <Group>
                            <InputNumber id="tpriceSqfOnSaleComp1" style={{ margin: "0px", width: "40%" }} />
                            To
                            <InputNumber id="tpriceSqfOnSaleComp2" style={{ margin: "0px", width: "40%" }} />
                        </Group>
                    </Item>
                </Col>

                <InputWithSuffix label="Sale Comps & SSD Maps" name="tsaleCompGsdMap" id="tsaleCompGsdMap" htmlFor="tsaleCompGsdMap" />
                <InputWithSuffix label="GSD Sale Comps Maps" name="tsaleCompSSDMap" id="tsaleCompSSDMap" htmlFor="tsaleCompSSDMap" />
                <InputField label="Rent GSD" id="trentGSD" name="trentGSD" htmlFor="trentGSD" />

                <Col xs={12} sm={8} md={6}>
                    <Item label="Price/sq.ft.on Sold Comps" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <Group>
                            <InputNumber id="tpriceSqfOnSoldComp1" style={{ margin: "0px", width: "40%" }} />
                            To
                            <InputNumber id="tpriceSqfOnSoldComp2" style={{ margin: "0px", width: "40%" }} />
                        </Group>
                    </Item>
                </Col>
                <InputWithSuffix label="Sold Comps & SSD Maps" name="tsoldCompGsdMap" id="tsoldCompGsdMap" htmlFor="tsoldCompGsdMap" />
                <InputWithSuffix label="GSD sold Comps Maps" name="tsoldCompSSDMap" id="tsoldCompSSDMap" htmlFor="tsoldCompSSDMap" />
                <InputWithSuffix label="Rental Comps & Map" name="tRentalCompsMap" id="tRentalCompsMap" htmlFor="tRentalCompsMap" />

                <NumberField label="P1 Value" name="tp1Value" id="tp1Value" htmlFor="tp1Value" />
                <NumberField label="P2 Value" name="tp2Value" id="tp2Value" htmlFor="tp2Value" />
                <NumberField label="P3 Value" name="tp3Value" id="tp3Value" htmlFor="tp3Value" />
                <NumberField label="Rental Rate" name="trentalRate" id="trentalRate" htmlFor="trentalRate" />
                <InputWithSuffix label="Comp URL 1" name="tcompUrlOne" id="tcompUrlOne" htmlFor="tcompUrlOne" />
                <InputWithSuffix label="Comp URL 2" name="tcompUrlTwo" id="tcompUrlTwo" htmlFor="tcompUrlTwo" />
                <InputWithSuffix label="Comp URL 3" name="tcompUrlThree" id="tcompUrlThree" htmlFor="tcompUrlThree" />
                <InputWithSuffix label="Comp URL 4" name="tcompUrlFour" id="tcompUrlFour" htmlFor="tcompUrlFour" />

                <NumberField label="Recommended CMA/ARV" name="trecomCma" id="trecomCma" htmlFor="trecomCma" />
                <NumberField label="Wholetail Value" name="twholetailVal" id="twholetailVal" htmlFor="twholetailVal" />
                <InputField label="Comp By" name="tcompBy" id="tcompBy" htmlFor="tcompBy" />
                <DateField label="Comp By Date" name="tcompByDate" id="tcompByDate" htmlFor="tcompByDate" />


                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <Button>Add Notes</Button>
                </Col>

            </div>



        </>
    )
}

export default ThirdCompData
