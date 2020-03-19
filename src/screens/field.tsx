import * as React from "react"; 
import HP from "./hp";

interface HPState {
    TurtleHP: string;
    RabbitHP: string;
} 

class Field extends React.Component<{},HPState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            TurtleHP: "5rem",
             RabbitHP: "5rem",
        }
    }

    render () {
        const usagi = "enemy-character"
        const kame = "my-character"
        let TurtleHP:any = {
            width:this.state.TurtleHP,
        }
        let  RabbitHP:any = {
            width:this.state.RabbitHP,
        } 

        return (
            <div className="l-field">
                <div className="p-field">
                    <div className="p-field__wrapper">
                        <div className="p-field__character-box -my-character">
                            <img src="./images/kame.png" alt="キャラクターの画像" className="p-field__character"/>
                            <HP Character = {kame} HP = {TurtleHP} />
                        </div>
                        <div className="p-field__character-box -enemy-character">
                            <HP Character = {usagi} HP = { RabbitHP} />
                            <img src="./images/usagi.png" alt="キャラクターの画像" className="p-field__character"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Field;