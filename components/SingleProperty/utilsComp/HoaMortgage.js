import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react"
import useHttp from "../../../utils/useHttp"
import { useSelector } from 'react-redux'
import moment from 'moment'

const HoaMortgage = ({ viewFcl,
    viewRedemp, data }) => {

    const [fLienVal, setfLienVal] = useState(false)
    const [fNoStrVal, setfNoStrVal] = useState(false)
    const [dfLienVal, setdfLienVal] = useState(false)

    const [hoaRedemVal, sethoaRedemVal] = useState(false)
    const [FResultsVal, setFResults] = useState(false)

    const [isOwnerOne, setisOwnerOne] = useState(false)
    const [isOwnerTwo, setisOwnerTwo] = useState(false)
    const [isOwnerThree, setisOwnerThree] = useState(false)
    const [isOwnerFour, setisOwnerFour] = useState(false)
    const [isDtcCheck, setisDtcCheck] = useState(false)
    const [isDcaCheck, setisDcaCheck] = useState(false)
    const [isThirdCheck, setisThirdCheck] = useState(false)
    const [redemedByOwnerVal, setRedemedByOwnerVal] = useState(false)
    const [hoaVal, sethoaVal] = useState()
    const [sendRequest, setSendRequest] = useState(false)
    const propertyId = useSelector((state) => state.property.propertyId)


    const { Item } = Form
    const [hoaForm] = Form.useForm()

    //declare valriables for checked comp.

    const redemedByOwner = (e) => {
        setRedemedByOwnerVal(e.target.checked)
    }

    const fLienFCL = (e) => {
        setfLienVal(e.target.checked)
    }

    const fNoStr = (e) => {
        setfNoStrVal(e.target.checked)
    }

    const dfLien = (e) => {
        setdfLienVal(e.target.checked)
    }



    const hoaRedemView = (e) => {
        sethoaRedemVal(e.target.checked)
    }

    const FResults = (e) => {
        setFResults(e.target.checked)
    }

    const ownerOne = (e) => {
        setisOwnerOne(e.target.checked)
    }
    const ownerTwo = (e) => {
        setisOwnerTwo(e.target.checked)
    }
    const ownerThree = (e) => {
        setisOwnerThree(e.target.checked)
    }

    const ownerFour = (e) => {
        setisOwnerFour(e.target.checked)
    }
    const dtcCheck = (e) => {
        setisDtcCheck(e.target.checked)
    }

    const dcaCheck = (e) => {
        setisDcaCheck(e.target.checked)
    }
    const thirdCheck = (e) => {
        setisThirdCheck(e.target.checked)
    }


    useEffect(() => {
        if (viewFcl) {
            setFResults(viewFcl)
        }
        if (viewRedemp) {
            sethoaRedemVal(viewRedemp)

        }


    }, [viewFcl, viewRedemp])

    const hoaMortgageHandler = (values) => {
        sethoaVal(values)
        setSendRequest((prev) => ({ sendRequest: !prev }))
    }



    useEffect(() => {
        if (hoaVal && sendRequest) {
            hoaVal.hoaLien.hoaLienDate = hoaVal.hoaLien.hoaLienDate && moment(hoaVal.hoaLien.hoaLienDate).toISOString()
            hoaVal.hoaLien.strDate = hoaVal.hoaLien.strDate && moment(hoaVal.hoaLien.strDate).toISOString()
            hoaVal.hoaLien.ccAndRsDate = hoaVal.hoaLien.ccAndRsDate && moment(hoaVal.hoaLien.ccAndRsDate).toISOString()
            hoaVal.hoaLien.affidavitDate = hoaVal.hoaLien.affidavitDate && moment(hoaVal.hoaLien.affidavitDate).toISOString()
            hoaVal.hoaLien.redemptionExpires = hoaVal.hoaLien.redemptionExpires && moment(hoaVal.hoaLien.redemptionExpires).toISOString()
            hoaVal.hoaLien.redemptionDate = hoaVal.hoaLien.redemptionDate && moment(hoaVal.hoaLien.redemptionDate).toISOString()
            hoaVal.hoaLien.hLienFileDate = hoaVal.hoaLien.hLienFileDate && moment(hoaVal.hoaLien.hLienFileDate).toISOString()
            hoaVal.hoaLien.trDeedDate = hoaVal.hoaLien.trDeedDate && moment(hoaVal.hoaLien.trDeedDate).toISOString()

        }
    }, [hoaVal && sendRequest])

    const { isLoading } = useHttp(sendRequest, `process.env.NEXT_PUBLIC_MAIN_PROXY/update-property/${propertyId}`, "put", hoaVal)




    return (
        <>
            <Form form={hoaForm} name="hoaForm" layout="vertical" onFinish={hoaMortgageHandler} initialValues={data} >
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CheckField label="HOA Lien Foreclosing" name={["hoaLien", "lienForeclosing"]} onChange={fLienFCL} checked={fLienVal} />
                    <CheckField label="No STR | No APPT" name={["hoaLien", "noSTR"]} onChange={fNoStr} checked={fNoStrVal} />
                    <CheckField label="Defective HOA Lien" name={["hoaLien", "defectiveLien"]} onChange={dfLien} checked={dfLienVal} />


                <Button
                    type="primary"
                    style={{ margin: "10px", width: "100px" }}>
                    View Notes
                </Button>

                <Button
                    type="primary"
                    style={{ margin: "10px", width: "100px" }}>
                    Add Note
                </Button>
            </div>

            <div className="details" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <InputField label="HOA Name" name={["hoaLien", "hoaName"]} />
                    <NumberField label="HOA Amount" name={["hoaLien", "hoaLienAmount"]} />
                    <DateField label="Date Recorded" name={["hoaLien", "hoaLienDate"]} />
                    <InputField label="HOA Book/Page" name={["hoaLien", "dtBookPage"]} />
                    <InputField label="Trustee Fees" name={["hoaLien", "trusteeFees"]} />
                    <InputField label="Trustee HOA" name={["hoaLien", "trusteeHoa"]} />
                    <NumberField label="Total Debt" name={["hoaLien", "totalDebt"]} />
                    <InputField label="STR Book/Page" name={["hoaLien", "strBookPage"]} />
                    <DateField label="STR Date" name={["hoaLien", "strDate"]} />
                    <InputField label="CC&Rs Instrument #" name={["hoaLien", "ccAndRsInstrument"]} />
                    <DateField label="CC&Rs Date" name={["hoaLien", "ccAndRsDate"]} />

            </div>


            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                    <CheckField label="REDEMPTION INFO" name={["hoaLien", "isRedemptionInfo"]} onChange={hoaRedemView} checked={hoaRedemVal} />

                {hoaRedemVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <DateField label="Affidavit (APM) Date" name={["hoaLien", "affidavitDate"]} />
                        <InputField label="Tax Code" name={["hoaLien", "taxCode"]} />
                        <DateField label="Redemption Expires" name={["hoaLien", "redemptionExpires"]} />
                        <CheckField htmlFor="hddemOwner" label="Redeemed By Owner" name={["hoaLien", "hddemOwner"]} onChange={redemedByOwner} checked={redemedByOwnerVal} />
                        <InputField label="Redemption Notice Inst #" name={["hoaLien", "redemptionNoticeInst"]} />
                        <DateField label="Redemption Date" name={["hoaLien", "redemptionDate"]} />


                    </div>}

                    <CheckField label="FORECLOSURE RESULT" name={["hoaLien", "isForeclosureResult"]} onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" name={["hoaLien", "trDeedInstrument"]} />
                        <DateField label="TRDeed Date" name={["hoaLien", "trDeedDate"]} />
                        <InputField label="Winning Bidder" name={["hoaLien", "winningBidder"]} />
                        <NumberField label="Winning Bid" name={["hoaLien", "winningbid"]} />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                        <InputField label="File Name" name={["hoaLien", "hLienFile"]} />

                    <Col xs={12} sm={8} md={4} >
                            <Item label="Date : " name={["hoaLien", "hLienFileDate"]}   >
                                <DatePicker placeholder="Select Date" style={{ width: "100%" }} />
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "10px" }} >

                        <Upload id="hLienFiles"
                        // {...props}
                        >
                            <Button
                                icon={<UploadOutlined />}>Select File</Button>
                        </Upload>

                    </Col>


                    <Col xs={12} sm={8} md={6} >

                        <Button
                            type="primary"
                            // onClick={this.handleUpload}
                            // disabled={fileList.length === 0}
                            // loading={uploading}
                            style={{ marginTop: 16, width: "100%" }}
                        >
                            Upload
                            {/* {uploading ? 'Uploading' : 'Start Upload'} */}
                        </Button>
                    </Col>


                </Col>

                <Col xs={12} sm={8} md={6} lg={4} style={{ marginTop: "15px" }}>

                    <div >
                        Files will be here

                    </div>

                </Col>

            </Col>

            <div className="details" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CheckField label="Owner 1" name={["hoaLien", "owner1"]} onChange={ownerOne} checked={isOwnerOne} />
                    <CheckField label="Owner 2" name={["hoaLien", "owner2"]} onChange={ownerTwo} checked={isOwnerTwo} />
                    <CheckField label="Owner 3" name={["hoaLien", "owner3"]} onChange={ownerThree} checked={isOwnerThree} />
                    <CheckField label="Owner 4" name={["hoaLien", "owner4"]} onChange={ownerFour} checked={isOwnerFour} />

                    <CheckField label="DTC - First Check" name={["hoaLien", "isDtcFirstCheck"]} onChange={dtcCheck} checked={isDtcCheck} />
                    <CheckField label="DCA - Second Check" name={["hoaLien", "isDcaSecondCheck"]} onChange={dcaCheck} checked={isDcaCheck} />
                    <CheckField label="DCA - Third Check" name={["hoaLien", "isDcaFinalCheck"]} onChange={thirdCheck} checked={isThirdCheck} />

                </div>
                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button htmlType="submit" type="primary" loading={isLoading} >Save Data</Button>
                </Col>

            </Form>


        </>
    )
}

export default HoaMortgage
