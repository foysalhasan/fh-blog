import Link from 'next/link'
export default function Header() {
  return (
    <div className="bg-gray-800 container py-3 flex justify-between items-center">
      <Link href={'/'} passHref>
        <a className="text-4xl text-transparent bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text font-semibold uppercase cursor-pointer">
          FH BLOG
        </a>
      </Link>
      <nav className="flex flex-grow items-center justify-end font-semibold space-x-5">
        <a href="" className="text-white uppercase hover:text-rose-400">
          home
        </a>
        <a href="" className="text-white uppercase hover:text-rose-400">
          about us
        </a>
        <a href="" className="text-white uppercase hover:text-rose-400">
          privacy
        </a>
        <a href="" className="text-white uppercase hover:text-rose-400">
          contact
        </a>
      </nav>
    </div>
  )
}
