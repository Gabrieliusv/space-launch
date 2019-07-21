import React, { Component } from 'react';


class HistorySearch extends Component {
  render() {
    const { searchInfo, hasInfo } = this.props.launches;
    return (
      <div>

        {
          hasInfo && searchInfo.launches.length > 0 ? searchInfo.launches.map(info => {

            const { name, id, location, lsp, rocket, missions, windowstart, vidURLs, status, failreason } = info;
            return <div key={id} className="container mt-5 p-4 border border-primary rounded">
              <div className="row">
                <div className="col">
                  <img src={rocket.imageURL} className="figure-img img-fluid rounded" alt="Rocket"></img>
                </div>

                <div className="col">
                  <h1>{name}</h1>
                  <h4 className="pb-2 text-secondary">{windowstart}</h4>
                  {status === 3 ? <h4 className="text-success">Successful</h4> :
                    status === 4 && failreason ? <div><h4 className="text-danger">Failed</h4> <p><strong className="text-danger">Reason:</strong>{failreason}</p></div> :
                      status === 4 ? <h4 className="text-danger">Failed</h4> :
                        status === 7 && failreason ? <div><h4 className="text-danger">Partial Failure</h4> <p><strong className="text-danger">Reason:</strong>{failreason}</p></div> :
                          status === 7 ? <h4 className="text-danger">Partial Failure</h4> :
                            null}
                  <p><strong>Launched by: </strong><a href={lsp.wikiURL} target="_blank" rel="noopener noreferrer">{lsp.name}</a> <br />
                    <strong>Location: </strong>{location.name} {location.pads[0].mapURL === "" ? null : <a href={location.pads[0].mapURL} target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a>}<br />
                    <strong>Mission: </strong>{missions.length === 0 ? "Not described" : missions.map(i => i.description)}  <br />
                    <strong>Rocket type: </strong> <a href={rocket.wikiURL} target="_blank" rel="noopener noreferrer">{rocket.name}</a> <br />
                    <strong>Webcast: </strong> {vidURLs.length === 0 ? <i className="fas fa-video-slash"></i> : <a href={vidURLs} target="_blank" rel="noopener noreferrer"><i className="fas fa-video"></i></a>}




                  </p>
                </div>
              </div>
            </div>


          }) : !hasInfo ?
              <div className="p-5">
                <h2 className="p-5 text-center min-height">Search History</h2>
              </div>
              : <div className="p-5">
                <h2 className="p-5 text-center min-height">Nothing Found</h2>
              </div>
        }

      </div>
    )
  }
}

export default HistorySearch;

