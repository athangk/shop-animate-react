import { Grid, Box, styled, Typography, Card } from '@mui/material';

export const TitleGridItem = styled(Grid)(({ theme }) => ({
  color: theme.palette.shop.light,
  flexGrow: 1,
  paddingTop: theme.spacing(1.5),
}));

export const MediaBoxContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  mb: 2,
});

export const ProductDetailTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.shop.light,
  marginLeft: theme.spacing(0.25),
  marginTop: theme.spacing(2),
  backgroun: ' red',
}));

export const ProductDetailPrice = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontColor: theme.palette.shop.main,
  fontWeight: 600,
  '& span': {
    backgroundColor: 'red',
    fontSize: 40,
  },
}));

export const ProductRatingWrapper = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0.25),
  marginTop: theme.spacing(0.125),
  marginBottom: theme.spacing(0.25),
  border: '1px dashed #207a3669',
  display: 'flex',
}));

export const ProductCardDetails = styled(Card)(({ theme }) => ({
  height: '100%',
  color: theme.palette.secondary.main,
}));
