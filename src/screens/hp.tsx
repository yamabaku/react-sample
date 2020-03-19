import * as React from "react"

interface HpState {
    MyHp: number;
    EnemyHp: number;
} 

class Hp extends React.Component<{},HpState> {
    constructor(props) {
        super(props);
        this.state = {
            MyHp: 100,
            EnemyHp: 100,
        }
    }

}