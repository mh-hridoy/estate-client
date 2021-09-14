import { Row, Col, Divider } from 'antd'

import PriceHistory from './PriceHistory';
import TaxAssessed from './utilsComp/TaxAssessed';
import SinglePropertyInfo from './utilsComp/SinglePropertyInfo'



const PropertyInfo = ({ propertyinfo, data }) => {

    return (
        <Row gutter={20} wrap={true} justify="start" >
            <Col span={24}>
                <SinglePropertyInfo propertyinfo={propertyinfo} data={data} />


                {/* Price history Section */}

                <Divider orientation="center">Price History
                </Divider>

                <PriceHistory data={data.priceHistory} />



                {/* Assessment Section */}
                <Divider orientation="center">Assessment & Taxes
                </Divider>

                <TaxAssessed data={data.assesmentAndTaxes} />


            </Col>


        </Row>

    )
}

export default PropertyInfo
