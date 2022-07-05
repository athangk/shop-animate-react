import { AxiosResponse } from 'axios';
import { CategoryData } from '../models/IModelsData';

export const getCategoryImages = (productList: AxiosResponse[]) => {
  return productList.map((item) => item.data[0].image);
};

export const normalizeCategoryData = (
  data: Array<string>,
  productList: AxiosResponse[]
): CategoryData[] => {
  const imageList = getCategoryImages(productList);

  const categoryList: CategoryData[] = data.map((item, i) => ({
    id: item,
    slug: item,
    title: item,
    excerpt: item,
    image: imageList[i],
    description: item,
    count: 10,
  }));
  return categoryList;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
