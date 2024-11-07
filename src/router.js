import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./main/home/home"
import Layout from "./components/layout"
import { Catalog } from "./main/catalog/catalog"
import { Cart } from "./main/cart/cart"
import AnimalDetail from "./main/catalog/view/view"



export const Routers = () => {
    return( <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="catalog" element={<Catalog/>}></Route>
                    <Route path="catalog/:id" element={<AnimalDetail/>}/>
                    <Route path="cart" element={<Cart/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>)
   
}
