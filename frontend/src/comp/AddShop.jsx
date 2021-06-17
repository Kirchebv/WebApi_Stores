import React, { Fragment } from 'react';
import Shop from './Shop'

function AddShop(props) {
    const [shop, setShop] = React.useState({});
    const {addShop} = React.useContext(Context);

    return (
        <Fragment>
            <Shop></Shop>
            <button className='btn btn-outline-info float-right' onClick={addShop.bind(null)}>Добавить</button>
        </Fragment>
    )
}