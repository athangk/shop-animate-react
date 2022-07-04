import * as React from 'react';
import Categories from './features/Categories/Categories';
import { Routes, Route } from 'react-router-dom';
import Product from './features/Product/Product';
import Products from './features/Products/Products';
import { Box, styled } from '@mui/material';

const MainContainer = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  fontFamily: theme.typography.fontFamily,
}));

const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='products' element={<Products />}>
          <Route path=':categoryId' element={<Products />} />
        </Route>
        <Route path='product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
      </Routes>
    </MainContainer>
  );
};

export default App;
