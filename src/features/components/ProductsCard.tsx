import React from "react"
import { Link } from "react-router-dom"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import CardMedia from "@mui/material/CardMedia"
import { motion } from "framer-motion"
import { ProductData } from "../../models/IModelsData"
import { Rating } from "@mui/material"
import { Literals } from "../../utilities/literals"
import {
  CardWrapper,
  StyledCardLink,
  BoxMotionContainer,
  CardContainer,
  TypoTitle,
  BoxPriceContainer,
  TypoPrice,
  TypoDiscountExists,
  TypoSubtitle,
  TypoExcerpt,
  ProductDiscountWrapper,
  ProductDiscountOfferLabel,
  ProductDiscountOffer,
} from "./styled"

interface ProductCardProps {
  products: ProductData[]
}

const ProductsCard = (props: ProductCardProps) => {
  const discountPrice = (product: ProductData) => {
    return Math.ceil((product.price / (product.discount - 100)) * 100)
  }

  return (
    <>
      {props.products &&
        props.products.map((product, index) => {
          return (
            <Grid item key={`${product.slug}${product.id}${index}`} xs={12} sm={6} md={4}>
              <StyledCardLink to={"/product/" + product.id}>
                <CardWrapper>
                  <BoxMotionContainer component="div">
                    <motion.div layoutId={`product-container-${product.id}`}>
                      <CardContainer>
                        <ProductDiscountWrapper>
                          {product.discount && (
                            <>
                              <ProductDiscountOfferLabel />
                              <ProductDiscountOffer>-{product.discount}%</ProductDiscountOffer>
                            </>
                          )}
                        </ProductDiscountWrapper>
                        <CardContent>
                          <CardMedia
                            component="img"
                            height="194"
                            image={product.image}
                            alt={product.slug}
                            sx={{
                              objectFit: "contain",
                            }}
                          />
                          <CardContent>
                            <TypoTitle variant="h6">{product.title}</TypoTitle>
                            <BoxPriceContainer>
                              <TypoPrice variant="h5">{product.price}€</TypoPrice>
                              {product.discount && (
                                <TypoDiscountExists variant="body2">
                                  {Literals.card.from}
                                  {discountPrice(product)}€
                                </TypoDiscountExists>
                              )}
                            </BoxPriceContainer>
                            <TypoSubtitle variant="body2" noWrap={true}>
                              {product.subtitle}
                            </TypoSubtitle>
                            <TypoExcerpt variant="body2">{product.excerpt}</TypoExcerpt>
                            <Container>
                              <Rating name="simple-controlled" value={product.rating.rate} />
                            </Container>
                          </CardContent>
                        </CardContent>
                      </CardContainer>
                    </motion.div>
                  </BoxMotionContainer>
                </CardWrapper>
              </StyledCardLink>
            </Grid>
          )
        })}
    </>
  )
}

export default ProductsCard
