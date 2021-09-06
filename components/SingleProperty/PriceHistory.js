import InputField from './utilsComp/InputField'
import NumberField from './utilsComp/NumberField'
import DateField from './utilsComp/DateField'

const PriceHistory = () => {



    return (
        <>

            <DateField label="Date : " htmlFor="phdDate" name="phdDate" placeholder="Select Date" id="phdDate" />

            <NumberField label="Price : " htmlFor="phPrice" name="phPrice" id="phPrice" />

            <InputField label="Cost per Sqft" htmlFor="phCostPerSqf" name="phCostPerSqf" id="phCostPerSqf" />

            <InputField label="Source" htmlFor="phSource" name="phSource" id="phSource" />
            <InputField label="Description" htmlFor="phDesc" name="phDesc" id="phDesc" />

        </>
    )
}

export default PriceHistory
