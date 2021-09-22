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

const AdditionalPropertyInfo = () => {
    const [selectedFiles, setSelectedFiles] = useState({})
    const [uploading, setUploading] = useState(false)
    const [sendRequest, setSendRequest] = useState(false)
    const [allUploadedFiles, setAllUploadedFiles] = useState([])
    const token = useSelector((state) => state.user.token)

    const selectedFileHandler = async options => {
        const { file } = options

        if (file.type && !file.type.includes("image")) {
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file)
                reader.onload = () => {
                    resolve(reader.result)
                    const pdfData = reader.result && reader.result.split("base64,")[1]
                    setSelectedFiles(
                        {
                            name: file.name,
                            uid: file.uid,
                            type: file.type,
                            data: pdfData
                        }
                    )

                    // const base64Data = new Buffer.from(reader.result.replace(/^data:image\/\w+;base64,/, ""), "base64")
                };
                reader.onerror = error => {
                    reject(error)
                    console.log(error)
                };
            });

        } else if (file.type && file.type.includes("image")) {
            const image = await resizeFile(file)
            const imageData = image && image.split("base64,")[1]

            setSelectedFiles({
                name: file.name,
                uid: file.uid,
                type: file.type,
                data: imageData
            }
            )

        }
        setSendRequest((pre) => ({ uploading: !pre }))
    }

    useEffect(() => {
        if (sendRequest && Object.keys(selectedFiles).length !== 0) {
            // console.log(fileList)
            const submitToBackend = async () => {

                try {
                    setUploading(true)
                    const { data } = await axios.post("http://localhost:5000/api/upload-files", selectedFiles, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    console.log(data)
                    setUploading(false)
                    message.success("File Uploaded Successfully.")
                    setSelectedFiles({})
                    setAllUploadedFiles((prev) => {
                        return [data, ...prev]
                    })

                } catch (err) {
                    message.error("Something went wrong.")
                    console.log(err)
                }
            }

            submitToBackend()
        }

    }, [sendRequest && Object.keys(selectedFiles).length !== 0, selectedFiles])

    const deleteSelectedFile = async (key) => {
        const correctedKey = key.replace(/['"]+/g, '')
        setSelectedFiles(selectedFiles.filter(item => item.id !== correctedKey))
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/delete-file/${correctedKey}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            console.log(data)

        } catch (err) {
            console.log(err)
        }


    }

    return (
        <>
            <Col span={24} style={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

                <Col span={24} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", flexWrap: "wrap", margin: "0", padding: "0", border: "1px solid black", borderStyle: "dashed", padding: "10px" }}>

                    <Divider orientation="center">Property Info Files
                    </Divider>



                    <Col xs={12} sm={8} md={4} style={{ paddingTop: "17px" }} >

                        <Upload id="pFile" showUploadList={false} customRequest={selectedFileHandler} multiple={true} >
                            <Button disabled={uploading} loading={uploading}
                                icon={<UploadOutlined />}>Upload Files
                            </Button>
                        </Upload>

                    </Col>


                </Col>

                <Col xs={24} style={{ marginTop: "15px" }}>

                    {allUploadedFiles.length !== 0 && <>

                        <ul  >
                            {allUploadedFiles.map((file) => {
                                return (
                                    <li style={{ margin: "5px", padding: "10px", border: "1px solid black", borderStyle: "dashed", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }} key={file.id}> <a href={file.Location} target="_fuck" >{file.name}</a>

                                        <span className="imageDelIcon" ><DeleteOutlined onClick={() => deleteSelectedFile(file.id)} /></span>
                                    </li>
                                )
                            })}
                        </ul>

                    </>
                    }


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
