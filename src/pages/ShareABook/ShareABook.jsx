import axios from "axios"
import { Helmet } from "react-helmet-async";
import swal from 'sweetalert';

const ShareABook = () => {

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const bookData = {
            name,
            author,
            description,
            photo
        }


        try {
            const response = await axios.post(`http://localhost:5000/books`, bookData);
            form.reset();
            swal("Good job!", "Your Book has been added!", "success");

            return response.data;
        } catch (error) {
            console.error('Error adding book:', error);
            swal("Ohh shit!", "Maybe ther is something wrong!", "error");
            throw error;
        }


    }

    return (
        <>
            <section className="h-[100vh] flex items-center justify-center w-[100vw] bg-[#31473a]">
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] w-3/12 rounded-xl">
                    <Helmet>
                        <title>Book Hive || Share</title>
                    </Helmet>
                    <h3 className="text-center text-3xl font-semibold mb-3 mt-2">Talks chat</h3>
                    <p className="text-center text-xl font-semibold">Share a book</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-7 px-10">
                        <input placeholder="Name" className="h-10 ps-3 rounded-md" type="text" name="name" id="" />
                        <input placeholder="Author" className="h-10 ps-3 rounded-md" type="text" name="author" id="" />
                        <input placeholder="description" className="h-10 ps-3 rounded-md" type="text" name="description" id="" />
                        <input placeholder="Photo url" className="h-10 ps-3 rounded-md" type="text" name="photo" id="" />
                        <input placeholder="" className="h-10 ps-3 rounded-md" type="file" style={{ display: "none" }} name="file" id="file" />
                        <label className=" flex gap-2 justify-start items-center" htmlFor="file">
                            <img src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                            <p className="text-lg font-semibold">
                                Upload a picture
                            </p>
                        </label>
                        <input className="h-10 mb-8 bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Share now" />
                    </form>
                </section>
            </section>
        </>
    );
};

export default ShareABook;