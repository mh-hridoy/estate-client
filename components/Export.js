import React, { useState } from 'react'
import { Button, message } from 'antd'
import styles from '../styles/results.module.css'
import WarningModal from './WarningModal'
import ExpModal from './ExpModal'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const Export = (props) => {
    const { exportList } = props
    const [modalVisible, setModalVisible] = useState(false)
    const [warningVisible, setWarningVisible] = useState(false)
    const [warningText, setWarningText] = useState()
    const [modalLoading, setModalLoading] = useState(false)
    const [selectedData, setSelectedData] = useState([])

    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportableList = []

    const OpenExportModal = () => {
        if (exportList.length == 0) {
            setWarningText('Please select at least one property to export.')
            setWarningVisible(true)
        } else {
            exportList.forEach((record) => {
                const iteratedData = { propertyAddress: record.propertyAddress, yearBuilt: record.yearBuilt }
                exportableList.push(iteratedData)

            })
            setSelectedData(exportableList)
            setModalVisible(true)

        }


    }


    const closeWarningModal = () => {
        setWarningVisible(false)
    }

    const handleSubmit = (apiData, fileName) => {

        setModalLoading(true)
        try {
            const ws = XLSX.utils.json_to_sheet(apiData);
            const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
            const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
            const data = new Blob([excelBuffer], { type: fileType });
            FileSaver.saveAs(data, fileName + fileExtension);
            message.success('Exported Successfully')
            setTimeout(() => {
                setModalLoading(false)
                setModalVisible(false)

            }, 400)
        } catch (err) {
            console.log(err)
            message.error('Something went wrong')

        }

    }

    const handleCancel = () => {
        setModalVisible(false)
    }


    return (
        <>
            <Button onClick={(e) => OpenExportModal()} className={styles.btn}>Export

            </Button>

            {warningVisible && <WarningModal warningModal={warningVisible} mergerWarning={warningText} handleTerminate={closeWarningModal} />}

            {modalVisible && <ExpModal visible={modalVisible} handleCancel={handleCancel} modalLoading={modalLoading} handleSubmit={handleSubmit} exportList={selectedData} />}

        </>

    )
}

export default Export
