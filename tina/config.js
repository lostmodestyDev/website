import { defineConfig } from 'tinacms'
import { blog_postFields } from './templates'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: '6d0bca18-f530-49aa-911b-678a7790b17f', // Get this from tina.io
  token: '9e9115d0fcc5e1b8f232022dc99587536e8b7a6f', // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        format: 'md',
        label: 'Blog Posts',
        name: 'blog_posts',
        path: 'data/blog',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...blog_postFields(),
        ],
      },
      {
        format: 'md',
        label: 'Authors',
        name: 'authors',
        path: 'data/authors',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
        ],
      },
    ],
  },
})
