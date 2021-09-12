import { Button, Col, Form, Divider, Input, InputNumber } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import InputWithSuffix from "./InputWithSuffix"
import DateField from "./DateField"


const CompData = ({ name }) => {
    const { Group } = Input
    const { Item } = Form



    return (
        <>
            <Divider orientation="center">{name}</Divider>
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%" }}>

                <InputField label="Specific Supply & Demand" id="SSD" name="SSD" htmlFor="SSD" />
                <InputField label="General Supply & Demand" id="GSD" name="GSD" htmlFor="GSD" />
                <NumberField label="Average Days on Market" id="ADOM" name="ADOM" htmlFor="ADOM" />
                <NumberField label="Phase of Renovation" id="phaseOfRn" htmlFor="phaseOfRn" name="phaseOfRn" />


                <Col xs={12} sm={8} md={6}>
                    <Item label="Price/sq.ft.on Sale Comps" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <Group>
                            <InputNumber id="priceSqfOnSaleComp1" style={{ margin: "0px", width: "40%" }} />
                            To
                            <InputNumber id="priceSqfOnSaleComp2" style={{ margin: "0px", width: "40%" }} />
                        </Group>
                    </Item>
                </Col>

                <InputWithSuffix label="Sale Comps & SSD Maps" name="saleCompGsdMap" id="saleCompGsdMap" htmlFor="saleCompGsdMap" />
                <InputWithSuffix label="GSD Sale Comps Maps" name="saleCompSSDMap" id="saleCompSSDMap" htmlFor="saleCompSSDMap" />
                <InputField label="Rent GSD" id="rentGSD" name="rentGSD" htmlFor="rentGSD" />

                <Col xs={12} sm={8} md={6}>
                    <Item label="Price/sq.ft.on Sold Comps" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <Group>
                            <InputNumber id="priceSqfOnSoldComp1" style={{ margin: "0px", width: "40%" }} />
                            To
                            <InputNumber id="priceSqfOnSoldComp2" style={{ margin: "0px", width: "40%" }} />
                        </Group>
                    </Item>
                </Col>
                <InputWithSuffix label="Sold Comps & SSD Maps" name="soldCompGsdMap" id="soldCompGsdMap" htmlFor="soldCompGsdMap" />
                <InputWithSuffix label="GSD sold Comps Maps" name="soldCompSSDMap" id="soldCompSSDMap" htmlFor="soldCompSSDMap" />
                <InputWithSuffix label="Rental Comps & Map" name="RentalCompsMap" id="RentalCompsMap" htmlFor="RentalCompsMap" />

                <NumberField label="P1 Value" name="p1Value" id="p1Value" htmlFor="p1Value" />
                <NumberField label="P2 Value" name="p2Value" id="p2Value" htmlFor="p2Value" />
                <NumberField label="P3 Value" name="p3Value" id="p3Value" htmlFor="p3Value" />
                <NumberField label="Rental Rate" name="rentalRate" id="rentalRate" htmlFor="rentalRate" />
                <InputWithSuffix label="Comp URL 1" name="compUrlOne" id="compUrlOne" htmlFor="compUrlOne" />
                <InputWithSuffix label="Comp URL 2" name="compUrlTwo" id="compUrlTwo" htmlFor="compUrlTwo" />
                <InputWithSuffix label="Comp URL 3" name="compUrlThree" id="compUrlThree" htmlFor="compUrlThree" />
                <InputWithSuffix label="Comp URL 4" name="compUrlFour" id="compUrlFour" htmlFor="compUrlFour" />

                <NumberField label="Recommended CMA/ARV" name="recomCma" id="recomCma" htmlFor="recomCma" />
                <NumberField label="Wholetail Value" name="wholetailVal" id="wholetailVal" htmlFor="wholetailVal" />
                <InputField label="Comp By" name="compBy" id="compBy" htmlFor="compBy" />
                <DateField label="Comp By Date" name="compByDate" id="compByDate" htmlFor="compByDate" />


                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <Button>Add Notes</Button>
                </Col>

            </div>



        </>
    )
}

export default CompData
