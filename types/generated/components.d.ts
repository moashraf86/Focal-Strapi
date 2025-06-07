import type { Schema, Struct } from '@strapi/strapi';

export interface ProductColor extends Struct.ComponentSchema {
  collectionName: 'components_product_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    pattern: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProductSize extends Struct.ComponentSchema {
  collectionName: 'components_product_sizes';
  info: {
    description: '';
    displayName: 'Size';
  };
  attributes: {
    colors: Schema.Attribute.Component<'product.color', true>;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.color': ProductColor;
      'product.size': ProductSize;
    }
  }
}
