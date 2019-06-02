import React, {Component} from 'react'
export default class Folder extends Component{
    
    render(){
return (
    <h1 className = "folder">
    
    {this.props.name}
    
    </h1>
);
    }
}