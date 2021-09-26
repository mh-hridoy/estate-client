import { Row, Upload, message, Button, Col, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import Resizer from "react-image-file-resizer";
import axios from 'axios';
import { useSelector } from 'react-redux'
import ReactMapboxGl, { ZoomControl, RotationControl, ScaleControl, Marker } from 'react-mapbox-gl';
import InputField from './utilsComp/InputField';

import 'mapbox-gl/dist/mapbox-gl.css'; //must install mapbox-gl alongside react-mapbox-gl

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


const PicturesAndMaps = ({ data, geo }) => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [allCorrectedImages, setAllCorrectedImages] = useState([])
    const [sendRequest, setSendRequest] = useState(false)
    const [uploading, setUploading] = useState(false)
    const token = useSelector((state) => state.user.token)
    const propertyId = useSelector((state) => state.property.propertyId)
    const user = useSelector((state) => state.user.user)
    const [isSatellite, setIsSatellite] = useState(false)
    const [lat, setLat] = useState(geo.lat)
    const [long, setLong] = useState(geo.long)
    const [isLoading, setIsLoading] = useState(false)

    const { Item } = Form

    const [geoForm] = Form.useForm()

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const Map = ReactMapboxGl({
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID,

    });


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

    const removeSelectedFile = async (file) => {
        try {
            message.loading({ content: file.name + " deleting....", key: "6" })
            await axios.post(`http://localhost:5000/api/delete-image/${propertyId}`, { key: file.name }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const indexOfDelFile = allCorrectedImages.findIndex((fFIle) => fFIle.name === file.name)
            allCorrectedImages.splice(indexOfDelFile, 1)
            setAllCorrectedImages([...allCorrectedImages])
            message.success({ content: "File Deleted Successfully.", key: "6" })

        } catch (err) {
            message.error({ content: err.response ? err.response.data.message : "Something went wrong.", key: "6", duration: "3.5" })
            console.log(err)
        }
    }

    const geoChangeHandler = async ({ long, lat }) => { //use useEffect for the best pratice.

        try {
            message.loading({ content: "Updating property location...", key: "7" })
            setIsLoading(true)
            await axios.put(`http://localhost:5000/api/update-map/${propertyId}`, { long, lat }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            message.loading({ content: "property location updated successfully", key: "7" })
            setLong(long)
            setLat(lat)
            setIsLoading(false)

        } catch (err) {
            setIsLoading(false)
            message.error({ content: err.response ? err.response.data.message : "Something went wrong.", key: "7", duration: "3.5" })
            console.log(err)
        }

    }

    return (
        <Row gutter={[12, 15]} wrap={true} justify="start" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}  >
            <Col span={24}>

                <Form form={geoForm} name="geoForm" layout="vertical" initialValues={{ long: long, lat: lat }} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} onFinish={geoChangeHandler} >

                    <InputField name="long" label="Longitude" />
                    <InputField name="lat" label="Latitude" />
                    <Button type="primary" htmlType="submit" style={{ marginTop: "30px" }} loading={isLoading} disabled={isLoading} >Change Location</Button>

                </Form>

            </Col>


            <div style={{ border: "1px solid black", height: "300px", overflow: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", borderStyle: "dotted", padding: "10px" }}>

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
            <div className="map" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <div style={{ height: "60vh", width: "90%", border: "1px solid black", borderStyle: "dotted", position: "relative", zIndex: "5" }}>

                    <div style={{ position: 'absolute', zIndex: "6" }}>
                        <Button onClick={() => setIsSatellite(!isSatellite)} > {isSatellite ? "Satellite View" : "Street View"}</Button>
                    </div>
                    <Map
                        style={isSatellite ? "mapbox://styles/mapbox/satellite-v9" : "mapbox://styles/mapbox/outdoors-v11"}
                        containerStyle={{
                            height: '100%',
                            width: '100%'
                        }}
                        center={[long ? long : -78.2952710, lat ? lat : 35.9553564]}
                        zoom={[lat || long ? 15 : 0]}
                        renderChildrenInPortal={true}
                    >
                        <ZoomControl position="bottom-right" />
                        <RotationControl />

                        {geo && Object.keys(geo).length !== 0 &&

                            <Marker
                                coordinates={[long, lat]}
                                anchor="bottom"
                            >
                                <img src="/marker.png"
                                    height={55} width={55}
                                />

                            </Marker>
                        }
                        <ScaleControl position="bottom-left" />

                    </Map>;

                </div>
            </div>

        </Row>
    )
}

export default PicturesAndMaps
