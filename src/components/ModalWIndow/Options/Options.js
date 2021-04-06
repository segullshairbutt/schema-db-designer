import React from 'react';
import Button from "./../../Button/Button";

const Options = (props) => {
    return (
        <table className="modal-table">
            <tbody>
                <tr>
                    <td className="modal-td-title"><label htmlFor="line-color">Line Color</label></td>
                    <td><input type="color" className="line-color" name="line-color" defaultValue="#336699" style={{width: '65%'}} /></td>
                </tr>
                <tr>
                    <td className="modal-td-title">Language</td>
                    <td>
                        <select id="language" className="language">
                            <option value="bn">Bengali</option>
                            <option value="ca">Catalan</option>
                            <option value="zh">Chinese</option>
                            <option value="cs">Czech</option>
                            <option value="da">Danish</option>
                            <option value="de">German</option>
                            <option value="en" selected>English</option>
                            <option value="eo">Esperanto</option>
                            <option value="es">Spanish</option>
                            <option value="fa">Persian</option>
                            <option value="fi">Finnish</option>
                            <option value="fr">French</option>
                            <option value="gr">Greek</option>
                            <option value="ja">Japanese</option>
                            <option value="id">Indonesian</option>
                            <option value="it">Italian</option>
                            <option value="kn">Kannada</option>
                            <option value="nb_no">Norwegian Bokmål</option>
                            <option value="nl">Dutch</option>
                            <option value="pl">Polish</option>
                            <option value="pt_br">Brazilian Portuguese</option>
                            <option value="ro">Romanian</option>
                            <option value="ru">Russian</option>
                            <option value="tr">Turkish</option>
                            <option value="ua">Ukrainian</option>
                            <option value="uz">Uzbek</option>
                            <option value="vi">Vietnamese</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input className="show-foreign" type="checkbox" name="show-foreign" value="Show Foreign Key Icon" />
                        <label htmlFor="show-foreign"> Show Foreign Key Icon </label> <br />
                        <input className="show-increment" type="checkbox" name="show-increment" value="Show Auto Increment Icon" />
                        <label htmlFor="show-increment"> Show Auto Increment Icon </label> <br />
                        <input className="show-not-null" type="checkbox" name="show-not-null" value="Show Not Null Icon" />
                        <label htmlFor="show-not-null"> Show Not Null Icon </label> <br />
                        <input className="show-default" type="checkbox" name="show-default" value="Show Default Value" />
                        <label htmlFor="show-default"> Show Default Value </label> <br />

                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{paddingBottom: '1rem'}}>
                        <Button onClick={props.btnEvent} text={'Save Changes'} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Options;