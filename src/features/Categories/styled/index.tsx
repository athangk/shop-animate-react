import { styled } from '@mui/system';
import { Container, Box } from '@mui/material';

export const LoaderContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
}));

export const CategoriesHeaderWrapper = styled(Box)(({ theme }) => ({
  alignText: 'center',
  marginTop: theme.spacing(3.75),
  marginLeft: theme.spacing(4),
  paddingBottom: theme.spacing(0.75),
  color: theme.palette.secondary.dark,
  minWidth: '100%',
  marginBottom: 0,
}));
