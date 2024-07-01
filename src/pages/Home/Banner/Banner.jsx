import { useState } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "data:image/jpeg;base64,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",
    "https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png",
    "https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
  ];

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // const [isViewOpen, setIsViewOpen] = useState(false);

  // const openView = () => {
  //   setIsViewOpen(true);
  // };

  // const closeView = () => {
  //   setIsViewOpen(false);
  // };

  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      {/* {!isViewOpen && (
        <div className="w-full flex justify-center">
          <button onClick={openView} className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold">
            Open Quick View
          </button>
        </div>
      )} */}
       (
        <div className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
          <div className="flex justify-end">
            
          </div>
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
            <div className="lg:w-1/2 flex justify-between items-stretch bg-gray-50 px-2 py-20 md:py-6 md:px-6 lg:py-24">
              <div className="flex items-center">
                <button onClick={goPrev} aria-label="slide back" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                  <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 16L24 32L40 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="slider w-52 h-96 relative overflow-hidden">
                <div className="slide-ana flex h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img src={slide} alt={`Slide ${index}`} className="w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={goNext} aria-label="slide forward" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                  <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 16L40 32L24 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Bar Stool</h1>
              <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">
                You don&apos;t just want to be comfortable sitting in a bar stool—you want to be comfortable shimmying it up to the bar, closer to your lover, or back slightly to include a third person in the conversation.
              </p>
              <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8">
                <button className="py-4 px-10 bg-gray-900 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-black">
                  View Details
                </button>
                <button className="py-4 px-10 bg-gray-900 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-black">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    </div>
  );
};

export default Banner;
