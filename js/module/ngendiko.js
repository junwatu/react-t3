'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Box from 't3js'

Box.Application.addModule('Ngendiko', function (context) {
  let _ngendiko, Kasustran

  class Ngendiko extends React.Component {
    constructor(props) {
      super(props)
      this.state = { cecak: '' }

      Box.Application.on('message', (event) => {
        if(event.data.message === 'paribasaChange') {
          this.setState({cecak: event.data.messageData.data})
        }
      })
    }

    render() {
      return (
        <div>
          <Kasustran/>
          <h2>{ this.state.cecak }</h2>
        </div>
      )
    }
  }

/**
  let Ngendiko = React.createClass({

    getInitialState: function () {
      return {cecak: ''}
    },
    componentDidMount: () => {
      Box.Application.on('message', (event) => {
        if(event.data.message === 'paribasaChange') {
          this.setState({cecak: event.data.messageData.data})
        }
      })
    },
    render: function () {
      return (
        <div>
          <Kasustran/>
          <h2>{this.state.cecak}</h2>
        </div>
      )
    }
  })
*/
  function render() {
     _ngendiko = ReactDOM.render(<Ngendiko/>, context.getElement())
     console.log(_ngendiko)
  }

  return {
    init: function () {
      Kasustran = context.getService('kasustran')
      render()
    },
  	messages: ['paribasaChange'],
  	onmessage: function (name, data) {
      switch (name) {
        case 'paribasaChange':
          //console.log('t3 module')
          break;
        default:
      }
  	}
  }
})
