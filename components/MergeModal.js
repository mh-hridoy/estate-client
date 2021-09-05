import React from 'react'
import { Modal, Button, Image } from 'antd'
import styles from '../styles/mergeModal.module.css'

const MergeModal = (props) => {

    const { info } = props

    return (
        <Modal
            title="Merge From System"
            visible={props.visible}
            onOk={props.handleSubmit}
            confirmLoading={props.modalLoading}
            onCancel={props.handleCancel}

            footer={[
                <Button key="back" onClick={props.handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" loading={props.modalLoading} onClick={props.handleSubmit}>
                    Submit
                </Button>,
            ]}
        >
            <div className={styles.mergeContainer}>
                <h3 style={{ textAlign: "center", fontSize: "14px", color: "red" }} >Selected {`${info.length > 1 ? "properties" : "property"}`} will be merged from the system permanently.</h3>
                <pre style={{ fontSize: "10px", textAlign: "center" }}>(Please click on <b> "Submit" </b> button to continue...)</pre>
                {info.map(record => {
                    const lastSaleinfo = record.saleinfo && record.saleinfo[record.saleinfo.length - 1]
                    const saleDate = lastSaleinfo && lastSaleinfo.saleDate.split("T")[0]
                    return (
                        <div className={styles.singleContainer} key={record._id} >
                            <div className={styles.imageContainer}>
                                <Image alt="image" height={80} width={80} />
                            </div>
                            <div className={styles.firstSection} style={{ fontSize: "13px" }}>
                                <ul>
                                    <li>Address : {record.propertyAddress}</li>
                                    <li>County : {record.county}</li>
                                    <li>Zip : {record.zip}</li>
                                    <li>CMA: {record.mortgageInfo.cmaArv}</li>
                                    <li>Year Built : {record.yearBuilt}</li>
                                    <li>Sale Type : {lastSaleinfo.saleType}</li>
                                    <li>1st Buy It: pending...</li>
                                </ul>
                            </div>

                            <div className={styles.thirdSection} style={{ fontSize: "13px" }}>
                                <ul>
                                    <li>Parcel : {record.parcelId}</li>
                                    <li>Sale Date : {saleDate && saleDate}</li>
                                    <li>Case No. : {lastSaleinfo.caseNumber && lastSaleinfo.caseNumber}</li>
                                    <li>DCA By : {record.secondComp.secondDCA}</li>
                                    <li>County Value: {record.countyValue}</li>

                                </ul>
                            </div>
                        </div>
                    )
                })}

            </div>

        </Modal>
    )
}


export default MergeModal
