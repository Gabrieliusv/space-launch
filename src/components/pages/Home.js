import React, { Component } from 'react'
import Launch from '../Launch'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchInfo: [],
      hasInfo: false,
    }
  }

  componentDidMount() {
    fetch('https://launchlibrary.net/1.4/launch/next/10')
      .then(responce => responce.json())
      .then(launchInfo => this.setState({
        launchInfo,
        hasInfo: true
      }))
      .catch(error => console.log('parsing error', error))
  };

  render() {
    return (
      <div>
        <Launch launches={this.state} />
      </div>
    )
  }
}

export default Home