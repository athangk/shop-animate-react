import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { ProductData } from "../../models/IModelsData"
import React from "react"
import { Rating } from "@mui/material"
import {
  ProductCardDetails,
  ProductDetailTitle,
  ProductDetailPrice,
  ProductRatingWrapper,
  ProductDetailsSubtitle,
  ProductDetailsExcerptDesc,
  SingleCardContent,
} from "./styled"
import { ProductDiscountWrapper, ProductDiscountOffer, ProductDiscountOfferLabel } from "../components/styled"

interface ProductCardDetailsProps {
  product: ProductData
}

const ProductDetails = (props: ProductCardDetailsProps) => {
  const product = props.product

  return (
    <>
      <ProductCardDetails>
        <CardContent>
          <Grid container spacing={1} alignItems="flex-start">
            <Grid item md={12}>
              <CardContent>
                <ProductDiscountWrapper>
                  {product.discount && (
                    <>
                      <ProductDiscountOfferLabel />
                      <ProductDiscountOffer>{product.discount}%</ProductDiscountOffer>
                    </>
                  )}
                </ProductDiscountWrapper>
                <ProductDetailTitle variant="h1">{product.title}</ProductDetailTitle>
                <ProductDetailPrice variant="h2">{product.price}€</ProductDetailPrice>
                <ProductRatingWrapper>
                  <Rating name="simple-controlled" value={product.rating.rate} />
                </ProductRatingWrapper>
                <ProductDetailsSubtitle>{product.subtitle}</ProductDetailsSubtitle>
                <ProductDetailsExcerptDesc>{product.excerpt}</ProductDetailsExcerptDesc>
              </CardContent>
            </Grid>

            <Grid item xs={12}>
              <SingleCardContent>
                <ProductDetailsExcerptDesc>{product.description}</ProductDetailsExcerptDesc>
                {product && <Typography>{product.apiData}</Typography>}
              </SingleCardContent>
            </Grid>
          </Grid>
        </CardContent>
      </ProductCardDetails>
    </>
  )
}

export default ProductDetails
