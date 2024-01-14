import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsFoodCard extends Schema.Component {
  collectionName: 'components_elements_food_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'elements.button-link': ElementsButtonLink;
      'elements.food-card': ElementsFoodCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
