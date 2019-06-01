import React from 'react';
import SideBar from './SideBar';
import NoteList from './NoteList';

export default class Main extends React.Component{
render(){
    return(
        <>
        <SideBar/>
        <NoteList/>
        </>
    );
}
}
