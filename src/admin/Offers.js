import React, { Component } from 'react'

export default class Offers extends Component {

    gettingOffers = async () => {
        const api_url = await fetch ('http://localhost:3000/offers');
        const data = await api_url.json();
        console.log(data);
    }

  render() {
    return (
      <div>
        <h1>Офферы</h1>
      </div>
    )
  }
}