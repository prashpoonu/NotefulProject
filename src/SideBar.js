import React, {Component } from 'react';
import STORE from './Store';
import { Link } from 'react-router-dom';
import AddFolder from './AddFolder';
import Folder from './Folder';

export default class SideBar extends Component {
    render() {
        let folderData = STORE.folders.map(f =>
            <Link to={`/folder/${f.id}`}>
                <Folder name={f.name} id={f.id} />
            </Link>
        );
        return (
            <section arial-label="folder-list" className="folderLst">
                {folderData}
                {/* <AddFolder/> */}
            </section>
        );
    }
}