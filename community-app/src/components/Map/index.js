import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '10px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
  }}>
    {text}
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.42,
      lng: 1.08,
    },
    zoom: 14,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          className="map"
          bootstrapURLKeys={{ key:'AIzaSyAWaav8QxFAU9PrE8WM7JYjhlJDSZo1TEc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.428527}
            lng={1.082251}
            className="place"
            text="Pixel Café"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
