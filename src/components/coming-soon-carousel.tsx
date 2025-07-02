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
                backgroundSize: image.src === "/interior.jpeg" ? "130%" : "cover",
                backgroundPosition:
                  image.src === "/interior.jpeg" ? "center 65%" :
                  "center"
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        {/* Coming Soon Badge - always visible, at the very top */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 inline-flex items-center space-x-2 bg-primary/90 backdrop-blur-sm text-primary-foreground py-3 px-6 rounded-full shadow-lg animate-bounce">
          <Clock className="h-5 w-5" />
          <span className="font-semibold text-lg">Coming Soon</span>
        </div>

        {/* Show Logo only on first image, perfectly centered */}
        {currentIndex === 0 && (
          <div className="flex flex-1 min-h-0 items-center justify-center w-full h-full">
            <img 
              src="/Logo.jpg" 
              alt="Lamhaa Logo" 
              className="h-64 md:h-80 w-auto object-contain animate-fade-in"
              style={{filter: 'drop-shadow(0 2px 24px #000)'}}
            />
          </div>
        )}

        {/* Main Title with Animation (from slide config) and subtitle for other images */}
        {currentIndex !== 0 && (
          <>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in mt-24" style={{color:'#fff', textShadow:'0 2px 24px #000, 0 1px 0 #FFD700'}}>
              <span className="gradient-text">
                {images[currentIndex].title}
              </span>
            </h2>
            {/* Subtitle */}
            <p className="text-lg md:text-2xl mb-8 animate-fade-in-delay font-light" style={{color:'#fff', textShadow:'0 2px 24px #000, 0 1px 0 #FFD700'}}>
              {images[currentIndex].subtitle}
            </p>
            {/* Countdown Placeholder for other images */}
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto animate-shimmer flex flex-col items-center justify-center text-center min-h-[120px]">
              <p className="text-lg font-semibold text-foreground mb-2 w-full">
                Stay Tuned
              </p>
              <p className="text-sm text-muted-foreground w-full">
                We're putting the finishing touches on something amazing
              </p>
            </div>
          </>
        )}
      </div>

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