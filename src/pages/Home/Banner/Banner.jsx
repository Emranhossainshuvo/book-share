
const Banner = () => {
    return (
        <>
             <div className="bg-gray-200">
      <div className="container mx-auto p-8 flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800">Start Sharing Today</h1>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <div className="max-w-md">
          <img
            src="https://via.placeholder.com/400"
            alt="Books"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>  
        </>
    );
};

export default Banner;