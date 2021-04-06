import React from 'react';
import './Table.css';
import { FaEdit, FaSort } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { FcKey } from 'react-icons/fc';
import { FiEdit3 } from 'react-icons/fi';

import Draggable from 'react-draggable';



const Table = () => {

    const [_activeName, setNameField] = React.useState(false);
    const toggleName = () => setNameField(!_activeName);

    const [_activeAdd, setAddField] = React.useState(false);
    const toggleAddField = () => setAddField(!_activeAdd);

    const [_activeEdit, setEditField] = React.useState(false);
    const toggleEditField = () => setEditField(!_activeEdit);

    const [_foreignKey, setForeignKey] = React.useState(true);
    const toggleForeignField = () => setForeignKey(!_foreignKey);

    const handleNameForTable = () => {
        alert('Give table name from this handler');
    }

    const handleNewField = () => {
        alert('create new fields from this handler');
    }

    const handleEditCurrentField = e => {
        alert('edit selected fields from this handler');
    }

    const handleDeleteEvents = e => {
        alert('delete fields or table from this handler');
    }

    const tableName = (
        <div className="name-form">
            <table style={{ border: 'none', marginBottom: 5 }}>
                <tbody>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="table-name">Table Name</label></td>
                        <td><input type="text" name="table-name" className="table-name" placeholder="Table Name" required /></td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="table-comment">Comment</label></td>
                        <td><textarea name="table-comment" className="table-comment" placeholder="Comment" required rows="4" style={{ resize: 'none' }} /></td>
                    </tr>
                </tbody>
            </table>
            <div className="form-field field-wrap">
                <input type="button" value="Save" onClick={handleNameForTable} />
                <input type="button" value="Cancel" className="table-link-btn" onClick={toggleName} />
                <input type="button" value="Delete Table" className="table-link-btn" onClick={handleDeleteEvents} style={{ color: 'red', marginLeft: 'auto' }} />
            </div>
        </div>
    );


    const addField = (
        <div className="name-form">
            <table style={{ border: 'none', marginBottom: 5 }}>
                <tbody>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="field-name">Name</label></td>
                        <td><input type="text" name="field-name" className="field-name" placeholder="Column Name" required /></td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="field-type">Type</label></td>
                        <td>
                            <select className="field-type" name="field-type" style={{ width: '100%' }}>
                                <option value="binary">binary</option>
                                <option value="blob">blob</option>
                                <option value="boolean">boolean</option>
                                <option value="date">date</option>
                                <option value="datetime">datetime</option>
                                <option value="decimal">decimal</option>
                                <option value="float">float</option>
                                <option value="integer">integer</option>
                                <option value="string">string</option>
                                <option value="text">text</option>
                                <option value="time">time</option>
                                <option value="timestamp">timestamp</option>
                                <option value="varchar">varchar</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="field-size">Size</label></td>
                        <td><input type="text" name="field-size" className="field-size" placeholder="Column Size" required /></td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="field-default">Default</label></td>
                        <td><input type="text" name="field-default" className="field-default" placeholder="Default Value" required /></td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td></td>
                        <td>
                            <input className="chk-primary" type="checkbox" name="primary" value="Primary Key" />
                            <label htmlFor="chk-primary"> Primary Key </label> <br />
                            <input className="chk-null" type="checkbox" name="allow-null" value="Allow Null" />
                            <label htmlFor="chk-null"> Allow Null </label> <br />
                            <input className="chk-unique" type="checkbox" name="unique" value="Unique Key" />
                            <label htmlFor="chk-unique"> Unique Key </label> <br />
                            <input className="chk-increment" type="checkbox" name="increment" value="Auto Increment" />
                            <label htmlFor="chk-increment"> Auto Increment </label> <br />
                            <input className="chk-foreign" type="checkbox" name="foreign" value="Foregin Key" />
                            <label htmlFor="chk-foreign"> Foregin Key</label> <br />
                        </td>
                    </tr>
                    <tr className={_foreignKey ? 'set-fields-padding' : 'is-not-active set-fields-padding'}>
                        <td><label htmlFor="field-refTable">Ref. Table</label></td>
                        <td><select className="field-refTable" name="field-refTable" style={{ width: '100%' }}></select></td>
                    </tr>
                    <tr className={_foreignKey ? 'set-fields-padding' : 'is-not-active set-fields-padding'}>
                        <td><label htmlFor="field-refField">Ref. Field</label></td>
                        <td><select className="field-refField" name="field-refField" style={{ width: '100%' }}></select></td>
                    </tr>
                </tbody>
            </table>
            <div className="form-field field-wrap">
                <input type="button" value="Save" onClick={handleNewField} />
                <input type="button" value="Cancel" className="table-link-btn" style={{ marginRight: 'auto' }} onClick={toggleAddField} />
            </div>
        </div>
    );

    const editField = (
        <div className="name-form">
            <table style={{ border: 'none', marginBottom: 5 }}>
                <tbody>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="edit-field-name">Name</label></td>
                        <td><input type="text" name="edit-field-name" className="edit-field-name" placeholder="Column Name" required /></td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="edit-field-type">Type</label></td>
                        <td>
                            <select className="edit-field-type" name="edit-field-type" style={{ width: '100%' }}>
                                <option value="binary">binary</option>
                                <option value="blob">blob</option>
                                <option value="boolean">boolean</option>
                                <option value="date">date</option>
                                <option value="datetime">datetime</option>
                                <option value="decimal">decimal</option>
                                <option value="float">float</option>
                                <option value="integer">int</option>
                                <option value="string">string</option>
                                <option value="text">text</option>
                                <option value="time">time</option>
                                <option value="timestamp">timestamp</option>
                                <option value="varchar">varchar</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="edit-field-size">Size</label></td>
                        <td><input type="text" name="edit-field-size" className="field-size" placeholder="Column Size" required /></td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td><label htmlFor="edit-field-default">Default</label></td>
                        <td><input type="text" name="edit-field-default" className="edit-field-default" placeholder="Default Value" required /></td>
                    </tr>
                    <tr className="set-fields-padding">
                        <td></td>
                        <td>
                            <input className="edit-chk-primary" type="checkbox" name="edit-primary" value="Primary Key" />
                            <label htmlFor="edit-chk-primary"> Primary Key </label> <br />
                            <input className="edit-chk-null" type="checkbox" name="edit-allow-null" value="Allow Null" />
                            <label htmlFor="edit-chk-null"> Allow Null </label> <br />
                            <input className="edit-chk-unique" type="checkbox" name="edit-unique" value="Unique Key" />
                            <label htmlFor="edit-chk-unique"> Unique Key </label> <br />
                            <input className="edit-chk-increment" type="checkbox" name="edit-increment" value="Auto Increment" />
                            <label htmlFor="edit-chk-increment"> Auto Increment </label> <br />
                            <input className="edit-chk-foreign" type="checkbox" name="edit-foreign" value="Foregin Key" />
                            <label htmlFor="edit-chk-foreign"> Foregin Key</label> <br />
                        </td>
                    </tr>
                    <tr className={_foreignKey ? 'set-fields-padding' : 'is-not-active set-fields-padding'}>
                        <td><label htmlFor="field-EditrefTable">Ref. Table</label></td>
                        <td><select className="field-EditrefTable" name="field-EditrefTable" style={{ width: '100%' }}></select></td>
                    </tr>
                    <tr className={_foreignKey ? 'set-fields-padding' : 'is-not-active set-fields-padding'}>
                        <td><label htmlFor="field-EditrefField">Ref. Field</label></td>
                        <td><select className="field-EditrefField" name="field-EditrefField" style={{ width: '100%' }}></select></td>
                    </tr>
                </tbody>
            </table>

            <div className="form-field field-wrap">
                <input type="button" value="Update" onClick={handleEditCurrentField} />
                <input type="button" value="Cancel" className="table-link-btn" style={{ marginRight: 'auto' }} onClick={toggleEditField} />
                <input type="button" value="Delete Table" className="table-link-btn" onClick={handleDeleteEvents} style={{ color: 'red', marginLeft: 'auto' }} />
            </div>
        </div>
    );

    return (
        <Draggable>
            <div className="event-table">
                <table>
                    <thead>
                        <tr className={_activeName ? 'is-not-active' : ''}>
                            <th colSpan="4" >Table Name <button className="float-content-right table-btn" onClick={toggleName}><FaEdit /></button> </th>
                        </tr>
                        <tr style={{ backgroundColor: '#e9e9e9' }}>
                            <th colSpan="4" style={{ fontWeight: 'normal' }}>
                                <p style={{ margin: '2px' }}> Comment </p>
                            </th>
                        </tr>
                        <tr className={_activeName ? 'is-active' : 'is-not-active'}>
                            <td colSpan="4">
                                {tableName}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={_activeEdit ? 'is-not-active' : ''}>
                            <td style={{ padding: 0, textAlign: 'center' }}> <FcKey style={{ transform: 'rotate(-45deg)' }} /> </td>
                            <td>ID</td>
                            <td>int</td>
                            <td style={{ textAlign: 'right' }}>
                                <button className="add-btn-margin table-btn" onClick={toggleEditField}><FiEdit3 /></button>
                                <button className="add-btn-margin table-btn"><FaSort /></button>
                            </td>
                        </tr>

                        <tr className={_activeEdit ? 'is-active' : 'is-not-active'}>
                            <td colSpan="4">
                                {editField}
                            </td>
                        </tr>
                        <tr className={_activeAdd ? 'is-not-active' : ''}>
                            <td colSpan="4" style={{padding: 2}}>
                                <button className="table-link-btn table-btn" onClick={toggleAddField} ><GrAddCircle /> Add Field</button>
                            </td>
                        </tr>
                        <tr className={_activeAdd ? 'is-active' : 'is-not-active'}>
                            <td colSpan="4">
                                {addField}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Draggable>
    );
};

export default Table;