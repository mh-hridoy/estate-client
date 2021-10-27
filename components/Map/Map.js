import React, { useState, useRef, useEffect } from "react"
import ReactMapGL, {
  NavigationControl,
  Marker
} from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import axios from "axios"
import { useSelector } from "react-redux"

const navControlStyle = {
  bottom: 20,
  right: 10,
}


const Map = ({ mapStyle }) => {
  const mapRef = useRef()
  const token = useSelector((state) => state.user.token)
  const [coords, setCoords] = useState()
  const [sendRequest, setSendRequest] = useState(false)
  const [firstRender, setFirstRender] = useState(false)
  const [firstCoord, setFirstCoord] = useState()
  const [viewport, setViewport] = useState({
    latitude: 35.329286,
    longitude: -79.732162,
    zoom: 5,
  })
  const [fetchOnScroll, setFetchOnScroll] = useState(false)


  const data = [
    {
      name: "location One",
      longitude: -122.46287,
      latitude: 37.739575,
    },
    {
      name: "location Two",
      longitude: -122.4650587,
      latitude: 37.7395792,
    },
    {
      name: "location Three",
      longitude: -122.457219,
      latitude: 37.729474,
    },
    {
      name: "location four",
      longitude: -122.465653,
      latitude: 37.724403,
    },
  ]

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
      console.log(coords)
    }

    return (() => {
      setCoords()
      setFetchOnScroll(false)
    })
  }, [fetchOnScroll && coords])

  // useEffect(() => {
  //   if (coords) {
  //     const fetchByViewport = async () => {
  //       const { data } = await axios.post(
  //         `${process.env.NEXT_PUBLIC_MAIN_PROXY}/property-map`,
  //         coords,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //           withCredentials: true,
  //         }
  //       )
  //       console.log(data)
  //     }

  //     fetchByViewport()
  //   }
  // }, [coords])

  //use this function to fetch the initial value
  const onMapLoad = (map) => {
    const bounds = map.target.getBounds()
    setFirstCoord({
      upper: [bounds._ne.lng, bounds._ne.lat],
      bottom: [bounds._sw.lng, bounds._sw.lat]
    })
    setFirstRender(true)      
  }

  useEffect(() => {
    if (firstRender && firstCoord) {
      console.log(firstCoord)
    }

    return (() => {
      setFirstRender(false)
      setFirstCoord()
    })
  }, [firstRender && firstCoord])


  const markers = React.useMemo(
    () =>
      data.map((city) => (
        <Marker
          key={city.name}
          longitude={city.longitude}
          latitude={city.latitude}
        >
          <img height={40} width={40} src="/marker.png" />
        </Marker>
      )),
    [data]
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
      // onViewStateChange={(e) => console.log(e)}
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
