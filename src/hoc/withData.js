import React, { Component } from 'react';

const withData = (WrappedComponent, data) => {
  return class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} data={data}/>
      );
    }
  };
}

export default withData;