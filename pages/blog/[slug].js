import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Head from 'next/head'

export default function Post({
  frontMatter: { title, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container bg-white min-h-screen shadow-md px-0 pb-10">
        <div className="h-[420px] w-full">
          <img
            src={cover_image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 space-y-3">
          <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
          <div className="pt-4">
            <Link href="/">
              <a className="bg-rose-700 border border-rose-700 text-white px-5 py-2 rounded font-semibold text-sm uppercase hover:bg-transparent hover:text-rose-700 transition">
                go back
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace('.md', ''),
      },
    }
  })

  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markedDown = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

  const { data: frontMatter, content } = matter(markedDown)

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  }
}
