import React from 'react'
import './App.css'



export default React.createClass({

  getInitialState: function () {

    return {

      cnt: 0,
      clss: 'cBtn'

    }

  },

  clickDiv: function() {

    this.setState({

      cnt: this.state.cnt + 1,
      clss: 'cClick'

    })

    setTimeout(function(){

      this.setState({

        clss: 'cBtn'

      })

    }.bind(this), 100)

  },


  render: function () {

    return (

      <div className={this.state.clss} onClick={this.clickDiv}>{this.state.cnt} {this.state.cnt === 1 ? 'like' : 'likes'}</div>

    )

  }

})