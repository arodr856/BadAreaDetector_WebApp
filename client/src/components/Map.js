import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
  HeatMap
} from "google-maps-react";
import { connect } from "react-redux";

const mapStyles = {
  width: "45%",
  height: "54%"
};
const h4style = {
  color: "black"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {},
    isHeatVisible: true,
    isMarkerVisible: true //Shows the infoWindow to the selected place upon a marker
  };
  handleToggle1 = () => {
    this.setState({ isMarkerVisible: !this.state.isMarkerVisible });
  };
  handleToggle = () => {
    this.setState({ isHeatVisible: !this.state.isHeatVisible });
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  decisionURL = L => {
    let imageURL = "";

    if (L === "1") {
      imageURL = " http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    } else if (L === "2") {
      imageURL = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    } else if (L === "3") {
      imageURL = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
    } else if (L === "4") {
      imageURL = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    } else {
      imageURL = "http://maps.google.com/mapfiles/ms/icons/white-dot.png";
    }
    return imageURL;
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const gradient = [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)"
    ];

    return (
      <div>
        <div className="floating-panel">
          <button onClick={this.handleToggle}>HeatMap</button>
          <button onClick={this.handleToggle1}>Markers</button>
        </div>
        <div className="map-container">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            scrollwheel={true}
            initialCenter={{
              lat: 32.71573699,
              lng: -117.16108799
            }}
            styles={[
              {
                elementType: "geometry",
                stylers: [
                  {
                    color: "#1d2c4d"
                  }
                ]
              },
              {
                elementType: "labels",
                stylers: [
                  {
                    visibility: "off"
                  }
                ]
              },
              {
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#8ec3b9"
                  }
                ]
              },
              {
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    color: "#1a3646"
                  }
                ]
              },
              {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#4b6878"
                  }
                ]
              },
              {
                featureType: "administrative.land_parcel",
                stylers: [
                  {
                    visibility: "off"
                  }
                ]
              },
              {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#64779e"
                  }
                ]
              },
              {
                featureType: "administrative.neighborhood",
                stylers: [
                  {
                    visibility: "off"
                  }
                ]
              },
              {
                featureType: "administrative.province",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#4b6878"
                  }
                ]
              },
              {
                featureType: "landscape.man_made",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#334e87"
                  }
                ]
              },
              {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#023e58"
                  }
                ]
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#283d6a"
                  }
                ]
              },
              {
                featureType: "poi",
                elementType: "labels.text",
                stylers: [
                  {
                    visibility: "off"
                  }
                ]
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#6f9ba5"
                  }
                ]
              },
              {
                featureType: "poi",
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    color: "#1d2c4d"
                  }
                ]
              },
              {
                featureType: "poi.business",
                stylers: [
                  {
                    visibility: "off"
                  }
                ]
              },
              {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [
                  {
                    color: "#023e58"
                  }
                ]
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#3C7680"
                  }
                ]
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#304a7d"
                  }
                ]
              },
              {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                  {
                    visibility: "off"
                  }
                ]
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#98a5be"
                  }
                ]
              },
              {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    color: "#1d2c4d"
                  }
                ]
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#2c6675"
                  }
                ]
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#255763"
                  }
                ]
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#b0d5ce"
                  }
                ]
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    color: "#023e58"
                  }
                ]
              },
              {
                featureType: "transit",
                stylers: [
                  {
                    visibility: "off"
                  }
                ]
              },
              {
                featureType: "transit",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#98a5be"
                  }
                ]
              },
              {
                featureType: "transit",
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    color: "#1d2c4d"
                  }
                ]
              },
              {
                featureType: "transit.line",
                elementType: "geometry.fill",
                stylers: [
                  {
                    color: "#283d6a"
                  }
                ]
              },
              {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#3a4762"
                  }
                ]
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#0e1626"
                  }
                ]
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#4e6d70"
                  }
                ]
              }
            ]}
          >
            {this.state.isMarkerVisible
              ? this.props.policeCall.map(({ A, B, M, N, L, O }) => {
                  return (
                    <Marker
                      onClick={this.onMarkerClick}
                      icon={{ url: this.decisionURL(L) }}
                      animation={this.props.google.maps.Animation.DROP}
                      name={A}
                      info={B}
                      priority={L}
                      position={{ lat: M, lng: N }}
                      story={O}
                    />
                  );
                })
              : null}

            {this.state.isHeatVisible ? (
              <HeatMap
                gradient={gradient}
                opacity={3}
                positions={this.props.policeCall.map(({ M, N }) => {
                  return { lat: M, lng: N };
                })}
                radius={30}
              />
            ) : null}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <React.Fragment>
                <h4 style={h4style}>ID: {this.state.selectedPlace.name}</h4>
                <h4 style={h4style}>Date: {this.state.selectedPlace.info}</h4>

                {/* <h4 style={h4style}>
              Priority: {this.state.selectedPlace.priority}
            </h4> */}

                <h4 style={h4style}>
                  Crime Level: {this.state.selectedPlace.story}
                </h4>
              </React.Fragment>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

const Mcontainer = GoogleApiWrapper({
  apiKey: "",
  libraries: ["visualization"]
})(MapContainer);

const mapStateToProps = state => ({
  policeCall: state.policeCall.policeCall
});

export default connect(mapStateToProps)(Mcontainer);

