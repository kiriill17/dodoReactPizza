import './Shop.css'

//redux:
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addItem } from '../../Redux/Slices/cartSlice'

export default function Shop({title, description, price, img, id}) {
//redux:
const dispatch = useDispatch();
function onClickAdd(){
  const item = {
    id,
    title,
    price,
    img
  };
  dispatch(addItem(item));
  dispatch(addToCart(price));
}

  return (
    <>
      <div className="shop__container">
        <img width={190} height={190} src={img} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Цена: {price} руб.</p>
        <button onClick={()=>onClickAdd()}>Добавить в корзину</button>
      </div>
    </>
  )
}
