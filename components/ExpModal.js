import React from 'react'
import { Modal, Button } from 'antd'


const ExpModal = (props) => {
    const fileName = "Exported info";


    return (
        <>
            <Modal
                title="Export Selected Properties"
                visible={props.visible}
                onOk={props.handleSubmit}
                confirmLoading={props.modalLoading}
                onCancel={props.handleCancel}

                footer={[
                    <Button key="back" onClick={props.handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={props.modalLoading} onClick={() => props.handleSubmit(props.exportList, fileName)}>
                        Submit
                    </Button>,
                ]}
            >

                <h3 style={{ textAlign: "center" }}>A export operation will proceed with {props.exportList.length} property information.</h3>

                <pre style={{ fontSize: "12px", textAlign: "center", marginTop: "10px" }}>(Click Submit to proceed)</pre>

            </Modal>

        </>
    )
}

export default ExpModal
