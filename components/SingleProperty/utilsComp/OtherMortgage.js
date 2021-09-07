import CheckField from "./CheckField"
import { Button, Col, Upload, Form, DatePicker } from 'antd'
import InputField from "./InputField"
import NumberField from "./NumberField"
import DateField from "./DateField"
import { UploadOutlined } from '@ant-design/icons'
import { useState } from "react"


const OtherMortgage = () => {

    const [exMatchVal, setexMatchVal] = useState(false)

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


    const exMatch = (e) => {
        setexMatchVal(e.target.checked)
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


            <div className="details" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <InputField label="Lender" htmlFor="otherLender" name="plaitiff" id="plaitiff" />
                <NumberField label="Lien Amount" htmlFor="otherAmount" name="otherAmount" id="otherAmount" />
                <DateField label="Date Recorded" htmlFor="otherDate" name="otherDate" id="otherDate" />
                <InputField label="Book/Page or Instrument #" htmlFor="otherBP" name="otherBP" id="otherBP" />
                <InputField label="Assignment BP" htmlFor="otherAssignment" name="otherAssignment" id="otherAssignment" />

            </div>



            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                <CheckField htmlFor="otherubAView" label="SUBORDINATION AGREEMENT (SUB/A)" id="otherubAView" name="otherubAView" onChange={subAView} checked={subAViewVal} />

                {subAViewVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <DateField label="Affidavit (APM) Date" htmlFor="otherfDate" name="otherfDate" id="otherfDate" />
                        <InputField label="Tax Code" htmlFor="otherCode" name="otherCode" id="otherCode" />
                        <DateField label="Redemption Expires" htmlFor="otherdExp" name="otherdExp" id="otherdExp" />
                        <CheckField htmlFor="otherddemOwner" label="Redeemed By Owner" id="otherddemOwner" name="otherddemOwner" onChange={exMatch} checked={exMatchVal} />
                        <InputField label="Redemption Notice Inst #" htmlFor="otherdNotice" name="otherdNotice" id="otherdNotice" />
                        <DateField label="Redemption Date" htmlFor="otherdNoticeDate" name="otherdNoticeDate" id="otherdNoticeDate" />


                    </div>}

                <CheckField htmlFor="otherResults" label="FORECLOSURE RESULT" id="otherResults" name="otherResults" onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" htmlFor="otherrDeedIns" name="otherrDeedIns" id="otherrDeedIns" />
                        <DateField label="TRDeed Date" htmlFor="otherrDeedDate" name="otherrDeedDate" id="otherrDeedDate" />
                        <InputField label="Winning Bidder" htmlFor="otherwinningBidder" name="otherwinningBidder" id="otherwinningBidder" />
                        <InputField label="Winning Bid" htmlFor="otherinningBid" name="otherinningBid" id="otherinningBid" id="otherinningBid" />
                    </div>}

            </div>

            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <InputField label="File Name" htmlFor="otherLienFile" name="otherLienFile" id="otherLienFile" />

                    <Col xs={12} sm={8} md={4} >
                        <Item label="Date : " htmlFor="otherLienFileDate" name="otherLienFileDate"  >
                            <DatePicker placeholder="Select Date" id="otherLienFileDate" style={{ border: "1px solid black", width: "100%" }} />
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
                <CheckField htmlFor="otherwner1" label="Owner 1" id="otherwner1" name="otherwner1" onChange={ownerOne} checked={isOwnerOne} />
                <CheckField htmlFor="otherwner2" label="Owner 2" id="otherwner2" name="otherwner2" onChange={ownerTwo} checked={isOwnerTwo} />
                <CheckField htmlFor="otherwner3" label="Owner 3" id="otherwner3" name="otherwner3" onChange={ownerThree} checked={isOwnerThree} />
                <CheckField htmlFor="otherwner4" label="Owner 4" id="otherwner4" name="otherwner4" onChange={ownerFour} checked={isOwnerFour} />

                <CheckField htmlFor="othertc" label="DTC - First Check" id="othertc" name="othertc" onChange={dtcCheck} checked={isDtcCheck} />
                <CheckField htmlFor="otherca" label="DCA - Second Check" id="otherca" name="otherca" onChange={dcaCheck} checked={isDcaCheck} />
                <CheckField htmlFor="otherhirdDca" label="DCA - Third Check" id="otherhirdDca" name="otherhirdDca" onChange={thirdCheck} checked={isThirdCheck} />

            </div>




        </>
    )
}

export default OtherMortgage
