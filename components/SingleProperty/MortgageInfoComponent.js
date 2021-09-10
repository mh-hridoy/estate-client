import { useEffect } from 'react'
import { Row, Col, Form, Button, Collapse } from 'antd'
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
import initVal from '../../utils/mortgageInitVal'

const MortgageInfoComponent = ({ mortgageInfo, data }) => {

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
    const initialVal = initVal(data)

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

    useEffect(() => {
        if (data.firstmortgageInfo.amortizationView.type) {
            seamortizationViewVal(data.firstmortgageInfo.amortizationView.type)
        }



        if (data.firstmortgageInfo.modA.type) {
            setmodAView(data.firstmortgageInfo.modA.type)

        }

        if (data.firstmortgageInfo.subA.type) {
            setsubAView(data.firstmortgageInfo.subA.type)

        }

        if (data.firstmortgageInfo.foreclosureResult.type) {
            setFResults(data.firstmortgageInfo.foreclosureResult.type)

        }

    }, [data.firstmortgageInfo.amortizationView.type, data.firstmortgageInfo.modA.type, data.firstmortgageInfo.subA.type,
    data.firstmortgageInfo.foreclosureResult.type])



    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={mortgageInfo} layout="vertical" className={styles.searchForm} onFinish={mortgageFinish} initialValues={initialVal}  >
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
                                        FResultsVal={FResultsVal}
                                        isAmortizeView={data.firstmortgageInfo.amortizationView.type}
                                        isModAview={data.firstmortgageInfo.modA.type}
                                        isSubAview={data.firstmortgageInfo.subA.type}
                                        isfClView={data.firstmortgageInfo.foreclosureResult.type}

                                    />

                                </Panel>

                                <Panel header="Second Lien" key="11">
                                    <SecondMortgage viewAmort={data.secondMortgageInfo.amortizationView.type} viewModA={data.secondMortgageInfo.modA.type} viewSubA={data.secondMortgageInfo.subA.type} fclView={data.secondMortgageInfo.foreclosureResult.type} />

                                </Panel>

                                <Panel header="Third Lien" key="12">
                                    <ThirdMortgage viewAmort={data.thirdMortgageInfo.amortizationView.type} viewModA={data.thirdMortgageInfo.modA.type} viewSubA={data.thirdMortgageInfo.subA.type} fclView={data.thirdMortgageInfo.foreclosureResult.type} />

                                </Panel>

                                <Panel header="HOA Lien" key="13">
                                    <HoaMortgage viewFcl={data.hoaLien.foreclosureResult.type} viewRedemp={data.hoaLien.redemptionInfo.type} />

                                </Panel>

                                <Panel header="TAX Lien" key="14">
                                    <TaxMortgage viewFcl={data.taxLien.foreclosureResult.type} viewRedemp={data.taxLien.redemptionInfo.type} />

                                </Panel>

                                <Panel header="Other Lien" key="15">
                                    <OtherMortgage viewRedemp={data.otherMortgageInfo.redemptionInfo.type}  />

                                </Panel>

                            </Collapse>
                        </Col>

                        <Col xs={24} style={{ position: "sticky", bottom: "20px" }} >
                            <Button
                                type="primary"
                                style={{ width: "170px", marginTop: "20px", borderRadius: "15px" }}>
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
