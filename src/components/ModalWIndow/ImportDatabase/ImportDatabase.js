import React from 'react';
import Button from '../../Button/Button';

const ImportDatabase = (props) => {
    return (
        <table className="modal-table">
            <tbody>
                <tr>
                    <td></td>
                    <td style={{fontSize: '14px', color: 'gray'}}>Please send a bug report if you encounter errors. Imported sql should only include DDL statements</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="radio" className="mySql" name="database" value="mySql"/>
                        <label htmlFor="mySql"> mySql </label>
                        <input type="radio" className="PostgreSQL" name="database" value="PostgreSQL"/>
                        <label htmlFor="PostgreSQL"> PostgreSQL </label>
                        <input type="radio" className="oracle" name="database" value="Oracle"/>
                        <label htmlFor="oracle"> Oracle </label>
                    </td>
                </tr>
                <tr>
                    <td className="modal-td-title" style={{verticalAlign: 'top'}}>SQL</td>
                    <td><textarea name="sql-script" className="sql-script" required rows="4" style={{ resize: 'none', width: '100%', height: '300px' }} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><Button onClick={props.btnEvent} text={'Import SQL'} /> </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ImportDatabase;