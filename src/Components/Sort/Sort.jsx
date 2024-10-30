import './Sort.css'
import { useState } from 'react'
//react:
import { useSelector, useDispatch } from 'react-redux'
import { addCategoryID, ssll } from '../../Redux/Slices/categoriesSlice'

export default function Sort() {
  //redux:
  const categor = useSelector((state) => state.categories.categoryID)
  const dispatch = useDispatch()


    const [sortActive, setSortActive] = useState(0);

  return (
    <>
      <div className="sort__container">
        <a href="#" onClick={function cat() {
          setSortActive(0);
          dispatch(addCategoryID(0))
          dispatch(ssll())
          
        }} className={sortActive === 0 ? 'sort__btn active' : 'sort__btn'}>Все</a>
        <a href="#" onClick={function cat() {
          setSortActive(1);
          dispatch(addCategoryID(1))
          dispatch(ssll())
        }} className={sortActive === 1 ? 'sort__btn active' : 'sort__btn'}>Дорогие</a>
        <a href="#" onClick={function cat() {
          setSortActive(2);
          dispatch(addCategoryID(2))
          dispatch(ssll())
        }} className={sortActive === 2 ? 'sort__btn active' : 'sort__btn'}>Дешевые</a>
        <a href="#" onClick={function cat() {
          setSortActive(3);
          dispatch(addCategoryID(3))
          dispatch(ssll())
        }} className={sortActive === 3 ? 'sort__btn active' : 'sort__btn'}>Популярные</a>
        <a href="#" onClick={function cat() {
          setSortActive(4);
          dispatch(addCategoryID(4))
          dispatch(ssll())
        }} className={sortActive === 4 ? 'sort__btn active' : 'sort__btn'}>Непопулярные</a>
      </div>
      <hr />
    </>
  )
}


