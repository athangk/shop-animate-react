import { Grid, CardHeader, Box, styled, CardContent, Typography, Card } from "@mui/material"

export const TitleGridItem = styled(Grid)(({ theme }) => ({
  color: "#3f6d68fa",
  flexGrow: 1,
  paddingTop: theme.spacing(1.5),
}))

export const CardHeaderProduct = styled(CardHeader)(({ theme }) => ({
  height: "10px",
  background: theme.palette.shop.main,
  color: "white",
  padding: theme.spacing(0),
}))

export const MediaBoxContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
  mb: 2,
})

export const ProductDetailTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#3f6d68fa",
  marginLeft: theme.spacing(0.25),
  marginTop: theme.spacing(2),
}))

export const ProductDetailPrice = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontColor: theme.palette.shop.main,
  fontWeight: 600,
  "& span": {
    backgroundColor: "red",
    fontSize: 40,
  },
}))

export const ProductRatingWrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0.25),
  marginTop: theme.spacing(0.125),
  marginBottom: theme.spacing(0.25),
  border: "1px dashed #207a3669",
  display: "flex",
}))

export const ProductDetailsSubtitle = styled(Box)({
  color: "#3f6d68fa",
})

export const ProductDetailsExcerptDesc = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

export const ProductCardDetails = styled(Card)({
  height: "100%",
})

export const SingleCardContent = styled(CardContent)({
  display: "block",
  width: "100%",
})
