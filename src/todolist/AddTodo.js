import React, { Component } from 'react';
import {connect} from 'react-redux'
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { todoTask:"" ,complete:false}
    }
    handleTask=()=>{
     
        this.props.addTask(this.state)
        this.setState({todoTask:""})

    }
    render() { 
        return (<div>
            <input type="text" placeholder="Enter Your Task..." value={this.state.todoTask} onChange={(e)=>{this.setState({todoTask:e.target.value})}}/>
            <button onClick={()=>this.handleTask()}> Add Task</button>
        </div>  );
    }
}
 
const mapStateToProps=(state)=>{
    return {
        todoList:state.todoList} 
}
const mapDispatchToProps=dispatch=>{
  return {
    addTask:val=>dispatch({type:"ADD_TASK" , payload:val})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)