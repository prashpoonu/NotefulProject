import React,{Component} from 'react';
import DATA from './Store';
import Note from './Note';
import AddNote from './AddNote'
export default class NoteList extends Component{
    render(){
        let noteList = DATA.notes.map(m=>
            <Note {...m}/>
            );
        return(
            <section arial-label="note-list" className="noteLst">
                {noteList}
                <br></br>
                <AddNote/>
            </section>
        );
    }
}