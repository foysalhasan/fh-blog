import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import BlogPosts from '../components/BlogPosts'
import { sortByDate } from '../utils'
import BlogSlider from '../components/BlogSlider'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FH BLOG</title>
      </Head>
      <div className="container bg-white px-0">
        <BlogSlider posts={posts} />
      </div>
      <div className="bg-white shadow-md min-h-screen container py-5">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <BlogPosts key={index} posts={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const markDownMeta = fs.readFileSync(path.join('posts', fileName))

    const { data: frontMatter } = matter(markDownMeta)

    return {
      slug,
      frontMatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
