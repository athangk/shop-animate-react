import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit"
import axios from "axios"
import { FilterData, ProductData } from "../../models/IModelsData"
import { RootState } from "../../store"
import { sleep } from "../../utilities/api-utils"

const initialFilters = {
  filters: { order: "asc", rangeMin: 0, rangeMax: 1000 },
}

// productsSlice only for the createAsyncThunk result
const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilters,
  reducers: {
    updateFilters(state, action: PayloadAction<FilterData>) {
      const updatedFilters = action.payload
      console.log("before ", state, action.payload)
      state.filters = { ...state.filters, ...updatedFilters }
      console.log("after", state.filters)
    },
  },
})

// setup of actions
export const { updateFilters } = filtersSlice.actions
// setup of selectors
export const selectFilters = (state: RootState) => state.filters.filters

export default filtersSlice.reducer
