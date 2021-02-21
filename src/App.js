import React, { Component } from 'react';  
import TodoList from './todolist/TodoList'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./todolist/login"
import {createStore} from 'redux' 
import {Provider} from 'react-redux'
import reducer from './todolist/reducer'



const initState={
    todoList : [],
    Login : []
}
const store = createStore(reducer,initState)
class App extends Component {
    constructor(props) {
        super(props);
      
    }
   
    render() { 
        return (<div>  
                <Provider store={store}>
            <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Login} />
                <Route   path="/todolist" component={TodoList} />
            </Switch>
            </BrowserRouter>  
            </Provider>     
            
        </div>  );
    }
}
 
export default App;