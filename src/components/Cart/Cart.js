import classes from 'Cart.module.css'

const cartItems = <ul className = {classes['cart-tiems']}>{[{id: 'c1', name: 'sushi', amount : 2, price: 12.99}].map(item => <li>item.name</li>)}</ul>
const Cart = props => {
    return(
        <div>
            {cartItems}
            <div></div>
            <div></div>
        </div>
    )
}

export default Cart