import React from 'react'
import { Modal, Button } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const WarningModal = (props) => {
    return (

        <Modal title="Warning"
            visible={props.warningModal}
            onCancel={props.handleTerminate}
            confirmLoading={props.modalLoading}


            footer={[
                <Button key="back" onClick={props.handleTerminate}>
                    Ok
                </Button>
            ]}
        >

            <p> <ExclamationCircleOutlined /> {props.mergerWarning}</p>


        </Modal>
    )
}

export default WarningModal
