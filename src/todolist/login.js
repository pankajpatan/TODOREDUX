import React, { Component } from 'react';
import {connect} from  'react-redux'

const mystyle={
    container:{
        margin: "100px auto",
        widtgh: "50px",
        width: "190px",
        border: "1px solid",
        padding: "41px",
        height: "237px",
        
    },
    input :{
        marginBottom:"5px",
        padding:"6px 4px"
    },
    button:
    {
        fontSize:"10px",
        margin: "5px",
        backgroundColor: "blue",
        color: "white",
        fontWeight: "bold",
        fontSize: "15px"
    }
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username:"",pwd:"" }
    }
    handleSubmit=(state)=>{
        this.props.loginDetails(state)
       this.props.history.push('/todolist')

    }
    render() { 
        return (<div style={mystyle.container}>
            <h2> Login here! </h2>
            <input style={mystyle.input} placeholder="Enter username.."  type = "text" value={this.state.username}
             onChange={(e)=>this.setState({username:e.target.value})}/>
            <br></br>
            <input style={mystyle.input} placeholder="Enter password.."  type = "text" value={this.state.pwd} 
            onChange={(e)=>this.setState({pwd:e.target.value})}/>
            <br></br>
            <button style={mystyle.button} 
            onClick ={()=>this.handleSubmit(this.state)}>Log In</button>
            
        </div>  );
    }
}
const mapStateToProps=state=>{
   return {
       Login : state.Login
   }
}

const mapDispatchToProps=dispatch=>{
    return {
        loginDetails: val=>dispatch({type:"LOGIN_NOW",payload:val})
    }
    

}
export default connect(mapStateToProps,mapDispatchToProps)(Login)