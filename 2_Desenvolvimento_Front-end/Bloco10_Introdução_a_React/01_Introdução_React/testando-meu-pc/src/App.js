import React from 'react';
import HelloWorld from './HelloWorld';
import './App.css';
import Image from './image';

function App() {
  return (
  <main> <HelloWorld/>
  <Image source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText = 'Cute cat staring' />
  </main>
  )
}

export default App;