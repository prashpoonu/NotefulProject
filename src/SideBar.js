import { React } from 'react';
import DATA from './Store';
import { Link } from 'react-router-dom';
import AddFolder from './AddFolder';
import Folder from './Folder';

export default class SideBar extends React.Component {
    render() {
        let folderData = DATA.folders.map(f =>
            <Link to={`/folder/${f.id}`}>
                <Folder name={f.name} id={f.id} />
            </Link>
        );
        return (
            <section arial-label="folder-list" className="folderLst">
                {folderData}
                <AddFolder/>
            </section>
        );
    }
}