import React from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import Modal from './../Modal/Modal'
import tools from './tools';
import './Toolbar.css';
import Options from '../ModalWIndow/Options/Options';
import MessageBox from "../ModalWIndow/MessageBox/MessageBox";
import NewSchema from '../ModalWIndow/NewSchema/NewSchema';
import Login from '../ModalWIndow/Login/Login';
import ImportDatabase from '../ModalWIndow/ImportDatabase/ImportDatabase';

const Toolbar = (props) => {
    const [option, showOptions] = React.useState(false);
    const [message, showAlert] = React.useState(false);
    const [newSchema, showNewDialog] = React.useState(false);
    const [login, openLogin] = React.useState(false);
    const [importSchema, setImport] = React.useState(false);

    const toggleModalBox = (value) => {
        switch (value) {
            case 'options':
                showOptions(!option);
                break;
            case 'message':
                showAlert(!message);
                break;
            case 'new':
                showNewDialog(!newSchema);
                break;
            case 'login':
                openLogin(!login);
                break;
            case 'import':
                setImport(!importSchema);
                break;
            default:
                break;
        }
    }


    const saveOptions = () => {
        alert('save options');
    }

    const saveDatabase = () => {
        alert('Save Changes');
    }

    const discardChanges = () => {
        alert('Discard changes and reset canvas');
    }

    const createNewSchema = () => {
        alert('Save Changes');
    }

    const importDatabase = () => {
        alert('Import Database');
    }


    const handleMenuClick = e => {
        switch (e.value) {
            case 'options':
                showOptions(!option);
                break;
            case 'new':
                showNewDialog(!newSchema);
                break;
            case 'import':
                setImport(!importSchema);
                break;
            default:
                break;
        }
    };

    const handleLogin = e => {
        openLogin(!login);
        if (login) {
            alert('perform login opperations here!');
        }
    }

    const handleSignUp = e => {
        alert('Sign Up!')
    }

    const [sidebarText, setSidebarText] = React.useState('Show');
    const handleSidebarClick = e => {
        if (e.value === "Show") {
            props.toggleSidebar();
            setSidebarText('Hide');
        }
        else if (e.value === "Hide") {
            props.toggleSidebar();
            setSidebarText('Show');
        }
    }

    const [gridText, setGridText] = React.useState('Hide');
    const handleGridClick = e => {
        if (e.value === "Show") {
            props.toggleGrid();
            setGridText('Hide');
        }
        else if (e.value === "Hide") {
            props.toggleGrid();
            setGridText('Show');
        }
    }

    function renderMenuButton(value, title, index, isDisabled, setShortcut) {
        switch (value) {
            case 'sidebar':
                return <MenuItem value={sidebarText} key={index} disabled={isDisabled ? true : false}
                    onClick={handleSidebarClick}> {`${sidebarText} Sidebar`} {setShortcut !== "" ? <span>{setShortcut}</span> : null} </MenuItem>
            case 'grid':
                return <MenuItem value={gridText} key={index} disabled={isDisabled ? true : false}
                    onClick={handleGridClick}> {`${gridText} Grid`} {setShortcut !== "" ? <span>{setShortcut}</span> : null} </MenuItem>
            default:
                return <MenuItem value={value} key={index} disabled={isDisabled ? true : false}>{title} {setShortcut !== "" ? <span>{setShortcut}</span> : null} </MenuItem>
        }
    }

    return (
        <div className={props.status ? "menu-bar move-with-sidebar" : "menu-bar"}>
            { tools.map((parent, pIndex) => (
                parent.children.length !== 0 ?
                    <Menu menuButton={<MenuButton value={parent.title} className={"btn-menu"}>{parent.title}</MenuButton>} className="drop-menu" key={pIndex}
                        onClick={handleMenuClick}>
                        {
                            parent.children.map((child, childIndex) => (
                                child.children.length === 0 ?
                                    renderMenuButton(child.value, child.title, childIndex, child.disabled, child.shortcut) :
                                    <SubMenu key={childIndex} label={child.title} className="drop-menu">
                                        {
                                            child.children.map((subchild, subChildIndex) => (
                                                renderMenuButton(subchild.value, subchild.title, subChildIndex, subchild.disabled, subchild.shortcut)
                                            ))
                                        }
                                    </SubMenu>
                            ))
                        }
                        {/* <MenuDivider /> */}
                    </Menu> :
                    <MenuButton value={parent.title} aria-haspopup="false" className="btn-menu" key={pIndex}>{parent.title}</MenuButton>
            ))}

            <Menu align="end" className="drop-menu" menuButton={<MenuButton value="user" styles={{ marginLeft: 'auto', marginRight: 20 }} className="btn-menu user-dropdown">Guest</MenuButton>}>
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
            </Menu>
            <Modal state={option} onClose={toggleModalBox} value={'options'} title={'Options'} content={<Options btnEvent={saveOptions} />} />
            <Modal state={message} onClose={toggleModalBox} value={'message'} title={'Altert!'} content={<MessageBox btnEvent={saveDatabase} discard={discardChanges} />} />
            <Modal state={newSchema} onClose={toggleModalBox} value={'new'} title={'New Schema'} content={<NewSchema btnEvent={createNewSchema} />} />
            <Modal state={login} onClose={toggleModalBox} value={'login'} title={'Login'} content={<Login btnEvent={handleLogin} />} />
            <Modal state={importSchema} onClose={toggleModalBox} value={'import'} title={'Import SQL'} content={<ImportDatabase btnEvent={importDatabase} />} />
        </div>
    );
};

export default Toolbar;