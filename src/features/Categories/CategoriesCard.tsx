import * as React from 'react';
import { CategoryData } from '../../models/IModelsData';
import { motion } from 'framer-motion';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface CategoriesCardProps {
  categories: CategoryData[];
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <Grid item key={category.slug} sm={12} md={6} lg={4}>
            <Link to={'/products/' + category.id}>
              <Card>
                <motion.div
                  layoutId={`card-container-${category.id}`}
                  exit={{ transition: { duration: 0.35 } }}
                  transition={{ duration: 0.4 }}
                  style={{ pointerEvents: 'auto' }}
                  animate={{ width: '100%' }}
                >
                  <CardHeader
                    title={category.title}
                    subheader={category.description}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                  />
                </motion.div>
                <CardContent>
                  <Box justifyContent={'center'} mb={4}>
                    <CardMedia
                      component='img'
                      height='194'
                      image={category.image}
                      alt={category.slug}
                      sx={{
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </>
  );
};
export default CategoriesCard;
