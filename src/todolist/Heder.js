import React from 'react';
const mystyle = {
    backgroundColor:"blue",
    color:"white",
    textAlign : "center",
    height:"75px"

}
const Header = () => {
    return (  <>
    <div style={mystyle}>
        <h1>Todo List</h1>
    </div>
    
    </>);
}
 
export default Header;