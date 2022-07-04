import React from 'react';
import { motion } from 'framer-motion';
import { ProductData } from '../../models/IModelsData';
import { Literals } from '../../utilities/literals';
import {
  ProductDiscountWrapper,
  ProductDiscountOfferLabel,
  ProductDiscountOffer,
} from '../components/styled';
import {
  Grid,
  Box,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Rating,
  Card,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { BoxPriceContainer, TypoDiscountExists } from './styled';

interface ProductCardProps {
  products: ProductData[];
}

const ProductsCard = ({ products }: ProductCardProps) => {
  const discountPrice = (product: ProductData) => {
    return Math.ceil((product.price / (product.discount - 100)) * 100);
  };

  return (
    <>
      {products &&
        products.map((product, index) => {
          return (
            <Grid
              item
              key={`${product.slug}${product.id}${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <Link to={'/product/' + product.id}>
                <Box justifyContent={'center'} alignItems={'center'}>
                  <motion.div layoutId={`product-container-${product.id}`}>
                    <Card>
                      <ProductDiscountWrapper>
                        {product.discount && (
                          <>
                            <ProductDiscountOfferLabel />
                            <ProductDiscountOffer>
                              -{product.discount}%
                            </ProductDiscountOffer>
                          </>
                        )}
                      </ProductDiscountWrapper>
                      <CardContent>
                        <CardMedia
                          component='img'
                          height='194'
                          image={product.image}
                          alt={product.slug}
                          sx={{
                            objectFit: 'contain',
                          }}
                        />
                        <CardContent>
                          <Typography variant='h5'>{product.title}</Typography>
                          <BoxPriceContainer>
                            <Typography variant='h6'>
                              {product.price}€
                            </Typography>
                            {product.discount && (
                              <TypoDiscountExists variant='body2'>
                                {Literals.card.from}
                                {discountPrice(product)}€
                              </TypoDiscountExists>
                            )}
                          </BoxPriceContainer>
                          <Typography
                            align='center'
                            variant='body2'
                            noWrap={true}
                          >
                            {product.subtitle}
                          </Typography>
                          <Typography align='center' variant='body2'>
                            {product.excerpt}
                          </Typography>
                          <Container>
                            <Rating
                              name='simple-controlled'
                              value={product.rating.rate}
                            />
                          </Container>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              </Link>
            </Grid>
          );
        })}
    </>
  );
};

export default ProductsCard;
