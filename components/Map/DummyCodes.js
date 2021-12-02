// import React, { useRef, useEffect, useState } from "react"
// import {Button} from "antd"
// import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID

// export default function Map() {
//   const mapContainer = useRef(null)
//   const map = useRef(null)
//   const [lng, setLng] = useState(-70.9)
//   const [lat, setLat] = useState(42.35)
//   const [zoom, setZoom] = useState(9)
//   const [isSatellite, setIsSatellite] = useState(false)

//   useEffect(() => {
//     if (map.current) return // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/outdoors-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     })

//     map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right")
//   })

//   useEffect(() => {
//     if (!map.current) return // wait for map to initialize
//     map.current.on("move", () => {
//       setLng(map.current.getCenter().lng.toFixed(4))
//       setLat(map.current.getCenter().lat.toFixed(4))
//       setZoom(map.current.getZoom().toFixed(2))
//     })

//     if (isSatellite) {
//       map.current.setStyle("mapbox://styles/mapbox/satellite-v9")
//     } else {
//             map.current.setStyle("mapbox://styles/mapbox/outdoors-v11")

//     }

//     map.current.on("move", () => console.log("zoom end"))
//   })

//   const changeMapStyle = () => {
//     if (isSatellite) setIsSatellite(false)
//     if (!isSatellite) setIsSatellite(true)
//   }

//   return (
//     <>
//       {/* Style change button */}
//       <div style={{ position: "absolute", top: 20, right: 10, zIndex: 5 }}>
//         <Button onClick={changeMapStyle}>
//           {isSatellite ? "Satellite View" : "Street View"}
//         </Button>
//       </div>
//       <div style={{ height: "100%", width: "100%" }}>
//         <div
//           ref={mapContainer}
//           className="map-container"
//           style={{ height: "100%", width: "100%" }}
//         />
//       </div>
//     </>
//   )
// }


// coords = {
//   upper: [mapBound._ne.lng, mapBound._ne.lat],
//   bottom: [mapBound._sw.lng, mapBound._sw.lat],
// }