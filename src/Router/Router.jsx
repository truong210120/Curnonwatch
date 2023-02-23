import React from 'react'
import Home from '../Pages/Home'
import DetailProduct from '../Pages/DetailProduct'
import ManWatch from '../Pages/ManWatch'
import WomanWatch from '../Pages/WomanWatch'
import CheckOut from '../Pages/CheckOut'
import {Route, Routes} from 'react-router-dom'
function Router() {
  return (
    <>
            <Routes>
                  <Route path='/' element={<Home></Home>}></Route>
                  <Route path='/home/detail-product/:id' element={<DetailProduct></DetailProduct>}></Route>
                  <Route path='/man' element={<ManWatch></ManWatch>}></Route>
                  <Route path='/woman' element={<WomanWatch></WomanWatch>}></Route>
            <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
            </Routes>

    </>
  )
}
      
export default Router