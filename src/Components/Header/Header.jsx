import './Header.css'
import { Heart, ShoppingCart } from 'lucide-react';

//redux:
import { useSelector, useDispatch } from 'react-redux'
//redux cartOpening:
import { setClassCart } from '../../Redux/Slices/cartOpeningSlice'

export default function Header() {
//redux:
const count = useSelector((state) => state.cart.value)
//redux cartOpening:
const dispatch = useDispatch()


  return (
    <>
      <header>
        <div className="header__container">
            <div className="header__left">
                <h1>#DoDo__Pizza</h1>
                <p>Программируемая пицца</p>
            </div>
            <div className="header__right">
                <button className='header__izbr'><Heart className='Heart' size='18'/> Открыть избранное</button>
                <button onClick={()=>dispatch(setClassCart(true))} className='header__cart'><ShoppingCart className='shopingCart' size='18'/> Корзина: {count} руб.</button>
            </div>
        </div>
        <hr />
      </header>
    </>
  )
}
