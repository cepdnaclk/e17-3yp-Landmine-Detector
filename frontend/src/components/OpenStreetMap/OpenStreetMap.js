import React from "react";
import { Map, TileLayer } from 'react-leaflet'

const DEFAULT_LANGITUDE = -123
const DEFAULT_LATITUDE = 48

function OpenStreetMap() {
    return(
        <Map center={[DEFAULT_LATITUDE,DEFAULT_LANGITUDE]}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
        </Map>
    )
}