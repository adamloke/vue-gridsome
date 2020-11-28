module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "lyrtf9d2u86c", // required
        accessToken: "TWmqBXhAHhfA5fbMxqfLjLgJH5fJu0Jm0UIwgtkfFSA", // required
        typeName: "Contentful",
      },
    },
  ],
}
