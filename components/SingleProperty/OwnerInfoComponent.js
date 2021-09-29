import { Row, Col, Form, Button, Divider, Checkbox, Input, Upload, DatePicker, Tooltip } from 'antd'
import InputField from './utilsComp/InputField'
import styles from '../../styles/search.module.css'
import { UploadOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { MonitorOutlined } from '@ant-design/icons'
import useHttp from '../../utils/useHttp'
import { useSelector } from 'react-redux'


const OwnerInfoComponent = ({ ownerAndBorrower, data }) => {
    const [isSameOwner, setIsSameOwner] = useState(false)
    const [isPacer, setIsPacer] = useState(false)
    const [wBValues, setWBValues] = useState()
    const [sendRequest, setSendRequest] = useState(false)


    const [isSameOwnerAsB, setisSameOwnerAsB] = useState(false)
    const [isSameAddress, setisSameAddress] = useState(false)

    const propertyId = useSelector((state) => state.property.propertyId)

    const { Item, List } = Form

    const checkIfSameOwner = (e) => {
        setIsSameOwner(e.target.checked)
    }

    const checkNoPacer = (e) => {

        setIsPacer(e.target.checked)
    }


    const checkIfSameOwnerAsB = (e) => {
        setisSameOwnerAsB(e.target.checked)
    }

    const asSameAddressAsOwner = (e) => {
        setisSameAddress(e.target.checked)
    }


    const ownerDataHandler = (values) => {
        setWBValues(values)
        setSendRequest((prev) => ({ sendRequest: !prev }))

    }

    const { isLoading } = useHttp(sendRequest, `${process.env.NEXT_PUBLIC_MAIN_PROXY}/update-property/${propertyId}`, "put", wBValues)


    useEffect(() => {
        if (data.pacer) {
            setIsPacer(data.pacer)

        }
    }, [])

    //ownerInfo
    // borrowerInfo
    return (
        <>
            <Row gutter={20} wrap={true} justify="start" >
                <Col span={24}>
                    <Form form={ownerAndBorrower} layout="vertical" className={styles.searchForm} onFinish={ownerDataHandler} initialValues={{ ownerInfo: data.ownerInfo ? data.ownerInfo : [""], borrowerInfo: data.borrowerInfo ? data.borrowerInfo : [""], ...data }} >
                        <Divider orientation="center">Owner Info
                        </Divider>
                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                            <Col xs={12} style={{ height: "65px" }} >
                                <Item name="sameOwner" valuePropName="checked"  >
                                    <Checkbox onChange={checkIfSameOwner} checked={isSameOwner} >Check if the Owner Information is same as Property Information.</Checkbox>
                                </Item>
                            </Col>

                            <Col xs={12} style={{ height: "65px" }} >
                                <Item name="pacer" valuePropName="checked"  >
                                    <Checkbox onChange={checkNoPacer} checked={isPacer} >No Pacer Result</Checkbox>
                                </Item>
                            </Col>

                        </Col>
                        <List name="ownerInfo" >
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Col key={key} span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                            <Col xs={12} sm={6} md={4}  >
                                                <Item label="Owner Full Name" name={[name, "ownerFullName"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={6} md={4}  >
                                                <Item label="Owner Full Address" name={[name, "ownerAddress"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>


                                            <Col xs={12} sm={6} md={4}  >
                                                <Item label="Owner Email" name={[name, "ownerEmail"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={6} md={3}  >
                                                <Item label="Owner Phone 1" name={[name, "ownerPhone"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            {isPacer &&
                                                <>
                                                    <Col xs={12} sm={6} md={3}  >
                                                        <Item label="Pacer URL" name={[name, "pacerUrl"]} {...restField} >
                                                            <Input suffix={
                                                                <Tooltip title="Open Link">
                                                                    <MonitorOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: "pointer" }} />
                                                                </Tooltip>
                                                            } />
                                                        </Item>
                                                    </Col>

                                                    <Col xs={12} sm={6} md={3}  >
                                                        <Item label="Beenverified" name={[name, "bvUrl"]} {...restField}  >
                                                            <Input suffix={
                                                                <Tooltip title="Open Link">
                                                                    <MonitorOutlined style={{ color: 'rgba(0,0,0,.45)', cursor: "pointer" }} />
                                                                </Tooltip>
                                                            } />
                                                        </Item>
                                                    </Col>

                                            </>
                                            }
                                            <Col xs={12} sm={6} md={3} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

                                                <Button type="ghost" onClick={() => remove(name)}> Delete </Button>
                                            </Col>

                                        </Col>
                                    ))}
                                    <Item style={{ marginTop: "20px", marginLeft: "20px" }} >
                                        <Button type="primary" onClick={() => add()} > Add Field </Button>
                                    </Item>
                                </>
                            )}
                        </List>

                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} ><Button>Add Notes</Button>
                        </Col>

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

                        <Divider orientation="center">Borrower Info
                        </Divider>
                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }} >
                            <Col xs={12} style={{ height: "65px" }} >
                                <Item name="sameAsOwner" valuePropName="checked" >
                                    <Checkbox onChange={checkIfSameOwnerAsB} checked={isSameOwnerAsB} >Check if borrower full name is same as owner full name.</Checkbox>
                                </Item>
                            </Col>

                            <Col xs={12} style={{ height: "65px" }} >
                                <Item name="addressSameAsOwner" valuePropName="checked" >
                                    <Checkbox onChange={asSameAddressAsOwner} checked={isSameAddress} >Check if borrower address is same with owner address.</Checkbox>
                                </Item>
                            </Col>

                        </Col>
                        <List name="borrowerInfo" >
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Col key={key} span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                            <Col xs={12} sm={8} md={6} lg={4}  >
                                                <Item label="Borrower" name={[name, "borrowerName"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} lg={4}  >
                                                <Item label="Borrower Address" name={[name, "borrowerAddress"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>


                                            <Col xs={12} sm={8} md={6} lg={4}  >
                                                <Item label="Borrower Email" name={[name, "borrowerEmail"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>

                                            <Col xs={12} sm={8} md={6} lg={4}  >
                                                <Item label="Owner Phone 1" name={[name, "borrowerPhone"]} {...restField} >
                                                    <Input />
                                                </Item>
                                            </Col>


                                            <Col xs={12} sm={8} md={6} lg={4} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

                                                <Button type="ghost" onClick={() => remove(name)}> Delete </Button>
                                            </Col>

                                        </Col>
                                    ))}
                                    <Item style={{ marginTop: "20px", marginLeft: "20px" }} >
                                        <Button type="primary" onClick={() => add()} > Add Field </Button>
                                    </Item>
                                </>
                            )}
                        </List>

                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} ><Button>Add Notes</Button>
                        </Col>

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

                                <Divider orientation="center">Related Files
                                </Divider>

                                <InputField label="File Name" name="wpdFile" />

                                <Col xs={12} sm={8} md={4} >
                                    <Item label="Date : " name="wpdDate"  >
                                        <DatePicker placeholder="Select Date" style={{ width: "100%" }} />
                                    </Item>
                                </Col>


                                <Col xs={12} sm={8} md={4} style={{ paddingTop: "17px" }} >

                                    <Upload
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




                        <Col span={24} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }} >
                            <Button
                                loading={isLoading}
                                type="primary"
                                htmlType="submit"
                                style={{ width: "170px", marginTop: "20px", borderRadius: "15px" }}>
                                Save Data
                            </Button>
                        </Col>


                    </Form>

                </Col>

            </Row>

        </>
    )
}

export default OwnerInfoComponent
