import Link from 'next/link'

export default function BlogPosts({ posts }) {
  const { title, cover_image, date, excerpt } = posts.frontMatter
  return (
    <div className="bg-white border  border-slate-300 space-y-2 rounded p-4 shadow-sm">
      <img src={cover_image} alt={title} className="rounded" />
      <div className="text-xs">
        <span>Posted On</span>
        <span className=" font-medium text-rose-600 ml-1 ">{date}</span>
      </div>
      <h3 className="text-xl text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
      <div className="py-2">
        <Link href={`/blog/${posts.slug}`}>
          <a className="bg-rose-700 border border-rose-700 text-white px-5 py-2 rounded font-semibold text-sm uppercase hover:bg-transparent hover:text-rose-700 transition">
            read more
          </a>
        </Link>
      </div>
    </div>
  )
}
