import { Col, Button, Divider, Upload, message } from 'antd'
import InputField from './InputField'
import NumberField from './NumberField';
import InputWithSuffix from './InputWithSuffix';
import { UploadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Resizer from "react-image-file-resizer";
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'



const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(file, 600, 600, "JPEG", 200, 0, (uri) => { resolve(uri); },
            "base64"
        );
    });

const AdditionalPropertyInfo = ({ files }) => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [uploading, setUploading] = useState(false)
    const [allUploadedFiles, setAllUploadedFiles] = useState([])
    const token = useSelector((state) => state.user.token)
    const propertyId = useSelector((state) => state.property.propertyId)
    const [requestDelete, setRequestDelete] = useState(false)
    const [delFile, setDelFile] = useState()
    const [sendRequest, setSendRequest] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    const user = useSelector((state) => state.user.user)

    const selectedFileHandler = () => {
        setTimeout(() => {
            setSendRequest((prev) => ({ sendRequest: !prev }))
        }, 50) //this timeout wont work everytime if the file size is too large. the better practice would be convert this to bloob data in the backend.
    }

    const dateToday = new Date().toISOString().split("T")[0]
    const todayHour = new Date().getHours()
    const todayMin = new Date().getMinutes()
    const todaySec = new Date().getSeconds()

    const beforeUpload = async (file) => {

        if (file.type && !file.type.includes("image")) {
            const reader = new FileReader();
            reader.readAsDataURL(file)

            reader.onload = () => {
                const pdfData = reader.result && reader.result.split("base64,")[1]
                const allPdfData =
                {
                    name: file.name.split(".").shift() + " - By " + user.name + " " + dateToday + " " + todayHour + ":" + todayMin + ":" + todaySec + "." + file.name.split(".").pop(),
                    uid: file.uid,
                    type: file.type,
                    data: pdfData
                }
                setSelectedFiles((prev) => ([allPdfData, ...prev]))

                // const base64Data = new Buffer.from(reader.result.replace(/^data:image\/\w+;base64,/, ""), "base64")
            };
            reader.onerror = (err) => {
                console.log(err)
            }

        } else if (file.type && file.type.includes("image")) {
            try {
                const image = await resizeFile(file)
                const imageData = image.split("base64,")[1]

                const allImageData = {
                    name: file.name.split(".").shift() + " - By " + user.name + " " + dateToday + " " + todayHour + ":" + todayMin + ":" + todaySec + "." + file.name.split(".").pop(),
                    uid: file.uid,
                    type: file.type,
                    data: imageData
                }
                setSelectedFiles((prev) => ([allImageData, ...prev]))


            } catch (err) {
                console.log(err)

            }
        }
    }

    useEffect(() => {
        if (files.length !== 0) {
            setAllUploadedFiles(files)
        }

    }, [files])

    //&& !allUploadedFiles.some(file => files.includes(file))

    useEffect(() => {

        if (sendRequest && selectedFiles) {

            if (selectedFiles.length !== 0) {//declare the length method here. otherwise it wont work properly with dependencies

                const uploadData = async () => {
                    try {
                        setUploading(true)
                        message.loading({ content: "File uploading...", key: "5" })
                        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_MAIN_PROXY}/upload-files/${propertyId}`, selectedFiles, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        })
                        setUploading(false)
                        message.success({ content: "File Uploaded Successfully.", key: "5" })
                        setAllUploadedFiles((prev) => ([...data, ...prev]))
                    } catch (err) {
                        setUploading(false)
                        message.error({ content: err.response ? err.response.data.message : "Something went wrong.", key: "5", duration: "3.5" })
                        console.log(err)
                    }
                }
                uploadData()
            }
        }
        return (() => {
            setSelectedFiles([])
            setSendRequest(false)
        })

    }, [sendRequest && selectedFiles])

    const deleteSelectedFile = (key) => {
        setDelFile(key)
        setRequestDelete(true)
        console.log(key)
    }

    useEffect(() => {
        if (requestDelete && delFile) {
            const delFileHandler = async () => {

                try {
                    setIsDeleting(true)
                    message.loading({ content: delFile + " deleting....", key: "6" })
                    await axios.post(`${process.env.NEXT_PUBLIC_MAIN_PROXY}/delete-file/${propertyId}`, { key: delFile }, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const indexOfDelFile = allUploadedFiles.findIndex((file) => file.key === delFile)
                    allUploadedFiles.splice(indexOfDelFile, 1)

                    setAllUploadedFiles([...new Set(allUploadedFiles)])
                    setIsDeleting(false)
                    message.success({ content: "File Deleted Successfully.", key: "6" })

                } catch (err) {
                    setIsDeleting(false)
                    message.error({ content: err.response ? err.response.data.message : "Something went wrong.", key: "6", duration: "3.5" })
                    console.log(err)
                }
            }


            delFileHandler()
        }
        return (() => {
            setDelFile()

        })
    }, [requestDelete && delFile])


    return (
        <>
            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0" }}>

                    <Divider orientation="center">Property Info Files
                    </Divider>
                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "17px" }} >

                        <Upload id="pFile" showUploadList={false} customRequest={selectedFileHandler} multiple={true} beforeUpload={beforeUpload} accept="application/pdf, image/*" >
                            <Button type="dashed" disabled={uploading} loading={uploading}
                                icon={<UploadOutlined />}> {!uploading ? "Upload Files" : "Uploading..."}
                            </Button>
                        </Upload>

                    </Col>


                </Col>

                <Col xs={24} style={{ marginTop: "15px" }}>
                    <ul>
                        {allUploadedFiles.length !== 0 && allUploadedFiles.map((file) => {
                                return (
                                    <li style={{ margin: "5px", padding: "10px", border: "1px solid black", borderStyle: "dashed", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }} key={file.key}> <a href={file.Location} target="_fuck" >{file.key}</a>
                                        <span className="imageDelIcon">
                                            <Button type="text" disabled={isDeleting}  >
                                                {/* {delFile == file.key && isDeleting ? <LoadingOutlined /> : */}
                                                <DeleteOutlined onClick={() => deleteSelectedFile(file.key)} />
                                                {/* } */}
                                            </Button>
                                        </span>
                                    </li>
                                )
                        })}
                    </ul>

                </Col>

            </Col>


            <Divider orientation="center">Local Real Estate Details
            </Divider>

            <InputWithSuffix label="Zillow URL" htmlFor="zillowUrl" name="zillowURL" id="zillowUrl" />
            <NumberField label="Zestimate" htmlFor="zestimate" name="zestimate" id="zestimate" />


            <Col xs={24} md={8} lg={4} >

                <Button
                    type="primary"
                    style={{ marginTop: 8, width: "100%" }}>
                    Zillow Search
                </Button>
            </Col>

            <InputWithSuffix label="Redfin URL" htmlFor="redfinUrl" name="redfinUrl" id="redfinUrl" />
            <NumberField label="Redfin Est" htmlFor="redfinEst" name="redfinEst" id="redfinEst" />


            <Col xs={24} md={8} lg={4} >

                <Button
                    type="primary"
                    style={{ marginTop: 8, width: "100%" }}>
                    Redfin Search
                </Button>
            </Col>


            <InputWithSuffix label="Realtor URL" htmlFor="realtorUrl" name="realtorURL" id="realtorUrl" />
            <NumberField label="Realtor Est" htmlFor="realtorEst" name="realtorEst" id="realtorEst" />


            <Col xs={24} md={8} lg={4} >

                <Button
                    type="primary"
                    style={{ marginTop: 8, width: "100%" }}>
                    Realtor Search
                </Button>
            </Col>

            <InputWithSuffix label="Trulia URL" htmlFor="truliaUrl" name="truliaURL" id="truliaUrl" />
            <NumberField label="Trulia Est" htmlFor="truliaEst" name="truliaEst" id="truliaEst" />


            <Col xs={24} md={8} lg={4} >

                <Button
                    type="primary"
                    style={{ marginTop: 8, width: "100%" }}>
                    Trulia Search
                </Button>
            </Col>

            <InputWithSuffix label="Har URL" htmlFor="harUrl" name="harUrl" id="harUrl" />
            <NumberField label="Har Est" htmlFor="harEst" name="harEst" id="harEst" />


            <Col xs={24} md={8} lg={4} >

                <Button
                    type="primary"
                    style={{ marginTop: 8, width: "100%" }}>
                    Har Search
                </Button>
            </Col>

            <InputWithSuffix label="Beenverified URL" htmlFor="bvUrl" name="beenVerifiedURL" id="bvUrl" />


            <Divider orientation="center">Schools & Neighborhood
            </Divider>

            <InputField label="Elementary School" htmlFor="elemSchool" name="ename" id="elemSchool" />
            <InputField label="Ranking" htmlFor="ranking" name="eranking" id="ranking" />
            <InputField label="Distance" htmlFor="distance" name="edistance" id="distance" />
            <InputField label="Middle School" htmlFor="middleSchool" name="mname" id="mname" />
            <InputField label="Ranking" htmlFor="mranking" name="mranking" id="mranking" />
            <InputField label="Distance" htmlFor="mDistance" name="mdistance" id="mDistance" />

            <InputField label="High School" htmlFor="highSchool" name="hname" id="highSchool" />
            <InputField label="Ranking" htmlFor="hranking" name="hranking" id="hranking" />
            <InputField label="Distance" htmlFor="hDistance" name="hdistance" id="hDistance" />

        </>
    )
}

export default AdditionalPropertyInfo
