import React from 'react'
import { useRouter } from 'next/router'
import { Collapse, Form, Row, Col, Divider } from 'antd'
import PropertyInfoComponent from '../../../components/SingleProperty/PropertyInfoComponent'
import ProtectedPage from '../../../components/ProtectedPage'
import MortgageInfoComponent from '../../../components/SingleProperty/MortgageInfoComponent'
import OwnerInfoComponent from '../../../components/SingleProperty/OwnerInfoComponent'
import SaleInfoComponent from '../../../components/SingleProperty/SaleInfoComponent'

const singlePropertyInfo = () => {
    const router = useRouter()
    const { propertyinfo } = router.query
    const { Panel } = Collapse

    const [propertyInfoForm] = Form.useForm()
    const [mortgageInfo] = Form.useForm()
    const [ownerAndBorrower] = Form.useForm()
    const [saleInfoForm] = Form.useForm()

    // function callback(key) {
    //     console.log(key);
    // }

    return (
        <ProtectedPage>
            {/* useTabHere */}
            <Row gutter={15} wrap={true} justify="center">
                <Col span={23}>
                    <Collapse defaultActiveKey={['1']}
                        // onChange={callback}
                        expandIconPosition="right"

                        className="site-collapse-custom-collapse"

                    >

                        <Panel header="Property Details (Building, Land, Assessment)" key="1" className="site-collapse-custom-panel" >
                            <PropertyInfoComponent propertyInfo={propertyInfoForm} />
                        </Panel>


                        <Panel header="Mortgage, Other Liens" key="2" className="site-collapse-custom-panel" >
                            <MortgageInfoComponent mortgageInfo={mortgageInfo} />
                        </Panel>

                        <Panel header="Owner & Borrower Info" key="3" className="site-collapse-custom-panel" >
                            <OwnerInfoComponent ownerAndBorrower={ownerAndBorrower} />
                        </Panel>


                        <Panel header="Sale Details or Foreclosure Info" key="4" className="site-collapse-custom-panel" >
                            {/* iterate sale info thorugh loop*/}
                            <Collapse defaultActiveKey={['30']}
                                // onChange={callback}
                                expandIconPosition="right"

                                className="site-collapse-custom-collapse"

                            >
                                <Panel header="Sale Date 1" key="30" className="site-collapse-custom-panel" >

                                    <SaleInfoComponent saleInfo={saleInfoForm} />

                                </Panel>

                            </Collapse>




                        </Panel>

                    </Collapse>

                </Col>
            </Row>

            <div className="bottomPart" style={{ paddingBottom: "30px" }}> </div>
        </ProtectedPage>
    )
}

export default singlePropertyInfo;
