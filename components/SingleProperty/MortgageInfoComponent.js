import { Row, Col, Form, Button, Collapse } from 'antd'
import styles from '../../styles/search.module.css'
import InputWithSuffix from './utilsComp/InputWithSuffix';
import CheckField from './utilsComp/CheckField';
import SingleMortgage from './utilsComp/SingleMortgage';
import HoaMortgage from './utilsComp/HoaMortgage';
import TaxMortgage from './utilsComp/TaxMortgage';
import OtherMortgage from './utilsComp/OtherMortgage';
import { useState, useEffect } from 'react'
import useHttp from '../../utils/useHttp'
import { useSelector } from 'react-redux';
import moment from 'moment'

const MortgageInfoComponent = ({ data }) => {
    const [firstMortgageForm] = Form.useForm()
    const [secondMortgageForm] = Form.useForm()
    const [thirdMortgageForm] = Form.useForm()
    const [isManualSearch, setIsManualSearch] = useState(false)
    const [isNoActiveLien, setIsNoActiveLien] = useState(false)
    const [headerValue, setHeaderValue] = useState(null)
    const [sendHeaderReq, setSendHeaderReq] = useState(false)
    const propertyId = useSelector((state) => state.property.propertyId)

    const [firstMortgageVal, setFirstMortgageVal] = useState(null)
    const [secondMortgageVal, setSecondMortgageVal] = useState(null)
    const [thirdMortgageVal, setThirdMortgageVal] = useState(null)

    const [isFLoading, setIsFLoading] = useState(false)
    const [isSLoading, setIsSLoading] = useState(false)
    const [isTLoading, setIsTLoading] = useState(false)


    const mortgageHeaderVal = {
        countyRODURL: data.countyRODURL,
        manualSearch: data.manualSearch,
        noActiveMortgageLien: data.noActiveMortgageLien,
    }



    const checkManualSearch = (e) => {
        setIsManualSearch(e.target.checked)
    }
    const checkNoActiveLien = (e) => {
        setIsNoActiveLien(e.target.checked)
    }

    const { Panel } = Collapse

    const [mortgageHeaderInfo] = Form.useForm()


    const mortgageHeaderFinish = (values) => {
        console.log(values)
        setHeaderValue(values)
        setSendHeaderReq((prev) => ({ sendHeaderReq: !prev }))
    }

    const { isLoading } = useHttp(sendHeaderReq, `http://localhost:5000/api/update-property/${propertyId}`, "put", headerValue)

    const firstMortgageHandler = (values) => {
        setFirstMortgageVal(values)
        setIsFLoading((prev) => ({ isFLoading: !prev }))
        // console.log(values)
    }
    useEffect(() => {
        if (isFLoading && firstMortgageVal) {
            firstMortgageVal.firstmortgageInfo.dateRecorded = firstMortgageVal.firstmortgageInfo.dateRecorded && moment(firstMortgageVal.firstmortgageInfo.dateRecorded).toISOString()

            firstMortgageVal.firstmortgageInfo.maturityDate = firstMortgageVal.firstmortgageInfo.maturityDate && moment(firstMortgageVal.firstmortgageInfo.maturityDate).toISOString()

            firstMortgageVal.firstmortgageInfo.strDate = firstMortgageVal.firstmortgageInfo.strDate && moment(firstMortgageVal.firstmortgageInfo.strDate).toISOString()

            firstMortgageVal.firstmortgageInfo.modADate = firstMortgageVal.firstmortgageInfo.modADate && moment(firstMortgageVal.firstmortgageInfo.modADate).toISOString()

            firstMortgageVal.firstmortgageInfo.modAmaturityDate = firstMortgageVal.firstmortgageInfo.modAmaturityDate && moment(firstMortgageVal.firstmortgageInfo.modAmaturityDate).toISOString()

            firstMortgageVal.firstmortgageInfo.subADate = firstMortgageVal.firstmortgageInfo.subADate && moment(firstMortgageVal.firstmortgageInfo.subADate).toISOString()

            firstMortgageVal.firstmortgageInfo.trDeedDate = firstMortgageVal.firstmortgageInfo.trDeedDate && moment(firstMortgageVal.firstmortgageInfo.trDeedDate).toISOString()
        }

    }, [isFLoading && firstMortgageVal])



    const { isLoading: isFMloading } = useHttp(isFLoading, `http://localhost:5000/api/update-property/${propertyId}`, "put", firstMortgageVal)

    // console.log(firstMortgageVal)
    const secondMortgageHandler = (values) => {
        setSecondMortgageVal(values)
        setIsSLoading((prev) => ({ isSLoading: !prev }))
    }
    useEffect(() => {
        if (isSLoading && secondMortgageVal) {
            secondMortgageVal.secondMortgageInfo.dateRecorded = secondMortgageVal.secondMortgageInfo.dateRecorded && moment(secondMortgageVal.secondMortgageInfo.dateRecorded).toISOString()

            secondMortgageVal.secondMortgageInfo.maturityDate = secondMortgageVal.secondMortgageInfo.maturityDate && moment(secondMortgageVal.secondMortgageInfo.maturityDate).toISOString()

            secondMortgageVal.secondMortgageInfo.strDate = secondMortgageVal.secondMortgageInfo.strDate && moment(secondMortgageVal.secondMortgageInfo.strDate).toISOString()

            secondMortgageVal.secondMortgageInfo.modADate = secondMortgageVal.secondMortgageInfo.modADate && moment(secondMortgageVal.secondMortgageInfo.modADate).toISOString()

            secondMortgageVal.secondMortgageInfo.modAmaturityDate = secondMortgageVal.secondMortgageInfo.modAmaturityDate && moment(secondMortgageVal.secondMortgageInfo.modAmaturityDate).toISOString()

            secondMortgageVal.secondMortgageInfo.subADate = secondMortgageVal.secondMortgageInfo.subADate && moment(secondMortgageVal.secondMortgageInfo.subADate).toISOString()

            secondMortgageVal.secondMortgageInfo.trDeedDate = secondMortgageVal.secondMortgageInfo.trDeedDate && moment(secondMortgageVal.secondMortgageInfo.trDeedDate).toISOString()
        }

    }, [isSLoading && secondMortgageVal])

    const { isLoading: isSMloading } = useHttp(isSLoading, `http://localhost:5000/api/update-property/${propertyId}`, "put", secondMortgageVal)

    const thirdMortgageHandler = (values) => {
        setThirdMortgageVal(values)
        setIsTLoading((prev) => ({ isTLoading: !prev }))
    }
    useEffect(() => {
        if (isTLoading && thirdMortgageVal) {
            thirdMortgageVal.thirdMortgageInfo.dateRecorded = thirdMortgageVal.thirdMortgageInfo.dateRecorded && moment(thirdMortgageVal.thirdMortgageInfo.dateRecorded).toISOString()

            thirdMortgageVal.thirdMortgageInfo.maturityDate = thirdMortgageVal.thirdMortgageInfo.maturityDate && moment(thirdMortgageVal.thirdMortgageInfo.maturityDate).toISOString()

            thirdMortgageVal.thirdMortgageInfo.strDate = thirdMortgageVal.thirdMortgageInfo.strDate && moment(thirdMortgageVal.thirdMortgageInfo.strDate).toISOString()

            thirdMortgageVal.thirdMortgageInfo.modADate = thirdMortgageVal.thirdMortgageInfo.modADate && moment(thirdMortgageVal.thirdMortgageInfo.modADate).toISOString()

            thirdMortgageVal.thirdMortgageInfo.modAmaturityDate = thirdMortgageVal.thirdMortgageInfo.modAmaturityDate && moment(thirdMortgageVal.thirdMortgageInfo.modAmaturityDate).toISOString()

            thirdMortgageVal.thirdMortgageInfo.subADate = thirdMortgageVal.thirdMortgageInfo.subADate && moment(thirdMortgageVal.thirdMortgageInfo.subADate).toISOString()

            thirdMortgageVal.thirdMortgageInfo.trDeedDate = thirdMortgageVal.thirdMortgageInfo.trDeedDate && moment(thirdMortgageVal.thirdMortgageInfo.trDeedDate).toISOString()
        }

    }, [isTLoading && thirdMortgageVal])

    const { isLoading: isTMloading } = useHttp(isTLoading, `http://localhost:5000/api/update-property/${propertyId}`, "put", thirdMortgageVal)

    const firstMData = data.firstmortgageInfo
    firstMData.dateRecorded = firstMData.dateRecorded && moment(firstMData.dateRecorded)
    firstMData.maturityDate = firstMData.maturityDate && moment(firstMData.maturityDate)
    firstMData.strDate = firstMData.strDate && moment(firstMData.strDate)
    firstMData.modADate = firstMData.modADate && moment(firstMData.modADate)
    firstMData.modAmaturityDate = firstMData.modAmaturityDate && moment(firstMData.modAmaturityDate)
    firstMData.subADate = firstMData.subADate && moment(firstMData.subADate)
    firstMData.trDeedDate = firstMData.trDeedDate && moment(firstMData.trDeedDate)

    const secondMData = data.secondMortgageInfo
    secondMData.dateRecorded = secondMData.dateRecorded && moment(secondMData.dateRecorded)
    secondMData.maturityDate = secondMData.maturityDate && moment(secondMData.maturityDate)
    secondMData.strDate = secondMData.strDate && moment(secondMData.strDate)
    secondMData.modADate = secondMData.modADate && moment(secondMData.modADate)
    secondMData.modAmaturityDate = secondMData.modAmaturityDate && moment(secondMData.modAmaturityDate)
    secondMData.subADate = secondMData.subADate && moment(secondMData.subADate)
    secondMData.trDeedDate = secondMData.trDeedDate && moment(secondMData.trDeedDate)

    const thirdMData = data.thirdMortgageInfo
    thirdMData.dateRecorded = thirdMData.dateRecorded && moment(thirdMData.dateRecorded)
    thirdMData.maturityDate = thirdMData.maturityDate && moment(thirdMData.maturityDate)
    thirdMData.strDate = thirdMData.strDate && moment(thirdMData.strDate)
    thirdMData.modADate = thirdMData.modADate && moment(thirdMData.modADate)
    thirdMData.modAmaturityDate = thirdMData.modAmaturityDate && moment(thirdMData.modAmaturityDate)
    thirdMData.subADate = thirdMData.subADate && moment(thirdMData.subADate)
    thirdMData.trDeedDate = thirdMData.trDeedDate && moment(thirdMData.trDeedDate)

    const correctedHoaVal = data.hoaLien
    correctedHoaVal.hoaLienDate = correctedHoaVal.hoaLienDate && moment(correctedHoaVal.hoaLienDate)
    correctedHoaVal.strDate = correctedHoaVal.strDate && moment(correctedHoaVal.strDate)
    correctedHoaVal.strDate = correctedHoaVal.strDate && moment(correctedHoaVal.strDate)
    correctedHoaVal.ccAndRsDate = correctedHoaVal.ccAndRsDate && moment(correctedHoaVal.ccAndRsDate)
    correctedHoaVal.affidavitDate = correctedHoaVal.affidavitDate && moment(correctedHoaVal.affidavitDate)
    correctedHoaVal.redemptionExpires = correctedHoaVal.redemptionExpires && moment(correctedHoaVal.redemptionExpires)
    correctedHoaVal.redemptionDate = correctedHoaVal.redemptionDate && moment(correctedHoaVal.redemptionDate)
    correctedHoaVal.hLienFileDate = correctedHoaVal.hLienFileDate && moment(correctedHoaVal.hLienFileDate)
    correctedHoaVal.trDeedDate = correctedHoaVal.trDeedDate && moment(correctedHoaVal.trDeedDate)

    const correctedTaxVal = data.taxLien
    correctedTaxVal.judgmentDate = correctedTaxVal.judgmentDate && moment(correctedTaxVal.judgmentDate)
    correctedTaxVal.affidavitDate = correctedTaxVal.affidavitDate && moment(correctedTaxVal.affidavitDate)
    correctedTaxVal.redemptionExpires = correctedTaxVal.redemptionExpires && moment(correctedTaxVal.redemptionExpires)
    correctedTaxVal.redemptionDate = correctedTaxVal.redemptionDate && moment(correctedTaxVal.redemptionDate)
    correctedTaxVal.trDeedDate = correctedTaxVal.trDeedDate && moment(correctedTaxVal.trDeedDate)
    correctedTaxVal.txLienFileDate = correctedTaxVal.txLienFileDate && moment(correctedTaxVal.txLienFileDate)
    correctedTaxVal.txLienFileDate = correctedTaxVal.txLienFileDate && moment(correctedTaxVal.txLienFileDate)

    const correctedOtherMVal = data.otherMortgageInfo
    correctedOtherMVal.dateRecorded = correctedOtherMVal.dateRecorded && moment(correctedOtherMVal.dateRecorded)
    correctedOtherMVal.affidavitDate = correctedOtherMVal.affidavitDate && moment(correctedOtherMVal.affidavitDate)
    correctedOtherMVal.redemptionExpires = correctedOtherMVal.redemptionExpires && moment(correctedOtherMVal.redemptionExpires)
    correctedOtherMVal.redemptionDate = correctedOtherMVal.redemptionDate && moment(correctedOtherMVal.redemptionDate)
    correctedOtherMVal.otherLienFileDate = correctedOtherMVal.otherLienFileDate && moment(correctedOtherMVal.otherLienFileDate)

    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={mortgageHeaderInfo} layout="vertical" className={styles.searchForm} onFinish={mortgageHeaderFinish} initialValues={mortgageHeaderVal}  >
                        <InputWithSuffix label="County ROD URL" htmlFor="countyRODURL" name="countyRODURL" id="countyRODURL" />
                        <CheckField label="Manual Search" htmlFor="manualSearch" name="manualSearch" id="manualSearch" onChange={checkManualSearch} checked={isManualSearch} />
                        <CheckField label="No Active Mortgage Lien" htmlFor="noActiveMortgageLien" name="noActiveMortgageLien" id="noActiveMortgageLien" onChange={checkNoActiveLien} checked={isNoActiveLien} />
                        <Col xs={12} sm={8} md={6} lg={4} >
                            <Button
                                type="primary"
                                loading={isLoading}
                                htmlType="submit"
                                style={{ width: "170px", borderRadius: "15px" }}>
                                Save Data
                            </Button>
                        </Col>
                    </Form>

                    <br />

                    <Col span={24} style={{ width: "100%", magin: "0px", padding: "0px" }} >
                        <Collapse defaultActiveKey={['10']}
                            expandIconPosition="right"
                            style={{ marginTop: "10px" }}
                            style={{ backgroundColor: "var(--optional-color)" }}

                        >

                            <Panel header="First Lien" key="10">
                                <SingleMortgage formName={firstMortgageForm} viewAmort={data.firstmortgageInfo.isAmortizationView} viewModA={data.firstmortgageInfo.isModA} viewSubA={data.firstmortgageInfo.isSubA} fclView={data.firstmortgageInfo.isForeclosureResult} data={{ firstmortgageInfo: firstMData }} onFinish={firstMortgageHandler}
                                    isLoading={isFMloading}
                                    name="firstmortgageInfo" />
                            </Panel>

                            <Panel header="Second Lien" key="11">
                                <SingleMortgage formName={secondMortgageForm} viewAmort={data.secondMortgageInfo.isAmortizationView} viewModA={data.secondMortgageInfo.isModA} viewSubA={data.secondMortgageInfo.isSubA} fclView={data.secondMortgageInfo.isForeclosureResult} data={{ secondMortgageInfo: secondMData }} onFinish={secondMortgageHandler} isLoading={isSMloading} name="secondMortgageInfo" />
                            </Panel>

                            <Panel header="Third Lien" key="12">
                                <SingleMortgage formName={thirdMortgageForm} viewAmort={data.thirdMortgageInfo.isAmortizationView} viewModA={data.thirdMortgageInfo.isModA} viewSubA={data.thirdMortgageInfo.isSubA} fclView={data.thirdMortgageInfo.isForeclosureResult} data={{ thirdMortgageInfo: thirdMData }} onFinish={thirdMortgageHandler} isLoading={isTMloading} name="thirdMortgageInfo" />
                            </Panel>


                            <Panel header="HOA Lien" key="13">
                                <HoaMortgage viewFcl={data.hoaLien.isForeclosureResult} viewRedemp={data.hoaLien.isRedemptionInfo} data={{ hoaLien: correctedHoaVal }} />
                            </Panel>

                            <Panel header="TAX Lien" key="14">
                                <TaxMortgage viewFcl={data.taxLien.isForeclosureResult} viewRedemp={data.taxLien.isRedemptionInfo} data={{ taxLien: correctedTaxVal }} />

                            </Panel>

                            <Panel header="Other Lien" key="15">
                                <OtherMortgage viewRedemp={data.otherMortgageInfo.isRedemptionInfo} data={{ otherMortgageInfo: correctedOtherMVal }} />

                                </Panel>

                            </Collapse>
                        </Col>

                </Col>

            </Row>

        </>
    )
}

export default MortgageInfoComponent
