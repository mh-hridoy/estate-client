import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState } from "react"


const SingleMortgage = ({ fLienFCL, fNoStr, dfLien, exMatch, dtAddressMatch, attorneyFee, amortizationView, modAView, subAView, FResults, fLienVal,
    dfLienVal, fNoStrVal,
    exMatchVal,
    dtAddressMatchVal,
    attorneyFeeVal,
    amortizationViewVal,
    modAViewVal,
    subAViewVal,
    FResultsVal, isAmortizeView, isModAview,
    isSubAview,
    isfClView }) => {

    const [isOwnerOne, setisOwnerOne] = useState(false)
    const [isOwnerTwo, setisOwnerTwo] = useState(false)
    const [isOwnerThree, setisOwnerThree] = useState(false)
    const [isOwnerFour, setisOwnerFour] = useState(false)
    const [isDtcCheck, setisDtcCheck] = useState(false)
    const [isDcaCheck, setisDcaCheck] = useState(false)
    const [isThirdCheck, setisThirdCheck] = useState(false)

    const { Item } = Form

    //declare valriables for checked comp.

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

    return (
        <>
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <CheckField htmlFor="fLienFCL" label="First Lien Foreclosing" id="fLienFCL" name="fLienFCL" onChange={fLienFCL} checked={fLienVal} />
                <CheckField htmlFor="fNoStr" label="No STR | No APPT" id="fNoStr" name="fNoStr" onChange={fNoStr} checked={fNoStrVal} />
                <CheckField htmlFor="dfLien" label="Defective Lien" id="dfLien" name="dfLien" onChange={dfLien} checked={dfLienVal} />


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
                <InputField label="Lender" htmlFor="lender" name="lender" id="lender" />
                <NumberField label="Lien Amount" htmlFor="amount" name="amount" id="amount" />
                <DateField label="Date Recorded" htmlFor="dateRecorder" name="dateRecorder" id="dateRecorder" />
                <InputField label="Instrument #" htmlFor="instrument" name="instrument" id="instrument" />
                <InputField label="DT Book/Page" htmlFor="dtBookPage" name="dtBookPage" id="dtBookPage" />
                <InputField label="Assignment BP" htmlFor="assignmentBP" name="assignmentBP" id="assignmentBP" />
                <InputField label="Loan Type" htmlFor="loanType" name="loanType" id="loanType" />
                <InputField label="Loan Term" htmlFor="loanterm" name="loanterm" id="loanterm" />
                <DateField label="Maturity Date" htmlFor="maturityDate" name="maturityDate" id="maturityDate" />
                <InputField label="Right to Cure" htmlFor="rightToCure" name="rightToCure" id="rightToCure" />
                <InputField label="Trustee Fees" htmlFor="trusteeFees" name="trusteeFees" id="trusteeFees" />
                <InputField label="Trustee" htmlFor="trustee" name="trustee" id="trustee" />
                <InputField label="STR Book/Page" htmlFor="strBP" name="strBP" id="strBP" />
                <InputField label="STR Date" htmlFor="strDate" name="strDate" id="strDate" />
                <InputField label="Loan Estimated Balance" htmlFor="loanEstimatedB" name="loanEstimatedB" id="loanEstimatedB" />
                <InputField label="Est Late Payments & Fees" htmlFor="estLateFee" name="estLateFee" id="estLateFee" />
                <InputField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" htmlFor="totalestDebt" name="totalestDebt" id="totalestDebt" />
                <InputField label="CMA/ARV Value" htmlFor="cmaArv" name="cmaArv" id="cmaArv" />
                <InputField label="Total Debt" htmlFor="totalDebt" name="totalDebt" id="totalDebt" />
                <InputField label="Rental Rate" htmlFor="rentalRate" name="rentalRate" id="rentalRate" />
            </div>

            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                <CheckField htmlFor="exMatch" label="Exhibit A match w/ the Legal Description in the NOS" id="exMatch" name="exMatch" onChange={exMatch} checked={exMatchVal} />
                <CheckField htmlFor="dtAddressMatch" label="DT & NOS property address both match" id="dtAddressMatch" name="dtAddressMatch" onChange={dtAddressMatch} checked={dtAddressMatchVal} />
                <CheckField htmlFor="attorneyFee" label="Reasonable Attorney Fees" id="attorneyFee" name="attorneyFee" onChange={attorneyFee} checked={attorneyFeeVal} />
            </div>

            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>
                <CheckField htmlFor="amortizationView" label="AMORTIZATION View Calculation" id="amortizationView" name="amortizationView" onChange={amortizationView} checked={amortizationViewVal} />

                {amortizationViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <NumberField label="Annual Interest Rate %" name="annualRate" htmlFor="annualRate" id="annualRate" />
                        <NumberField label="Monthly Payment" name="monthlyPayment" htmlFor="monthlyPayment" id="monthlyPayment" />
                        <NumberField label="Monthly Principal Payment" name="mPrincipalPayment" htmlFor="mPrincipalPayment" id="mPrincipalPayment" />
                        <NumberField label="Monthly Interest Payment" name="mInterestPay" htmlFor="mInterestPay" id="mInterestPay" />
                        <NumberField label="Estimated Equity" name="estEquity" htmlFor="estEquity" id="estEquity" />

                    </div>
                }

                <CheckField htmlFor="modAView" label="MODIFICATION AGREEMENT (MOD)" id="modAView" name="modAView" onChange={modAView} checked={modAViewVal} />
                {modAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="Modification Book/Page" htmlFor="modBP" name="modBP" id="modBP" />
                        <DateField label="Modification Date" htmlFor="modADate" name="modADate" id="modADate" />
                        <NumberField label="Modified Lien Amount" name="modLienAmount" htmlFor="modLienAmount" id="modLienAmount" />
                        <NumberField label="Modified Loan Term" name="modATerm" htmlFor="modATerm" id="modATerm" />
                        <DateField label="Modification Maturity Date" htmlFor="modAmaturityDate" name="modAmaturityDate" id="modAmaturityDate" />
                        <NumberField label="Annual Interest %" htmlFor="annualIterest" name="annualIterest" id="annualIterest" />
                        <NumberField label="Monthly Payment $" htmlFor="mMonthlyPay" name="mMonthlyPay" id="mMonthlyPay" />
                        <NumberField label="Loan Estimated Balance" htmlFor="mloanEst" name="mloanEst" id="mloanEst" />
                        <NumberField label="Est Late Payments and Fees" htmlFor="estLPay" name="estLPay" id="estLPay" />
                        <NumberField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" htmlFor="totalEstDebt" name="totalEstDebt" id="totalEstDebt" />

                    </div>}

                <CheckField htmlFor="subAView" label="SUBORDINATION AGREEMENT (SUB/A)" id="subAView" name="subAView" onChange={subAView} checked={subAViewVal} />

                {subAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="SubA Book/Page" htmlFor="subABp" name="subABp" id="subABp" />
                        <DateField label="SubA Date" htmlFor="subADate" name="subADate" id="subADate" />
                        <InputField label="Lien Position" htmlFor="lienPosition" name="lienPosition" id="lienPosition" />

                    </div>}

                <CheckField htmlFor="FResults" label="FORECLOSURE RESULT" id="FResults" name="FResults" onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" htmlFor="trDeedIns" name="trDeedIns" id="trDeedIns" />
                        <DateField label="TRDeed Date" htmlFor="trDeedDate" name="trDeedDate" id="trDeedDate" />
                        <InputField label="Winning Bidder" htmlFor="FwinningBidder" name="FwinningBidder" id="FwinningBidder" />
                        <InputField label="Winning Bid" htmlFor="winningBid" name="winningBid" id="winningBid" id="winningBid" />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <InputField label="File Name" htmlFor="fLienFile" name="fLienFile" id="fLienFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="fLienFileDate" name="fLienFileDate"  >
                            <DatePicker placeholder="Select Date" id="fLienFileDate" style={{ width: "100%" }} />
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "10px" }} >

                        <Upload id="fLienFiles"
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
                <CheckField htmlFor="owner1" label="Owner 1" id="owner1" name="owner1" onChange={ownerOne} checked={isOwnerOne} />
                <CheckField htmlFor="owner2" label="Owner 2" id="owner2" name="owner2" onChange={ownerTwo} checked={isOwnerTwo} />
                <CheckField htmlFor="owner3" label="Owner 3" id="owner3" name="owner3" onChange={ownerThree} checked={isOwnerThree} />
                <CheckField htmlFor="owner4" label="Owner 4" id="owner4" name="owner4" onChange={ownerFour} checked={isOwnerFour} />

                <CheckField htmlFor="dtc" label="DTC - First Check" id="dtc" name="dtc" onChange={dtcCheck} checked={isDtcCheck} />
                <CheckField htmlFor="dca" label="DCA - Second Check" id="dca" name="dca" onChange={dcaCheck} checked={isDcaCheck} />
                <CheckField htmlFor="thirdDca" label="DCA - Third Check" id="thirdDca" name="thirdDca" onChange={thirdCheck} checked={isThirdCheck} />

            </div>




        </>
    )
}



export default SingleMortgage
