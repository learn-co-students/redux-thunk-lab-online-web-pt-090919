// write your CatList component here

import React, { Component } from 'react';

export default class CatList extends Component {

    render() {
        console.log(this.props.catPics)
        return (
          <div>
            {this.props.catPics.map(pic => 
                <img src={pic.url} alt={"3pi"} />
            )}
          </div>
        );
    }

}