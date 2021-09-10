import InputField from './utilsComp/InputField'
import NumberField from './utilsComp/NumberField'
import DateField from './utilsComp/DateField'

const PriceHistory = ({ price, date, costPerSqf, source, Description, index }) => {



    return (
        <>

            <DateField label="Date : " htmlFor={`${index ? index : ""}phdDate`} name={`${index ? index : ""}phdDate`} placeholder="Select Date" id={`${index ? index : ""}phdDate`} initVal={date} />

            <NumberField label="Price : " htmlFor={`${index ? index : ""}phPrice`} name={`${index ? index : ""}phPrice`} id={`${index ? index : ""}phPrice`} initVal={price} />

            <InputField label="Cost per Sqft" htmlFor={`${index ? index : ""}phCostPerSqf`} name={`${index ? index : ""}phCostPerSqf`} id={`${index ? index : ""}phCostPerSqf`} initVal={costPerSqf} />

            <InputField label="Source" htmlFor={`${index ? index : ""}phSource`} name={`${index ? index : ""}phSource`} id={`${index ? index : ""}phSource`} initVal={source} />
            <InputField label="Description" htmlFor={`${index ? index : ""}phDesc`} name={`${index ? index : ""}phDesc`} id={`${index ? index : ""}phDesc`} initVal={Description} />

        </>
    )
}

export default PriceHistory
