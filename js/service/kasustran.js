'use strict'

import React from 'react'
import Box from 't3js'

Box.Application.addService('kasustran', function (application) {

  let Paribasa = application.getService('paribasa')

  let Kasustran = React.createClass({
    render: function () {
      return (
        <div>
          <Paribasa/>
        </div>
      )
    }
  })

  return Kasustran
})
