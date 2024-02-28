export interface ChefDataApi {
  chefs: ChefData;
}

export interface ChefData {
  data: ChefsAttributes[];
}

export interface ChefsAttributes {
  attributes: ChefAttributes;
}

export interface ChefAttributes {
  name: string;
  role: string;
  facebook: string;
  instagram: string;
  twitter: string;
  img: string;
  alt: string;
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
