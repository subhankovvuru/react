import React from "react"
class Count extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            counts: 5,
            num: 100

        }
        this.increase = this.high.bind(this)


    }
    high() {
        this.setState({ num: this.state.num + 1 })
    }
    low() {
        this.setState({ num: this.state.num - 1 })
    }
    inc = () => {
        this.setState({ counts: this.state.counts + 1 })
    }
    inc = () => {
        this.setState({ counts: this.state.counts - 1 })
    }
    render(){
        return (
            <div>
                <div>
    
                    <button onClick={() => this.setState({ count: this.state.count + 1 })} disabled={this.state.count === 0}>-</button>
                    {this.state.count}
                    <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
    
    
                </div>
                <div>
                    <button onClick={this.inc}>+</button>
                    {this.state.counts}
                    <button onClick={this.dec}>-</button>
    
    
                </div>
                <div>
                    <button onClick={this.increase}>+</button>
                    {this.state.num}
                    <button onClick={this.low.bind(this)}>-</button>
    
                </div>
            </div>
        )
    }

}

export default Count;