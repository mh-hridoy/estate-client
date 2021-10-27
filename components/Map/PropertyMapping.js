import React, {useState} from "react"
import { Input, Space, Select, Popover, Button, InputNumber } from "antd"
import styles from "../../styles/mapping.module.css"
import Map from "./Map"
import Results from "./Results"

const PropertyMapping = () => {
  const [showPrice, setShowPrice] = useState(false)
  const [showBedBath, setShowBedBath] = useState(false)
  const [isSatellite, setIsSatellite] = useState(false)

  const { Search } = Input
  const { Option } = Select

  const pricePopHandler = () => {
    setShowPrice(!showPrice)
  }
  const bedBathPopHandler = () => {
    setShowBedBath(!showBedBath)
  }



  const priceChoose = () => {
    return (
      <>
        <Space direction="horizontal">
          <InputNumber />
          <InputNumber />
        </Space>
      </>
    )
  }

  return (
    <>
      <div style={{ width: "100%", height: "7vh", padding: 5 }}>
        <Space direction="horizontal" size="middle">
          <Search placeholder="Property Address..." />

          <Select defaultValue="forSale" style={{ width: "100%" }}>
            <Option value="forSale">For Sale</Option>
            <Option value="sold">Sold</Option>
            <Option value="forRent">For Rent</Option>
          </Select>
          <Popover
            placement="bottom"
            content={priceChoose}
            trigger="click"
            onVisibleChange={pricePopHandler}
            visible={showPrice}
          >
            <Button>Price</Button>
          </Popover>

          <Popover
            placement="bottom"
            content={priceChoose}
            trigger="click"
            onVisibleChange={bedBathPopHandler}
            visible={showBedBath}
          >
            <Button>Bed&Bath</Button>
          </Popover>
        </Space>
      </div>

      <div className={styles.mapAndResult}>
        <div className={styles.map}>
          {/* Style change button */}
          <div style={{ position: "absolute", top: 20, right: 10, zIndex: 5 }}>
            <Button onClick={() => setIsSatellite(!isSatellite)}>
              {isSatellite ? "Satellite View" : "Street View"}
            </Button>
          </div>

          {/* Actual map component. */}
          <Map
            mapStyle={
              isSatellite
                ? "mapbox://styles/mapbox/satellite-v9"
                : "mapbox://styles/mapbox/outdoors-v11"
            }
          />
        </div>

        <div className={styles.results}>
          <Results />
        </div>
      </div>
    </>
  )
}

export default PropertyMapping
