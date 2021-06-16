import ShopItem from './ShopItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding:0
    }
}

function ShopList(props) {
    return (
        <ul style={styles.ul}>
            {props.shops.map((item, index)=><ShopItem key={item.id} shop={item}/>)}
        </ul>
    )
}

export default ShopList