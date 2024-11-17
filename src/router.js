import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./main/home/home.js"
import Layout from "./components/layout.js"
import { Catalog } from "./main/catalog/catalog.js"
import { Cart } from "./main/cart/cart.js"
import AnimalDetail from "./main/catalog/view/view.js"
import { AnimalsProvider } from "./data/dataRecive.js"



export const Routers = () => {
    return( 
        <AnimalsProvider>
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
        </AnimalsProvider>
        )
   
}
