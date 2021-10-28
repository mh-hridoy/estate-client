import React from "react"
import { Row, Col, Image } from "antd"
import styles from "../../styles/mapping.module.css"

const Results = ({ isLoading, searchedData }) => {
  return (
    <>
      {isLoading && (
        <h4 style={{ textAlign: "center", marginTop: 10 }}>Loading....</h4>
      )}
      <Row gutter={15} wrap={true} justify="start">
        <h3 style={{ textAlign: "center", width: "100%", marginTop: 5 }}>
          Total results : {searchedData.length}
        </h3>
        <Col
          span={24}
          className={styles.resultContainer}
        >
          {searchedData.map((property, inx) => {
                const image =
                  property.propertyImages.length !== 0
                    ? property.propertyImages[0].Location
                    : "/NoImage.jpg"

            return (
              <Col xs={12} key={inx} style={{ margin: "10px 0" }}>
                <div className={styles.resultBox}>
                  {/* property Image */}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={image} className={styles.resultImage} />
                  </div>

                  {/* property Address */}
                  <h4 style={{ fontWeight: "bold", fontSize: "12px" }}>
                    {property.propertyAddress}, {property.city} {property.state}{" "}
                    {property.zip}
                  </h4>
                  {/* Some Info */}
                </div>
              </Col>
            )
          })}

         
        </Col>
      </Row>
    </>
  )
}

export default Results
