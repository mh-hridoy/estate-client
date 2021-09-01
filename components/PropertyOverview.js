import React from 'react'
import styles from '../styles/propertyOverview.module.css'
import { Drawer, Space, Button } from 'antd'


const PropertyOverview = (props) => {

    const { closeOverviewDrawer, showOverviewDrawer } = props


    return (
        <Drawer title="Property Address (Overview)"
            placement="top"
            height={500}
            onClose={closeOverviewDrawer}
            visible={showOverviewDrawer}
            footerStyle={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}
            footer={[
                <Space size={20} >
                    <Button onClick={closeOverviewDrawer}>Back</Button>
                    <Button type="primary" onClick={closeOverviewDrawer}>
                        Check Record
                    </Button>
                </Space>
            ]}>

            <p>Property Details Will be here lorem500</p>

        </Drawer >
    )
}

export default PropertyOverview
