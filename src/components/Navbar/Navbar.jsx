import './navBarStyled.css'
import CartWidget from '../CartWidget/CartWidget'
function Navbar() {
    return (

        <div className="navBar">
            <h1>The Boutique</h1>
            <CartWidget number={1} />
        </div>

    )
}

export default Navbar
