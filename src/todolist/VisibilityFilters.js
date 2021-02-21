import React, { Component } from 'react';
import { connect } from 'react-redux'
import Task from './Task'
class VisibilityFilters extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: "all" }
    }
    
    render() {
     
        return (<div>

    { this.props.todoList
        .filter((item, index) => {
          if (this.state.filter == "all") {
            return true;
          } else if (this.state.filter == "completed") {
            return item.complete;
          } else {
            return !item.complete;
          }
        }).map((item,index)=>{

          return (
              <Task task={item} ind={index} complete={item.complete}/>
          )
      })}
     

            <button value="all" onClick={(e) => { this.setState({ filter: e.target.value }) }}>All</button>
            <button value="completed" onClick={(e) => { this.setState({ filter: e.target.value }) }}>Complete</button>
            <button value="incomplete" onClick={(e) => { this.setState({ filter: e.target.value }) }}>Incomplete</button>
        </div>);
    }
}
const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps)(VisibilityFilters)