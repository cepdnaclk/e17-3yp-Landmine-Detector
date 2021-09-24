import { Marker } from "leaflet";
import React from "react";
import { geolocated } from "react-geolocated";
import { Map, TileLayer } from 'react-leaflet'

const DEFAULT_LANGITUDE = -123
const DEFAULT_LATITUDE = 48

function OpenStreetMap() {
    const lan = DEFAULT_LANGITUDE
    const lat = DEFAULT_LATITUDE
    return(
        <Map center={[lan,lat]} zoom={12}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        {
            <Marker
                position={[lan,lat]}
            />
        }

        </Map>
    )
}

export default geolocated({
    positionOptions:{
        enableHighAccuracy:false
    },
    userDecisionTimeout:10000
})(OpenStreetMap);