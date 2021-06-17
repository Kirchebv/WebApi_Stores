import React from 'react';
import {Link}  from 'react-router-dom';

function ShopItem(props) {
    return (
        <tr className="position-relative">
            <th scope="row">{props.index + 1}</th>
            <td>{props.shop.store}</td>
            <td>{props.shop.countryCode}</td>
            <td>{props.shop.storeEmail}</td>
            <td>{props.shop.storeMgr_FirstName + ' ' + props.shop.storeMgr_LastName}</td>
            <td>{props.shop.storeMgr_Email}</td>
            <td><Link className='link-primary float-right' to={`/shop/${props.shop.id}`}>Изменить</Link></td>
        </tr>
    )
}

export default ShopItem