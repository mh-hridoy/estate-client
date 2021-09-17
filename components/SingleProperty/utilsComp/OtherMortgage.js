import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react"


const OtherMortgage = ({ viewRedemp }) => {

    const [exMatchVal, setexMatchVal] = useState(false)

    const [otherRedemView, setotherRedemView] = useState(false)

    const [isOwnerOne, setisOwnerOne] = useState(false)
    const [isOwnerTwo, setisOwnerTwo] = useState(false)
    const [isOwnerThree, setisOwnerThree] = useState(false)
    const [isOwnerFour, setisOwnerFour] = useState(false)
    const [isDtcCheck, setisDtcCheck] = useState(false)
    const [isDcaCheck, setisDcaCheck] = useState(false)
    const [isThirdCheck, setisThirdCheck] = useState(false)

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
    const dtcCheck = () => {
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
        console.log(values)
    }

    return (
        <>
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

            <Form form={otherMortgageForm} name="otherMortgageForm" layout="vertical" onFinish={otherMortgageHandler} ></Form>
            <div className="details" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <InputField label="Lender" htmlFor="otherLender" name="lender" id="otherLender" />
                <NumberField label="Lien Amount" htmlFor="otherAmount" name="lienAmount" id="otherAmount" />
                <DateField label="Date Recorded" htmlFor="otherDate" name="dateRecorded" id="otherDate" />
                <InputField label="Book/Page or Instrument #" htmlFor="otherBP" name="dtBookPage" id="otherBP" />
                <InputField label="Assignment BP" htmlFor="otherAssignment" name="assignmentBookPage" id="otherAssignment" />
            </div>

            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                <CheckField htmlFor="otherubAView" label="REDEMPTION INFO" id="otherRedemp" name="isRedemptionInfo" onChange={otherRedem} checked={otherRedemView} />

                {otherRedemView &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <DateField label="Affidavit (APM) Date" htmlFor="otherfDate" name="affidavitDate" id="otherfDate" />
                    <InputField label="Tax Code" htmlFor="otherCode" name="taxCode" id="otherCode" />
                    <DateField label="Redemption Expires" htmlFor="otherdExp" name="redemptionExpires" id="otherdExp" />
                    <CheckField htmlFor="otherddemOwner" label="Redeemed By Owner" id="otherddemOwner" name="redeemedByOwner" onChange={exMatch} checked={exMatchVal} />
                    <InputField label="Redemption Notice Inst #" htmlFor="otherdNotice" name="redemptionNoticeInst" id="otherdNotice" />
                    <DateField label="Redemption Date" htmlFor="otherdNoticeDate" name="redemptionDate" id="otherdNoticeDate" />


                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <InputField label="File Name" htmlFor="otherLienFile" name="otherLienFile" id="otherLienFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="otherLienFileDate" name="otherLienFileDate"  >
                            <DatePicker placeholder="Select Date" id="otherLienFileDate" style={{ width: "100%" }} />
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
                <CheckField htmlFor="otherwner1" label="Owner 1" id="otherwner1" name="owner1" onChange={ownerOne} checked={isOwnerOne} />
                <CheckField htmlFor="otherwner2" label="Owner 2" id="otherwner2" name="owner2" onChange={ownerTwo} checked={isOwnerTwo} />
                <CheckField htmlFor="otherwner3" label="Owner 3" id="otherwner3" name="owner3" onChange={ownerThree} checked={isOwnerThree} />
                <CheckField htmlFor="otherwner4" label="Owner 4" id="otherwner4" name="owner4" onChange={ownerFour} checked={isOwnerFour} />

                <CheckField htmlFor="othertc" label="DTC - First Check" id="othertc" name="isDtcFirstCheck" onChange={dtcCheck} checked={isDtcCheck} />
                <CheckField htmlFor="otherca" label="DCA - Second Check" id="otherca" name="isDcaSecondCheck" onChange={dcaCheck} checked={isDcaCheck} />
                <CheckField htmlFor="otherhirdDca" label="DCA - Third Check" id="otherhirdDca" name="isDcaFinalCheck" onChange={thirdCheck} checked={isThirdCheck} />

            </div>

            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                <Button htmlType="submit" type="primary" >Save Data</Button>
            </Col>
        </>
    )
}

export default OtherMortgage;
