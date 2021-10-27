import { Button } from "antd";
import React, { useState } from "react";
import ReactMapboxGl, {
  ZoomControl,
  RotationControl,
  ScaleControl,
  Marker,
} from "react-mapbox-gl";


function PropertyMap({ lat, long }) {
  const [isSatellite, setIsSatellite] = useState(false);

  const Map = ReactMapboxGl({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID,
  });

  

  return (
    <>
      <div style={{ position: "absolute", zIndex: "6" }}>
        <Button onClick={() => setIsSatellite(!isSatellite)}>
          {" "}
          {isSatellite ? "Satellite View" : "Street View"}
        </Button>
      </div>
      <Map
        style={
          isSatellite
            ? "mapbox://styles/mapbox/satellite-v9"
            : "mapbox://styles/mapbox/outdoors-v11"
        }
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        center={[long ? long : -78.295271, lat ? lat : 35.9553564]}
        zoom={[lat || long ? 15 : 0]}
        renderChildrenInPortal={true}
      >
        <ZoomControl position="bottom-right" />
        <RotationControl />

        {lat !== undefined && (
          <Marker coordinates={[long, lat]} anchor="bottom">
            <img src="/marker.png" height={55} width={55} />
          </Marker>
        )}
        <ScaleControl position="bottom-left" />
      </Map>
    </>
  );
}

export default PropertyMap;
