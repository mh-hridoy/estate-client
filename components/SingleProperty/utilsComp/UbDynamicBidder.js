import { Collapse } from "antd"
import UbBidder from './UbBidder'

const UbDynamicBidder = ({ ubData, index }) => {
    const { Panel } = Collapse
    return (
        <Panel header={`Upset Bidder ${index + 1}`} key={`41${+ index}`} className="site-collapse-custom-panel" >
            <UbBidder ubData={ubData} index={index} />
        </Panel>
    )
}

export default UbDynamicBidder
