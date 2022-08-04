import React, {useCallback, useRef, useEffect, useState} from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import './style.css'
import {Link} from 'react-router-dom';

const mapContainerStyle = {
    width:"100%",
    height:"100vh"
}

const center = {
    lat:21.7679,
    lng:78.8718,
}

function Map(props) {

    const libraries = ["places"];
    const KEY = "AIzaSyBnfe3EXzDem4fUp1edpbv3hCfpZ9KTvUU";
    const mapRef = useRef();

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey:KEY,
        libraries,
    })

    // const [markers, setMarkers] = useState(props.colleges);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        console.log("useEffect",props.colleges); 
        if(props.colleges.length == 0 || !mapRef.current) return;

        mapRef.current.panTo({lat:props.colleges[0].lat, lng:props.colleges[0].lng});
      },[props.colleges])

    const onMapClick = useCallback((event) => {
        console.log("Latitude",event.latLng.lat());
        console.log("Longitude",event.latLng.lng());
    },[])

    const onMapLoad = useCallback((map) => {
        console.log("Loaded",map);
        mapRef.current=map;
    },[])

    if(!isLoaded) return "Map Not Loaded";
    if(loadError) return "LoadingError";
    
  return (
      <div className="map">
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            onClick={onMapClick}
            onLoad={onMapLoad}
        >
            {props.colleges.map(marker => (
                <Marker
                    key={marker._id}
                    position={{lat:marker.lat,lng:marker.lng}}
                    onClick={() => {if(selected){setSelected(null); return} setSelected(marker)}}
                >

                </Marker>
            ))}

            {selected ? (<InfoWindow position={{lat:selected.lat, lng: selected.lng}} onCloseClick={() => setSelected(null)}>
                <div style={{padding: "10px", fontSize:"10px"}}>
                    {selected.title}
                    <div>
                        <Link to={`/college/${selected._id}`}>
                            More...
                        </Link>
                    </div>
                </div>
            </InfoWindow>) : null}
        </GoogleMap>
      </div>
  )
}

export default Map


