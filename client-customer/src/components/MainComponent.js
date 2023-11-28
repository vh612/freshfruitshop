import React, { Component } from "react";
import NavigationComponent from "./NavigationComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./ProductComponent";
import ProductDetail from "./ProductDetailComponent";
import Signup from "./SignupComponent";
import Active from "./ActiveComponent";
import Login from "./LoginComponent";
import Myprofile from "./MyProfileComponent";
import Mycart from "./MyCartComponent";
import Myorders from "./MyOrderComponent";
import { Container } from "@mui/material";
import Gmap from './GmapComponent';




class Main extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <NavigationComponent />
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/category/:cid' element={<Product />} />
          <Route path='/product/search/:keyword' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/active' element={<Active />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/mycart' element={<Mycart />} />
          <Route path='/myorders' element={<Myorders />} />
          <Route path='/gmap' element={<Gmap />} />

        </Routes>
      </Container>
    );
  }
}

export default Main;
