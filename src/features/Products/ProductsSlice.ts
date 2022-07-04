import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductData } from '../../models/IModelsData';
import { RootState } from '../../store';
import { sleep } from '../../utilities/api-utils';
import { selectFilters } from '../Filters/FiltersSlice';

type product = ProductData;

const productsAdapter = createEntityAdapter<product>({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const fetchProducts = createAsyncThunk(
  'products/getProducts',
  async (category: string) => {
    await sleep(1200);

    const productList = await axios
      .get(`http://localhost:3000/api-back-up/all-products.json`)
      .then((res) => {
        return res.data.filter(
          (item: ProductData) => item.category === category
        );
      });

    let categoryData = {
      noData: true,
    };

    const response = { productList, categoryData };

    return response;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (id: string) => {
    await sleep(1200);

    const productList = await axios
      .get(`http://localhost:3000/api-back-up/all-products.json`)
      .then((res) => {
        return res.data.filter(
          (item: ProductData) => parseInt(item.id) === parseInt(id)
        );
      });

    let categoryData = {
      noData: true,
    };

    const response = { productList, categoryData };

    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState({
    loading: true,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload.productList);
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

// setup of selectors
export const selectLoading = (state: RootState) => state.products.loading;

export const { selectAll: selectProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state: RootState) => state.products);

export const selectProductsList = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    const currentProds = products.filter((item) => {
      return item.price > filters.rangeMin && item.price <= filters.rangeMax;
    });

    currentProds.sort((a, b) => {
      if (filters.order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    return currentProds;
  }
);

export default productsSlice.reducer;
