import CartIcon from './CartIcon'
import CartContext  from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

import {useContext, useEffect, useState} from 'react'

const HeaderCartButton = props => {

    const cartCTX = useContext(CartContext)
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)

    const numberOfCartItems = cartCTX.items.reduce(
        (curNumber, item) => {return curNumber + item.amount}, 0) 

    const btnClasses = `${classes.button} ${ buttonIsHighlighted ?  classes.bump : ''}`

    const {items} = cartCTX
    useEffect(() => {
        if(cartCTX.items.length === 0){
            return
        }
        setButtonIsHighlighted(true)

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])
   
    
    return (
    <button className = {btnClasses} onClick ={props.onClick}> 
        <span className = {classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className = {classes.badge}> {numberOfCartItems}</span>
    </button>)

}

export default HeaderCartButton