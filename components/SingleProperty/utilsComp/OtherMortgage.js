import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react"
import moment from "moment"
import useHttp from "../../../utils/useHttp"
import { useSelector } from 'react-redux'


const OtherMortgage = ({ viewRedemp, data }) => {

    const [exMatchVal, setexMatchVal] = useState(false)

    const [otherRedemView, setotherRedemView] = useState(false)

    const [isOwnerOne, setisOwnerOne] = useState(false)
    const [isOwnerTwo, setisOwnerTwo] = useState(false)
    const [isOwnerThree, setisOwnerThree] = useState(false)
    const [isOwnerFour, setisOwnerFour] = useState(false)
    const [isDtcCheck, setisDtcCheck] = useState(false)
    const [isDcaCheck, setisDcaCheck] = useState(false)
    const [isThirdCheck, setisThirdCheck] = useState(false)
    const [otherMValue, setOtherMValue] = useState()
    const [sendRequest, setSendRequest] = useState(false)

    const propertyId = useSelector((state) => state.property.propertyId)

    const { Item } = Form
    //declare valriables for checked comp.
    const [otherMortgageForm] = Form.useForm()

    const exMatch = (e) => {
        setexMatchVal(e.target.checked)
    }

    const otherRedem = (e) => {
        setotherRedemView(e.target.checked)
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
        if (viewRedemp) {
            setotherRedemView(viewRedemp)
        }



    }, [viewRedemp])

    const otherMortgageHandler = (values) => {
        setOtherMValue(values)
        setSendRequest((prev) => ({ sendRequest: !prev }))
    }

    useEffect(() => {
        if (otherMValue && sendRequest) {
            otherMValue.otherMortgageInfo.dateRecorded = otherMValue.otherMortgageInfo.dateRecorded && moment(otherMValue.otherMortgageInfo.dateRecorded).toISOString()
            otherMValue.otherMortgageInfo.affidavitDate = otherMValue.otherMortgageInfo.affidavitDate && moment(otherMValue.otherMortgageInfo.affidavitDate).toISOString()
            otherMValue.otherMortgageInfo.redemptionExpires = otherMValue.otherMortgageInfo.redemptionExpires && moment(otherMValue.otherMortgageInfo.redemptionExpires).toISOString()
            otherMValue.otherMortgageInfo.redemptionDate = otherMValue.otherMortgageInfo.redemptionDate && moment(otherMValue.otherMortgageInfo.redemptionDate).toISOString()
            otherMValue.otherMortgageInfo.otherLienFileDate = otherMValue.otherMortgageInfo.otherLienFileDate && moment(otherMValue.otherMortgageInfo.otherLienFileDate).toISOString()
        }
    }, [otherMValue && sendRequest])

    const { isLoading } = useHttp(sendRequest, `http://localhost:5000/api/update-property/${propertyId}`, "put", otherMValue)




    return (
        <>
            <Form form={otherMortgageForm} name="otherMortgageForm" layout="vertical" onFinish={otherMortgageHandler} initialValues={data}>

            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

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
                    <InputField label="Lender" name={["otherMortgageInfo", "lender"]} />
                    <NumberField label="Lien Amount" name={["otherMortgageInfo", "lienAmount"]} />
                    <DateField label="Date Recorded" name={["otherMortgageInfo", "dateRecorded"]} />
                    <InputField label="Book/Page or Instrument #" name={["otherMortgageInfo", "dtBookPage"]} />
                    <InputField label="Assignment BP" name={["otherMortgageInfo", "assignmentBookPage"]} />
            </div>

            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                    <CheckField label="REDEMPTION INFO" name={["otherMortgageInfo", "isRedemptionInfo"]} onChange={otherRedem} checked={otherRedemView} />

                {otherRedemView &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <DateField label="Affidavit (APM) Date" name={["otherMortgageInfo", "affidavitDate"]} />
                        <InputField label="Tax Code" name={["otherMortgageInfo", "taxCode"]} />
                        <DateField label="Redemption Expires" name={["otherMortgageInfo", "redemptionExpires"]} />
                        <CheckField label="Redeemed By Owner" name={["otherMortgageInfo", "redeemedByOwner"]} onChange={exMatch} checked={exMatchVal} />
                        <InputField label="Redemption Notice Inst #" name="redemptionNoticeInst" name={["otherMortgageInfo", "redemptionNoticeInst"]} />
                        <DateField label="Redemption Date" name={["otherMortgageInfo", "redemptionDate"]} />


                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                        <InputField label="File Name" name={["otherMortgageInfo", "otherLienFile"]} />

                    <Col xs={12} sm={8} md={4} >
                            <Item label="Date : " name={["otherMortgageInfo", "otherLienFileDate"]} >
                                <DatePicker placeholder="Select Date" style={{ width: "100%" }} />
                        </Item>
                    </Col>


                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "10px" }} >

                        <Upload id="otherLienFiles"
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
                    <CheckField label="Owner 1" name={["otherMortgageInfo", "owner1"]} onChange={ownerOne} checked={isOwnerOne} />
                    <CheckField label="Owner 2" name={["otherMortgageInfo", "owner2"]} onChange={ownerTwo} checked={isOwnerTwo} />
                    <CheckField label="Owner 3" name={["otherMortgageInfo", "owner3"]} onChange={ownerThree} checked={isOwnerThree} />
                    <CheckField label="Owner 4" name={["otherMortgageInfo", "owner4"]} onChange={ownerFour} checked={isOwnerFour} />

                    <CheckField label="DTC - First Check" name={["otherMortgageInfo", "isDtcFirstCheck"]} onChange={dtcCheck} checked={isDtcCheck} />
                    <CheckField label="DCA - Second Check" name={["otherMortgageInfo", "isDcaSecondCheck"]} onChange={dcaCheck} checked={isDcaCheck} />
                    <CheckField label="DCA - Third Check" name={["otherMortgageInfo", "isDcaFinalCheck"]} onChange={thirdCheck} checked={isThirdCheck} />

            </div>

            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                    <Button htmlType="submit" type="primary" loading={isLoading} >Save Data</Button>
                </Col>
            </Form>
        </>
    )
}

export default OtherMortgage;
