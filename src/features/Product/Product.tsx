import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from '@mui/material';
import { selectProductById } from '../Products/ProductsSlice';
import { RootState } from '../../store';
import React, { useEffect, useState } from 'react';
import { ProductData } from '../../models/IModelsData';
import { sleep } from '../../utilities/api-utils';
import SingleProductApiDetails from './SingleProductApiDetails';
import ProductDetails from './ProductDetails';
import { TitleGridItem, MediaBoxContainer } from './styled';
import BackButton from '../components/BackButton';

interface ProductProps {
  productId?: string;
}

const Product = ({ productId }: ProductProps) => {
  const params = useParams();
  const productIdentifier = params.productId ? params.productId : productId;
  const reduxProduct = useAppSelector((state: RootState) =>
    selectProductById(state, productIdentifier!)
  );
  const [status, setStatus] = useState<boolean>(false);

  const [product, setProduct] = useState<ProductData | null>(null);
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    reduxProduct ? reduxProduct : product
  );

  useEffect(() => {
    const fetchNewProduct = async () => {
      const productList = await axios
        .get(`http://localhost:3000/api-back-up/all-products.json`)
        .then((res) => {
          return res.data.find(
            (item: ProductData) =>
              parseInt(item.id) === parseInt(productIdentifier!)
          );
        });

      await sleep(1200);
      setProduct(productList);
      setCurrentProduct(productList);
      setStatus(true);
    };
    if (product == null) {
      setStatus(false);
      fetchNewProduct();
    }
  }, [product]);

  return (
    <Box maxWidth='md' component='main' m={'auto'} p={4}>
      {currentProduct && (
        <>
          <Grid container spacing={2} mb={2}>
            <Grid item md={2}>
              <BackButton navigate={`/products/${currentProduct.category}`} />
            </Grid>
          </Grid>

          {currentProduct != null && (
            <Grid container spacing={2} justifyContent='center'>
              <Grid
                item
                key={`${currentProduct!.slug}${currentProduct!.id}-title`}
                xs={12}
                md={12}
              >
                <Typography variant='h1' align='center'>
                  {currentProduct.title}
                </Typography>
              </Grid>
              <TitleGridItem
                item
                key={`product-${currentProduct!.slug}${currentProduct!.id}`}
                xs={12}
                md={6}
              >
                <AnimatePresence>
                  <motion.div
                    layoutId={`product-container-${currentProduct.id}`}
                  >
                    <motion.div
                      layoutId={`title-container-${currentProduct.id}`}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 1,
                        transition: { duration: 1 },
                      }}
                      transition={{ duration: 1, delay: 0 }}
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Card>
                        <CardContent>
                          <MediaBoxContainer>
                            <CardMedia
                              component='img'
                              height='100%'
                              image={currentProduct.image}
                              alt={currentProduct.slug}
                              sx={{
                                objectFit: 'contain',
                              }}
                            />
                          </MediaBoxContainer>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </TitleGridItem>

              <Grid
                item
                key={`product-details-${currentProduct.slug}${currentProduct.id}`}
                xs={12}
                md={6}
              >
                <ProductDetails product={currentProduct} />
              </Grid>
              <Grid
                item
                key={`product-api-details-${currentProduct.slug}${currentProduct.id}`}
                xs={12}
                md={12}
              >
                {status && <SingleProductApiDetails product={currentProduct} />}
                {!status && <CircularProgress color='secondary' />}
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Box>
  );
};

export default Product;
