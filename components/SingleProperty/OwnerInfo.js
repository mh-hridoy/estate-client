import { Form, Col } from 'antd'
import InputField from './utilsComp/InputField'
import InputWithSuffix from './utilsComp/InputWithSuffix';

const OwnerInfo = ({ owner, inx, isPacer }) => {


    return (
        <>
            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <InputField label="Owner Full Name" htmlFor={`${inx ? inx : ""}ownerFullName`} name={`${inx ? inx : ""}ownerFullName`} id={`${inx ? inx : ""}ownerFullName`} initVal={owner ? owner.ownerFullName : ""} />
                <InputField label="Owner Full Address" htmlFor={`${inx ? inx : ""}ownerAddress`} name={`${inx ? inx : ""}ownerAddress`} id={`${inx ? inx : ""}ownerAddress`} initVal={owner ? owner.ownerAddress : ""} />
                <InputField label="Owner Email" htmlFor={`${inx ? inx : ""}ownerEmail`} name={`${inx ? inx : ""}ownerEmail`} id={`${inx ? inx : ""}ownerEmail`} initVal={owner ? owner.ownerEmail : ""} />
                <InputField label="Owner Phone 1" htmlFor={`${inx ? inx : ""}ownerPhone`} name={`${inx ? inx : ""}ownerPhone`} id={`${inx ? inx : ""}ownerPhone`} initVal={owner ? owner.ownerPhone : ""} />

                {isPacer &&
                    <>
                        <InputWithSuffix label="Pacer URL" htmlFor={`${inx ? inx : ""}pacerUrl`} name={`${inx ? inx : ""}pacerUrl`} id={`${inx ? inx : ""}pacerUrl`} initVal={owner ? owner.pacerUrl : ""} />
                        <InputWithSuffix label="Beenverified URL" htmlFor={`${inx ? inx : ""}bvUrl`} name={`${inx ? inx : ""}bvUrl`} id={`${inx ? inx : ""}bvUrl`} initVal={owner ? owner.beenVerifiedURL : ""} />

                    </>

                }

            </Col>

        </>
    )
}

export default OwnerInfo
