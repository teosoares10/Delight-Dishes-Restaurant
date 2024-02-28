export interface RecipeData {
  data: RecipesAttributes[];
}

export interface RecipesAttributes {
  id?: number;
  attributes: RecipeAttributes;
}

export interface RecipeAttributes {
  title: string;
  description: string;
  category: string;
  author?: string;
  time_pre: string;
  time_cook?: string;
  time_total: string;
  serves: string;
  ingredients: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  slug: string;
  image: Image;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
  formats: Formats;
}

export interface Formats {
  thumbnail: Thumbnail;
  medium: Medium;
  small: Small;
  large: Large;
}

export interface Thumbnail {
  width: number;
  height: number;
  url: string;
}

export interface Medium {
  width: number;
  height: number;
  url: string;
}

export interface Small {
  width: number;
  height: number;
  url: string;
}

export interface Large {
  width: number;
  height: number;
  url: string;
}
