import React, {useState} from 'react';

export function Display(props){
    return <div className="d-flex justify-content-center align-items-center" style={{width: "100px", height:"80px", backgroundColor: "#303030", color: "white"}}>{props.count}</div>
}

export function GetButton(props){
    const clickHandler = function(){
        props.btnClick(props.btnText)
        console.log(props.btnText);
    }
return <button className="btn btn-dark" onClick={clickHandler}>{props.btnText}</button>
}

export default function Counter(){
    const [countText, SetBtnText] = useState(1);
    const changeDisplay = function(newText){
        SetBtnText(countText+parseInt(newText));
    }
    return(
        <div className="container d-flex justify-content-center align-items-center">
            <GetButton btnText="+1" btnClick={changeDisplay}></GetButton>
            <GetButton btnText="+10" btnClick={changeDisplay}></GetButton>
            <GetButton btnText="+100" btnClick={changeDisplay}></GetButton>
            <Display count={countText}></Display>
            <GetButton btnText="-100" btnClick={changeDisplay}></GetButton>
            <GetButton btnText="-10" btnClick={changeDisplay}></GetButton>
            <GetButton btnText="-1" btnClick={changeDisplay}></GetButton>
        </div>
    )
}