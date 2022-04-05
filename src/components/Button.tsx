import React from 'react';
import style from "../Todolist.module.css";
import {FilterValuesType} from "../App";

type propsType={
    name:string
    callBack:()=>void
    filter:FilterValuesType

}

export const Button = (props:propsType) => {
    const filterGlobalFoo=()=>{
             props.callBack()
    }
    return (
        <button
            className={props.name === props.filter ? style.activeFilter : ''}
            onClick={filterGlobalFoo}
        >{props.name}</button>
    );
};



//было !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//----------------------------------------
// import React from 'react';
// import style from "../Todolist.module.css";
// import {FilterValuesType} from "../App";
//
// type propsType={
//     name:string
//     callBack:(filter:FilterValuesType)=>void
//     filter:FilterValuesType
//
// }
//
// export const Button = (props:propsType) => {
//     const filterGlobalFoo=(filterValue:FilterValuesType)=>{
//         console.log(filterValue)
//         props.callBack(filterValue)
//     }
//     return (
//         <button
//             className={props.name === props.filter ? style.activeFilter : ''}
//             onClick={()=>filterGlobalFoo(props.filter)}
//         >{props.name}</button>
//     );
// };