import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { ProductData } from '../../models/IModelsData';

interface ProductCardDetailsProps {
  product: ProductData;
}

const SingleProductApiDetails = ({ product }: ProductCardDetailsProps) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item md={12}>
              <Box>
                <Typography align='left' variant='body2' color='text.secondary'>
                  {product.description}
                </Typography>
                {product && (
                  <Typography align='left' variant='body2' color='text.primary'>
                    {product.apiData}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleProductApiDetails;
