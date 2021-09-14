import { Row, Col, Form, Button, Collapse } from 'antd'
import styles from '../../styles/search.module.css'
import InputWithSuffix from './utilsComp/InputWithSuffix';
import CheckField from './utilsComp/CheckField';
import SingleMortgage from './utilsComp/SingleMortgage';
import HoaMortgage from './utilsComp/HoaMortgage';
import TaxMortgage from './utilsComp/TaxMortgage';
import OtherMortgage from './utilsComp/OtherMortgage';

const MortgageInfoComponent = ({ data }) => {


    const [firstMortgageForm] = Form.useForm()
    const [secondMortgageForm] = Form.useForm()
    const [thirdMortgageForm] = Form.useForm()

    const mortgageHeaderVal = {
        rodUrl: data.countyRODURL,
        manualSearch: data.manualSearch,
        noActiveLien: data.noActiveMortgageLien,
    }


    const { Panel } = Collapse

    const [mortgageHeaderInfo] = Form.useForm()


    const mortgageHeaderFinish = (values) => {
        console.log(values)
    }


    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={mortgageHeaderInfo} layout="vertical" className={styles.searchForm} onFinish={mortgageHeaderFinish} initialValues={mortgageHeaderVal}  >
                        <InputWithSuffix label="County ROD URL" htmlFor="rodUrl" name="rodUrl" id="rodUrl" />
                        <CheckField label="Manual Search" htmlFor="manualSearch" name="manualSearch" id="manualSearch" />
                        <CheckField label="No Active Mortgage Lien" htmlFor="noActiveLien" name="noActiveLien" id="noActiveLien" />
                        <Col xs={12} sm={8} md={6} lg={4} >
                            <Button
                                type="primary"
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
                                <SingleMortgage formName={firstMortgageForm} viewAmort={data.firstmortgageInfo.isAmortizationView} viewModA={data.firstmortgageInfo.isModA} viewSubA={data.firstmortgageInfo.isSubA} fclView={data.firstmortgageInfo.isForeclosureResult} data={data.firstmortgageInfo} />
                            </Panel>

                            <Panel header="Second Lien" key="11">
                                <SingleMortgage formName={secondMortgageForm} viewAmort={data.secondMortgageInfo.isAmortizationView} viewModA={data.secondMortgageInfo.isModA} viewSubA={data.secondMortgageInfo.isSubA} fclView={data.secondMortgageInfo.isForeclosureResult} data={data.secondMortgageInfo} />
                            </Panel>

                            <Panel header="Third Lien" key="12">
                                <SingleMortgage formName={thirdMortgageForm} viewAmort={data.thirdMortgageInfo.isAmortizationView} viewModA={data.thirdMortgageInfo.isModA} viewSubA={data.thirdMortgageInfo.isSubA} fclView={data.thirdMortgageInfo.isForeclosureResult} data={data.thirdMortgageInfo} />
                            </Panel>


                            <Panel header="HOA Lien" key="13">
                                <HoaMortgage viewFcl={data.hoaLien.isForeclosureResult} viewRedemp={data.hoaLien.isRedemptionInfo} />
                            </Panel>

                            <Panel header="TAX Lien" key="14">
                                <TaxMortgage viewFcl={data.taxLien.isForeclosureResult} viewRedemp={data.taxLien.isRedemptionInfo} />

                            </Panel>

                            <Panel header="Other Lien" key="15">
                                <OtherMortgage viewRedemp={data.otherMortgageInfo.isRedemptionInfo} />

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

                </Col>

            </Row>

        </>
    )
}

export default MortgageInfoComponent
