import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./main/home/home.js"
import Layout from "./components/layout.js"
import { Catalog } from "./main/catalog/catalog.js"
import { Cart } from "./main/cart/cart.js"
import AnimalDetail from "./main/catalog/view/view.js"
import { AnimalsProvider } from "./data/dataRecive.js"
import {CheckoutPage} from "./chechout/checkout.js"
import {SuccessPage} from "./chechout/SuccessPage.js"
import {Login} from './login/Login.js';
import {Register} from './login/Register.js';
import {ProtectedRoute} from './login/ProtectedRoute.js';




export const Routers = () => {
    return( 
        <AnimalsProvider>
        <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={ <Register />} />
                <Route path="/" element={<ProtectedRoute><Layout/></ProtectedRoute>}>
                    <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
                    <Route path="catalog" element={<ProtectedRoute><Catalog/></ProtectedRoute>}></Route>
                    <Route path="catalog/:id" element={<ProtectedRoute><AnimalDetail/></ProtectedRoute>}/>
                    <Route path="cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}></Route>
                    <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
                    <Route path="/success" element={<ProtectedRoute><SuccessPage /></ProtectedRoute>} />
                </Route>
            </Routes>
        </BrowserRouter>
        </AnimalsProvider>
        )
   
}
