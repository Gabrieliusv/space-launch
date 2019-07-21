import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: "",
      countryInfo: false,
      searchInfo: [],
      rocketName: ""
    }
  }

  onAllChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  submit = () =>
    fetch(`https://launchlibrary.net/1.4/agency?countryCode=${this.state.countryCode}&limit=300`)
      .then(responce => responce.json())
      .then(searchInfo => this.setState({
        searchInfo,
        countryInfo: true,
        rocketInfo: false
      }))
      .catch(error => console.log('parsing error', error))

  submitRocket = () =>
    fetch(`https://launchlibrary.net/1.4/rocket/${this.state.rocketName}?limit=300`)
      .then(responce => responce.json())
      .then(searchInfo => this.setState({
        searchInfo,
        countryInfo: false,
        rocketInfo: true

      }))
      .catch(error => console.log('parsing error', error))

  ifEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.submit();
    }
  }

  ifEnterRocket = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.submitRocket();
    }
  }

  render() {
    const { countryInfo, rocketInfo, searchInfo } = this.state;
    return (

      <div className="p-4">
        <div className="row justify-content-center">
          <form className="col-lg-3 border m-3">
            <div className="form-group pt-3">
              <label><i className="fas fa-globe"></i> Search agencies by country </label>
              <input name="countryCode" className="form-control" onKeyDown={this.ifEnter} onChange={this.onAllChange} placeholder="Enter Country code" />
              <small id="emailHelp" className="form-text text-muted">(USA, AUS, CHN, FRA, DEU, JPN, RUS...)</small>
              <div className="d-flex flex-row-reverse">
                <button type="button" className="btn bg-custom m-2 " onClick={this.submit}>Search</button>
              </div>
            </div>
          </form>
          <form className="col-lg-3 border m-3">
            <div className="form-group pt-3">
              <label><i className="fas fa-rocket"></i> Search Rockets by name </label>
              <input name="rocketName" className="form-control" onKeyDown={this.ifEnterRocket} onChange={this.onAllChange} placeholder="Enter Rocket name" />
              <small id="emailHelp" className="form-text text-muted">(Falcon, Atlas, Pegasus, Antares, Electron, Soyuz...)</small>
              <div className="d-flex flex-row-reverse">
                <button type="button" className="btn bg-custom m-2 " onClick={this.submitRocket}>Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="row justify-content-center">
          {countryInfo === true && searchInfo.agencies.length > 0 ? searchInfo.agencies.map(agenc =>
            <div className="card m-2" key={agenc.id} style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{agenc.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{agenc.abbrev}</h6>
                <p>Agency type: {agenc.type === 1 ? "Government" : agenc.type === 2 ? "Multinational" : agenc.type === 3 ? "Commercial" : agenc.type === 4 ? "Educational" : agenc.type === 5 ? "Private" : "Unknown"}</p>
                {agenc.infoURLs.length > 0 ? <a href={agenc.infoURLs[0]} target="_blank" rel="noopener noreferrer" className="card-link">Official site</a> : null}
                {agenc.wikiURL.length > 0 ? <a href={agenc.wikiURL} target="_blank" rel="noopener noreferrer" className="card-link">Wikipedia</a> : null}
              </div>
            </div>) :
            countryInfo === true && searchInfo.agencies.length === 0 ?
              <div className="min-height p-5">
                <h2>Nothing Found</h2>
              </div> :
              rocketInfo === true && searchInfo.rockets.length > 0 ?
                searchInfo.rockets.map(rocket => <div className="card m-2" key={rocket.id} style={{ width: "18rem" }}>
                  <img src={rocket.imageURL} className="card-img-top" alt={"Rocket"}></img>
                  <div className="card-body">
                    <h5 className="card-title">{rocket.name}</h5>
                    {rocket.infoURLs.length > 0 ? <a href={rocket.infoURLs[0]} target="_blank" rel="noopener noreferrer" className="card-link">Official site</a> : null}
                    {rocket.wikiURL.length > 0 ? <a href={rocket.wikiURL} target="_blank" rel="noopener noreferrer" className="card-link">Wikipedia</a> : null}
                  </div>
                </div>) :
                rocketInfo === true && searchInfo.rockets.length === 0 ?
                  <div className="min-height p-5">
                    <h2>Nothing Found</h2>
                  </div> :
                  <div className="min-height"></div>}
        </div>
      </div>
    )
  }
}
export default Search