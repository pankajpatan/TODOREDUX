import React, { Component } from 'react';
import {connect} from 'react-redux'

class Task extends Component {
    constructor(props) {
        super(props);
    
    }
    handleClick=(ind)=>{
       
       this.props.toggle(ind)
    }
    handleDelete=(ind)=>{
        console.log(ind)
        this.props.delete(ind)
    }
    render() { 
      
        return ( <div>
          
            <ul style={{listStyle:"none"}}>
                <li style={{textDecoration:this.props.complete?"line-through":null,fontWeight:"bold"}}>
                 
                
                   {this.props.task.todoTask}
                     <input type="checkbox" checked={this.props.complete} onClick={()=>this.handleClick(this.props.ind)}/>
                     <button onClick={()=>this.handleDelete(this.props.ind)}>Delete</button>
                     
                </li>
            </ul>
        </div> );
    }
}
const mapStateToProps= state=>{
   return {
    todoList: state.TodoList,
    
   }   
}
const mapDispatchToProps=dispatch=>{
    return {
        toggle:val=>dispatch({type:"TOGGLE",payload:val}),
        delete : val=>dispatch({type:"DELETE",payload:val})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Task)