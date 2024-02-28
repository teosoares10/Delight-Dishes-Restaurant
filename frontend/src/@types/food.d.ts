export interface Data {
  id: number;
  attributes: FoodAttribute;
}

export interface FoodDataApi {
  foods: FoodData;
}

export interface FoodData {
  data: foodsAttributes[];
}

export interface FoodsAttributes {
  attributes: FoodAttributes;
}

export interface FoodAttributes {
  title: string;
  price?: number;
  category: string;
  description: string;
  orders_amount: number;
  slug: string;
  photo: Photo;
}

export interface Photo {
  data: PhotoData;
}

export interface PhotoData {
  attributes: PhotoAttributes;
}

export interface PhotoAttributes {
  url: string;
}
