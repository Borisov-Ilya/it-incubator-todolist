import React, {ChangeEvent} from 'react';

type CheckBoxPropsType={
    tIsDone:boolean
    callBack:(currentEvent:boolean)=>void
}

export const CheckBox = (props:CheckBoxPropsType) => {
   const checkBoxHandler=(event: ChangeEvent<HTMLInputElement>)=>{
       props.callBack(event.currentTarget.checked)
   }
    return (
        <input type="checkbox" checked={props.tIsDone}
               onChange={checkBoxHandler}/>
    );
};
