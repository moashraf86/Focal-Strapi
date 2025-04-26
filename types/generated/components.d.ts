import type { Schema, Struct } from '@strapi/strapi';

export interface ProductVariantOption extends Struct.ComponentSchema {
  collectionName: 'components_product_variant_options';
  info: {
    displayName: 'VariantOption';
  };
  attributes: {
    name: Schema.Attribute.String;
    values: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.variant-option': ProductVariantOption;
    }
  }
}
