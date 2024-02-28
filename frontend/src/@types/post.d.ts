export interface PostDataApi {
  posts: PostData;
}

export interface PostData {
  data: PostsAttributes[];
}

export interface PostsAttributes {
  id?: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  title: string;
  description: string;
  category: string;
  author?: string;
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
  caption: string;
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
