"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { comingSoonImages } from "@/config/coming-soon-images"

// Use placeholder images for now - you can replace with your custom images
const images = comingSoonImages

const ComingSoonCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset currentIndex if out of bounds when images array changes
  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0)
    }
  }, [images.length, currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  // Guard: don't render if images[currentIndex] is undefined
  if (!images[currentIndex]) return null

  return (
    <section className="relative h-screen overflow-hidden pt-10">
      {/* Logo and ovals only on landing page */}
      {currentIndex === 0 && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pt-2">
          <img
            src="/logo.jpg"
            alt="Lamhaa Logo"
            className="h-[32rem] md:h-[40rem] w-auto object-contain animate-fade-in"
            style={{filter: 'drop-shadow(0 2px 24px #000)'}}
          />
          {/* Two oval images side by side below the logo */}
          <div className="flex flex-row justify-center items-center gap-8 mt-4">
            <img
              src="/location1.jpg"
              alt="Location 1"
              className="w-48 h-24 rounded-full object-cover border-4 border-primary shadow-md aspect-[2/1]"
            />
            <img
              src="/location2.jpg"
              alt="Location 2"
              className="w-48 h-24 rounded-full object-cover border-4 border-primary shadow-md aspect-[2/1]"
            />
          </div>
        </div>
      )}
      {/* Description text and stay tuned box on other slides */}
      {currentIndex !== 0 && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pt-2 w-full flex flex-col items-center">
          <h2
            className="font-bold animate-fade-in mt-24 text-gold w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center mx-auto whitespace-nowrap overflow-hidden text-ellipsis text-base sm:text-lg md:text-xl lg:text-2xl mb-2"
            style={{color:'#FFD700', textShadow:'0 2px 24px #000, 0 1px 0 #FFD700'}}
          >
            <span className="gradient-text">
              {images[currentIndex].title}
            </span>
          </h2>
          {/* Subtitle */}
          <p
            className="animate-fade-in-delay font-light w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center mx-auto whitespace-nowrap overflow-hidden text-ellipsis text-xs sm:text-sm md:text-base lg:text-lg mb-8"
            style={{color:'#FFD700', textShadow:'0 2px 24px #000, 0 1px 0 #FFD700'}}
          >
            {images[currentIndex].subtitle}
          </p>
          {/* Countdown Placeholder for other images */}
          <div className="bg-background/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 max-w-xs sm:max-w-sm mx-auto animate-shimmer flex flex-col items-center justify-center text-center min-h-[60px] sm:min-h-[80px]">
            <p className="text-base sm:text-lg font-semibold text-foreground mb-1 w-full">
              Stay Tuned
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground w-full">
              We're putting the finishing touches on something amazing
            </p>
          </div>
        </div>
      )}
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {image.src === "/bw_image_1.jpeg" ? (
            <>
              {/* Solid gray background */}
              <div className="absolute inset-0" style={{backgroundColor: '#18181b'}} />
              {/* Blurred grayscale background version */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${image.src})`,
                  filter: "blur(60px) grayscale(1) brightness(0.5)",
                  opacity: 0.9
                }}
              />
              {/* Contained image on top */}
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.src})` }}
              />
            </>
          ) : (
            <div
              className="absolute inset-0 bg-no-repeat"
              style={{ 
                backgroundImage: `url(${image.src})`,
                backgroundSize:
                  image.src === "/interior.jpeg"
                    ? "cover"
                    : "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-foreground backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-foreground backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary scale-125" 
                : "bg-primary/50 hover:bg-primary/70"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default ComingSoonCarousel 