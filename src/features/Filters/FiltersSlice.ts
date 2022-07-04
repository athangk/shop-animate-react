import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterData } from '../../models/IModelsData';
import { RootState } from '../../store';

const initialFilters = {
  filters: { order: 'asc', rangeMin: 0, rangeMax: 1000 },
};

// productsSlice only for the createAsyncThunk result
const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    updateFilters(state, action: PayloadAction<FilterData>) {
      const updatedFilters = action.payload;

      state.filters = { ...state.filters, ...updatedFilters };
    },
  },
});

// setup of actions
export const { updateFilters } = filtersSlice.actions;
// setup of selectors
export const selectFilters = (state: RootState) => state.filters.filters;

export default filtersSlice.reducer;
