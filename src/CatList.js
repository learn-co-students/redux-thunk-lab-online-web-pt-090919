// write your CatList component here

import React, {Component} from 'react';

export default class CatList extends Component {
  render(){
    const catImages = this.props.catPics.map(cat => <img key={cat.id} src={cat.url}/>)
    return (
      <div>
      <h2>{this.props.loading}</h2>
      {catImages}
      </div>
      )
  }
}