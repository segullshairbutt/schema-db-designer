import React from 'react';
import Button from '../../Button/Button';

const MessageBox = (props) => {
    return (
        <div>
            <table className="modal-table">
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}>You have unsaved changes in your schema, would you like to save it?</td>
                    </tr>
                </tbody>
            </table>
            <table className="modal-table">
                <tbody>

                    <tr>
                        <td style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <Button onClick={props.btnEvent} text={'Save Changes'} />
                            <Button onClick={props.discard} text={'Discard Changes'} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MessageBox;