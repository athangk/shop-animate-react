import * as React from "react"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"
import { CategoryData } from "../../models/IModelsData"
import { motion } from "framer-motion"
import { StyledCardLink, CardContainer, StyledCardHeader, StyledMediaWrapper } from "./styled"

interface CategoriesCardProps {
  categories: CategoryData[]
}

const CategoriesCard = (props: CategoriesCardProps) => {
  return (
    <>
      {props.categories.map((category) => {
        return (
          <Grid item key={category.slug} sm={12} md={6} lg={4}>
            <StyledCardLink to={"/products/" + category.id}>
              <CardContainer>
                <motion.div
                  layoutId={`card-container-${category.id}`}
                  exit={{ transition: { duration: 0.35 } }}
                  transition={{ duration: 0.4 }}
                  style={{ pointerEvents: "auto" }}
                  animate={{ width: "100%" }}
                >
                  <StyledCardHeader
                    title={category.title}
                    subheader={category.description}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                  />
                </motion.div>
                <CardContent>
                  <StyledMediaWrapper>
                    <CardMedia
                      component="img"
                      height="194"
                      image={category.image}
                      alt={category.slug}
                      sx={{
                        objectFit: "contain",
                      }}
                    />
                  </StyledMediaWrapper>
                </CardContent>
              </CardContainer>
            </StyledCardLink>
          </Grid>
        )
      })}
    </>
  )
}
export default CategoriesCard
