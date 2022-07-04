import { LocalOffer } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const ProductDiscountWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'left',
  ml: 1,
  mt: 1,
  position: 'relative',
  marginBottom: theme.spacing(5),
}));

export const ProductDiscountOfferLabel = styled(LocalOffer)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '60px',
  position: 'absolute',
  top: '-5px',
  left: '-5px',
}));

export const ProductDiscountOffer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: theme.palette.common.white,
  position: 'absolute',
  top: '7px',
  left: '3px',
}));

export const CommonWrapper = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4),
}));
