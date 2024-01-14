import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './cartWidget.css'

function CartWidget(props) {
    const handleClick= () =>{
        alert("agregado")
    }
    return (
        <div className='cart'>
            <AddShoppingCartIcon className='.cartIcon' onClick={handleClick}/>
            <span className='cart-counter'>{props.number}</span>
        </div>
    )
}

export default CartWidget
