import React, { Component } from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

var myIcon = L.icon({
    iconUrl: './ISS.png',
    iconSize: [100, 63],
    iconAnchor: [50, 63],
    popupAnchor: [0, -53],
});

const DefaulfView = {
    center: [0, 0],
    zoom: 3,
}

class MapsISS extends Component {
    constructor() {
        super();
        this.state = {
            viewport: DefaulfView,
            lat: 0,
            lng: 0,
            hasInfo: false,
            issTimes: [],
            issInfo: [],
            astronauts: []
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.issLocation(),
            1000
        );

        navigator.geolocation.watchPosition((position) => {
            this.issPass(position.coords.latitude, position.coords.longitude)
        }, () => {
            fetch('https://ipapi.co/json')
                .then(res => res.json())
                .then(location => {
                    this.issPass(location.latitude, location.longitude)
                })

        });

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onViewportChanged = (viewport) => {
        this.setState({ viewport })
    }

    issLocation = () => {
        const proxyurl = "https://iss-map-proxy.herokuapp.com/";
        const url = "http://api.open-notify.org/iss-now.json";
        fetch(proxyurl + url)
            .then(responce => responce.json())
            .then(IssInfo =>
                this.setState({
                    lat: IssInfo.iss_position.latitude,
                    lng: IssInfo.iss_position.longitude,
                    hasInfo: true,
                }))
            .catch(error => console.log('parsing error', error))
    }

    issPass = (lat, lng) => {
        const proxyurl = "https://iss-map-proxy.herokuapp.com/";
        const url = `//api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lng}`
        fetch(proxyurl + url)
            .then(res => res.json())
            .then(passTimes => {
                this.setState({
                    issTimes: passTimes
                })
            }).then(res => this.issPassTimes())
    };

    issPassTimes = () => {
        let dates = [];
        this.state.issTimes.response.forEach(time => {
            let date = new Date(time.risetime * 1000);
            let string = date.toString();
            dates.push(string);
        });
        this.setState({ issInfo: dates })
    }

    inSpace = () => {
        const proxyurl = "https://iss-map-proxy.herokuapp.com/";
        const url = `//api.open-notify.org/astros.json`
        fetch(proxyurl + url)
            .then(res => res.json())
            .then(inSpace => {
                this.setState({
                    astronauts: inSpace
                })
            })
            .catch(error => console.log('parsing error', error));
    }

    render() {

        const { astronauts, issInfo } = this.state;
        const position = [this.state.lat, this.state.lng]
        return (
            <div>
                <Map
                    className="map-iss"
                    center={position}
                    onViewportChanged={this.onViewportChanged}
                    viewport={this.state.viewport}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {this.state.hasInfo === true ?
                        <Marker position={position} icon={myIcon}>
                            <Popup>
                                Orbital speed : 7.66 km/s (27,600 km/h; 17,100 mph) <br />
                                Orbital period : 92.68 minutes <br />
                                Orbits per day : 15.54
                            </Popup>
                        </Marker>
                        : null
                    }

                    <div className="map-c" id="map-card">
                        <div>
                            <button className="btn bg-custom m-1" type="button" data-toggle="collapse" data-target="#nextTime" aria-expanded="false" aria-controls="nextTime">
                                Next time near you
                            </button>
                            <button className="btn bg-custom m-1 collapsed" type="button" onClick={this.inSpace} data-toggle="collapse" data-target="#inSpace" aria-expanded="false" aria-controls="inSpace">
                                Astronauts in space
                            </button>
                        </div>
                        <div className="collapse mt-1" id="nextTime" data-parent="#map-card">
                            <div className="card card-body">
                                {issInfo.length > 0 ? issInfo.map((time, index) => <div key={"time" + index}><p>{time}</p></div>)
                                    :
                                    <div className="p-5 text-center">
                                        <div className="spinner-border custom-c" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                        <div className="collapse mt-1" id="inSpace" data-parent="#map-card">
                            <div className="card card-body">
                                {astronauts.message === "success" ? astronauts.people.map((people, index) =>
                                    <p key={"people" + index}><strong>{people.name}</strong> ({people.craft})</p>)
                                    :
                                    <div className="p-5 text-center">
                                        <div className="spinner-border custom-c" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </Map>
            </div>
        )
    }
}
export default MapsISS