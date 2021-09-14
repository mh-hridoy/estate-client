import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react"


const TaxMortgage = ({ viewFcl, viewRedemp }) => {

    const [fLienVal, setfLienVal] = useState(false)
    const [dfLienVal, setdfLienVal] = useState(false)
    const [exMatchVal, setexMatchVal] = useState(false)

    const [redempViewVal, setRedempViewVal] = useState(false)
    const [FResultsVal, setFResults] = useState(false)

    const [isOwnerOne, setisOwnerOne] = useState(false)
    const [isOwnerTwo, setisOwnerTwo] = useState(false)
    const [isOwnerThree, setisOwnerThree] = useState(false)
    const [isOwnerFour, setisOwnerFour] = useState(false)
    const [isDtcCheck, setisDtcCheck] = useState(false)
    const [isDcaCheck, setisDcaCheck] = useState(false)
    const [isThirdCheck, setisThirdCheck] = useState(false)

    const { Item } = Form
    const [taxForm] = Form.useForm()

    //declare valriables for checked comp.

    const fLienFCL = (e) => {
        setfLienVal(e.target.checked)
    }


    const dfLien = (e) => {
        setdfLienVal(e.target.checked)
    }

    const exMatch = (e) => {
        setexMatchVal(e.target.checked)
    }



    const taxRedempTionView = (e) => {
        setRedempViewVal(e.target.checked)
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
            setRedempViewVal(viewRedemp)

        }



    }, [viewFcl, viewRedemp])

    const taxFormHandler = (values) => {
        console.log(values)
    }


    return (
        <>
            <Form form={taxForm} name="taxForm" label="vertical" onFinish={taxFormHandler} >
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CheckField htmlFor="txLienFCL" label="Tax Lien Foreclosing" id="txLienFCL" name="lienForeclosing" onChange={fLienFCL} checked={fLienVal} />
                    <CheckField htmlFor="txfLien" label="Defective Notice of Sale" id="txfLien" name="defectiveLien" onChange={dfLien} checked={dfLienVal} />


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
                    <InputField label="Plaintiff" htmlFor="plaitiff" name="plaintiff" id="plaitiff" />
                    <NumberField label="Judgment Amount" htmlFor="jdAmount" name="judgmentAmount" id="jdAmount" />
                    <DateField label="Judgment Date" htmlFor="txateRecorded" name="judgmentDate" id="txateRecorded" />
                    <InputField label="BP or Instrument#" htmlFor="txtBookPage" name="bpOrInstrument" id="txtBookPage" />
                    <InputField label="Cause#" htmlFor="txInstrument" name="txInstrument" id="case" />
                    <InputField label="Sheriff or Constable" htmlFor="shConstable" name="sheriffOrConstable" id="shConstable" />

            </div>


            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                    <CheckField htmlFor="txubAView" label="REDEMPTION INFO" id="txubAView" name="isRedemptionInfo" onChange={taxRedempTionView} checked={redempViewVal} />

                {redempViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <DateField label="Affidavit (APM) Date" htmlFor="txfDate" name="affidavitDate" id="txfDate" />
                        <InputField label="Tax Code" htmlFor="txCode" name="taxCode" id="txCode" />
                        <DateField label="Redemption Expires" htmlFor="txdExp" name="redemptionExpires" id="txdExp" />
                        <CheckField htmlFor="txddemOwner" label="Redeemed By Owner" id="txddemOwner" name="redeemedByOwner" onChange={exMatch} checked={exMatchVal} />
                        <InputField label="Redemption Notice Inst #" htmlFor="txdNotice" name="redemptionNoticeInst" id="txdNotice" />
                        <DateField label="Redemption Date" htmlFor="txdNoticeDate" name="redemptionDate" id="txdNoticeDate" />


                    </div>}

                    <CheckField htmlFor="txResults" label="FORECLOSURE RESULT" id="txResults" name="isForeclosureResult" onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" htmlFor="txrDeedIns" name="trDeedInstrument" id="txrDeedIns" />
                        <DateField label="TRDeed Date" htmlFor="txrDeedDate" name="trDeedDate" id="txrDeedDate" />
                        <InputField label="Winning Bidder" htmlFor="txwinningBidder" name="winningBidder" id="txwinningBidder" />
                        <InputField label="Winning Bid" htmlFor="txinningBid" name="winningbid" id="txinningBid" id="txinningBid" />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <InputField label="File Name" htmlFor="txLienFile" name="txLienFile" id="txLienFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="txLienFileDate" name="txLienFileDate"  >
                            <DatePicker placeholder="Select Date" id="txLienFileDate" style={{ width: "100%" }} />
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "10px" }} >

                        <Upload id="txLienFiles"
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
                    <CheckField htmlFor="txwner1" label="Owner 1" id="txwner1" name="owner1" onChange={ownerOne} checked={isOwnerOne} />
                    <CheckField htmlFor="txwner2" label="Owner 2" id="txwner2" name="owner2" onChange={ownerTwo} checked={isOwnerTwo} />
                    <CheckField htmlFor="txwner3" label="Owner 3" id="txwner3" name="owner3" onChange={ownerThree} checked={isOwnerThree} />
                    <CheckField htmlFor="txwner4" label="Owner 4" id="txwner4" name="owner4" onChange={ownerFour} checked={isOwnerFour} />

                    <CheckField htmlFor="txtc" label="DTC - First Check" id="txtc" name="isDtcFirstCheck" onChange={dtcCheck} checked={isDtcCheck} />
                    <CheckField htmlFor="txca" label="DCA - Second Check" id="txca" name="isDcaSecondCheck" onChange={dcaCheck} checked={isDcaCheck} />
                    <CheckField htmlFor="txhirdDca" label="DCA - Third Check" id="txhirdDca" name="isDcaFinalCheck" onChange={thirdCheck} checked={isThirdCheck} />

                </div>

                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button htmlType="submit" type="primary" >Save Data</Button>
                </Col>

            </Form>

        </>
    )
}

export default TaxMortgage;
