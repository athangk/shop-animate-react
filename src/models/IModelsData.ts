export interface CategoryData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  description: string;
  count: number;
}

export interface Rating {
  rate: number;
}

export interface ProductData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  description: string;
  price: number;
  category: string;
  subtitle: string;
  rating: Rating;
  discount: number;
  apiData: string;
}

export interface ProductDataList extends Array<ProductData> {
  products: ProductData[];
}

export interface CategoriesDataList extends Array<CategoryData> {
  categories: CategoryData[];
}

export interface FilterData {
  order: string;
  rangeMin: number;
  rangeMax: number;
}
