import { useState } from 'react'
import './App.css'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App(){
  return (<div className='main'>
  <Header></Header>
  <Body></Body>
  <Footer></Footer>
  </div>
  )
}

export default App;