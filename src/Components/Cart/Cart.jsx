import './Cart.css'
import CartShop from '../CartShop/CartShop';
import { Trash, CircleX } from 'lucide-react';
// redux cartOpening:
import { useSelector, useDispatch } from 'react-redux'
import { setClassCart } from '../../Redux/Slices/cartOpeningSlice'
import { addToCart, addItem, removeItem, clearItems } from '../../Redux/Slices/cartSlice'


export default function Cart() {
//redux cartOpening:
const count = useSelector((state) => state.cartOpening.nameClassCart)
const dispatch = useDispatch()
const arr = useSelector((state) => state.cart.items);
const itog = useSelector((state) => state.cart.value);

  return (
    <>
      <div className={count}>
        <div className="cart__container">
            <div className="cart__inner__container">
                <div className="cart__top">
                    <h1>Корзина</h1>
                    <p onClick={()=>dispatch(clearItems())}>Очистить корзину <Trash size='14' color='#333'/></p>
                </div>
                <div className="cart__main">
                    {arr.map(item => <CartShop {...item}/>)}
                </div>
                <div className="cart__bottom">
                    <div className="cart__itog">
                        <p>Итого: {itog} руб.</p>
                        <button>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
        <CircleX onClick={() => dispatch(setClassCart(false))} color='#2e2e2e' className='XXX'/>
      </div>
    </>
  )
}
