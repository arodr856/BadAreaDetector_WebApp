import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, HeatMap } from 'google-maps-react';
import { connect } from 'react-redux';


const mapStyles = {
    width: '45%',
    height: '100%'
};
const h4style = {
    color: "black"
};


export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},
        isHeatVisible: true,
        isMarkerVisible: true       //Shows the infoWindow to the selected place upon a marker
    };
    handleToggle1 = () => {
        this.setState({ isMarkerVisible: !this.state.isMarkerVisible })
    }
    handleToggle = () => {
        this.setState({ isHeatVisible: !this.state.isHeatVisible });
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

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

        let heat = <HeatMap
            gradient={gradient}
            opacity={3}
            positions={this.props.policeCall.map(({ M, N }) => {
                return { lat: M, lng: N };
            })}
            radius={30}
        />





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
                    >



                        {this.state.isMarkerVisible ? this.props.policeCall.map(({ A, B, M, N, L, O }) => {
                            return (
                                <Marker
                                    onClick={this.onMarkerClick}
                                    name={A}
                                    info={B}
                                    priority={L}
                                    position={{ lat: M, lng: N }}
                                    story={O}
                                />
                            );
                        }) : null}

                        {this.state.isHeatVisible ? heat : null}



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
    apiKey: '',
    libraries: ["visualization"]
})(MapContainer);

const mapStateToProps = (state) => ({
    policeCall: state.policeCall.policeCall
});

export default connect(mapStateToProps)(Mcontainer);
