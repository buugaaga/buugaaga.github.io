import React from 'react'

import { Header } from '../components/HeaderHome';
import { Face } from '../components/FaceHome';
import { Education } from '../components/EducationHome';

export function Home(props) {
  console.log(props)
  return (
    <>
      <Header />
      <Face />
      <Education />
    </>
  )
}
