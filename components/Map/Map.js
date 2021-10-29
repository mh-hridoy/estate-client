import React, { useState } from "react"
import ReactMapGL, { NavigationControl, Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const navControlStyle = {
  bottom: 20,
  right: 10,
  zIndex: 100,
}

const Map = ({
  mapStyle,
  allSearchedData,
  onMapLoad,
  setSendRequest,
  mapRef,
  viewport,
  setViewport,
}) => {
 

  const markers = React.useMemo(
    () =>
      allSearchedData.map((city, inx) => (
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
    [allSearchedData]
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
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
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
