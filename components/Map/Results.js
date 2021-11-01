import React from "react"
import { Row, Col, Spin } from "antd"
import styles from "../../styles/mapping.module.css"
import { LoadingOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from 'react-redux'
import {propertyModalHandler, onHover} from '../../store/mapSlice'
import MapPropertyModal from "./MapPropertyModal"


const Results = ({ isLoading, allSearchedData }) => {
  const dispatch = useDispatch()
  const isShowModal = useSelector((state) => state.map.showPropertyModal)

  const showPropertyModal = (pId) => {
    dispatch(
      propertyModalHandler({ showPropertyModal: true, modalPropertyId: pId })
    )
        
  }

  const onHoverId = (id) => {
   dispatch(onHover(id))
 }
  const onHoverOut = () => {
   dispatch(onHover(null))

  }


  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            zIndex: 100,
            top: "50%",
            right: "60%",
          }}
        >
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 50, fontWeight: "bolder", color: "#57033E" }}
                spin
              />
            }
          />
        </div>
      )}
      <Row gutter={10} wrap={true} justify="start">
        <h3 style={{ textAlign: "center", width: "100%", marginTop: 5 }}>
          Total results :{" "}
          {!isLoading ? allSearchedData.length : "getting data..."}
        </h3>
        <Col span={24} className={styles.resultContainer}>
          {allSearchedData.map((property, inx) => {
            const image =
              property.propertyImages.length !== 0
                ? property.propertyImages[0].Location
                : "/NoImage5.png"

            return (
              <Col
                xs={12}
                key={inx}
                className={styles.singleContainer}
                onClick={() => showPropertyModal(property._id)}
                onMouseOver={() => onHoverId(property._id)}
                onMouseOut={() => onHoverOut()}
              >
                <div className={styles.resultBox}>
                  {/* property Image */}
                  <div className={styles.imageContainer}>
                    <img src={image} className={styles.resultImage} />
                    <h4
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        padding: 4,
                        margin: "0 5px",
                      }}
                    >
                      {property.propertyAddress}, {property.city}{" "}
                      {property.state} {property.zip}
                    </h4>
                  </div>

                  {/* Some Info */}
                  <h5 style={{ margin: "5px 10px" }}>
                    County Value: ${property.countyValue}
                  </h5>

                  <h5 style={{ margin: "5px 10px" }}>
                    Total SQF: {property.totalSqf}
                  </h5>
                </div>
              </Col>
            )
          })}
        </Col>
      </Row>
      {isShowModal && <MapPropertyModal/>}
    </>
  )
}

export default Results
