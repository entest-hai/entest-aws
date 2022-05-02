const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-code-import'),
      require('remark-gfm'),
      require('remark-mdx-images'),
      [
        require('remark-github'),
        {
          repository: 'aws-amplify/amplify-ui',
        },
      ],
    ],
    rehypePlugins: [
      require('mdx-prism'),
      require('rehype-slug'),
      require('rehype-autolink-headings'),
    ],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})