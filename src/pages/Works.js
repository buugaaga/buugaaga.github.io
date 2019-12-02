import React, { Component } from 'react'

import { CardsWorks } from "../components/CardsWorks";
import { dataOfProjects as data } from '../components/CardsWorks/dataOfProjects';


export class Works extends Component {
  constructor() {
    super();
    this.state = {data};
  }
  render() {
    return <CardsWorks props={this.state.data}/>
  }
}

