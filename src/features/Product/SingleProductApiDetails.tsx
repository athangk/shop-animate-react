import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { ProductData } from '../../models/IModelsData';
import { CommonWrapper } from '../components/styled';

interface ProductCardDetailsProps {
  product: ProductData;
}

const SingleProductApiDetails: React.FC<ProductCardDetailsProps> = ({
  product,
}) => {
  return (
    <CommonWrapper>
      <Card>
        <CardContent>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item md={12}>
              <Box>
                <Typography
                  align='center'
                  variant='body2'
                  color='text.secondary'
                >
                  {product.description}
                </Typography>
                {product && (
                  <Typography
                    align='center'
                    variant='body2'
                    color='text.primary'
                  >
                    {product.apiData}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </CommonWrapper>
  );
};

export default SingleProductApiDetails;
