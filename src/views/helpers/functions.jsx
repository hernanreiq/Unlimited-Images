import React from "react";
import { NavLink } from "react-router-dom";

export const changePage = (numPage, content, direction) => {
    var page = '';
    var btn = '';

    if (direction === 'next'){
        if (numPage > 0 && numPage < 100) {
            page = numPage + 1;
        } else {
            page = 1;
        }
        btn = 'btn-success';
    } else if (direction === 'back') {
        if (numPage > 1 && numPage <= 100) {
            page = numPage - 1;
        } else if (numPage === 1){
            page = 100;
        }
        btn = 'btn-danger';
    }

    return (
        <NavLink to={`/Unlimited-Images/${content}/${page}`}  className={'btn ' + btn}><b>{direction.toUpperCase()}</b></NavLink>
    )
}