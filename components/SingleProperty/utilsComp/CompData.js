import { Button, Col, Form, Divider, Input, InputNumber } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import InputWithSuffix from "./InputWithSuffix"
import DateField from "./DateField"


const CompData = ({ name, value, nameVal }) => {
    const { Group } = Input
    const { Item } = Form



    return (
        <>
            <Divider orientation="center">{name}</Divider>
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%" }}>

                <InputField label="Specific Supply & Demand" name={[value, "SSD"]} />
                <InputField label="General Supply & Demand" name={[value, "GSD"]} />
                <NumberField label="Average Days on Market" name={[value, "ADOM"]} />
                <NumberField label="Phase of Renovation" name={[value, "phaseOfRenovation"]} />


                <Col xs={12} sm={8} md={6}>
                    {/* <Item label="Price/sq.ft.on Sale Comps" > */}
                    {/* <Group style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
                        <Item name={[value, "priceSqfOnSaleComp1"]} style={{ width: "46%" }} >
                            <InputNumber style={{ margin: "0px", width: "100%" }} /> </Item>
                        <Item name={[value, "priceSqfOnSaleComp2"]} style={{ width: "46%" }}   >
                            <InputNumber style={{ margin: "0px", width: "100%" }} />
                        </Item>
                        </Group> */}
                    {/* </Item> */}
                </Col>

                <InputWithSuffix label="Sale Comps & SSD Maps" name={[value, "saleCompsAndSSDMaps"]} />
                <InputWithSuffix label="GSD Sale Comps Maps" name={[value, "GSDSaleCompMaps"]} />
                <NumberField label="Rent GSD" name={[value, "rentGSD"]} />

                <Col xs={12} sm={8} md={6}>
                    {/* <Item label="Price/sq.ft.on Sold Comps" > */}
                    {/* <Group style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} > */}
                    {/* <Item name={[value, "priceSqfOnSoldComp1"]} style={{ width: "46%" }} >
                            <InputNumber style={{ margin: "0px", width: "100%" }} /> </Item>
                        <Item name={[value, "priceSqfOnSoldComp2"]} style={{ width: "46%" }}   >
                            <InputNumber style={{ margin: "0px", width: "100%" }} />
                        </Item> */}
                    {/* </Group> */}
                    {/* </Item> */}
                </Col>
                <InputWithSuffix label="Sold Comps & SSD Maps" name={[value, "GSDSoldCompMaps"]} />
                <InputWithSuffix label="Rental Comps & Map" name={[value, "rentalCompsAndMaps"]} />

                <NumberField label="P1 Value" name={[value, "pOneValue"]} />
                <NumberField label="P2 Value" name={[value, "pTwoValue"]} />
                <NumberField label="P3 Value" name={[value, "pThreeValue"]} />
                <NumberField label="Rental Rate" name={[value, "rentalRate"]} />
                <InputWithSuffix label="Comp URL 1" name={[value, "compURL"]} />
                <InputWithSuffix label="Comp URL 2" name={[value, "compURLTwo"]} />
                <InputWithSuffix label="Comp URL 3" name={[value, "compURLThree"]} />
                <InputWithSuffix label="Comp URL 4" name={[value, "compURLFour"]} />

                <NumberField label="Recommended CMA/ARV" name={[value, "recommendedCMA"]} />
                <NumberField label="Wholetail Value" name={[value, "wholeTailValue"]} />
                <InputField label="Comp By" name={[value, nameVal]} />
                <DateField label="Comp By Date" name={[value, "date"]} />


                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <Button>Add Notes</Button>
                </Col>

            </div>



        </>
    )
}

export default CompData
