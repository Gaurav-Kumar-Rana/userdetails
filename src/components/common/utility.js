
//Utility Library
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

function stringTrim(string){
    return string.split(' ').join('');
}
function buildURL(partialUrl){
    let origin = window.location.origin;
    let dataSource = '/asset/data_source/';
    return origin+dataSource+partialUrl+'.json';
}
//Profile pic component
export const Pic = (props) => {
    return(
        <img src={props.picURL} className="round-shape fullWidth"/>
    )
};

export const FooterIcon = (props) => {
    return(
        <Tooltip title={props.title}>
            <a href={props.url} target="blank">
                <i className={"footer-icon " + stringTrim(props.type)}></i>
            </a>
        </Tooltip>
    )
}

export const FullYear = () =>{
    let fullYear = new Date();
    return (
        <span>{""+ fullYear.getFullYear()+""}</span>
    )
}

export const apiCall = (apiUrl,apiSucessCallBack,apiFailedCallBack) => {
    let url = buildURL(apiUrl);
    fetch(url)
    .then(response => response.json())
    .then(data => {apiSucessCallBack(data)})
    .catch(error => {apiFailedCallBack(error)})
}

export const LeftMenuNav = (menuName) =>{
    let _menuname = menuName.toLocaleLowerCase();
    _menuname = _menuname + "_container";
    document.querySelectorAll(".page-container").forEach((page)=>{
        page.style.display = "none";
    });
    document.getElementById(_menuname).style.display = "table";

}