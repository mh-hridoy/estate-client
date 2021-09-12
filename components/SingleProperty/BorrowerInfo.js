import { Col } from 'antd'
import InputField from './utilsComp/InputField'

const BorrowerInfo = ({ info, inx }) => {

    return (
        <>

            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >


                <InputField label="Borrower" htmlFor={`${inx ? inx : ""}borrowerName`} name={`${inx ? inx : ""}borrowerName`} id={`${inx ? inx : ""}borrowerName`} initVal={info ? info.borrowerName : ""} />
                <InputField label="Borrower Address" htmlFor={`${inx ? inx : ""}borrowerAddress`} name={`${inx ? inx : ""}borrowerAddress`} id={`${inx ? inx : ""}borrowerAddress`} initVal={info ? info.borrowerAddress : ""} />
                <InputField label="Borrower Email" htmlFor={`${inx ? inx : ""}borrowerEmail`} name={`${inx ? inx : ""}borrowerEmail`} id={`${inx ? inx : ""}borrowerEmail`} initVal={info ? info.borrowerEmail : ""} />
                <InputField label="Borrower Phone 1" htmlFor={`${inx ? inx : ""}borrowerPhone`} name={`${inx ? inx : ""}borrowerPhone`} id={`${inx ? inx : ""}borrowerPhone`} initVal={info ? info.borrowerPhone : ""} />

            </Col>

        </>
    )
}

export default BorrowerInfo
