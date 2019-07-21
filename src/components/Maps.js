import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import PropTypes from 'prop-types';

class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const { searchInfo, hasInfo } = this.props.launches;

    return (
      <div>
        {hasInfo && searchInfo.launches.length > 0 ?
          <div className='map-height'>

            <Map google={this.props.google} zoom={3}
              style={{ width: '100%', height: '105%', position: 'relative', margin: 'auto' }}
              initialCenter={{
                lat: 15.326572,
                lng: -36.157227
              }}>

              {searchInfo.launches.map(info => {
                const { location, id } = info;
                return location.pads[0].latitude === 0 && location.pads[0].longitude === 0 ? null :
                  <Marker
                    style={{ font: '10px' }}
                    onClick={this.onMarkerClick}
                    key={id}
                    title={location.pads[0].name}
                    name={searchInfo.launches.filter(info => info.location.pads[0].id === location.pads[0].id).map(filtered => filtered.name + " " + filtered.windowstart)}
                    position={{ lat: location.pads[0].latitude, lng: location.pads[0].longitude }} />
              })

              }

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                  {this.state.selectedPlace.name === undefined ? null : this.state.selectedPlace.name.map(name => { return <h5 key={name}>{name}</h5> })}
                </div>
              </InfoWindow>

            </Map>
          </div> :
          null
        }
      </div>
    );
  }
}

Maps.propTypes = {
  launches: PropTypes.object.isRequired
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCNGu7kI4wAFGQh1Bb5HUkXDakRot6ablo")
})(Maps)
