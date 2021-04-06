import React from 'react';
import Button from '../../Button/Button';

const NewSchema = (props) => {
    return (
        <table className="modal-table">
            <tbody>
                <tr>
                    <td className="modal-td-title"><label htmlFor="schema-title">Title</label></td>
                    <td><input type="text" className="schema-title" name="schema-title" defaultValue="Untitled" /></td>
                </tr>
                <tr>
                    <td className="modal-td-title">Database</td>
                    <td>
                        <select id="new-schema-database" class="new-schema-database" autofocus="">
                            <option value="generic" selected>Generic</option>
                            <option value="mysql">MySQL</option>
                            <option value="mssql">MS SQL Server</option>
                            <option value="sqlite">SQLite</option>
                            <option value="postgres">PostgreSQL</option>
                            <option value="oracle">Oracle</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{fontSize: '14px', color: 'gray'}}>Selecting the "generic" database type will allow you to generate SQL for all the databases; but you will only have access to the generic datatypes.</td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{ paddingBottom: '1rem' }}>
                        <Button onClick={props.btnEvent} text={'Create New Schema'} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default NewSchema;