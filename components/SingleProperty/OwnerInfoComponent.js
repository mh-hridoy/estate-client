import { Row, Col, Form, Button, Divider, Checkbox, Space, Upload, DatePicker } from 'antd'
import InputField from './utilsComp/InputField'
import styles from '../../styles/search.module.css'
import InputWithSuffix from './utilsComp/InputWithSuffix';
import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons'


const OwnerInfoComponent = ({ ownerAndBorrower }) => {
    const [isSameOwner, setIsSameOwner] = useState(false)
    const [isPacer, setIsPacer] = useState(false)
    const [isSameOwnerAsB, setisSameOwnerAsB] = useState(false)
    const [isSameAddress, setisSameAddress] = useState(false)

    const { Item } = Form

    const checkIfSameOwner = () => {
        setIsSameOwner(true)
    }

    const checkNoPacer = (e) => {
        if (e.target.checked == true) {
            e.target.checked == false
            setIsPacer(true)

        } else if (e.target.checked == false) {
            e.target.checked == true
            setIsPacer(false)
        }
    }

    const checkIfSameOwnerAsB = () => {
        setisSameOwnerAsB(true)
    }

    const asSameAddressAsOwner = () => {
        setisSameAddress(true)
    }

    const ownerDataHandler = (values) => {

    }

    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={ownerAndBorrower} layout="vertical" className={styles.searchForm} onFinish={ownerDataHandler} >

                        <Divider orientation="center">Owner Info
                        </Divider>
                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                            <Col xs={12} style={{ height: "65px" }} >
                                <Item htmlFor="checkIfSameOwner" name="checkIfSameOwner" valuePropName="checked" >
                                    <Checkbox onChange={checkIfSameOwner} checked={isSameOwner} id="checkIfSameOwner">Check if the Owner Information is same as Property Information.</Checkbox>
                                </Item>
                            </Col>

                            <Col xs={12} style={{ height: "65px" }} >
                                <Item htmlFor="noPacer" name="noPacer" valuePropName="checked" >
                                    <Checkbox onChange={checkNoPacer} checked={isPacer} id="noPacer">No Pacer Result</Checkbox>
                                </Item>
                            </Col>

                        </Col>

                        <InputField label="Owner Full Name" htmlFor="ownerFullName" name="ownerFullName" id="ownerFullName" />
                        <InputField label="Owner Full Address" htmlFor="ownerAddress" name="ownerAddress" id="ownerAddress" />
                        <InputField label="Owner Email" htmlFor="ownerEmail" name="ownerEmail" id="ownerEmail" />
                        <InputField label="Owner Phone 1" htmlFor="ownerPhone" name="ownerPhone" id="ownerPhone" />

                        {isPacer &&
                            <>
                                <InputWithSuffix label="Pacer URL" htmlFor="pacerUrl" name="pacerUrl" id="pacerUrl" />
                                <InputWithSuffix label="Beenverified URL" htmlFor="bvUrl" name="bvUrl" id="bvUrl" />

                            </>

                        }

                        <Space >
                            <Button>Add Owner</Button>
                            <Button>Add Notes</Button>
                        </Space>


                        <Divider orientation="center">Owner Notes Section
                        </Divider>
                        <Col span={24}>
                            Notes will bere
                        </Col>

                        <Divider orientation="center">Borrower Info
                        </Divider>

                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                            <Col xs={12} style={{ height: "65px" }} >
                                <Item htmlFor="checkIfSameOwnerAsBorrower" name="checkIfSameOwnerAsBorrower" valuePropName="checked" >
                                    <Checkbox onChange={checkIfSameOwnerAsB} checked={isSameOwnerAsB} id="checkIfSameOwner">Check if borrower full name is same as owner full name.</Checkbox>
                                </Item>
                            </Col>

                            <Col xs={12} style={{ height: "65px" }} >
                                <Item htmlFor="asSameAddress" name="asSameAddress" valuePropName="checked" >
                                    <Checkbox onChange={asSameAddressAsOwner} checked={isSameAddress} id="asSameAddress">Check if borrower address is same with owner address.</Checkbox>
                                </Item>
                            </Col>

                        </Col>

                        <InputField label="Borrower" htmlFor="borrowerName" name="borrowerName" id="borrowerName" />
                        <InputField label="Borrower Address" htmlFor="borrowerAddress" name="borrowerAddress" id="borrowerAddress" />
                        <InputField label="Borrower Email" htmlFor="borrowerEmail" name="borrowerEmail" id="borrowerEmail" />
                        <InputField label="Borrower Phone 1" htmlFor="borrowerPhone" name="borrowerPhone" id="borrowerPhone" />

                        <Space >
                            <Button>Add Borrower</Button>
                            <Button>Add Notes</Button>
                        </Space>


                        <Divider orientation="center">Borrower Notes Section
                        </Divider>
                        <Col span={24}>
                            Notes will bere
                        </Col>

                        <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                            <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                                <Divider orientation="center">Owner Info Files
                                </Divider>

                                <InputField label="File Name" htmlFor="pdFile" name="pdFile" id="pdFile" />

                                <Col xs={12} sm={8} md={4} >
                                    <Item label="Date : " htmlFor="pdDate" name="pdDate"  >
                                        <DatePicker placeholder="Select Date" id="pdDate" style={{ border: "1px solid black", width: "100%" }} />
                                    </Item>
                                </Col>


                                <Col xs={12} sm={8} md={4} style={{ paddingTop: "17px" }} >

                                    <Upload id="pFile"
                                    // {...props}
                                    >
                                        <Button
                                            icon={<UploadOutlined />}>Select File</Button>
                                    </Upload>

                                </Col>


                                <Col xs={12} sm={8} md={6} >

                                    <Button
                                        type="primary"
                                        // onClick={this.handleUpload}
                                        // disabled={fileList.length === 0}
                                        // loading={uploading}
                                        style={{ marginTop: 16, width: "100%" }}
                                    >
                                        Upload
                                        {/* {uploading ? 'Uploading' : 'Start Upload'} */}
                                    </Button>
                                </Col>


                            </Col>

                            <Col xs={12} sm={8} md={6} lg={4} style={{ marginTop: "15px" }}>

                                <div className={styles.displayPFile}>
                                    Files will be here

                                </div>

                            </Col>

                        </Col>



                        <Col xs={24} style={{ position: "sticky", bottom: "20px" }} >
                            <Button
                                type="primary"
                                style={{ width: "170px", borderRadius: "15px" }}>
                                Save Owner Data
                            </Button>
                        </Col>


                    </Form>

                </Col>

            </Row>

        </>
    )
}

export default OwnerInfoComponent
