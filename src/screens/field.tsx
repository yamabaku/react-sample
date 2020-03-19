import * as React from "react"; 

class Field extends React.Component {
    render () {
        return (
            <div className="l-field">
                <div className="p-field">
                    <div className="p-field__wrapper">
                        <div className="p-field__character-box -my-character">
                            <img src="./images/kame.png" alt="キャラクターの画像" className="p-field__character"/>
                            <div className="p-field__hp-bar -my -view"></div>
                        </div>
                        <div className="p-field__character-box -enemy-character">
                            <img src="./images/usagi.png" alt="" className="p-field__character"/>
                            <div className="p-field__hp-bar -enemy -view"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Field;