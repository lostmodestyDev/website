import { defineConfig } from 'tinacms'
import { blog_postFields } from './templates'

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: 'ff6721d6-bbb2-4f23-a949-82339d642d5e', // Get this from tina.io
  token: '00518741db3aa8f164c6dedf964ac780430f0128', // Get this from tina.io
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
