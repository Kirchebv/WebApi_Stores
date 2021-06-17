import React, { Fragment } from 'react';
import {useParams}  from 'react-router-dom';
import Context from '../context'
import Loader from './Loader';


function Shop(props) {
    const id = Number(useParams().id);
    const [shop, setShop] = React.useState({});
    const [updateType, setUpdateType] = React.useState(id >=0);
    const {getShop, updateShop, addShop, removeShop} = React.useContext(Context);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=> {
        if (updateType) {
            setLoading(true);
            getShop(id).then(response => response.json())
                .then(json => {
                if (json.status === 404) {
                    setUpdateType(false)
                }
                else{
                    console.log(json);
                    setShop(json);

                }
                setLoading(false);
                })
        }
        }, []);

    function onChange(e) {
        let pr = e.target.id;
        setShop({...shop, [pr]: e.target.value})
    }

    function onSubmit(e) {
        e.preventDefault()
        e.stopPropagation()

        if (updateType)
        {
            updateShop(shop);
        }
        else
        {
            //addShop(shop);
        }
    }

    function onClickDelete(e) {
        removeShop(id);
        setShop({});
        setUpdateType(false);
    }

    return(
        <Fragment>
            {loading ? <Loader /> : (
                <form className="row g-3" noValidate onSubmit={onSubmit}>
                    <div className="col-md-4 was-validated">
                        <label htmlFor="store" className="form-label">Store</label>
                        <input type="text" className="form-control" id="store" value={shop.store} required onChange={onChange}/>
                    </div>
                    <div className="col-md-2 was-validated">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category" value={shop.category} required onChange={onChange}/>
                    </div>            
                    <div className="col-md-2 was-validated">
                        <label htmlFor="countryCode" className="form-label">Сountry сode</label>
                        <input type="text" className="form-control" id="countryCode" value={shop.countryCode} required onChange={onChange}/>
                    </div>
                    <div className="col-md-4 was-validated">
                        <label htmlFor="storeEmail" className="form-label">Email</label>
                        <input type="text" className="form-control" id="storeEmail" value={shop.storeEmail} required onChange={onChange}/>
                    </div>
                    <div className="col-md-4 was-validated">
                        <label htmlFor="storeMgr_FirstName" className="form-label">Manager firstname</label>
                        <input type="text" className="form-control" id="storeMgr_FirstName" value={shop.storeMgr_FirstName} required onChange={onChange}/>
                    </div>
                    <div className="col-md-4 was-validated">
                        <label htmlFor="storeMgr_LastName" className="form-label">Manager lastname</label>
                        <input type="text" className="form-control" id="storeMgr_LastName" value={shop.storeMgr_LastName} required onChange={onChange}/>
                    </div>
                    <div className="col-md-4 was-validated">
                        <label htmlFor="storeMgr_Email" className="form-label">Manager email</label>
                        <input type="text" className="form-control" id="storeMgr_Email" value={shop.storeMgr_Email} required onChange={onChange}/>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="stock_backstore" className="form-label">Stock backstore</label>
                            <input type="text" className="form-control" id="stock_backstore" value={shop.stock_backstore} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stock_frontstore" className="form-label">Stock frontstore</label>
                            <input type="text" className="form-control" id="stock_frontstore" value={shop.stock_frontstore} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stock_shoppingwindow" className="form-label">Stock shopping window</label>
                            <input type="text" className="form-control" id="stock_shoppingwindow" value={shop.stock_shoppingwindow} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stockaccuracy" className="form-label">Stock accuracy</label>
                            <input type="text" className="form-control" id="stockaccuracy" value={shop.stockaccuracy} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="onflooravailability" className="form-label">On floor availability</label>
                            <input type="text" className="form-control" id="onflooravailability" value={shop.onflooravailability} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stock_meanage_days" className="form-label">Stock meanage days</label>
                            <input type="text" className="form-control" id="stock_meanage_days" value={shop.stock_meanage_days} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">{updateType ? 'Update shop' : 'Add shop'}</button>
                    </div>
                    {updateType ? (
                        <div className="col-12">
                            <button className="btn btn-danger" type="button" onClick={onClickDelete}>Delete</button>
                        </div>) : null
                    }
                </form>
                )
            }
        </Fragment>
    )
}

export default Shop