import React, { Component } from 'react';

// Local Imports
import Image from './Image/Image';

export default class Images extends Component {
  render() {
    return (
      <div className="imagesContainer">
        { this.props.photos.map((photoObj) => {
          return (
            <Image key={photoObj.id} {...photoObj} />
          );
        }) }
      </div>  
    );
  }
}