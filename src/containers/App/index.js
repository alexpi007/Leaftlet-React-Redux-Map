import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';

import { createMarker } from './../../actions';
import MarkersContainer from '../MarkersContainer';

// Map styles
const mapStyles = {
  height: '100vh',
  width: '100vw'
};
// Map init props
const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const initPosition = [52.310591, 4.768264];
const zoom = 13;

// Default logo
const defaultLogoUrl =
  'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  // Handling click on the map
  handleMapClick(e) {
    const newPosition = {
      title: 'Untitled',
      logo: defaultLogoUrl,
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      lat: e.latlng.lat,
      lng: e.latlng.lng
    };
    // Passing to action default data in order to create a new marker
    this.props.createMarker(newPosition);
  }

  render() {
    const { markers } = this.props;
    return (
      <Map
        center={initPosition}
        zoom={zoom}
        style={mapStyles}
        onClick={this.handleMapClick}
      >
        <TileLayer url={tileLayerUrl} />
        <MarkersContainer markers={markers} />
      </Map>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createMarker
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    markers: state.getIn(['markers'])
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
