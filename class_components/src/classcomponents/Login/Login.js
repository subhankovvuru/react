import React from "react"
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            subhan:false,
            color:'blue'

        }
    }

     subbu =()=>{
        this.setState({subhan:!this.state.subhan})
    }
    


    render() {
        return (
            <div style={{backgroundColor:this.state.color}}>
                <button onClick={this.subbu}>login</button>
              {this.state.subhan &&  <form>
                    <input type="text" placeholder="nmae here"/>
                    <input type="text" placeholder="nmae here"/>
                    <input type="text" placeholder="nmae here"/>
                    <input type="text" placeholder="nmae here"/>
                </form>}


                <button onClick={()=>{this.setState({color:this.state.color="yellow"})}}>yellow</button>
                <button onClick={()=>{this.setState({color:this.state.color="red"})}}>red</button>
                <button onClick={()=>{this.setState({color:this.state.color="orange"})}}>orange</button>
                <button onClick={()=>{this.setState({color:this.state.color="pink"})}}>pink</button>
               
            </div>
        )
    }
}
export default Login