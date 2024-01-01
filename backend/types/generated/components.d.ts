import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'elements.food-card', true>;
  };
}

export interface BlocksStory extends Schema.Component {
  collectionName: 'components_blocks_stories';
  info: {
    displayName: 'Story';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    images: Attribute.Media;
  };
}

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
      'blocks.hero': BlocksHero;
      'blocks.row': BlocksRow;
      'blocks.story': BlocksStory;
      'elements.button-link': ElementsButtonLink;
      'elements.food-card': ElementsFoodCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
