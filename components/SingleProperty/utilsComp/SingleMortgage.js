import { useEffect } from 'react'
import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState } from "react"


const SingleMortgage = ({ formName, viewAmort, viewModA, viewSubA, fclView, data, onFinish, isLoading, name }) => {



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
            <Form form={formName} name="firstMortgageForm" layout="vertical" onFinish={onFinish} initialValues={data}  >

            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CheckField label="Second Lien Foreclosing" name={[name, "lienForeclosing"]} onChange={fLienFCL} checked={fLienVal} />
                    <CheckField label="No STR | No APPT" name={[name, "noSTR"]} onChange={fNoStr} checked={fNoStrVal} />
                    <CheckField label="Defective Lien" name={[name, "defectiveLien"]} onChange={dfLien} checked={dfLienVal} />


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
                    <InputField label="Lender" name={[name, "lender"]} />
                    <NumberField label="Lien Amount" name={[name, "lienAmount"]} />
                    <DateField label="Date Recorded" name={[name, "dateRecorded"]} />
                    <InputField label="Instrument #" name={[name, "instrument"]} />
                    <InputField label="DT Book/Page" name={[name, "dtBookPage"]} />
                    <InputField label="Assignment BP" name={[name, "assignmentBookPage"]} />
                    <InputField label="Loan Type" name={[name, "loanType"]} />
                    <InputField label="Loan Term" name={[name, "loanTerm"]} />
                    <DateField label="Maturity Date" name={[name, "maturityDate"]} />
                    <InputField label="Right to Cure" name={[name, "rightToCure"]} />
                    <NumberField label="Trustee Fees" name={[name, "tursteeFee"]} />
                    <InputField label="Trustee" name={[name, "trustee"]} />
                    <InputField label="STR Book/Page" name={[name, "strBookPage"]} />
                    <DateField label="STR Date" name={[name, "strDate"]} />
                    <NumberField label="Loan Estimated Balance" name={[name, "loanEstimatedBalance"]} />
                    <NumberField label="Est Late Payments & Fees" name={[name, "estLatePaymentAndFees"]} />
                    <NumberField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" name={[name, "totalEstimatedDebt"]} />
                    <NumberField label="CMA/ARV Value" name={[name, "cmaArv"]} />
                    <NumberField label="Total Debt" name={[name, "totalDebt"]} />

            </div>

            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <CheckField label="Exhibit A match w/ the Legal Description in the NOS" name={[name, "legalDescMatch"]} onChange={exMatch} checked={exMatchVal} />
                    <CheckField label="DT & NOS property address both match" name={[name, "propertyAddressMatch"]} onChange={dtAddressMatch} checked={dtAddressMatchVal} />
                    <CheckField label="Reasonable Attorney Fees" name={[name, "resonableFees"]} onChange={attorneyFee} checked={attorneyFeeVal} />
            </div>

            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>
                    <CheckField label="AMORTIZATION View Calculation" name={[name, "isAmortizationView"]} onChange={amortizationView} checked={amortizationViewVal} />

                {amortizationViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <NumberField label="Annual Interest Rate %" name={[name, "amortAnnualInterestRate"]} />
                        <NumberField label="Monthly Payment" name={[name, "amortMonthlyPayment"]} />
                        <NumberField label="Monthly Principal Payment" name={[name, "monthlyPrincipalPayment"]} />
                        <NumberField label="Monthly Interest Payment" name={[name, "monthlyInterestPayment"]} />
                        <NumberField label="Estimated Equity" name={[name, "estimatedEquity"]} />

                    </div>
                }

                    <CheckField label="MODIFICATION AGREEMENT (MOD)" name={[name, "isModA"]} onChange={modAView} checked={modAViewVal} />
                {modAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="Modification Book/Page" name={[name, "modABookPage"]} />
                        <DateField label="Modification Date" name={[name, "modADate"]} />
                        <NumberField label="Modified Lien Amount" name={[name, "modALienAmount"]} />
                        <NumberField label="Modified Loan Term" name={[name, "modALoanTerm"]} />
                        <DateField label="Modification Maturity Date" name={[name, "modAmaturityDate"]} />
                        <NumberField label="Annual Interest %" name={[name, "annualInterestRate"]} />
                        <NumberField label="Monthly Payment $" name={[name, "monthlyPayment"]} />
                        <NumberField label="Loan Estimated Balance" name={[name, "loanEstBalance"]} />
                        <NumberField label="Est Late Payments and Fees" name={[name, "modAEstLatePaymentAndFees"]} />
                        <NumberField label="Total Estimated Debt w/ Late Payments & Attorney Fees $" name={[name, "modAtotalEstimatedDebt"]} />

                    </div>}

                    <CheckField label="SUBORDINATION AGREEMENT (SUB/A)" name={[name, "isSubA"]} onChange={subAView} checked={subAViewVal} />

                {subAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="SubA Book/Page" name={[name, "subABookPage"]} />
                        <DateField label="SubA Date" name={[name, "subADate"]} />
                        <InputField label="Lien Position" name={[name, "lienPosition"]} />

                    </div>}

                    <CheckField label="FORECLOSURE RESULT" name={[name, "isForeclosureResult"]} onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" name={[name, "trDeedInstrument"]} />
                        <DateField label="TRDeed Date" name={[name, "trDeedDate"]} />
                        <InputField label="Winning Bidder" name={[name, "winningBidder"]} />
                        <NumberField label="Winning Bid" name={[name, "winningbid"]} />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                        <InputField label="File Name" name={[name, "sfLienFile"]} />

                        <Col xs={12} sm={8} md={4} >
                            <Item label="Date : " name={[name, "sfLienFileDate"]} >
                                <DatePicker placeholder="Select Date" style={{ width: "100%" }} />
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

                        <div>
                        Files will be here

                    </div>

                    </Col>

            </Col>

            <div className="details" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CheckField label="Owner 1" name={[name, "owner1"]} onChange={ownerOne} checked={isOwnerOne} />
                    <CheckField label="Owner 2" name={[name, "owner2"]} onChange={ownerTwo} checked={isOwnerTwo} />
                    <CheckField label="Owner 3" name={[name, "owner3"]} onChange={ownerThree} checked={isOwnerThree} />
                    <CheckField label="Owner 4" name={[name, "owner4"]} onChange={ownerFour} checked={isOwnerFour} />

                    <CheckField label="DTC - First Check" name={[name, "isDtcFirstCheck"]} onChange={dtcCheck} checked={isDtcCheck} />
                    <CheckField label="DCA - Second Check" name={[name, "isDcaSecondCheck"]} onChange={dcaCheck} checked={isDcaCheck} />
                    <CheckField label="DCA - Third Check" name={[name, "isDcaFinalCheck"]} onChange={thirdCheck} checked={isThirdCheck} />
            </div>

                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button htmlType="submit" type="primary" loading={isLoading} >Save Data</Button>
                </Col>

            </Form>


        </>
    )
}

export default SingleMortgage;
