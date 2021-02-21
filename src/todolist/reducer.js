export default function reducer (state={},action){
    switch (action.type) {
        case "ADD_TASK":{
            const newstate={...state,todoList:[...state.todoList,action.payload]}
            return newstate
        }
            case  "TOGGLE" :{
                const updateState ={...state,todoList:[...state.todoList.slice(0,action.payload),{...state.todoList[action.payload],complete:!state.todoList[action.payload].complete},...state.todoList.slice(action.payload+1)]}
                return updateState
            }
            case "DELETE":{
                const nstate = {...state,todoList:[...state.todoList.filter((item,index)=>index!=action.payload)]}
                return nstate
            }
           case "LOGIN_NOW" :{
               const loginstate = {...state,Login:[ {username:action.payload.username,pwd:action.payload.pwd}]}
               return loginstate
           }
        default:
          return state  
    }
}