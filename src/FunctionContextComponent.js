import React,{useContext} from "react";
import { ThemeContext } from "./App_useContext";

export default function FunctionContextComponent() {

    const darkTheme = useContext(ThemeContext);
    
    const themeStyles ={
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color : darkTheme ? '#CCC' : '#333',
        padding : '2rem',
        margin : '2rem'
    }

    return (
        <div>
            <div style ={themeStyles}>Hello </div>
        </div>
    )
    
}