import React, { Component } from 'react';
import Header from './Heder'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'

import VisibilityFilters from './VisibilityFilters'

class TodoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (<div>

            <Header />
            <button onClick={()=>this.props.history.push('/')}>Log out</button>
            {this.props.Login.map(item => {
                return <h3 style={{ textAlign: "right" }}>{`Hi, ${item.username}`}</h3>
            })}

            <div style={{textAlign:"center",marginTop:"50px"}}>

                <AddTodo />

                <VisibilityFilters />
            </div>

        </div>);
    }
}
const mapStateToProps = state => {
    return {
        Login: state.Login
    }

}
export default connect(mapStateToProps)(TodoList)