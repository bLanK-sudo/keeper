import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import HighlightIcon from '@material-ui/icons/Highlight';
import {Zoom} from '@material-ui/core'
const currentYear = new Date().getFullYear()
const App = () => {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [clicked, setClicked] = useState(false)
    function handleTitleChange(e){
        setTitle(e.target.value)
    }
    function handleBodyChange(e){
        setContent(e.target.value)
    }
    const [fullNote, setFullNote] = useState([])
    function createNote(event){
        setFullNote(e => {
            return [...e, {title, content}];
        })
        setTitle("")
        setContent("")
        event.preventDefault()
    }
    function deleteNote(id){
        const index = Number(id)
        setFullNote(pV => {
            return pV.filter((e, i) => {
                return index !== i
            })
        })
    }
    function handleClick(){
        setClicked(true)
    }
    return (
        <div>
            <div className="creatingNotes">
                <form className="crnote">
                    <div className="flex">
                    <div style={{display:clicked ? "inherit" : "none"}}><input className="title" onChange={handleTitleChange} value={title} autoComplete="off" type="text" name="title" placeholder="Title" />
                    </div>
                    <textarea onClick={handleClick} className="content" value={content} onChange={handleBodyChange} type="text" name="content" placeholder="Take a note" />
                    </div>
                    <Zoom in={clicked}><Fab size="small" onClick={createNote}><AddIcon /></Fab></Zoom>
                </form>
            </div>
            <div className="mains">
            {
                fullNote.map((e, i) => <div key={i} className="notes">
                        <div className="flex">
                        <h1>{e.title}</h1>
                        <p>{e.content}</p>
                        </div>
                        <button className="del" value={i} onClick={(id) => {
                            deleteNote(i)
                        }}><DeleteIcon /></button>
                    </div>
                )
            } 
            </div>            
            </div>
            
    )
}
const Header = () => {
    return (
        <nav>
        <ul>
          <li className="header"> <HighlightIcon fontSize="large" /> Keeper</li>
        </ul>
      </nav>
    )
}
const Footer = () => {
    return(
        <div><p className="footer">Copyright © {currentYear}</p></div>
    )
}
export {App, Header, Footer}