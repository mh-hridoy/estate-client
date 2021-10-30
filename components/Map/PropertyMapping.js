import React, { useState, useEffect, useRef } from "react"
import { Input, Space, Select, Popover, Button, InputNumber } from "antd"
import styles from "../../styles/mapping.module.css"
import Map from "./Map"
import Results from "./Results"
import axios from "axios"
import { searchedData } from "../../store/mapSlice"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
const mbxClient = require("@mapbox/mapbox-sdk")
const mbxStyles = require("@mapbox/mapbox-sdk/services/geocoding")

const PropertyMapping = () => {
  const [showPrice, setShowPrice] = useState(false)
  const [showBedBath, setShowBedBath] = useState(false)
  const [isSatellite, setIsSatellite] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchIsLoading, setSearchIsLoading] = useState(false)
  const dispatch = useDispatch()
  // const [centerVal, setCenterVal] = useState()

  const { Search } = Input
  const { Option } = Select
  const token = useSelector((state) => state.user.token)
  const address = useSelector((state) => state.map.address)
  const center = useSelector((state) => state.map.center)
  const fromHome = useSelector((state) => state.map.fromHome)
  const [coords, setCoords] = useState()
  const [sendRequest, setSendRequest] = useState(false)
  const [firstRender, setFirstRender] = useState(false)
  const [firstCoord, setFirstCoord] = useState()
  const [allSearchedData, setAllSearchedData] = useState([])
  const [zoomLev, setZoomLev] = useState()
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(address ? address : "")
  const [searchFromHome, setSearchFromHome] = useState(false)

  const [fetchOnScroll, setFetchOnScroll] = useState(false)
  const mapRef = useRef()

  const [viewport, setViewport] = useState({
    latitude: 35.329286,
    longitude: -79.732162,
    zoom: !center ? 5 : 14,
    // latitude: center ? center[1] : 35.329286,
    // longitude: center ? center[0] : -79.732162,
    // zoom: center ? 15 : 5,
  })

  const baseClient = mbxClient({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID,
  })
  const stylesService = mbxStyles(baseClient)

  useEffect(() => {
    if (sendRequest) {
      setIsLoading(true)
      const map = mapRef.current.getMap()
      const bounds = map.getBounds()
      setCoords({
        upper: [bounds._ne.lng, bounds._ne.lat],
        bottom: [bounds._sw.lng, bounds._sw.lat],
      })
      const zoomL = map.getZoom()
      setZoomLev(Math.floor(zoomL))
      setFetchOnScroll(true)
    }
  }, [sendRequest])

  useEffect(() => {
    if (mapRef.current && fromHome) {
      setViewport({ latitude: +center[1], longitude: +center[0], zoom: 14 })

      const map = mapRef.current.getMap()
      const bounds = map.getBounds()
      setCoords({
        upper: [+bounds._ne.lng, +bounds._ne.lat],
        bottom: [+bounds._sw.lng, +bounds._sw.lat],
      })
      const zoomL = map.getZoom()
      setZoomLev(Math.floor(zoomL))
      setSearchFromHome(true)
    }
    return () => {
      dispatch(
        searchedData({ address: address, center: center, fromHome: false })
      )
    }
  }, [mapRef.current && fromHome])

  useEffect(() => {
    if (searchFromHome) {
      setFetchOnScroll(true)
setSearchFromHome(false)

    }
  }, [searchFromHome])

  useEffect(() => {
    if (fetchOnScroll && coords) {
      // console.log("onScroll" + coords)
      const fetchByViewport = async () => {
        setIsLoading(true)
        try {
          const queryUrl = `${
            address != null ? "address=" + address + "&" : ""
          }${"west=" + coords.upper[0]}&${"east=" + coords.upper[1]}&${
            "south=" + coords.bottom[0]
          }&${"north=" + coords.bottom[1]}&${"zoom=" + zoomLev}&${
            "pcenter=" + viewport.longitude + "," + viewport.latitude
          }`
          router.push("?" + queryUrl, undefined, { shallow: true })
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_MAIN_PROXY}/property-map?${queryUrl}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          )
          setIsLoading(false)
          setAllSearchedData(data)
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
    if (!fromHome) {
      // console.log(router.query)
      // make two statement for existing query value and non existing query value
      if (Object.keys(router.query).length != 0) {
        //put the center data.
        const { west, east, south, north, address, zoom, pcenter } =
          router.query
        dispatch(
          searchedData({ address: address, center: center, fromHome: false })
        )
        setViewport({
          latitude: +pcenter.split(",")[1],
          longitude: +pcenter.split(",")[0],
          zoom: +zoom,
        })
        setFirstCoord({
          upper: [west, east],
          bottom: [south, north],
        })
        setZoomLev(zoom)

        //get lev from query params or use default
        setFirstRender(true)
      } else {
        const bounds = map.target.getBounds()
        setFirstCoord({
          upper: [bounds._ne.lng, bounds._ne.lat],
          bottom: [bounds._sw.lng, bounds._sw.lat],
        })
        //get lev from query params or use default
        setZoomLev(8)
        setFirstRender(true)
      }
    }
  }

  useEffect(() => {
    if (!fromHome && firstRender && firstCoord) {
      const fetchByViewport = async () => {
        try {
          const queryUrl = `${address ? "address=" + address + "&" : ""}${
            "west=" + firstCoord.upper[0]
          }&${"east=" + firstCoord.upper[1]}&${
            "south=" + firstCoord.bottom[0]
          }&${"north=" + firstCoord.bottom[1]}&${"zoom=" + zoomLev}&${
            "pcenter=" + viewport.longitude + "," + viewport.latitude
          }`

          setIsLoading(true)
          router.push("?" + queryUrl, undefined, { shallow: true })
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_MAIN_PROXY}/property-map?${queryUrl}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          )
          setIsLoading(false)

          setAllSearchedData(data)
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
  }, [!fromHome && firstRender && firstCoord])

  const pricePopHandler = () => {
    setShowPrice(!showPrice)
  }
  const bedBathPopHandler = () => {
    setShowBedBath(!showBedBath)
  }

  const searchProperty = async (property) => {
    //dispatch all the auto generated lat long and bounds information.
    if (property != "") {
      try {
        setSearchIsLoading(true)
        const mapReq = await stylesService.forwardGeocode({
          query: property,
          types: ["address"],
          limit: 1,
        })

        const response = await mapReq.send()
        const match = response.body
        setSearchIsLoading(false)
        setViewport({
          latitude: match.features[0].center[1],
          longitude: match.features[0].center[0],
          zoom: 15,
        })
        dispatch(
          searchedData({ address: property, center: match.features[0].center })
        )
        const map = mapRef.current.getMap()
        const bounds = map.getBounds()
        setCoords({
          upper: [bounds._ne.lng, bounds._ne.lat],
          bottom: [bounds._sw.lng, bounds._sw.lat],
        })
        const zoomL = map.getZoom()
        setZoomLev(Math.floor(zoomL))
        setFetchOnScroll(true)
      } catch (err) {
        console.log(err)
        setSearchIsLoading(false)
      }
    } else {
      delete router.query.address
      dispatch(
        searchedData({ address: "", center: center, fromHome: fromHome })
      )
      setFetchOnScroll(true)
    }
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
          <Search
            placeholder="Property Address..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={searchProperty}
            loading={searchIsLoading}
          />

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
            viewport={viewport}
            setViewport={setViewport}
            center={center}
            mapRef={mapRef}
            allSearchedData={allSearchedData}
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
          <Results isLoading={isLoading} allSearchedData={allSearchedData} />
        </div>
      </div>
    </>
  )
}

export default PropertyMapping
