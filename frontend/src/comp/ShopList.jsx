import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import ShopItem from './ShopItem'
import Context from '../context'
import Loader from './Loader';

function ShopList(props) {
    const {loadShop} = React.useContext(Context);
    const {shops, loading} = props;

    React.useEffect(()=> loadShop(), []);

    return (
        <Fragment>
                <div className="p-3">
                    <Link className='link-primary' to={`/new`}>Add store</Link>
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
                </div>
        </Fragment>
    )
}

export default ShopList