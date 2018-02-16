import React, { Component } from 'react'; 

class GoogleMap extends Component {
	//lifecycle method
	// that gets called automatically after the component gets render to the screen
	// created an embedded google map
	// this is how we get third party API to work with React!!!!!!
	// most of the time third party API does not know that it is being used in React so this is the set up to make it work within the React Ecosystem
	
	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}
	render() {
		//this.refs.map
		return <div ref="map" />;
	}

}

export default GoogleMap; 