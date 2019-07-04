import React, { Component } from 'react';

const withPath = (WrappedComponent, data) => {
  return class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} data={data}/>
      );
    }
  };
}

export default withPath;