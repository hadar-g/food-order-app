
import mealsImg from '../../Assets/meals.jpeg'

const Header = props => {
    return(<>
    <header>
        <h1>ReactMeals</h1>
        <button> cart </button>
    </header>
        <div>
            <img src={mealsImg} alt =" a table full of food" />
        </div>
    </>)
}

export default Header;