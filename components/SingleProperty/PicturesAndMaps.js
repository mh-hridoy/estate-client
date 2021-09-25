import { Row, Upload, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const uploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

const PicturesAndMaps = ({ data }) => {

    const allImages = data

    const allCorrectedImages = allImages.map((file) => {
        return {
            name: file.key,
            uid: file.ETag,
            url: file.Location
        }
    })

    const handlePreview = async file => {
        console.log("okay")
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
    }


    return (
        <Row gutter={[12, 15]} wrap={true} justify="start" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}  >

            <div style={{ border: "1px solid black", height: "200px", overflow: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", borderStyle: "dotted", padding: "10px" }}>

                <Upload listType="picture-card"
                    fileList={allCorrectedImages}
                    previewFile={handlePreview}
                >
                    {uploadButton}
                </Upload>

            </div>

            <div style={{ border: "1px solid black", height: "250px", overflow: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
                Property Map here.
            </div>

        </Row>
    )
}

export default PicturesAndMaps
