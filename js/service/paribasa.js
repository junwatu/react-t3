'use strict'

import React from 'react'
import Box from 't3js'

Box.Application.addService('paribasa', function (application) {

/**
  let Paribasa = React.createClass({

    updateParibasa: function (event) {
      if(event.key === 'Enter'){
        console.log('broadcast paribasaChange')
        application.broadcast('paribasaChange', { data: event.target.value })
      }
    },

    render: function () {
      return (
        <div>
          <input onKeyPress={ this.updateParibasa }/>
        </div>
      )
    }
  })
  */
  class Paribasa extends React.Component {
    constructor(props) {
      super(props)
    }

    updateParibasa(event) {
      if(event.key === 'Enter'){
        application.broadcast('paribasaChange', { data: event.target.value })
      }
    }

    render() {
      return (
        <div>
          <input onKeyPress={ this.updateParibasa }/>
        </div>
      )
    }
  }

  return Paribasa
})
