import React, {Component} from 'react'

//just import {} sub module library
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component{
	render(){
		const mapContainer = <div style = {{width:'100%', height:'100%', background:'red'}}> </div>;
		
		return(

			<GoogleMapLoader 
				containerElement = {mapContainer}
				googleMapElement = {
					<GoogleMap
						defaultZoom = {15}
						defaultCenter = {this.props.center}
						options = {{streetViewControl:false, mapTypeControl:false}}>
					</GoogleMap>
				}/>

		)
	}
}

export default Map
