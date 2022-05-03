import * as React from "react"
import { fetchProducts, selectLoading, selectProductsList } from "./ProductsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import ProductsCard from "../components/ProductsCard"
import { AnimatePresence, motion } from "framer-motion"
import { Card } from "@mui/material"
import { fetchCategories, selectCategoriesById } from "../Categories/CategoriesSlice"
import { RootState } from "../../store"
import Filters from "../Filters/Filters"
import { usePrevious } from "../../hooks"
import { CardHeaderTitle, ContainerLoader } from "./styled"
import { PagesMainContainer, NavigateBackLink, CommonWrapper } from "../components/styled"

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}
const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

const Products = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const products = useSelector(selectProductsList)
  const loading = useSelector(selectLoading)
  const category = useSelector((state: RootState) => selectCategoriesById(state, params.categoryId!))
  const [categoryId, setCategoryId] = useState(params.categoryId)
  const prevCategoryState = usePrevious(category)

  //initial call upon mount
  useEffect(() => {
    if (products.length === 0 || products[0]?.category !== category?.id) {
      dispatch(fetchProducts(params.categoryId!))
      dispatch(fetchCategories())
    }
  }, [])

  return (
    <>
      <PagesMainContainer maxWidth="md" component="main">
        <Grid container spacing={2} mb={2}>
          <Grid item md={2}>
            <motion.div initial="exit" animate="enter" exit="exit">
              <motion.div variants={backVariants}>
                <NavigateBackLink to="/">← Back</NavigateBackLink>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
        <CommonWrapper>
          {category && (
            <AnimatePresence>
              <Fragment>
                <motion.div layoutId={`card-container-${params.categoryId}`}>
                  <motion.div
                    layoutId={`title-container-${params.categoryId}`}
                    initial={{ width: "60%" }}
                    animate={{ width: "100%" }}
                    exit={{
                      width: "100%",
                      transition: { duration: 0.15 },
                    }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ pointerEvents: "auto" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Card>
                          <CardHeaderTitle
                            title={category.title}
                            titleTypographyProps={{ align: "center" }}
                          />
                        </Card>
                      </Grid>
                    </Grid>
                  </motion.div>
                </motion.div>
              </Fragment>
            </AnimatePresence>
          )}
        </CommonWrapper>
        <Filters />
        {loading && (
          <ContainerLoader maxWidth="md">
            <CircularProgress color="secondary" />
          </ContainerLoader>
        )}
        <CommonWrapper>
          <Grid container spacing={5} alignItems="flex-end">
            {!loading && products.length > 0 && <ProductsCard products={products}></ProductsCard>}
          </Grid>
        </CommonWrapper>
      </PagesMainContainer>
    </>
  )
}

export default Products
