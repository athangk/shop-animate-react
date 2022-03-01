import { LocalOffer } from "@mui/icons-material"
import { Card, CardHeader, Box, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { Link } from "react-router-dom"

export const PagesMainContainer = styled(Box)(({ theme }) => ({
  margin: "auto",
  paddingTop: theme.spacing(0.5),
  marginTop: theme.spacing(2),
}))

export const StyledCardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
  "&:hover": {
    color: theme.palette.shop.main,
  },
}))

export const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  height: "84px",
  background: theme.palette.shop.main,
  color: theme.palette.common.white,
  "& .subheader": {
    background: "#71ced2",
  },
}))

export const StyledMediaWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
  marginBottom: theme.spacing(0.25),
}))

export const CardWrapper = styled(Box)({
  width: "100%",
  perspective: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const BoxMotionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  color: theme.palette.common.white,
}))

export const CardContainer = styled(Card)({
  borderRadius: "25px",
  boxShadow: "0 2px 7px 1px rgba(31, 31, 31, 0.2)",
  backgroundColor: "white",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0 2px 7px 2px rgb(0 192 170 / 100%)",

    "& .MuiTypography-body2": {
      display: "block",
      textAlign: "center",
      width: "100%",
    },
  },
})

export const ProductDiscountWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  justifyContent: "left",
  ml: 1,
  mt: 1,
  position: "relative",
  marginBottom: theme.spacing(5),
}))

export const ProductDiscountOfferLabel = styled(LocalOffer)({
  color: "#ff6200",
  fontSize: "60px",
  position: "absolute",
  top: "-12px",
  left: "-12px",
})

export const ProductDiscountOffer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  fontWeight: "bold",
  fontStyle: "italic",
  color: theme.palette.common.white,
  position: "absolute",
  top: "9px",
  left: "0px",
}))

export const TypoTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.shop.light,
}))

export const BoxPriceContainer = styled(Box)({
  minHeight: "60px",
})

export const TypoPrice = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.shop.main,
  fontWeight: "bold",
}))

export const TypoDiscountExists = styled(Typography)({
  display: "none",
  alignText: "center",
  color: "orange",
  fontWeight: 800,
  fontSize: 16,
  textDecoration: "line-through dashed #AEBFBB40",
})

export const TypoSubtitle = styled(Typography)({
  textAlign: "center",
  color: "#3f6d68fa",
})

export const TypoExcerpt = styled(Typography)({
  alignText: "center",
  color: "text.secondary",
})

export const NavigateBackLink = styled(Link)(({ theme }) => ({
  color: "#1d524dd9",
  textDecoration: "none",
  fontWeight: 800,
  textTransform: "uppercase",
  fontSize: 20,
}))
