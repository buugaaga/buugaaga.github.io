import React, { Component } from 'react'

import { CardsWorks } from "../components/CardsWorks";
import { dataOfProjects as data } from '../DataOfProjects/dataOfProjects';


export class Works extends Component {

  
  state = {data};
  
  render() {
    return <CardsWorks data={this.state.data} language={this.props.language} />
  }
}

