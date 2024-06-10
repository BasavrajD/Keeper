import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'


function App() {

  const [items, setItem] = useState([]);

  function handleClick(note){

    setItem((prev) => {
      return [...prev, note];
    })
  }

  function deleteNote(id){
    setItem((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header/>
      <CreateArea onAdd={handleClick} />
      {
        items.map((item, index) => {
          return (<Note key={index} id={index} title={item.title} content={item.content} onDel={deleteNote} />);
        })
      }
      <Footer/>
    </>
  )
}

export default App
