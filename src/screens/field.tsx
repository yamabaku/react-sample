import * as React from "react"; 
import HP from "./hp";

interface HPState {
    TurtleHP: number;
    RabbitHP: number;
} 

class Field extends React.Component<{},HPState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            TurtleHP: 5,
            RabbitHP: 5,
        }
        this.RabbitAttack = this.RabbitAttack.bind(this)
    }

    RabbitAttack ():void{
        console.log("test1");
        const Damage:number[] = [10,15,20,25];
        let RabbitAttack = Damage[Math.floor(Math.random()* Damage.length)];
        let RestHP = this.state.TurtleHP - RabbitAttack / 20; 
        console.log(RestHP);
        if (RestHP > 0){
            this.setState({TurtleHP: RestHP}); 
        } else {
            this.setState({TurtleHP: 0});
        }
    }

    TurtleAttack ():void {
        console.log("test");
        const Damage:number[] = [10,15,20,25];
        let TurtleAttack = Damage[Math.floor(Math.random()* Damage.length)];
        let RestHP = this.state.RabbitHP - TurtleAttack / 20; 
        console.log(RestHP);
        if (RestHP > 0){
            this.setState({RabbitHP: RestHP}); 
        } else {
            this.setState({RabbitHP: 0});
        }
        setTimeout(this.RabbitAttack ,500);
    }


    render () {
        const turtle = "-turtle"
        const rabbit = "-rabbit"
        let TurtleHP:{} = {
            width:`${this.state.TurtleHP}rem`,
        }
        let  RabbitHP:{} = {
            width:`${this.state.RabbitHP}rem`,
        } 

        return (
            <div className="l-field">
                <div className="p-field">
                    <div className="p-field__wrapper">
                        <div className="p-field__character-box -turtle">
                            <img src="./images/kame.png" alt="キャラクターの画像" className="p-field__character"/>
                            <HP Character = {turtle} HP = {TurtleHP} />
                            <button className="p-field__button -view" onClick = { () => this.TurtleAttack()}>たたかう</button>
                        </div>
                        <div className="p-field__character-box -rabbit">
                            <HP Character = {rabbit} HP = {RabbitHP} />
                            <img src="./images/usagi.png" alt="キャラクターの画像" className="p-field__character"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Field;