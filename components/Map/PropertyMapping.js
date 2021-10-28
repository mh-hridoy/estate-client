import React, { useState, useEffect, useRef } from "react"
import { Input, Space, Select, Popover, Button, InputNumber } from "antd"
import styles from "../../styles/mapping.module.css"
import Map from "./Map"
import Results from "./Results"
import axios from "axios"
import { useSelector } from "react-redux"

const PropertyMapping = () => {
  const [showPrice, setShowPrice] = useState(false)
  const [showBedBath, setShowBedBath] = useState(false)
  const [isSatellite, setIsSatellite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { Search } = Input
  const { Option } = Select

   const token = useSelector((state) => state.user.token)
   const [coords, setCoords] = useState()
   const [sendRequest, setSendRequest] = useState(false)
   const [firstRender, setFirstRender] = useState(false)
   const [firstCoord, setFirstCoord] = useState()
   const [searchedData, setSearchedData] = useState([])

   const [fetchOnScroll, setFetchOnScroll] = useState(false)
  const mapRef = useRef()

   useEffect(() => {
     if (sendRequest) {
       const map = mapRef.current.getMap()
       const bounds = map.getBounds()
       setCoords({
         upper: [bounds._ne.lng, bounds._ne.lat],
         bottom: [bounds._sw.lng, bounds._sw.lat],
       })

       setFetchOnScroll(true)
     }
   }, [sendRequest])

   useEffect(() => {
     if (fetchOnScroll && coords) {
       // console.log("onScroll" + coords)
       const fetchByViewport = async () => {
         setIsLoading(true)
         try {
           const { data } = await axios.post(
             `${process.env.NEXT_PUBLIC_MAIN_PROXY}/property-map`,
             coords,
             {
               headers: {
                 Authorization: `Bearer ${token}`,
               },
               withCredentials: true,
             }
           )
           setIsLoading(false)

           setSearchedData(data)
         } catch (err) {
           console.log(err)
           setIsLoading(false)
         }
       }
       fetchByViewport()
     }

     return () => {
       setCoords()
       setFetchOnScroll(false)
     }
   }, [fetchOnScroll && coords])

   const onMapLoad = (map) => {
     const bounds = map.target.getBounds()
     setFirstCoord({
       upper: [bounds._ne.lng, bounds._ne.lat],
       bottom: [bounds._sw.lng, bounds._sw.lat],
     })
     setFirstRender(true)
   }

   useEffect(() => {
     if (firstRender && firstCoord) {
       const fetchByViewport = async () => {
         try {
           setIsLoading(true)

           const { data } = await axios.post(
             `${process.env.NEXT_PUBLIC_MAIN_PROXY}/property-map`,
             firstCoord,
             {
               headers: {
                 Authorization: `Bearer ${token}`,
               },
               withCredentials: true,
             }
           )
           setIsLoading(false)

           setSearchedData(data)
         } catch (err) {
           setIsLoading(false)
           console.log(err)
         }
       }

       fetchByViewport()
     }

     return () => {
       setFirstRender(false)
       setFirstCoord()
     }
   }, [firstRender && firstCoord])

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
            mapRef={mapRef}
            searchedData={searchedData}
            onMapLoad={onMapLoad}
            setSendRequest={setSendRequest}
            mapStyle={
              isSatellite
                ? "mapbox://styles/alif-h2543/ckv648hg3798814l9pdsn9ptt"
                : "mapbox://styles/mapbox/outdoors-v11"
            }
          />
        </div>

        <div className={styles.results}>
          <Results isLoading={isLoading} searchedData={searchedData} />
        </div>
      </div>
    </>
  )
}

export default PropertyMapping
