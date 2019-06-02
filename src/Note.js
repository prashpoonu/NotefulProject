import React,{Component} from 'react';
export default class Note extends Component{
    render(){
       return(
           <section className="NoteDetails">
          <h2 className="note-header">
              {this.props.name}
         </h2> 
         <span>{this.props.modified}</span>&nbsp;&nbsp;
         <button className="delete-note">Delete Note</button>
          </section>
       ); 
    }
}