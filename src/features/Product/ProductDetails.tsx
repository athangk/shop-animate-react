import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProductData } from '../../models/IModelsData';
import React from 'react';
import { Box, Rating } from '@mui/material';
import {
  ProductCardDetails,
  ProductDetailTitle,
  ProductDetailPrice,
  ProductRatingWrapper,
} from './styled';
import {
  ProductDiscountWrapper,
  ProductDiscountOffer,
  ProductDiscountOfferLabel,
} from '../components/styled';

interface ProductCardDetailsProps {
  product: ProductData;
}

const ProductDetails = ({ product }: ProductCardDetailsProps) => {
  return (
    <ProductCardDetails>
      <CardContent>
        <Grid container spacing={1} alignItems='flex-start'>
          <Grid item md={12}>
            <CardContent>
              <ProductDiscountWrapper>
                {product.discount && (
                  <>
                    <ProductDiscountOfferLabel />
                    <ProductDiscountOffer>
                      {product.discount}%
                    </ProductDiscountOffer>
                  </>
                )}
              </ProductDiscountWrapper>
              <ProductDetailTitle variant='h3'>
                {product.title}
              </ProductDetailTitle>
              <ProductDetailPrice variant='h3'>
                {product.price}€
              </ProductDetailPrice>
              <ProductRatingWrapper>
                <Rating name='simple-controlled' value={product.rating.rate} />
              </ProductRatingWrapper>
              <Typography>{product.subtitle}</Typography>
              <Typography>{product.excerpt}</Typography>
            </CardContent>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography>{product.description}</Typography>
              {product && <Typography>{product.apiData}</Typography>}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </ProductCardDetails>
  );
};

export default ProductDetails;
