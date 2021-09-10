import NumberField from "./NumberField"
import { Col } from 'antd'
const TaxAssessed = ({ propertyTaxOwed, owedYear, taxAssessed, taxYear, index }) => {
    return (
        <>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <NumberField label="Property Tax Owed" htmlFor={`${index ? index : ""}pTaxOwed`} name={`${index ? index : ""}pTaxOwed`} id={`${index ? index : ""}pTaxOwed`} initVal={propertyTaxOwed} />
                <NumberField label="Owed Year" htmlFor={`${index ? index : ""}owedYear`} name={`${index ? index : ""}owedYear`} id={`${index ? index : ""}owedYear`} initVal={owedYear} />
                <NumberField label="Tax Assessed" htmlFor={`${index ? index : ""}taxAssessed`} name={`${index ? index : ""}taxAssessed`} id={`${index ? index : ""}taxAssessed`} initVal={taxAssessed} />
                <NumberField label="Tax Year" htmlFor={`${index ? index : ""}taxYear`} name={`${index ? index : ""}taxYear`} id={`${index ? index : ""}taxYear`} initVal={taxYear} />
            </Col>
        </>
    )
}

export default TaxAssessed
