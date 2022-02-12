import Slider from 'react-slick'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <BiChevronRight
      onClick={onClick}
      className="absolute w-10 h-10 bg-white/40 transition hover:bg-white flex justify-center items-center text-3xl text-gray-900 rounded-full shadow z-10 cursor-pointer top-1/2 -translate-y-1/2 right-10  "
    />
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <BiChevronLeft
      onClick={onClick}
      className="absolute w-10 h-10 bg-white/40 transition hover:bg-white flex justify-center items-center text-3xl text-gray-900 rounded-full cursor-pointer shadow top-1/2 z-10 -translate-y-1/2 left-10"
    />
  )
}

export default function BlogSlider({ posts }) {
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  // console.log(posts)
  return (
    <div className="">
      <Slider {...settings}>
        {posts.map((slide, index) => (
          <div key={index}>
            <div
              className="bg-bottom bg-cover h-[400px] relative"
              style={{
                backgroundImage: `url(${slide.frontMatter.cover_image})`,
              }}
            >
              <div className="inset-0 bg-black bg-opacity-50 absolute flex items-end justify-start">
                <Link href={`/blog/${slide.slug}`} passHref>
                  <a className="w-full px-5 py-3 text-4xl bg-rose-500 bg-opacity-50 text-white  font-bold ">
                    <p className="animate">{slide.frontMatter.title}</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
