import { useEffect, Fragment } from 'react';
import {
  fetchProducts,
  selectLoading,
  selectProductsList,
} from './ProductsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ProductsCard from './ProductsCard';
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from '@mui/material';
import {
  fetchCategories,
  selectCategoriesById,
} from '../Categories/CategoriesSlice';
import { RootState } from '../../store';
import Filters from '../Filters/Filters';
import { CardHeaderTitle, ContainerLoader } from './styled';
import { CommonWrapper } from '../components/styled';
import BackButton from '../components/BackButton';

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsList);
  const loading = useAppSelector(selectLoading);
  const category = useAppSelector((state: RootState) =>
    selectCategoriesById(state, params.categoryId!)
  );

  useEffect(() => {
    if (products.length === 0 || products[0]?.category !== category?.id) {
      dispatch(fetchProducts(params.categoryId!));
      dispatch(fetchCategories());
    }
  }, []);

  return (
    <Box maxWidth='md' component='main' m={'auto'} pt={2} pb={2}>
      <Grid container spacing={2} mb={2}>
        <Grid item md={2}>
          <BackButton navigate={'home'} />
        </Grid>
      </Grid>
      <CommonWrapper>
        {category && (
          <AnimatePresence>
            <Fragment>
              <motion.div layoutId={`card-container-${params.categoryId}`}>
                <motion.div
                  layoutId={`title-container-${params.categoryId}`}
                  initial={{ width: '60%' }}
                  animate={{ width: '100%' }}
                  exit={{
                    width: '100%',
                    transition: { duration: 0.15 },
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Card>
                        <CardHeaderTitle
                          title={category.title}
                          titleTypographyProps={{ align: 'center' }}
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </motion.div>
              </motion.div>
            </Fragment>
          </AnimatePresence>
        )}
      </CommonWrapper>
      <Filters />
      {loading && (
        <ContainerLoader maxWidth='md'>
          <CircularProgress color='secondary' />
        </ContainerLoader>
      )}
      <CommonWrapper>
        <Grid container spacing={5} alignItems='flex-end'>
          {!loading && products.length > 0 && (
            <ProductsCard products={products}></ProductsCard>
          )}
        </Grid>
      </CommonWrapper>
    </Box>
  );
};

export default Products;
