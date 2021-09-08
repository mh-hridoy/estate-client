import { Row, Col, Form, Select, Input, Button, Collapse } from 'antd'
import styles from '../../styles/search.module.css'
import InputWithSuffix from './utilsComp/InputWithSuffix';
import CheckField from './utilsComp/CheckField';
import SingleMortgage from './utilsComp/SingleMortgage';
import { useState } from 'react';
import SecondMortgage from './utilsComp/SecondMortgage';
import ThirdMortgage from './utilsComp/ThirdMortgage';
import HoaMortgage from './utilsComp/HoaMortgage';
import TaxMortgage from './utilsComp/TaxMortgage';
import OtherMortgage from './utilsComp/OtherMortgage';




const MortgageInfoComponent = ({ mortgageInfo }) => {

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

    const { Panel } = Collapse


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

    const mortgageFinish = (values) => {
        console.log(values)
    }

    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={mortgageInfo} layout="vertical" className={styles.searchForm} onFinish={mortgageFinish}  >
                        <InputWithSuffix label="County ROD URL" htmlFor="rodUrl" name="rodUrl" id="rodUrl" />
                        <CheckField label="Manual Search" htmlFor="manualSearch" name="manualSearch" id="manualSearch" />
                        <CheckField label="No Active Mortgage Lien" htmlFor="noActiveLien" name="noActiveLien" id="noActiveLien" />

                        <br />

                        <Col span={24} style={{ width: "100%", magin: "0px", padding: "0px" }} >
                            <Collapse defaultActiveKey={['10']}
                                expandIconPosition="right"
                                style={{ marginTop: "10px" }}
                                style={{ backgroundColor: "var(--optional-color)" }}

                            >

                                <Panel header="First Lien" key="10">
                                    <SingleMortgage fLienFCL={fLienFCL} fNoStr={fNoStr} dfLien={dfLien} exMatch={exMatch} dtAddressMatch={dtAddressMatch} attorneyFee={attorneyFee} amortizationView={amortizationView} modAView={modAView} subAView={subAView} FResults={FResults} fLienVal={fLienVal}
                                        fNoStrVal={fNoStrVal}
                                        dfLienVal={dfLienVal}
                                        exMatchVal={exMatchVal}
                                        dtAddressMatchVal={dtAddressMatchVal}
                                        attorneyFeeVal={attorneyFeeVal}
                                        amortizationViewVal={amortizationViewVal}
                                        modAViewVal={modAViewVal}
                                        subAViewVal={subAViewVal}
                                        FResultsVal={FResultsVal} />

                                </Panel>

                                <Panel header="Second Lien" key="11">
                                    <SecondMortgage />

                                </Panel>

                                <Panel header="Third Lien" key="12">
                                    <ThirdMortgage />

                                </Panel>

                                <Panel header="HOA Lien" key="13">
                                    <HoaMortgage />

                                </Panel>

                                <Panel header="TAX Lien" key="14">
                                    <TaxMortgage />

                                </Panel>

                                <Panel header="Other Lien" key="15">
                                    <OtherMortgage />

                                </Panel>

                            </Collapse>
                        </Col>

                        <Col xs={24} style={{ position: "sticky", bottom: "20px" }} >
                            <Button
                                type="primary"
                                style={{ width: "170px", borderRadius: "15px" }}>
                                Save Mortgage Data
                            </Button>
                        </Col>


                    </Form>

                </Col>

            </Row>

        </>
    )
}

export default MortgageInfoComponent
