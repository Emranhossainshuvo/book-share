
const Features = () => {
    return (
        <>
            <section className="max-w-screen-2xl h-[95vh] mx-auto">
                <div className="mb-20">
                    <h4 className="text-5xl leading-snug font-bold">More than a platform. <span className="text-[#57606a]">
                    GitHub Education is a <br /> commitment to bringing tech and open source <br /> collaboration to students and educators across <br /> the globe.</span></h4>    
                </div>    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-[#f6f8fa] p-7 rounded-lg">
                        <img className="mb-7" src="https://i.ibb.co/KX252MG/icons8-degree-48.png" alt="" />
                        <h2 className="text-3xl mb-7  font-semibold">5 million students</h2>
                        <p className="text-[#57606a] text-2xl font-semibold">Connect with millions of peers who&apos;ve expanded their skills through GitHub Education.</p>
                    </div>
                    <div className="bg-[#f6f8fa] p-7 rounded-lg">
                        <img className="mb-7" src="https://i.ibb.co/VTYxSXQ/icons8-book-50-1.png" alt="" />
                        <h2 className="text-3xl mb-7  font-semibold">5 million students</h2>
                        <p className="text-[#57606a] text-2xl font-semibold">Connect with millions of peers who&apos;ve expanded their skills through GitHub Education.</p>
                    </div>
                    <div className="bg-[#f6f8fa] p-7 rounded-lg">
                        <img className="mb-7" src="https://i.ibb.co/HB0QFN7/icons8-building-64.png" alt="" />
                        <h2 className="text-3xl mb-7  font-semibold">5 million students</h2>
                        <p className="text-[#57606a] text-2xl font-semibold">Connect with millions of peers who&apos;ve expanded their skills through GitHub Education.</p>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Features;