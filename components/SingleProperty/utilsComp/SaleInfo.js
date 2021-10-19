import { Col, Form, Input, Button, Divider, Upload, message } from "antd"
import DynamicDateField from "./DynamicDateField"
import DynamicInputField from "./DynamicInputField"
import DynamicNumberField from "./DynamicNumberField"
import DynamicInputWithSuffix from "./DynamicInputWithSuffix"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons"
import Resizer from "react-image-file-resizer"
import axios from "axios"

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      600,
      600,
      "JPEG",
      200,
      0,
      (uri) => {
        resolve(uri)
      },
      "base64"
    )
  })

const SaleInfo = ({ name, fieldKey, fullSaleInfo, ...restField }) => {
  const { TextArea } = Input
  const { Item } = Form

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
    
    const files = fullSaleInfo ? fullSaleInfo.saleInfoFiles : []

  const dateToday = new Date().toISOString().split("T")[0]
  const todayHour = new Date().getHours()
  const todayMin = new Date().getMinutes()
  const todaySec = new Date().getSeconds()

  const selectedFileHandler = () => {
    setTimeout(() => {
      setSendRequest((prev) => ({ sendRequest: !prev }))
    }, 50)
    //this timeout wont work everytime if the file size is too large. the better practice would be convert this to bloob data in the backend.
    }
    

  const beforeUpload = async (file) => {
    if (file.type && !file.type.includes("image")) {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        const pdfData = reader.result && reader.result.split("base64,")[1]
        const allPdfData = {
          name:
            file.name.split(".").shift() +
            " - By " +
            user.name +
            " " +
            dateToday +
            " " +
            todayHour +
            ":" +
            todayMin +
            ":" +
            todaySec +
            "." +
            file.name.split(".").pop(),
          uid: file.uid,
          type: file.type,
          data: pdfData,
        }
        setSelectedFiles((prev) => [allPdfData, ...prev])

        // const base64Data = new Buffer.from(reader.result.replace(/^data:image\/\w+;base64,/, ""), "base64")
      }
      reader.onerror = (err) => {
        console.log(err)
      }
    } else if (file.type && file.type.includes("image")) {
      try {
        const image = await resizeFile(file)
        const imageData = image.split("base64,")[1]

        const allImageData = {
          name:
            file.name.split(".").shift() +
            " - By " +
            user.name +
            " " +
            dateToday +
            " " +
            todayHour +
            ":" +
            todayMin +
            ":" +
            todaySec +
            "." +
            file.name.split(".").pop(),
          uid: file.uid,
          type: file.type,
          data: imageData,
        }
        setSelectedFiles((prev) => [allImageData, ...prev])
      } catch (err) {
        console.log(err)
      }
    }
  }

  //

  useEffect(() => {
    if (files.length !== 0) {
      setAllUploadedFiles(files)
    }
  }, [files])

  useEffect(() => {
    if (sendRequest && selectedFiles) {
      if (selectedFiles.length !== 0) {
        //declare the length method here. otherwise it wont work properly with dependencies

        const uploadData = async () => {
          try {
            setUploading(true)
            message.loading({ content: "File uploading...", key: "5" })
            const { data } = await axios.post(
              `${process.env.NEXT_PUBLIC_MAIN_PROXY}/upload-sale-info-files/${propertyId}`,
              { selectedFiles, fieldKey },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            setUploading(false)
            message.success({
              content: "File Uploaded Successfully.",
              key: "5",
            })
              setAllUploadedFiles((prev) => [...data, ...prev]);
          } catch (err) {
            setUploading(false)
            message.error({
              content: err.response
                ? err.response.data.message
                : "Something went wrong.",
              key: "5",
              duration: "3.5",
            })
            console.log(err)
          }
        }
        uploadData()
      }
    }
    return () => {
      setSelectedFiles([])
      setSendRequest(false)
    }
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
          await axios.post(
            `${process.env.NEXT_PUBLIC_MAIN_PROXY}/delete-file/${propertyId}`,
            { key: delFile },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          const indexOfDelFile = allUploadedFiles.findIndex(
            (file) => file.key === delFile
          )
          allUploadedFiles.splice(indexOfDelFile, 1)

          setAllUploadedFiles([...new Set(allUploadedFiles)])
          setIsDeleting(false)
          message.success({
            content: "File Deleted Successfully.",
            key: "6",
          })
        } catch (err) {
          setIsDeleting(false)
          message.error({
            content: err.response
              ? err.response.data.message
              : "Something went wrong.",
            key: "6",
            duration: "3.5",
          })
          console.log(err)
        }
      }

      delFileHandler()
    }
    return () => {
      setDelFile()
    }
  }, [requestDelete && delFile])

  //

  return (
    <>
      <DynamicDateField
        label="Sale Date"
        {...restField}
        name={name}
        fieldname="saleDate"
      />
      <DynamicInputField
        label="Case NO"
        {...restField}
        name={name}
        fieldname="caseNumber"
      />
      <DynamicNumberField
        label="Opening Bid"
        {...restField}
        name={name}
        fieldname="openingBid"
      />
      <DynamicInputField
        label="Sale Type"
        {...restField}
        name={name}
        fieldname="saleType"
      />
      <DynamicInputField
        label="Sale Status"
        {...restField}
        name={name}
        fieldname="saleStatus"
      />
      <DynamicInputField
        label="Sale Place"
        {...restField}
        name={name}
        fieldname="salePlace"
      />
      <DynamicInputField
        label="Sale Time"
        {...restField}
        name={name}
        fieldname="saleTime"
      />
      <DynamicInputField
        label="Trustee File"
        {...restField}
        name={name}
        fieldname="truesteeFile"
      />
      <DynamicInputField
        label="Precinct"
        {...restField}
        name={name}
        fieldname="precinct"
      />
      <DynamicInputField
        label="Trustee"
        {...restField}
        name={name}
        fieldname="trustee"
      />
      <DynamicInputWithSuffix
        label="Trustee URL"
        {...restField}
        name={name}
        fieldname="trusteeUrl"
      />
      <DynamicInputField
        label="Trustee Address"
        {...restField}
        name={name}
        fieldname="trusteeAddress"
      />
      <DynamicInputField
        label="Trustee Phone"
        {...restField}
        name={name}
        fieldname="trusteePhone"
      />
      <DynamicInputField
        label="Trustee Hours"
        {...restField}
        name={name}
        fieldname="trusteeHours"
      />

      <Col xs={24}>
        <Item
          label="Notice of Foreclosure :"
          {...restField}
          name={[name, "noticeOfForclosure"]}
        >
          <TextArea rows={4} style={{ margin: "0px" }} />
        </Item>
      </Col>

      <DynamicInputWithSuffix
        label="Newspaper/Legal Notice URL"
        {...restField}
        name={name}
        fieldname="legalNoticeURL"
      />
      <DynamicDateField
        label="Date Pulled"
        {...restField}
        name={name}
        fieldname="datePulled"
      />
      <DynamicInputField
        label="Book"
        {...restField}
        name={name}
        fieldname="book"
      />
      <DynamicInputField
        label="Page"
        {...restField}
        name={name}
        fieldname="page"
      />
      <DynamicInputField
        label="IM By"
        {...restField}
        name={name}
        fieldname="imBy"
      />
      <DynamicDateField
        label="IM By Date"
        {...restField}
        name={name}
        fieldname="imByDate"
      />
      <DynamicInputField
        label="NOS Name"
        {...restField}
        name={name}
        fieldname="nosName"
      />
      <DynamicDateField
        label="NOS Date"
        {...restField}
        name={name}
        fieldname="nosDate"
      />
      <DynamicInputWithSuffix
        label="Auction.Com URL"
        {...restField}
        name={name}
        fieldname="auctionUrl"
      />
      <DynamicDateField
        label="Date Pulled"
        {...restField}
        name={name}
        fieldname="auctionDate"
      />

      {/* sale info files. */}
      <Divider orientation="center">Property Info Files</Divider>

      <Col
        span={24}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: 15,
        }}
      >
                  <Col xs={12} sm={8} md={4} style={{ paddingTop: "17px" }}>
            <Upload
              id="pFile"
              showUploadList={false}
              customRequest={selectedFileHandler}
              multiple={true}
              beforeUpload={beforeUpload}
              accept="application/pdf, image/*"
            >
              <Button
                type="dashed"
                disabled={uploading}
                loading={uploading}
                icon={<UploadOutlined />}
              >
                {!uploading ? "Upload Files" : "Uploading..."}
              </Button>
            </Upload>
          </Col>

        <Col xs={24} style={{ marginTop: "10px" }}>
          <ul>
            {allUploadedFiles.length !== 0 &&
              allUploadedFiles.map((file) => {
                return (
                  <li
                    style={{
                      margin: "5px",
                      padding: "10px",
                      border: "1px solid black",
                      borderStyle: "dashed",
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    key={file.key}
                  >
                    <a href={file.Location} target="_fuck">
                      {file.key}
                    </a>
                    <span className="imageDelIcon">
                      <Button type="text" disabled={isDeleting}>
                        {/* {delFile == file.key && isDeleting ? <LoadingOutlined /> : */}
                        <DeleteOutlined
                          onClick={() => deleteSelectedFile(file.key)}
                        />
                        {/* } */}
                      </Button>
                    </span>
                  </li>
                )
              })}
          </ul>
        </Col>
      </Col>

      {/* saleinfo files */}

      <Col xs={24}>
        <Item
          label="Before Sale Trustee Notes:"
          {...restField}
          name={[name, "beforeSaleNotes"]}
        >
          <TextArea rows={4} style={{ margin: "0px" }} />
        </Item>
      </Col>

      <Col xs={24}>
        <Item
          label="After Sale Trustee Notes:"
          {...restField}
          name={[name, "afterSaleNotes"]}
        >
          <TextArea rows={4} style={{ margin: "0px" }} />
        </Item>
      </Col>
    </>
  )
}

export default SaleInfo
