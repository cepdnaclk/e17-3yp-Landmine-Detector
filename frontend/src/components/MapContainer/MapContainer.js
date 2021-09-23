import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";




export class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      answer:'yes'
    }
  }
  render() {
    const mapStyles = {
      width: "70%",
      height: "100%",
    };
    return (

      
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      >
        <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
      </Map>

    );
    
  }
}


// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: -1.2884,
//             lng: 36.8233
//           }
//         }
//       />
//     );
//   }
// }

// const mapStyles = {
//     width: '100%',
//     height: '50%'
// };

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB3Tzs-xycGhJuG6smRn832rrZfdhFKoKU'
})(MapContainer);