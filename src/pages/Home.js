import React from 'react'

import { Header } from '../components/HeaderHome';
import { Face } from '../components/FaceHome';
import { Education } from '../components/EducationHome';

export function Home(props) {
  return (
    <>
      <Header language={props.language}/>
      <Face language={props.language}/>
      <Education language={props.language}/>
    </>
  )
}
