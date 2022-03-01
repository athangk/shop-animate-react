import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "../features/Categories/CategoriesSlice"
import productsReducer from "../features/Products/ProductsSlice"
import filtersReducer from "../features/Filters/FiltersSlice"

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    filters: filtersReducer,
  },
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
