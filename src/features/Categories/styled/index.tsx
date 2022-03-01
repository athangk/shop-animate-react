import { styled } from "@mui/system"
import { Typography, Container, Box } from "@mui/material"

export const CategoryHeader = styled(Typography)(({ theme }) => ({
  borderBottom: "1px solid #278e8b",
  lineHeight: "2",
  marginBottom: theme.spacing(4),
}))

export const LoaderContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
}))

export const CategoriesGridWrapper = styled(Container)(({ theme }) => ({
  perspective: 800,
  marginBottom: theme.spacing(1.5),
  paddingBottom: theme.spacing(0.5),
  marginTop: theme.spacing(5),
}))

export const CategoriesHeaderWrapper = styled(Box)(({ theme }) => ({
  alignText: "center",
  marginTop: theme.spacing(3.75),
  paddingBottom: theme.spacing(0.75),
  color: theme.palette.secondary.dark,
  minWidth: "100%",
  marginBottom: 0,
}))
