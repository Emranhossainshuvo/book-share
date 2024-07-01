import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios"
import swal from "sweetalert";
import { UserContext } from "../../Providers/UserContext";

const Register = () => {

    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const handleCreateUser = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;

        const user = {
            name,
            email,
            url
        }

        console.log(url);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate("/")
            })

        try {
            const response = await axios.post(`http://localhost:5000/users`, user);
            form.reset();
            swal("Good job!", "Your information has been added!", "success");

            return response.data;
        } catch (error) {
            console.error('Error adding user information:', error);
            swal("Ohh shit!", "Maybe there is something wrong!", "error");
            throw error;
        }



    }

    return (
        <>
            {/* section that will hold everything in this file */}
            <section className="h-[100vh] flex items-center justify-center bg-[#31473a]">
                <Helmet>
                    <title>Book Hive || Register</title>
                </Helmet>
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-3 mt-2">Books Swap</h3>
                    <p className="text-center text-xl font-semibold">Register</p>
                    <form onSubmit={handleCreateUser} className="flex flex-col gap-7 px-10">
                        <input placeholder="Name" className="h-10 ps-3 rounded-md" type="text" name="name" />
                        <input placeholder="Email" className="h-10 ps-3 rounded-md" type="email" name="email" />
                        <input placeholder="Password" className="h-10 ps-3 rounded-md" type="password" name="password"  />
                        <input className="h-10 ps-3 rounded-md" type="text" name="url" placeholder="Profile url" />
                        <input placeholder="" className="h-10 ps-3 rounded-md" type="file" style={{ display: "none" }} name="file" id="file" />
                        <label className=" flex gap-2 justify-start items-center" htmlFor="file">
                            <img src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                            <p className="text-lg font-semibold">
                                Upload your profile picture
                            </p>
                        </label>
                        <input className="h-10 cursor-pointer bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Register" />
                    </form>
                    <p className="text-center my-4">Already have an account?<span>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </span></p>
                </section>
            </section>
        </>
    );
};
export default Register;