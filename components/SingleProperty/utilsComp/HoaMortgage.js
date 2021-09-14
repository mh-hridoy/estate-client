import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react"


const HoaMortgage = ({ viewFcl,
    viewRedemp }) => {

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



    const ownerOne = () => {
        setisOwnerOne(true)
    }
    const ownerTwo = () => {
        setisOwnerTwo(true)
    }
    const ownerThree = () => {
        setisOwnerThree(true)
    }

    const ownerFour = () => {
        setisOwnerFour(true)
    }
    const dtcCheck = () => {
        setisDtcCheck(true)
    }

    const dcaCheck = () => {
        setisDcaCheck(true)
    }
    const thirdCheck = () => {
        setisThirdCheck(true)
    }


    useEffect(() => {
        if (viewFcl) {
            setFResults(viewFcl)
        }
        if (viewRedemp) {
            setmodAView(viewRedemp)

        }


    }, [viewFcl, viewRedemp])

    const hoaMortgageHandler = (values) => {
        console.log(values)
    }

    return (
        <>
            <Form form={hoaForm} name="hoaForm" layout="vertical" onFinish={hoaMortgageHandler} >
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CheckField htmlFor="hLienFCL" label="HOA Lien Foreclosing" id="hLienFCL" name="lienForeclosing" onChange={fLienFCL} checked={fLienVal} />
                    <CheckField htmlFor="hNoStr" label="No STR | No APPT" id="hNoStr" name="noSTR" onChange={fNoStr} checked={fNoStrVal} />
                    <CheckField htmlFor="hfLien" label="Defective HOA Lien" id="hfLien" name="defectiveLien" onChange={dfLien} checked={dfLienVal} />


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
                    <InputField label="HOA Name" htmlFor="hame" name="hoaName" id="hame" />
                    <NumberField label="HOA Amount" htmlFor="hmount" name="hoaLienAmount" id="hmount" />
                    <DateField label="Date Recorded" htmlFor="hateRecorded" name="hoaLienDate" id="hateRecorded" />
                    <InputField label="HOA Book/Page" htmlFor="htBookPage" name="dtBookPage" id="htBookPage" />
                    <InputField label="Trustee Fees" htmlFor="hrusteeFees" name="trusteeFees" id="hrusteeFees" />
                    <InputField label="Trustee HOA" htmlFor="husteeHOA" name="trusteeHoa" id="husteeHOA" />
                    <NumberField label="Total Debt" htmlFor="hotalDebt" name="totalDebt" id="hotalDebt" />
                    <InputField label="STR Book/Page" htmlFor="htrBP" name="strBookPage" id="htrBP" />
                    <DateField label="STR Date" htmlFor="htrDate" name="strDate" id="htrDate" />
                    <InputField label="CC&Rs Instrument #" htmlFor="instrument" name="ccAndRsInstrument" id="hInstrument" />
                    <DateField label="CC&Rs Date" htmlFor="hDate" name="ccAndRsDate" id="hDate" />

            </div>


            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                    <CheckField htmlFor="hoaRedemp" label="REDEMPTION INFO" id="hoaRedemp" name="isRedemptionInfo" onChange={hoaRedemView} checked={hoaRedemVal} />

                {hoaRedemVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <DateField label="Affidavit (APM) Date" htmlFor="hfDate" name="affidavitDate" id="hfDate" />
                        <InputField label="Tax Code" htmlFor="hCode" name="taxCode" id="hCode" />
                        <DateField label="Redemption Expires" htmlFor="hdExp" name="redemptionExpires" id="hdExp" />
                        <CheckField htmlFor="hddemOwner" label="Redeemed By Owner" id="redeemedByOwner" name="hddemOwner" onChange={redemedByOwner} checked={redemedByOwnerVal} />
                        <InputField label="Redemption Notice Inst #" htmlFor="hdNotice" name="redemptionNoticeInst" id="hdNotice" />
                        <DateField label="Redemption Date" htmlFor="hdNoticeDate" name="redemptionDate" id="hdNoticeDate" />


                    </div>}

                    <CheckField htmlFor="hResults" label="FORECLOSURE RESULT" id="hResults" name="isForeclosureResult" onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" htmlFor="hrDeedIns" name="trDeedInstrument" id="hrDeedIns" />
                        <DateField label="TRDeed Date" htmlFor="hrDeedDate" name="trDeedDate" id="hrDeedDate" />
                        <InputField label="Winning Bidder" htmlFor="hwinningBidder" name="winningBidder" id="hwinningBidder" />
                        <InputField label="Winning Bid" htmlFor="hinningBid" name="winningbid" id="hinningBid" id="hinningBid" />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <InputField label="File Name" htmlFor="hLienFile" name="hLienFile" id="hLienFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="hLienFileDate" name="hLienFileDate"  >
                            <DatePicker placeholder="Select Date" id="hLienFileDate" style={{ width: "100%" }} />
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
                    <CheckField htmlFor="hwner1" label="Owner 1" id="hwner1" name="owner1" onChange={ownerOne} checked={isOwnerOne} />
                    <CheckField htmlFor="hwner2" label="Owner 2" id="hwner2" name="owner2" onChange={ownerTwo} checked={isOwnerTwo} />
                    <CheckField htmlFor="hwner3" label="Owner 3" id="hwner3" name="owner4" onChange={ownerThree} checked={isOwnerThree} />
                    <CheckField htmlFor="hwner4" label="Owner 4" id="hwner4" name="owner4" onChange={ownerFour} checked={isOwnerFour} />

                    <CheckField htmlFor="htc" label="DTC - First Check" id="htc" name="isDtcFirstCheck" onChange={dtcCheck} checked={isDtcCheck} />
                    <CheckField htmlFor="hca" label="DCA - Second Check" id="hca" name="isDcaSecondCheck" onChange={dcaCheck} checked={isDcaCheck} />
                    <CheckField htmlFor="hhirdDca" label="DCA - Third Check" id="hhirdDca" name="isDcaFinalCheck" onChange={thirdCheck} checked={isThirdCheck} />

                </div>
                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button htmlType="submit" type="primary" >Save Data</Button>
                </Col>

            </Form>


        </>
    )
}

export default HoaMortgage
