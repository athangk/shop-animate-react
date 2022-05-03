import React, { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories, selectCategoriesList, selectLoading } from "./CategoriesSlice"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import CategoriesCard from "../components/CategoriesCard"
import { CircularProgress } from "@mui/material"
import { Literals } from "../../utilities/literals"
import {
  CategoriesHeaderWrapper,
  CategoryHeader,
  CategoriesGridWrapper,
  LoaderContainer,
  CategoriesWrapper,
} from "./styled"
import { PagesMainContainer } from "../components/styled"

const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(selectCategoriesList)
  const loading = useSelector(selectLoading)

  const fetchAllCategories = () => {
    dispatch(fetchCategories())
  }

  useEffect(() => {
    if (categories.length === 0) {
      fetchAllCategories()
    }
  }, [categories])

  return (
    <PagesMainContainer maxWidth="md" component="main">
      <Container maxWidth="xl" disableGutters>
        <CategoriesHeaderWrapper component="h1">{Literals.categories}</CategoriesHeaderWrapper>
      </Container>
      <CategoryHeader />
      <CategoriesWrapper>
        {categories.length == 0 && (
          <LoaderContainer maxWidth="md">
            <CircularProgress color="secondary" />
          </LoaderContainer>
        )}
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          {categories.length > 0 && <CategoriesCard categories={categories}></CategoriesCard>}
        </Grid>
      </CategoriesWrapper>
    </PagesMainContainer>
  )
}

export default Categories
