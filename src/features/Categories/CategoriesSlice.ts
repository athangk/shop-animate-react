import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryData } from '../../models/IModelsData';
import { RootState } from '../../store';
import { sleep } from '../../utilities/api-utils';

type category = CategoryData;

const categoriesAdapter = createEntityAdapter<category>({
  selectId: (category) => category.id,
  sortComparer: (a, b) => a.slug.localeCompare(b.slug),
});

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    await sleep(1200);
    const categoryData = await axios
      .get(`http://localhost:3000/api-back-up/all-categories.json`)
      .then((res) => {
        return res.data;
      });

    const response = { categoryData };
    return response;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      categoriesAdapter.setAll(state, action.payload.categoryData);
      state.loading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loading = false;
    });
  },
});

// setup of selectors
export const selectLoading = (state: RootState) => state.categories.loading;

export const { selectById: selectCategoriesById, selectAll: selectCategories } =
  categoriesAdapter.getSelectors((state: RootState) => state.categories);

export const selectCategoriesList = createSelector(
  [selectCategories],
  (categories) => {
    let currentCategories = categories;
    return currentCategories;
  }
);

export default categoriesSlice.reducer;
