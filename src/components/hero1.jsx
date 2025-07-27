import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useRef } from 'react'

export default function Hero() {
  const timer = useRef()
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    created(s) {
      timer.current = setInterval(() => {
        s.next()
      }, 3000) // Change slide every 3 seconds
    },
    destroyed() {
      clearInterval(timer.current)
    },
  })

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Carousel Images */}
      <div ref={sliderRef} className="keen-slider h-full">
        <div className="keen-slider__slide">
          <img src="clothCollection1.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="keen-slider__slide">
          <img src="clothCollection3.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="keen-slider__slide">
          <img src="jewellery.jpg" className="w-full h-full object-cover" />
        </div>
         <div className="keen-slider__slide">
          <img src="clothCollection2.jpg" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text over image */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 bg-black/40 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Style</h1>
        <p className="text-lg md:text-xl mb-6">Shop exclusive collections curated for you.</p>
        <button className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Shop Now
        </button>
      </div>
    </section>
  )
}
