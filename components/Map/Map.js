import React, { useState, useRef, useEffect } from "react"
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import axios from "axios"
import { useSelector } from "react-redux"

const navControlStyle = {
  bottom: 20,
  right: 10,
}

const Map = ({ mapStyle, setIsLoading }) => {
  const mapRef = useRef()
  const token = useSelector((state) => state.user.token)
  const [coords, setCoords] = useState()
  const [sendRequest, setSendRequest] = useState(false)
  const [firstRender, setFirstRender] = useState(false)
  const [firstCoord, setFirstCoord] = useState()
  const [searchedData, setSearchedData] = useState([])
  const [viewport, setViewport] = useState({
    latitude: 35.329286,
    longitude: -79.732162,
    zoom: 5,
  })
  const [fetchOnScroll, setFetchOnScroll] = useState(false)

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

  const markers = React.useMemo(
    () =>
      searchedData.map((city, inx) => (
        <Marker
          captureDrag={false}
          key={city.propertyAddress + inx}
          longitude={+city.geo.long}
          latitude={+city.geo.lat}
        >
          <img
            height={40}
            width={40}
            src="/marker2.png"
            draggable={false}
            onClick={() => console.log(city._id)}
          />
        </Marker>
      )),
    [searchedData]
  )

  return (
    <ReactMapGL
      ref={mapRef}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID}
      {...viewport}
      width="100%"
      height="100%"
      mapStyle={mapStyle}
      onViewportChange={(viewport) => setViewport(viewport)}
      maxZoom={18}
      minZoom={2}
      onLoad={(e) => onMapLoad(e)}
      onTransitionEnd={() => setSendRequest(true)}
      onTransitionStart={() => setSendRequest(false)}
      onTransitionInterrupt={() => setSendRequest(false)}
    >
      <NavigationControl style={navControlStyle} />
      {markers}
    </ReactMapGL>
  )
}

export default Map
