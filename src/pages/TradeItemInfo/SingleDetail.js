import React, { Component } from 'react'

class SingleDetail extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render() {
    const {match} = this.props;

    return (
      <div>
        <span>{match.params.id}</span>
      </div>
    )
  }
}

export default SingleDetail
