import React, { useState } from "react"
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const navControlStyle = {
  bottom: 20,
  right: 10,
}

const Map = ({ mapStyle, searchedData, onMapLoad, setSendRequest, mapRef }) => {
 
  const [viewport, setViewport] = useState({
    latitude: 35.329286,
    longitude: -79.732162,
    zoom: 5,
  })
  
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
    <>
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
    </>
  )
}

export default Map
