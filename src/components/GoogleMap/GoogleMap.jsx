import React,{useEffect,useState} from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import styles from './GoogleMap.module.css';


const GoogleMap=()=>{
    const [results,setResult]=useState([]);
    useEffect(()=>{
        axios
        .all([
            axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
            axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
        ])
        .then((responseArr)=>{
            setResult(responseArr[1].data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    const countriesLocation=results.map((data,i)=>{
        return <div 
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
            color:"red",
            backgroundColor:"#FFF",
            height:"25px",
            width:"45px",
            textAlign:"center",
            borderRadius:"30%"
        }}
        >
            <img height="10px" src={data.countryInfo.flag} alt="img"/>
            {data.cases}
        </div>
    })
    return(
        // <div style={{ height: '100vh', width: '100%' }}>
        <div className={styles.container}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCcakwHn8X_NRO56Joqezv8RwcQsCZPoGU "}}
          defaultCenter={{lat: 20,lng: 77}}
          defaultZoom={4}
        >
            {countriesLocation}
        </GoogleMapReact>
      </div>
    )
}
export default GoogleMap;