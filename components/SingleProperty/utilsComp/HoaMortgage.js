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
    const [exMatchVal, setexMatchVal] = useState(false)

    const [hoaRedemVal, sethoaRedemVal] = useState(false)
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
            sethoaRedemVal(viewRedemp)

        }



    }, [viewFcl, viewRedemp])

    return (
        <>
            <div className="headerPortion" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <CheckField htmlFor="hLienFCL" label="HOA Lien Foreclosing" id="hLienFCL" name="hLienFCL" onChange={fLienFCL} checked={fLienVal} />
                <CheckField htmlFor="hNoStr" label="No STR | No APPT" id="hNoStr" name="hNoStr" onChange={fNoStr} checked={fNoStrVal} />
                <CheckField htmlFor="hfLien" label="Defective HOA Lien" id="hfLien" name="hfLien" onChange={dfLien} checked={dfLienVal} />


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
                <InputField label="HOA Name" htmlFor="hame" name="hame" id="hame" />
                <NumberField label="HOA Amount" htmlFor="hmount" name="hmount" id="hmount" />
                <DateField label="Date Recorded" htmlFor="hateRecorded" name="hateRecorded" id="hateRecorded" />
                <InputField label="HOA Book/Page" htmlFor="htBookPage" name="htBookPage" id="htBookPage" />
                <InputField label="Trustee Fees" htmlFor="hrusteeFees" name="hrusteeFees" id="hrusteeFees" />
                <InputField label="Trustee HOA" htmlFor="husteeHOA" name="husteeHOA" id="husteeHOA" />
                <NumberField label="Total Debt" htmlFor="hotalDebt" name="hotalDebt" id="hotalDebt" />
                <InputField label="STR Book/Page" htmlFor="htrBP" name="htrBP" id="htrBP" />
                <DateField label="STR Date" htmlFor="htrDate" name="htrDate" id="htrDate" />
                <InputField label="CC&Rs Instrument #" htmlFor="hInstrument" name="hInstrument" id="hInstrument" />
                <DateField label="CC&Rs Date" htmlFor="hDate" name="hDate" id="hDate" />

            </div>


            <div className="optional" style={{ display: "flex", flexDirection: "column" }}>

                <CheckField htmlFor="hoaRedemp" label="REDEMPTION INFO" id="hoaRedemp" name="hoaRedemp" onChange={hoaRedemView} checked={hoaRedemVal} />

                {hoaRedemVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <DateField label="Affidavit (APM) Date" htmlFor="hfDate" name="hfDate" id="hfDate" />
                        <InputField label="Tax Code" htmlFor="hCode" name="hCode" id="hCode" />
                        <DateField label="Redemption Expires" htmlFor="hdExp" name="hdExp" id="hdExp" />
                        <CheckField htmlFor="hddemOwner" label="Redeemed By Owner" id="hddemOwner" name="hddemOwner" onChange={exMatch} checked={exMatchVal} />
                        <InputField label="Redemption Notice Inst #" htmlFor="hdNotice" name="hdNotice" id="hdNotice" />
                        <DateField label="Redemption Date" htmlFor="hdNoticeDate" name="hdNoticeDate" id="hdNoticeDate" />


                    </div>}

                <CheckField htmlFor="hResults" label="FORECLOSURE RESULT" id="hResults" name="hResults" onChange={FResults} checked={FResultsVal} />
                {FResultsVal &&
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <InputField label="TRDeed Instrument #" htmlFor="hrDeedIns" name="hrDeedIns" id="hrDeedIns" />
                        <DateField label="TRDeed Date" htmlFor="hrDeedDate" name="hrDeedDate" id="hrDeedDate" />
                        <InputField label="Winning Bidder" htmlFor="hwinningBidder" name="hwinningBidder" id="hwinningBidder" />
                        <InputField label="Winning Bid" htmlFor="hinningBid" name="hinningBid" id="hinningBid" id="hinningBid" />
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
                <CheckField htmlFor="hwner1" label="Owner 1" id="hwner1" name="hwner1" onChange={ownerOne} checked={isOwnerOne} />
                <CheckField htmlFor="hwner2" label="Owner 2" id="hwner2" name="hwner2" onChange={ownerTwo} checked={isOwnerTwo} />
                <CheckField htmlFor="hwner3" label="Owner 3" id="hwner3" name="hwner3" onChange={ownerThree} checked={isOwnerThree} />
                <CheckField htmlFor="hwner4" label="Owner 4" id="hwner4" name="hwner4" onChange={ownerFour} checked={isOwnerFour} />

                <CheckField htmlFor="htc" label="DTC - First Check" id="htc" name="htc" onChange={dtcCheck} checked={isDtcCheck} />
                <CheckField htmlFor="hca" label="DCA - Second Check" id="hca" name="hca" onChange={dcaCheck} checked={isDcaCheck} />
                <CheckField htmlFor="hhirdDca" label="DCA - Third Check" id="hhirdDca" name="hhirdDca" onChange={thirdCheck} checked={isThirdCheck} />

            </div>




        </>
    )
}

export default HoaMortgage
