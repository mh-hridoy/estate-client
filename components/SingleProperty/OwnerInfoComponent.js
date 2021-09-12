import { Row, Col, Form, Button, Divider, Checkbox, Space, Upload, DatePicker } from 'antd'
import InputField from './utilsComp/InputField'
import styles from '../../styles/search.module.css'
import { UploadOutlined } from '@ant-design/icons'
import OwnerInfo from './OwnerInfo'
import BorrowerInfo from './BorrowerInfo'
import { useEffect, useState } from 'react';


const OwnerInfoComponent = ({ ownerAndBorrower, data }) => {
    const [isSameOwner, setIsSameOwner] = useState(false)
    const [isPacer, setIsPacer] = useState(false)

    const [isSameOwnerAsB, setisSameOwnerAsB] = useState(false)
    const [isSameAddress, setisSameAddress] = useState(false)


    const { Item } = Form

    const checkIfSameOwner = () => {
        setIsSameOwner(e.target.checked)
    }

    const checkNoPacer = (e) => {

        setIsPacer(e.target.checked)
    }

    const ownerDataHandler = (values) => {

    }

    const checkIfSameOwnerAsB = (e) => {
        setisSameOwnerAsB(e.target.checked)
    }

    const asSameAddressAsOwner = (e) => {
        setisSameAddress(e.target.checked)
    }

    useEffect(() => {
        if (data.pacer) {
            setIsPacer(data.pacer)

        }
    }, [])

    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={ownerAndBorrower} layout="vertical" className={styles.searchForm} onFinish={ownerDataHandler} >

                        {/* Owner Section */}

                        {data.ownerInfo.length === 0 &&
                            <>
                            <Divider orientation="center">Owner Info
                            </Divider>
                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                                <Col xs={12} style={{ height: "65px" }} >
                                    <Item htmlFor="checkIfSameOwner" name="checkIfSameOwner" valuePropName="checked"  >
                                        <Checkbox onChange={checkIfSameOwner} checked={isSameOwner} id="checkIfSameOwner">Check if the Owner Information is same as Property Information.</Checkbox>
                                    </Item>
                                </Col>

                                <Col xs={12} style={{ height: "65px" }} >
                                    <Item htmlFor="noPacer" name="noPacer" valuePropName="checked"  >
                                        <Checkbox onChange={checkNoPacer} checked={isPacer} id="noPacer">No Pacer Result</Checkbox>
                                    </Item>
                                </Col>

                            </Col>
                                <OwnerInfo isPacer={isPacer} />
                            </>
                        }

                        {data.ownerInfo.length !== 0 &&
                            <>
                            <Divider orientation="center" >Owner Info
                            </Divider>
                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                                <Col xs={12} style={{ height: "65px" }} >
                                    <Item htmlFor="checkIfSameOwner" name="checkIfSameOwner" valuePropName="checked" initialValue={data.sameOwner} >
                                        <Checkbox onChange={checkIfSameOwner} checked={isSameOwner} id="checkIfSameOwner">Check if the Owner Information is same as Property Information.</Checkbox>
                                    </Item>
                                </Col>

                                <Col xs={12} style={{ height: "65px" }} >
                                    <Item htmlFor="noPacer" name="noPacer" valuePropName="checked" initialValue={data.pacer} >
                                        <Checkbox onChange={checkNoPacer} checked={isPacer} id="noPacer">No Pacer Result</Checkbox>
                                    </Item>
                                </Col>

                            </Col>
                            {
                                data.ownerInfo.map((owner, inx) => {
                                    return (
                                        <OwnerInfo owner={owner} inx={inx} key={inx} isPacer={isPacer} />
                                    )
                                })

                            }

                            </>


                        }

                        <Space >
                            <Button>Add Owner</Button>
                            <Button>Add Notes</Button>
                        </Space>

                        {data.ownerInfo.note && <>
                            <Divider orientation="center">Owner Notes Section
                            </Divider>
                            {data.ownerInfo.note.map((note, inx) => {
                                return (
                                    <Col span={24} key={inx} >
                                        Notes will bere
                                    </Col>
                                )
                            })}

                        </>}


                        {/* Borrower Section */}

                        {data.borrowerInfo.length === 0 &&
                            <>
                        <Divider orientation="center">Borrower Info
                            </Divider>
                            <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }} >
                                <Col xs={12} style={{ height: "65px" }} >
                                    <Item htmlFor="checkIfSameOwnerAsBorrower" name="checkIfSameOwnerAsBorrower" valuePropName="checked" >
                                        <Checkbox onChange={checkIfSameOwnerAsB} checked={isSameOwnerAsB} id="checkIfSameOwnerAsBorrower">Check if borrower full name is same as owner full name.</Checkbox>
                                    </Item>
                                </Col>

                                <Col xs={12} style={{ height: "65px" }} >
                                    <Item htmlFor="asSameAddress" name="asSameAddress" valuePropName="checked" >
                                        <Checkbox onChange={asSameAddressAsOwner} checked={isSameAddress} id="asSameAddress">Check if borrower address is same with owner address.</Checkbox>
                                    </Item>
                                </Col>

                            </Col>

                                <BorrowerInfo />

                            </>
                        }

                        {data.borrowerInfo.length !== 0 &&
                            <>
                                <Divider orientation="center" >Borrower Info
                                </Divider>

                                <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }} >
                                    <Col xs={12} style={{ height: "65px" }} >
                                        <Item htmlFor="checkIfSameOwnerAsBorrower" name="checkIfSameOwnerAsBorrower" valuePropName="checked" initialValue={data.sameAsOwner} >
                                            <Checkbox onChange={checkIfSameOwnerAsB} checked={isSameOwnerAsB} id="checkIfSameOwnerAsBorrower">Check if borrower full name is same as owner full name.</Checkbox>
                                        </Item>
                                    </Col>

                                    <Col xs={12} style={{ height: "65px" }} >
                                        <Item htmlFor="asSameAddress" name="asSameAddress" valuePropName="checked" initialValue={data.addressSameAsOwner}>
                                            <Checkbox onChange={asSameAddressAsOwner} checked={isSameAddress} id="asSameAddress">Check if borrower address is same with owner address.</Checkbox>
                                        </Item>
                                    </Col>

                                </Col>

                                {data.borrowerInfo.map((info, inx) => {
                                    return (
                                        <BorrowerInfo key={inx} info={info} inx={inx} />
                                    )
                                })}


                            </>
                        }


                        <Space >
                            <Button>Add Borrower</Button>
                            <Button>Add Notes</Button>
                        </Space>

                        {data.borrowerInfo.note &&
                            <>
                        <Divider orientation="center">Borrower Notes Section
                            </Divider>

                            {data.borrowerInfo.note.map((note, inx) => {
                                <Col span={24} key={inx} >
                                    Notes will bere
                                </Col>
                            })}

                            </>

                        }

                        <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                            <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                                <Divider orientation="center">Owner Info Files
                                </Divider>

                                <InputField label="File Name" htmlFor="pdFile" name="pdFile" id="pdFile" />

                                <Col xs={12} sm={8} md={4} >
                                    <Item label="Date : " htmlFor="pdDate" name="pdDate"  >
                                        <DatePicker placeholder="Select Date" id="pdDate" style={{ width: "100%" }} />
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
                                style={{ width: "170px", marginTop: "20px", borderRadius: "15px" }}>
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
