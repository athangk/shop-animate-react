import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategoriesList } from './CategoriesSlice';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CategoriesCard from './CategoriesCard';
import { Box, CircularProgress, Divider } from '@mui/material';
import { Literals } from '../../utilities/literals';
import { CategoriesHeaderWrapper, LoaderContainer } from './styled';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesList);

  const fetchAllCategories = () => {
    dispatch(fetchCategories());
  };

  useEffect(() => {
    if (categories.length === 0) {
      fetchAllCategories();
    }
  }, [categories]);

  return (
    <Box maxWidth='md' component='main' m={'auto'} pt={2} pb={2}>
      <Container maxWidth='xl' disableGutters>
        <CategoriesHeaderWrapper component='h1'>
          {Literals.categories}
        </CategoriesHeaderWrapper>
      </Container>
      <Divider />
      <Box m={4}>
        {categories.length == 0 && (
          <LoaderContainer maxWidth='md'>
            <CircularProgress color='secondary' />
          </LoaderContainer>
        )}
        <Grid container spacing={5} alignItems='center' justifyContent='center'>
          {categories.length > 0 && (
            <CategoriesCard categories={categories}></CategoriesCard>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Categories;
