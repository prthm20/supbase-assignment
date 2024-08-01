import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Import icons from shadcn
import { useRef, useEffect } from "react";

export default function QuoteSection() {
  const scrollRef = useRef(null);

  const quotes = [
    {
      author: "Albert Einstein",
      text: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    },
    {
      author: "Yoda",
      text: "Do or do not. There is no try.",
    },
    {
      author: "Steve Jobs",
      text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    },
    {
      author: "Walt Disney",
      text: "The way to get started is to quit talking and begin doing.",
    },
    {
      author: "Dalai Lama",
      text: "Happiness is not something ready-made. It comes from your own actions.",
    },
    {
      author: "Maya Angelou",
      text: "You will face many defeats in life, but never let yourself be defeated.",
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const autoScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        // Reset to the start if reached the end
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(autoScroll, 3000); // Automatically scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
        <Button 
          onClick={() => handleScroll("left")} 
          className="bg-primary text-white hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Inspirational Quotes
        </h2>
        <Button 
          onClick={() => handleScroll("right")} 
          className="bg-primary text-white hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>
      <div
        ref={scrollRef}
        className="mt-6 flex overflow-x-auto space-x-4 pb-4 max-w-5xl mx-auto px-4 scrollbar-hide"
      >
        {quotes.map((quote, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <CardContent>
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                “{quote.text}”
              </blockquote>
              <p className="mt-4 text-right text-gray-500 dark:text-gray-400">
                - {quote.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
