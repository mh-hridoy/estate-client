import React from "react"
import { Row, Col } from "antd"

const Results = ({ isLoading }) => {
  return (
    <>
      {isLoading && <h4 style={{textAlign: "center", marginTop : 10}} >Loading....</h4>}
      <Row gutter={15} wrap={true} justify="start">
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          <Col xs={12}>
            <div
              style={{
                border: "1px solid black",
                height: "100%",
                width: "100%",
              }}
            >
              Property One
            </div>
          </Col>

          <Col xs={12}>
            <div
              style={{
                border: "1px solid black",
                height: "100%",
                width: "100%",
              }}
            >
              Property Two
            </div>
          </Col>
        </Col>
      </Row>
    </>
  )
}

export default Results
