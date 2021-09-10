import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react"



const ThirdMortgage = ({ viewAmort,
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
                <CheckField htmlFor="tfLienFCL" label="Third Lien Foreclosing" id="tfLienFCL" name="tfLienFCL" onChange={fLienFCL} checked={fLienVal} />
                <CheckField htmlFor="tfNoStr" label="No STR | No APPT" id="tfNoStr" name="tfNoStr" onChange={fNoStr} checked={fNoStrVal} />
                <CheckField htmlFor="tdfLien" label="Defective Lien" id="tdfLien" name="tdfLien" onChange={dfLien} checked={dfLienVal} />


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
                <InputField label="Lender" htmlFor="tlender" name="tlender" id="tlender" />
                <NumberField label="Lien Amount" htmlFor="tamount" name="tamount" id="tamount" />
                <DateField label="Date Recorded" htmlFor="tdateRecorder" name="tdateRecorder" id="tdateRecorder" />
                <InputField label="Instrument #" htmlFor="tinstrument" name="tinstrument" id="tinstrument" />
                <InputField label="DT Book/Page" htmlFor="tdtBookPage" name="tdtBookPage" id="tdtBookPage" />
                <InputField label="Assignment BP" htmlFor="tassignmentBP" name="tassignmentBP" id="tassignmentBP" />
                <InputField label="Loan Type" htmlFor="tloanType" name="tloanType" id="tloanType" />
                <InputField label="Loan Term" htmlFor="tloanterm" name="tloanterm" id="tloanterm" />
                <DateField label="Maturity Date" htmlFor="tmaturityDate" name="tmaturityDate" id="tmaturityDate" />
                <InputField label="Right to Cure" htmlFor="trightToCure" name="trightToCure" id="trightToCure" />
                <InputField label="Trustee Fees" htmlFor="ttrusteeFees" name="ttrusteeFees" id="ttrusteeFees" />
                <InputField label="Trustee" htmlFor="ttrustee" name="ttrustee" id="ttrustee" />
                <InputField label="STR Book/Page" htmlFor="tstrBP" name="tstrBP" id="tstrBP" />
                <InputField label="STR Date" htmlFor="tstrDate" name="tstrDate" id="tstrDate" />
                <InputField label="Loan Estimated Balance" htmlFor="tloanEstimatedB" name="tloanEstimatedB" id="tloanEstimatedB" />
                <InputField label="Est Late Payments & Fees" htmlFor="testLateFee" name="testLateFee" id="testLateFee" />
                <InputField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" htmlFor="ttotalestDebt" name="ttotalestDebt" id="ttotalestDebt" />
                <InputField label="CMA/ARV Value" htmlFor="tcmaArv" name="tcmaArv" id="tcmaArv" />
                <InputField label="Total Debt" htmlFor="ttotalDebt" name="ttotalDebt" id="ttotalDebt" />
                <InputField label="Rental Rate" htmlFor="trentalRate" name="trentalRate" id="trentalRate" />
            </div>

            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                <CheckField htmlFor="texMatch" label="Exhibit A match w/ the Legal Description in the NOS" id="texMatch" name="texMatch" onChange={exMatch} checked={exMatchVal} />
                <CheckField htmlFor="tdtAddressMatch" label="DT & NOS property address both match" id="tdtAddressMatch" name="tdtAddressMatch" onChange={dtAddressMatch} checked={dtAddressMatchVal} />
                <CheckField htmlFor="tattorneyFee" label="Reasonable Attorney Fees" id="tattorneyFee" name="tattorneyFee" onChange={attorneyFee} checked={attorneyFeeVal} />
            </div>

            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>
                <CheckField htmlFor="tamortizationView" label="AMORTIZATION View Calculation" id="tamortizationView" name="tamortizationView" onChange={amortizationView} checked={amortizationViewVal} />

                {amortizationViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <NumberField label="Annual Interest Rate %" name="tannualRate" htmlFor="tannualRate" id="tannualRate" />
                        <NumberField label="Monthly Payment" name="tmonthlyPayment" htmlFor="tmonthlyPayment" id="tmonthlyPayment" />
                        <NumberField label="Monthly Principal Payment" name="tmPrincipalPayment" htmlFor="tmPrincipalPayment" id="tmPrincipalPayment" />
                        <NumberField label="Monthly Interest Payment" name="tmInterestPay" htmlFor="tmInterestPay" id="tmInterestPay" />
                        <NumberField label="Estimated Equity" name="testEquity" htmlFor="testEquity" id="testEquity" />

                    </div>
                }

                <CheckField htmlFor="tmodAView" label="MODIFICATION AGREEMENT (MOD)" id="tmodAView" name="tmodAView" onChange={modAView} checked={modAViewVal} />
                {modAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="Modification Book/Page" htmlFor="tmodBP" name="tmodBP" id="tmodBP" />
                        <DateField label="Modification Date" htmlFor="tmodADate" name="tmodADate" id="tmodADate" />
                        <NumberField label="Modified Lien Amount" name="tmodLienAmount" htmlFor="tmodLienAmount" id="tmodLienAmount" />
                        <NumberField label="Modified Loan Term" name="tmodATerm" htmlFor="tmodATerm" id="tmodATerm" />
                        <DateField label="Modification Maturity Date" htmlFor="tmodAmaturityDate" name="tmodAmaturityDate" id="tmodAmaturityDate" />
                        <NumberField label="Annual Interest %" htmlFor="tannualIterest" name="tannualIterest" id="tannualIterest" />
                        <NumberField label="Monthly Payment $" htmlFor="tmMonthlyPay" name="tmMonthlyPay" id="tmMonthlyPay" />
                        <NumberField label="Loan Estimated Balance" htmlFor="tmloanEst" name="tmloanEst" id="tmloanEst" />
                        <NumberField label="Est Late Payments and Fees" htmlFor="testLPay" name="testLPay" id="testLPay" />
                        <NumberField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" htmlFor="ttotalEstDebt" name="ttotalEstDebt" id="ttotalEstDebt" />

                    </div>}

                <CheckField htmlFor="tsubAView" label="SUBORDINATION AGREEMENT (SUB/A)" id="tsubAView" name="tsubAView" onChange={subAView} checked={subAViewVal} />

                {subAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="SubA Book/Page" htmlFor="tsubABp" name="tsubABp" id="tsubABp" />
                        <DateField label="SubA Date" htmlFor="tsubADate" name="tsubADate" id="tsubADate" />
                        <InputField label="Lien Position" htmlFor="tlienPosition" name="tlienPosition" id="tlienPosition" />

                    </div>}

                <CheckField htmlFor="tFResults" label="FORECLOSURE RESULT" id="tFResults" name="tFResults" onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" htmlFor="ttrDeedIns" name="ttrDeedIns" id="ttrDeedIns" />
                        <DateField label="TRDeed Date" htmlFor="ttrDeedDate" name="ttrDeedDate" id="ttrDeedDate" />
                        <InputField label="Winning Bidder" htmlFor="tFwinningBidder" name="tFwinningBidder" id="tFwinningBidder" />
                        <InputField label="Winning Bid" htmlFor="twinningBid" name="twinningBid" id="twinningBid" id="twinningBid" />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <InputField label="File Name" htmlFor="tfLienFile" name="tfLienFile" id="tfLienFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="tfLienFileDate" name="tfLienFileDate"  >
                            <DatePicker placeholder="Select Date" id="tfLienFileDate" style={{ width: "100%" }} />
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "10px" }} >

                        <Upload id="tfLienFiles"
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
                <CheckField htmlFor="towner1" label="Owner 1" id="towner1" name="towner1" onChange={ownerOne} checked={isOwnerOne} />
                <CheckField htmlFor="towner2" label="Owner 2" id="towner2" name="towner2" onChange={ownerTwo} checked={isOwnerTwo} />
                <CheckField htmlFor="towner3" label="Owner 3" id="towner3" name="towner3" onChange={ownerThree} checked={isOwnerThree} />
                <CheckField htmlFor="towner4" label="Owner 4" id="towner4" name="towner4" onChange={ownerFour} checked={isOwnerFour} />

                <CheckField htmlFor="tdtc" label="DTC - First Check" id="tdtc" name="tdtc" onChange={dtcCheck} checked={isDtcCheck} />
                <CheckField htmlFor="tdca" label="DCA - Second Check" id="tdca" name="tdca" onChange={dcaCheck} checked={isDcaCheck} />
                <CheckField htmlFor="tthirdDca" label="DCA - Third Check" id="tthirdDca" name="tthirdDca" onChange={thirdCheck} checked={isThirdCheck} />

            </div>




        </>
    )
}

export default ThirdMortgage
