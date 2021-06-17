import React, { Fragment } from 'react';
import ShopItem from './ShopItem'
import Context from '../context'
import Loader from './Loader';

function ShopList(props) {
    const {loadShop} = React.useContext(Context);
    const {shops, loading} = props;

    React.useEffect(()=> loadShop(), []);

    return (
        <Fragment>
            {loading && <Loader />}
            {shops.length ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Store</th>
                            <th scope="col">Сountry сode</th>
                            <th scope="col">Email</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Manager email</th>
                            <th scope="col">Category</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {shops.map((item, index)=><ShopItem key={item.id} index={index} shop={item}/>)}
                    </tbody>
                </table>
            ) : (
                loading ? null : <p>No shops!</p>
                )
            }
        </Fragment>
    )
}

export default ShopList