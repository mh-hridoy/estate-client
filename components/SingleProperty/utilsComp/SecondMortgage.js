import { useEffect } from 'react'
import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState } from "react"


const SecondMortgage = ({ viewAmort,
    viewModA,
    viewSubA,
    fclView }) => {

    const [fLienVal, setfLienVal] = useState(false)
    const [fNoStrVal, setfNoStrVal] = useState(false)
    const [dfLienVal, setdfLienVal] = useState(false)
    const [exMatchVal, setexMatchVal] = useState(false)
    const [dtAddressMatchVal, setdtAddressMatchVal] = useState(false)
    const [attorneyFeeVal, setattorneyFeeVal] = useState(false)
    const [amortizationViewVal, seamortizationViewVal] = useState(false)
    const [modAViewVal, setmodAView] = useState(false)
    const [subAViewVal, setsubAView] = useState(false)
    const [FResultsVal, setFResults] = useState(false)

    const [isOwnerOne, setisOwnerOne] = useState(false)
    const [isOwnerTwo, setisOwnerTwo] = useState(false)
    const [isOwnerThree, setisOwnerThree] = useState(false)
    const [isOwnerFour, setisOwnerFour] = useState(false)
    const [isDtcCheck, setisDtcCheck] = useState(false)
    const [isDcaCheck, setisDcaCheck] = useState(false)
    const [isThirdCheck, setisThirdCheck] = useState(false)

    const { Item } = Form

    //declare valriables for checked comp.

    const fLienFCL = (e) => {
        setfLienVal(e.target.checked)
    }

    const fNoStr = (e) => {
        setfNoStrVal(e.target.checked)
    }

    const dfLien = (e) => {
        setdfLienVal(e.target.checked)
    }

    const exMatch = (e) => {
        setexMatchVal(e.target.checked)
    }

    const dtAddressMatch = (e) => {
        setdtAddressMatchVal(e.target.checked)
    }

    const attorneyFee = (e) => {
        setattorneyFeeVal(e.target.checked)
    }


    const amortizationView = (e) => {
        seamortizationViewVal(e.target.checked)
    }

    const modAView = (e) => {
        setmodAView(e.target.checked)
    }

    const subAView = (e) => {
        setsubAView(e.target.checked)
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
        if (viewAmort) {
            seamortizationViewVal(viewAmort)
        }
        if (viewModA) {
            setmodAView(viewModA)

        }

        if (viewSubA) {
            setsubAView(viewSubA)

        }

        if (fclView) {
            setFResults(fclView)

        }

    }, [viewAmort, viewModA, viewSubA,
        fclView])

    return (
        <>
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <CheckField htmlFor="sfLienFCL" label="Second Lien Foreclosing" id="sfLienFCL" name="sfLienFCL" onChange={fLienFCL} checked={fLienVal} />
                <CheckField htmlFor="sfNoStr" label="No STR | No APPT" id="sfNoStr" name="sfNoStr" onChange={fNoStr} checked={fNoStrVal} />
                <CheckField htmlFor="sdfLien" label="Defective Lien" id="sdfLien" name="sdfLien" onChange={dfLien} checked={dfLienVal} />


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
                <InputField label="Lender" htmlFor="slender" name="slender" id="slender" />
                <NumberField label="Lien Amount" htmlFor="samount" name="samount" id="samount" />
                <DateField label="Date Recorded" htmlFor="sdateRecorder" name="sdateRecorder" id="sdateRecorder" />
                <InputField label="Instrument #" htmlFor="sinstrument" name="sinstrument" id="sinstrument" />
                <InputField label="DT Book/Page" htmlFor="sdtBookPage" name="sdtBookPage" id="sdtBookPage" />
                <InputField label="Assignment BP" htmlFor="sassignmentBP" name="sassignmentBP" id="sassignmentBP" />
                <InputField label="Loan Type" htmlFor="sloanType" name="sloanType" id="sloanType" />
                <InputField label="Loan Term" htmlFor="sloanterm" name="sloanterm" id="sloanterm" />
                <DateField label="Maturity Date" htmlFor="smaturityDate" name="smaturityDate" id="smaturityDate" />
                <InputField label="Right to Cure" htmlFor="srightToCure" name="srightToCure" id="srightToCure" />
                <InputField label="Trustee Fees" htmlFor="strusteeFees" name="strusteeFees" id="strusteeFees" />
                <InputField label="Trustee" htmlFor="strustee" name="strustee" id="strustee" />
                <InputField label="STR Book/Page" htmlFor="sstrBP" name="sstrBP" id="sstrBP" />
                <InputField label="STR Date" htmlFor="sstrDate" name="sstrDate" id="sstrDate" />
                <InputField label="Loan Estimated Balance" htmlFor="sloanEstimatedB" name="sloanEstimatedB" id="sloanEstimatedB" />
                <InputField label="Est Late Payments & Fees" htmlFor="sestLateFee" name="sestLateFee" id="sestLateFee" />
                <InputField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" htmlFor="stotalestDebt" name="stotalestDebt" id="stotalestDebt" />
                <InputField label="CMA/ARV Value" htmlFor="scmaArv" name="scmaArv" id="scmaArv" />
                <InputField label="Total Debt" htmlFor="stotalDebt" name="stotalDebt" id="stotalDebt" />
                <InputField label="Rental Rate" htmlFor="srentalRate" name="srentalRate" id="srentalRate" />
            </div>

            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                <CheckField htmlFor="sexMatch" label="Exhibit A match w/ the Legal Description in the NOS" id="sexMatch" name="sexMatch" onChange={exMatch} checked={exMatchVal} />
                <CheckField htmlFor="sdtAddressMatch" label="DT & NOS property address both match" id="sdtAddressMatch" name="sdtAddressMatch" onChange={dtAddressMatch} checked={dtAddressMatchVal} />
                <CheckField htmlFor="sattorneyFee" label="Reasonable Attorney Fees" id="sattorneyFee" name="sattorneyFee" onChange={attorneyFee} checked={attorneyFeeVal} />
            </div>

            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>
                <CheckField htmlFor="samortizationView" label="AMORTIZATION View Calculation" id="samortizationView" name="samortizationView" onChange={amortizationView} checked={amortizationViewVal} />

                {amortizationViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <NumberField label="Annual Interest Rate %" name="sannualRate" htmlFor="sannualRate" id="sannualRate" />
                        <NumberField label="Monthly Payment" name="smonthlyPayment" htmlFor="smonthlyPayment" id="smonthlyPayment" />
                        <NumberField label="Monthly Principal Payment" name="smPrincipalPayment" htmlFor="smPrincipalPayment" id="smPrincipalPayment" />
                        <NumberField label="Monthly Interest Payment" name="smInterestPay" htmlFor="smInterestPay" id="smInterestPay" />
                        <NumberField label="Estimated Equity" name="sestEquity" htmlFor="sestEquity" id="sestEquity" />

                    </div>
                }

                <CheckField htmlFor="smodAView" label="MODIFICATION AGREEMENT (MOD)" id="smodAView" name="smodAView" onChange={modAView} checked={modAViewVal} />
                {modAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="Modification Book/Page" htmlFor="smodBP" name="smodBP" id="smodBP" />
                        <DateField label="Modification Date" htmlFor="smodADate" name="smodADate" id="smodADate" />
                        <NumberField label="Modified Lien Amount" name="smodLienAmount" htmlFor="smodLienAmount" id="smodLienAmount" />
                        <NumberField label="Modified Loan Term" name="smodATerm" htmlFor="smodATerm" id="smodATerm" />
                        <DateField label="Modification Maturity Date" htmlFor="smodAmaturityDate" name="smodAmaturityDate" id="smodAmaturityDate" />
                        <NumberField label="Annual Interest %" htmlFor="sannualIterest" name="sannualIterest" id="sannualIterest" />
                        <NumberField label="Monthly Payment $" htmlFor="smMonthlyPay" name="smMonthlyPay" id="smMonthlyPay" />
                        <NumberField label="Loan Estimated Balance" htmlFor="smloanEst" name="smloanEst" id="smloanEst" />
                        <NumberField label="Est Late Payments and Fees" htmlFor="sestLPay" name="sestLPay" id="sestLPay" />
                        <NumberField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" htmlFor="stotalEstDebt" name="stotalEstDebt" id="stotalEstDebt" />

                    </div>}

                <CheckField htmlFor="ssubAView" label="SUBORDINATION AGREEMENT (SUB/A)" id="ssubAView" name="ssubAView" onChange={subAView} checked={subAViewVal} />

                {subAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="SubA Book/Page" htmlFor="ssubABp" name="ssubABp" id="ssubABp" />
                        <DateField label="SubA Date" htmlFor="ssubADate" name="ssubADate" id="ssubADate" />
                        <InputField label="Lien Position" htmlFor="slienPosition" name="slienPosition" id="slienPosition" />

                    </div>}

                <CheckField htmlFor="sFResults" label="FORECLOSURE RESULT" id="sFResults" name="sFResults" onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" htmlFor="strDeedIns" name="strDeedIns" id="strDeedIns" />
                        <DateField label="TRDeed Date" htmlFor="strDeedDate" name="strDeedDate" id="strDeedDate" />
                        <InputField label="Winning Bidder" htmlFor="sFwinningBidder" name="sFwinningBidder" id="sFwinningBidder" />
                        <InputField label="Winning Bid" htmlFor="swinningBid" name="swinningBid" id="swinningBid" id="swinningBid" />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <InputField label="File Name" htmlFor="sfLienFile" name="sfLienFile" id="sfLienFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="sfLienFileDate" name="sfLienFileDate"  >
                            <DatePicker placeholder="Select Date" id="sfLienFileDate" style={{ width: "100%" }} />
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "10px" }} >

                        <Upload id="sfLienFiles"
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
                <CheckField htmlFor="sowner1" label="Owner 1" id="sowner1" name="sowner1" onChange={ownerOne} checked={isOwnerOne} />
                <CheckField htmlFor="sowner2" label="Owner 2" id="sowner2" name="sowner2" onChange={ownerTwo} checked={isOwnerTwo} />
                <CheckField htmlFor="sowner3" label="Owner 3" id="sowner3" name="sowner3" onChange={ownerThree} checked={isOwnerThree} />
                <CheckField htmlFor="sowner4" label="Owner 4" id="sowner4" name="sowner4" onChange={ownerFour} checked={isOwnerFour} />

                <CheckField htmlFor="sdtc" label="DTC - First Check" id="sdtc" name="sdtc" onChange={dtcCheck} checked={isDtcCheck} />
                <CheckField htmlFor="sdca" label="DCA - Second Check" id="sdca" name="sdca" onChange={dcaCheck} checked={isDcaCheck} />
                <CheckField htmlFor="sthirdDca" label="DCA - Third Check" id="sthirdDca" name="sthirdDca" onChange={thirdCheck} checked={isThirdCheck} />

            </div>




        </>
    )
}

export default SecondMortgage
