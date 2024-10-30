import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Sort from './Components/Sort/Sort'
import Shop from './Components/Shop/Shop'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import React from 'react'
import { useState, useEffect } from 'react'
//импорт redux:
import { useSelector, useDispatch } from 'react-redux'
import { ssll } from "./Redux/Slices/categoriesSlice"
//импорт redux2:

export default function App() {
  //redux:
  const count = useSelector((state) => state.cart.value)
  const sslll = useSelector((state) => state.categories.categoryURl)
  const dispatch = useDispatch()


  //useState для Товаров с сервера
  const[items, setItems] = useState([])

  //fetch:
  React.useEffect(() => {
    fetch(sslll).then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, [sslll])


  return (
    <>
      <Header />
      <Sort />
      <div className="main">
        <h1>Пиццы</h1>
        <div className="main__container">
          {items.map((obj)=>{
            return(
              <Shop 
                title={obj.title} 
                description={obj.description}
                price={obj.price}
                category={obj.category}
                popular={obj.popular}
                img={obj.img}
                id={obj.id}
              />
            )
          })}
        </div>
      </div>
      <Footer />
        <Cart />
    </>
  )
}

