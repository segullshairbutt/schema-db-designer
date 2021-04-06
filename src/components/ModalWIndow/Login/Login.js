import React from 'react';
import Button from '../../Button/Button';

const Login = (props) => {
    return (
        <table className="modal-table">
            <tbody>
                <tr>
                    <td className="modal-td-title"><label htmlFor="schema-title">Email</label></td>
                    <td><input type="Email" className="schema-title" name="schema-title"/></td>
                </tr>
                <tr>
                    <td className="modal-td-title"><label htmlFor="login-password">Password</label></td>
                    <td><input type="password" className="login-password" name="login-password" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{ paddingBottom: '1rem' }}>
                        <Button onClick={props.btnEvent} text={'Login'} />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer"> Forgot Password</a>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer"> Create New Account</a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Login;