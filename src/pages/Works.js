import React, { Component } from 'react'

import { Cards } from "../components/Cards";
import { dataOfProjects as data } from '../components/Cards/dataOfProjects';


export class Works extends Component {
  constructor() {
    super();
    this.state = {data};
  }
  render() {
    return <Cards props={this.state.data}/>
  }
}

