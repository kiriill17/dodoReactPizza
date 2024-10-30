import './CartShop.css'
import { CircleX } from 'lucide-react';
//redux:
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addItem, removeItem } from '../../Redux/Slices/cartSlice'

export default function CartShop({id, title, img, price}) {
//redux:
const dispatch = useDispatch();
const count = useSelector((state) => state.cart.items);
function deleteItem(){
    dispatch(removeItem(id));
    
}

  return (
    <>
    
      <div className="cartShop">
        <img src={img} width={100} alt="" />    
        <div className="cartShop__middle">
            <h1>{title}</h1>
            <p>{price} руб.</p>
        </div>
        <CircleX className='delete__pizza' color='#9b9b9b'/>
      </div>
    </>
  )
}