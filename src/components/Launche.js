import React, { Component } from 'react';
import Countdown from './Countdown'



class Launche extends Component {
  render() {
    const { launchInfo, hasInfo } = this.props.launches;
    return (
      <div>

        {
          hasInfo && launchInfo.launches.length > 0 ? launchInfo.launches.map(info => {

            const { name, id, location, lsp, rocket, missions, windowstart, vidURLs} = info;
            return <div key={id} className="container mt-5 p-4 border border-primary rounded">
              <div className="row">
                <div className="col">
                  <img src={rocket.imageURL} className="figure-img img-fluid rounded" alt="Rocket"></img>
                </div>

                <div className="col">
                  <h1>{name}</h1>
                  <Countdown time={windowstart}/>
                  <h4 className='pb-2 text-secondary'>{windowstart}</h4>
                  <p><strong>Launched by: </strong><a href={lsp.wikiURL} target="_blank" rel="noopener noreferrer">{lsp.name}</a> <br />
                    <strong>Location: </strong>{location.name} {location.pads[0].mapURL === ""? null : <a href={location.pads[0].mapURL} target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a>}<br/>
                    <strong>Mission: </strong>{missions.length === 0 ? "Not described" : missions.map(i => i.description)}  <br />
                    <strong>Rocket type: </strong> <a href={rocket.wikiURL} target="_blank" rel="noopener noreferrer">{rocket.name}</a> <br />
                    <strong>Webcast: </strong> {vidURLs.length === 0 ? <i className="fas fa-video-slash"></i> :  <a href={vidURLs} target="_blank" rel="noopener noreferrer"><i className="fas fa-video"></i></a>}


                  </p>
                </div>
              </div>
            </div>


          }) :
          <div className="p-5 text-center min-height">
            <div className="p-3 spinner-border custom-c" role="status">
            <span className="sr-only">Loading...</span>
                 
            </div>
            </div>
        }

      </div>
    )
  }
}

export default Launche;

