import React from "react";

export const changePage = (numPage, content, direction) => {
    var page = '';
    var btn = '';

    if (direction === 'next'){
        if (numPage > 0 && numPage < 267) {
            page = numPage + 1;
        } else {
            page = 1;
        }
        btn = 'btn-success';
    } else if (direction === 'back') {
        if (numPage > 1 && numPage <= 267) {
            page = numPage - 1;
        } else if (numPage === 1){
            page = 267;
        }
        btn = 'btn-danger';
    }

    return (
        <a href={`/${content}/${page}`} className={'btn ' + btn}><b>{direction.toUpperCase()}</b></a>
    )
}