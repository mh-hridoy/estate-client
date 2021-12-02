import { Button, Col, Form, Divider, Input, InputNumber } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import InputWithSuffix from "./InputWithSuffix"
import DateField from "./DateField"


const SecondCompData = ({ name }) => {
    const { Group } = Input
    const { Item } = Form



    return (
        <>
            <Divider orientation="center">{name}</Divider>
            <div className="sheaderPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%" }}>

                <InputField label="Specific Supply & Demand" id="sSSD" name="sSSD" htmlFor="sSSD" />
                <InputField label="General Supply & Demand" id="sGSD" name="sGSD" htmlFor="sGSD" />
                <NumberField label="Average Days on Market" id="sADOM" name="sADOM" htmlFor="sADOM" />
                <NumberField label="Phase of Renovation" id="sphaseOfRn" htmlFor="sphaseOfRn" name="sphaseOfRn" />


                <Col xs={12} sm={8} md={6}>
                    <Item label="Price/sq.ft.on Sale Comps" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <Group>
                            <InputNumber id="spriceSqfOnSaleComp1" style={{ margin: "0px", width: "40%" }} />
                            To
                            <InputNumber id="spriceSqfOnSaleComp2" style={{ margin: "0px", width: "40%" }} />
                        </Group>
                    </Item>
                </Col>

                <InputWithSuffix label="Sale Comps & SSD Maps" name="ssaleCompGsdMap" id="ssaleCompGsdMap" htmlFor="ssaleCompGsdMap" />
                <InputWithSuffix label="GSD Sale Comps Maps" name="ssaleCompSSDMap" id="ssaleCompSSDMap" htmlFor="ssaleCompSSDMap" />
                <InputField label="Rent GSD" id="srentGSD" name="srentGSD" htmlFor="srentGSD" />

                <Col xs={12} sm={8} md={6}>
                    <Item label="Price/sq.ft.on Sold Comps" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <Group>
                            <InputNumber id="spriceSqfOnSoldComp1" style={{ margin: "0px", width: "40%" }} />
                            To
                            <InputNumber id="spriceSqfOnSoldComp2" style={{ margin: "0px", width: "40%" }} />
                        </Group>
                    </Item>
                </Col>
                <InputWithSuffix label="Sold Comps & SSD Maps" name="ssoldCompGsdMap" id="ssoldCompGsdMap" htmlFor="ssoldCompGsdMap" />
                <InputWithSuffix label="GSD sold Comps Maps" name="ssoldCompSSDMap" id="ssoldCompSSDMap" htmlFor="ssoldCompSSDMap" />
                <InputWithSuffix label="Rental Comps & Map" name="sRentalCompsMap" id="sRentalCompsMap" htmlFor="sRentalCompsMap" />

                <NumberField label="P1 Value" name="sp1Value" id="sp1Value" htmlFor="sp1Value" />
                <NumberField label="P2 Value" name="sp2Value" id="sp2Value" htmlFor="sp2Value" />
                <NumberField label="P3 Value" name="sp3Value" id="sp3Value" htmlFor="sp3Value" />
                <NumberField label="Rental Rate" name="srentalRate" id="srentalRate" htmlFor="srentalRate" />
                <InputWithSuffix label="Comp URL 1" name="scompUrlOne" id="scompUrlOne" htmlFor="scompUrlOne" />
                <InputWithSuffix label="Comp URL 2" name="scompUrlTwo" id="scompUrlTwo" htmlFor="scompUrlTwo" />
                <InputWithSuffix label="Comp URL 3" name="scompUrlThree" id="scompUrlThree" htmlFor="scompUrlThree" />
                <InputWithSuffix label="Comp URL 4" name="scompUrlFour" id="scompUrlFour" htmlFor="scompUrlFour" />

                <NumberField label="Recommended CMA/ARV" name="srecomCma" id="srecomCma" htmlFor="srecomCma" />
                <NumberField label="Wholetail Value" name="swholetailVal" id="swholetailVal" htmlFor="swholetailVal" />
                <InputField label="Comp By" name="scompBy" id="scompBy" htmlFor="scompBy" />
                <DateField label="Comp By Date" name="scompByDate" id="scompByDate" htmlFor="scompByDate" />


                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <Button>Add Notes</Button>
                </Col>

            </div>



        </>
    )
}

export default SecondCompData
