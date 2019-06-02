import React, {Component} from 'react';
import SideBar from './SideBar';
import NoteList from './NoteList';
 
export default class Main extends Component{
render(){
    return(
       <>
        <SideBar/>
        <NoteList/>
        </>
               
    );
}
}
