import collection from "../src/api/collection/controllers/collection";

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        product: {
          field: "slug",
          references: "name",
        },
        category: {
          field: "slug",
          references: "name",
        },
        face: {
          field: "slug",
          references: "name",
        },
        collection: {
          field: "slug",
          references: "name",
        },
        size: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
});
