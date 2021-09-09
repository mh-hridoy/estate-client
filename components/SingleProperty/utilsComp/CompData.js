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
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                <InputField label="Specific Supply & Demand" id="SSD" />
                <InputField label="General Supply & Demand" id="GSD" />
                <NumberField label="Average Days on Market" id="ADOM" />
                <NumberField label="Phase of Renovation" id="phaseOfRn" />
                <NumberField label="Phase of Renovation" id="phaseOfRn" />

                <Col xs={12} sm={8} md={6}>
                    <Item label="Price/sq.ft.on Sale Comps" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >
                        <Group>
                            <InputNumber id="priceSqfOnSaleComp1" style={{ border: "1px solid black", margin: "0px", width: "40%" }} />
                            To
                            <InputNumber id="priceSqfOnSaleComp2" style={{ border: "1px solid black", margin: "0px", width: "40%" }} />
                        </Group>
                    </Item>
                </Col>

                <InputWithSuffix label="Sold Comps & SSD Maps" id="soldCompGsdMap" />
                <InputWithSuffix label="GSD Sold Comps Maps" id="soldCompSSDMap" />
                <InputWithSuffix label="Rental Comps & Map" id="RentalCompsMap" />

                <NumberField label="P1 Value" id="p1Value" />
                <NumberField label="P2 Value" id="p2Value" />
                <NumberField label="P3 Value" id="p3Value" />
                <NumberField label="Rents Zestimate" id="rentalZestimate" />
                <NumberField label="Rental Rate" id="rentalRate" />
                <InputWithSuffix label="Comp URL 1" id="compUrlOne" />
                <InputWithSuffix label="Comp URL 2" id="compUrlTwo" />
                <InputWithSuffix label="Comp URL 3" id="compUrlThree" />
                <InputWithSuffix label="Comp URL 4" id="compUrlFour" />

                <NumberField label="Recommended CMA/ARV" id="recomCma" />
                <NumberField label="Wholetail Value" id="wholetailVal" />
                <InputField label="Comp By" id="compBy" />
                <DateField label="Comp By Date" id="compByDate" />


                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <Button>Add Notes</Button>
                </Col>

            </div>



        </>
    )
}

export default CompData
