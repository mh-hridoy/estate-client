import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import useHttp from '../../../utils/useHttp'
import moment from 'moment'


const TaxMortgage = ({ viewFcl, viewRedemp, data }) => {

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

    const [taxVal, setTaxVal] = useState()
    const [sendRequest, setSendRequest] = useState(false)
    const propertyId = useSelector((state) => state.property.propertyId)

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
            setRedempViewVal(viewRedemp)
        }
    }, [viewFcl, viewRedemp])

    const taxFormHandler = (values) => {
        setTaxVal(values)
        setSendRequest((prev) => ({ sendRequest: !prev }))
    }

    useEffect(() => {
        if (taxVal && sendRequest) {
            taxVal.taxLien.judgmentDate = taxVal.taxLien.judgmentDate && moment(taxVal.taxLien.judgmentDate).toISOString()
            taxVal.taxLien.affidavitDate = taxVal.taxLien.affidavitDate && moment(taxVal.taxLien.affidavitDate).toISOString()
            taxVal.taxLien.redemptionExpires = taxVal.taxLien.redemptionExpires && moment(taxVal.taxLien.redemptionExpires).toISOString()
            taxVal.taxLien.redemptionDate = taxVal.taxLien.redemptionDate && moment(taxVal.taxLien.redemptionDate).toISOString()
            taxVal.taxLien.trDeedDate = taxVal.taxLien.trDeedDate && moment(taxVal.taxLien.trDeedDate).toISOString()
            taxVal.taxLien.txLienFileDate = taxVal.taxLien.txLienFileDate && moment(taxVal.taxLien.txLienFileDate).toISOString()
        }
    }, [taxVal && sendRequest])

    const { isLoading } = useHttp(sendRequest, `http://localhost:5000/api/update-property/${propertyId}`, "put", taxVal)


    return (
        <>
            <Form form={taxForm} name="taxForm" layout="vertical" onFinish={taxFormHandler} initialValues={data} >
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <CheckField label="Tax Lien Foreclosing" name={["taxLien", "lienForeclosing"]} onChange={fLienFCL} checked={fLienVal} />
                    <CheckField label="Defective Notice of Sale" name={["taxLien", "defectiveLien"]} onChange={dfLien} checked={dfLienVal} />


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
                    <InputField label="Plaintiff" name={["taxLien", "plaintiff"]} />
                    <NumberField label="Judgment Amount" name={["taxLien", "judgmentAmount"]} />
                    <DateField label="Judgment Date" name={["taxLien", "judgmentDate"]} />
                    <InputField label="BP or Instrument#" name={["taxLien", "bpOrInstrument"]} />
                    <InputField label="Cause#" name={["taxLien", "txInstrument"]} />
                    <InputField label="Sheriff or Constable" name={["taxLien", "sheriffOrConstable"]} />

            </div>


            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                    <CheckField label="REDEMPTION INFO" onChange={taxRedempTionView} checked={redempViewVal} name={["taxLien", "isRedemptionInfo"]} />

                {redempViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <DateField label="Affidavit (APM) Date" name={["taxLien", "affidavitDate"]} />
                        <InputField label="Tax Code" name={["taxLien", "taxCode"]} />
                        <DateField label="Redemption Expires" name={["taxLien", "redemptionExpires"]} />
                        <CheckField label="Redeemed By Owner" name={["taxLien", "redeemedByOwner"]} onChange={exMatch} checked={exMatchVal} />
                        <InputField label="Redemption Notice Inst #" name={["taxLien", "redemptionNoticeInst"]} />
                        <DateField label="Redemption Date" name={["taxLien", "redemptionDate"]} />


                    </div>}

                    <CheckField label="FORECLOSURE RESULT" name={["taxLien", "isForeclosureResult"]} onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" name={["taxLien", "trDeedInstrument"]} />
                        <DateField label="TRDeed Date" name={["taxLien", "trDeedDate"]} />
                        <InputField label="Winning Bidder" name={["taxLien", "winningBidder"]} />
                        <NumberField label="Winning Bid" name={["taxLien", "winningbid"]} />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                        <InputField label="File Name" name={["taxLien", "txLienFile"]} />

                    <Col xs={12} sm={8} md={4} >
                            <Item label="Date : " name={["taxLien", "txLienFileDate"]}  >
                                <DatePicker placeholder="Select Date" style={{ width: "100%" }} />
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
                    <CheckField label="Owner 1" name={["taxLien", "owner1"]} onChange={ownerOne} checked={isOwnerOne} />
                    <CheckField label="Owner 2" name={["taxLien", "owner2"]} onChange={ownerTwo} checked={isOwnerTwo} />
                    <CheckField label="Owner 3" name={["taxLien", "owner3"]} onChange={ownerThree} checked={isOwnerThree} />
                    <CheckField label="Owner 4" name={["taxLien", "owner4"]} onChange={ownerFour} checked={isOwnerFour} />

                    <CheckField label="DTC - First Check" name={["taxLien", "isDtcFirstCheck"]} onChange={dtcCheck} checked={isDtcCheck} />
                    <CheckField label="DCA - Second Check" name={["taxLien", "isDcaSecondCheck"]} onChange={dcaCheck} checked={isDcaCheck} />
                    <CheckField label="DCA - Third Check" name={["taxLien", "isDcaFinalCheck"]} onChange={thirdCheck} checked={isThirdCheck} />

                </div>

                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button htmlType="submit" type="primary" loading={isLoading} >Save Data</Button>
                </Col>

            </Form>

        </>
    )
}

export default TaxMortgage;
