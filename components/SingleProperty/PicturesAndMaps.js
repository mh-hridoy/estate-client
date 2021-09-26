import { Row, Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import Resizer from "react-image-file-resizer";
import axios from 'axios';
import { useSelector } from 'react-redux'


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(file, 600, 600, "JPEG", 200, 0, (uri) => { resolve(uri); },
            "base64"
        );
    });


const PicturesAndMaps = ({ data }) => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [allCorrectedImages, setAllCorrectedImages] = useState([])
    const [sendRequest, setSendRequest] = useState(false)
    const [uploading, setUploading] = useState(false)
    const token = useSelector((state) => state.user.token)
    const propertyId = useSelector((state) => state.property.propertyId)
    const user = useSelector((state) => state.user.user)



    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );




    useEffect(() => {
        if (data.length !== 0) {
            const allImages = data.map((file) => {
                return {
                    name: file.key,
                    uid: file.ETag,
                    url: file.Location
                }
            })
            setAllCorrectedImages([...allImages])
        }

    }, [data])


    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
    }

    const beforeUpload = async (file) => {
        const dateToday = new Date().toISOString().split("T")[0]
        const todayHour = new Date().getHours()
        const todayMin = new Date().getMinutes()
        const todaySec = new Date().getSeconds()

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

    const selectedFileHandler = () => {
        setTimeout(() => {
            setSendRequest(true)
        }, 10)
    }

    useEffect(() => {
        if (sendRequest && selectedFiles.length !== 0) {
            const uploadData = async () => {
                try {
                    setUploading(true)
                    message.loading({ content: "File uploading...", key: "5" })
                    const { data } = await axios.post(`http://localhost:5000/api/upload-pictures/${propertyId}`, selectedFiles, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    setUploading(false)
                    message.success({ content: "File Uploaded Successfully.", key: "5" })
                    const allImages = data.map((file) => {
                        return {
                            name: file.key,
                            uid: file.ETag,
                            url: file.Location
                        }
                    })
                    setAllCorrectedImages((prev) => ([...allImages, ...prev]))
                } catch (err) {
                    setUploading(false)
                    message.error({ content: err.response ? err.response.data.message : "Something went wrong.", key: "5", duration: "3.5" })
                    console.log(err)
                }
            }
            uploadData()
        }

        return (() => {
            setSendRequest(false)
            setSelectedFiles([])
        })

    }, [sendRequest && selectedFiles.length !== 0])

    const removeSelectedFile = (file) => {
        console.log(file)
    }


    return (
        <Row gutter={[12, 15]} wrap={true} justify="start" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}  >

            <div style={{ border: "1px solid black", height: "200px", overflow: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", borderStyle: "dotted", padding: "10px" }}>

                <Upload listType="picture-card"
                    accept="image/*"
                    beforeUpload={beforeUpload}
                    multiple={true}
                    customRequest={selectedFileHandler}
                    fileList={allCorrectedImages}
                    previewFile={handlePreview}
                    onRemove={removeSelectedFile}
                    disabled={uploading}
                >
                    {uploadButton}
                </Upload>
            </div>
            <div style={{ border: "1px solid black", height: "350px", overflow: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
                Property Map here.
            </div>

        </Row>
    )
}

export default PicturesAndMaps
