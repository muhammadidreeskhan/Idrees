import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechVision",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Working with Idrees was an absolute pleasure. His attention to detail and innovative approach to problem-solving resulted in a website that exceeded our expectations. The performance optimizations he implemented made a significant difference.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at InnovateCorp",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Idrees brought our vision to life with his exceptional development skills. His ability to understand our requirements and translate them into a beautiful, functional website was impressive. The mobile responsiveness is perfect.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder of DesignHub",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "The UI/UX expertise that Idrees brings to the table is outstanding. He created an intuitive and engaging user experience that our customers love. His commitment to quality and attention to detail is remarkable.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO at StartupX",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "Idrees is a highly skilled developer who delivers exceptional results. His technical expertise and problem-solving abilities made our project a success. The codebase is clean, well-documented, and maintainable.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-transparent to-amber-500/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what clients say about their experience working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-background/50 backdrop-blur-lg border border-sky-400/10 hover:border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400/50 via-purple-500/50 to-amber-500/50 blur-sm"></div>
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="relative w-20 h-20 rounded-full object-cover"
                        />
                        <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-purple-500 bg-background rounded-full p-1" />
                      </div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <p className="text-lg mb-4 italic text-muted-foreground">
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-background/50 backdrop-blur-sm border border-sky-400/10 text-muted-foreground hover:text-purple-500 hover:border-purple-500/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all ${index === currentIndex
                      ? "w-6 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500"
                      : "w-2 bg-purple-500/20 hover:bg-purple-500/40"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-background/50 backdrop-blur-sm border border-sky-400/10 text-muted-foreground hover:text-purple-500 hover:border-purple-500/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;