import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const cartItems = <ul className = {classes['cart-tiems']}>{[{id: 'c1', name: 'sushi', amount : 2, price: 12.99}].map((item) => <li>{item.name}</li>)}</ul>
const Cart = props => {
    return(
        <Modal onClose = {props.onClose}>
            {cartItems}
            <div className = {classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className = {classes.actions}>
                <button className = {classes['button--alt']} onClick ={props.onClose}> Close</button>
                <button className = {classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart