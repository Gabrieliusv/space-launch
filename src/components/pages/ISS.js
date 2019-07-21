import React, { Component } from 'react'
import MapsISS from '../MapsISS'

 class ISS extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="p-3">International Space Station</h1>
        <MapsISS />
      </div>
    )
  }
}
export default ISS