import React from 'react'
import { useRouter } from 'next/router'
import { Collapse, Form, Row, Col } from 'antd'
import PropertyInfoComponent from '../../../components/SingleProperty/PropertyInfoComponent'
import ProtectedPage from '../../../components/ProtectedPage'
import MortgageInfoComponent from '../../../components/SingleProperty/MortgageInfoComponent'

const singlePropertyInfo = () => {
    const router = useRouter()
    const { propertyinfo } = router.query
    const { Panel } = Collapse

    const [propertyInfoForm] = Form.useForm()
    const [mortgageInfo] = Form.useForm()

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
                        style={{ marginTop: "10px" }}
                    >
                        <Panel header="Property Details (Building, Land, Assessment)" key="1" >
                            <PropertyInfoComponent propertyInfo={propertyInfoForm} />
                        </Panel>

                        <Panel header="Mortgage, Other Liens" key="2" >
                            <MortgageInfoComponent propertyInfo={mortgageInfo} />
                        </Panel>

                    </Collapse>

                </Col>
            </Row>

            <div className="bottomPart" style={{ paddingBottom: "30px" }}> </div>
        </ProtectedPage>
    )
}

export default singlePropertyInfo;
