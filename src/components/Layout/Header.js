
import mealsImg from '../../Assets/meals.jpeg'
import classes from './Header.module.css'

const Header = props => {
    return(<>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button> cart </button>
    </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt =" a table full of food" />
        </div>
    </>)
}

export default Header;