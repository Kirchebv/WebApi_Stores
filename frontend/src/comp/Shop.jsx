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
            shop.id = 0;
            addShop(shop);
        }
    }

    function onClickDelete(e) {
        removeShop(id);
        setShop({
            id: 0,
            store: "",
            countryCode: "",
            storeEmail: "",
            storeMgr_FirstName: "",
            storeMgr_LastName: "",
            storeMgr_Email: "",
            category: "",
            stock_Backstore: 0,
            stock_Frontstore: 0,
            stock_ShoppingWindow: 0,
            stockAccuracy: 0,
            onFloorAvailability: 0,
            stock_MeanAge_days: 0
        });
        setUpdateType(false);
    }

    return(
        <Fragment>
            {loading ? <Loader /> : (
                <form className="row g-3 p-3" noValidate onSubmit={onSubmit}>
                    <div className="col-md-4 was-validated">
                        <label htmlFor="store" className="form-label">Store</label>
                        <input type="text" className="form-control" id="store" value={shop.store} required onChange={onChange}/>
                    </div>
                    <div className="col-md-2 was-validated">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="number" min="0" step="1" className="form-control" id="category" value={shop.category} required onChange={onChange}/>
                    </div>            
                    <div className="col-md-2 was-validated">
                        <label htmlFor="countryCode" className="form-label">Сountry сode</label>
                        <input type="text" maxlength="2" className="form-control" id="countryCode" value={shop.countryCode} required onChange={onChange}/>
                    </div>
                    <div className="col-md-4 was-validated">
                        <label htmlFor="storeEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="storeEmail" value={shop.storeEmail} required onChange={onChange}/>
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
                        <input type="email" className="form-control" id="storeMgr_Email" value={shop.storeMgr_Email} required onChange={onChange}/>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="stock_Backstore" className="form-label">Stock backstore</label>
                            <input type="number" min="0" step="1" className="form-control" id="stock_Backstore" value={shop.stock_Backstore} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stock_Frontstore" className="form-label">Stock frontstore</label>
                            <input type="number" min="0" step="1" className="form-control" id="stock_Frontstore" value={shop.stock_Frontstore} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stock_ShoppingWindow" className="form-label">Stock shopping window</label>
                            <input type="number" min="0" step="1" className="form-control" id="stock_ShoppingWindow" value={shop.stock_ShoppingWindow} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stockAccuracy" className="form-label">Stock accuracy</label>
                            <input type="number" min="0" className="form-control" id="stockAccuracy" value={shop.stockAccuracy} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="onFloorAvailability" className="form-label">On floor availability</label>
                            <input type="number" min="0" className="form-control" id="onFloorAvailability" value={shop.onFloorAvailability} onChange={onChange}/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="stock_MeanAge_days" className="form-label">Stock meanage days</label>
                            <input type="number" min="0" step="1" className="form-control" id="stock_MeanAge_days" value={shop.stock_MeanAge_days} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary" type="submit">{updateType ? 'Update shop' : 'Add shop'}</button>
                        {updateType ? (
                                <button className="btn btn-danger" type="button" onClick={onClickDelete}>Delete</button>
                            ) : null
                        }
                    </div>
                </form>
                )
            }
        </Fragment>
    )
}

export default Shop