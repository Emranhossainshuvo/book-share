
const Banner = () => {
  return (
    <>
      <section className="bg-cover bg-fixed relative bg-center h-[80vh]" style={{ backgroundImage: "url(https://i.ibb.co/s2Jp4rp/4301.jpg)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="flex relative  bg-opacity-50 max-w-screen-2xl h-full mx-auto justify-between items-center">
          <div>
            <h4 className="text-white text-4xl font-semibold">Start Sharing Today!</h4>
          </div>
          <div>
            <img src="https://i.ibb.co/s2Jp4rp/4301.jpg" alt="" />
          </div>
        </div>

      </section>
    </>
  );
};

export default Banner;