import { Card, CardContent, Grid, Typography } from "@mui/material"

import React from "react"
import { ProductData } from "../../models/IModelsData"
import { SingleCardContent } from "./styled"

interface ProductCardDetailsProps {
  product: ProductData
}

const SingleProductApiDetails = (props: ProductCardDetailsProps) => {
  const product = props.product

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item md={12}>
              <SingleCardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                {product && (
                  <Typography variant="body2" color="text.primary">
                    {product.apiData}
                  </Typography>
                )}
              </SingleCardContent>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default SingleProductApiDetails
