'use strict'

import React from 'react'

class Pepatah extends React.component {
  constructor(props) {
    super(props)
    this.application = application
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

module.exports = Pepatah
