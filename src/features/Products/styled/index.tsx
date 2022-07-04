import { CardHeader, Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const CardHeaderTitle = styled(CardHeader)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.secondary.main
      : theme.palette.secondary.main,
}));

export const ContainerLoader = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
}));

export const BoxPriceContainer = styled(Box)({
  minHeight: '60px',
});

export const TypoDiscountExists = styled(Typography)({
  display: 'none',
  alignText: 'center',
  color: 'orange',
  fontWeight: 800,
  fontSize: 16,
  textDecoration: 'line-through dashed #AEBFBB40',
});
