import React from 'react';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ShopItem(props) {
    const {removeShop} = React.useContext(Context);

    return (
        <li style={styles.li}>
            <span>
                {props.shop.store}
            </span>
            <button className='rm' onClick={removeShop.bind(null, props.shop.id)}>&times;</button>
        </li>
    )
}

export default ShopItem