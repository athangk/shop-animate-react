import * as React from "react"
import Categories from "./features/Categories/Categories"
import { Routes, Route } from "react-router-dom"
import Product from "./features/ProductItem/Product"
import Products from "./features/Products/Products"
import { Box, styled } from "@mui/material"

const MainContainer = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  fontFamily: theme.typography.fontFamily,
}))

export default function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="products" element={<Products />}>
          <Route path=":categoryId" element={<Products />} />
        </Route>
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
    </MainContainer>
  )
}
