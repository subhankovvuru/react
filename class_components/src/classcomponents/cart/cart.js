import React from "react";
class Cart extends React.Component{
   

    render(){
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid black",gap:"30",height:700}}>
                <p>  {this.props.n}</p>
                <img  src={this.props.img} alt="" width={300}/>
            </div>
        )
    }

}
export default Cart;