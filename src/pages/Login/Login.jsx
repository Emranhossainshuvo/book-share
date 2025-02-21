import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {logInUser} = useContext(AuthContext)

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(() => {
            // const user = result.user;
            // console.log(user)
            navigate("/")
        })
    }


    return (
        <>
            {/* section that will hold everything in this file */}
            <section className="h-[100vh] flex items-center justify-center bg-[#31473a]">
                <Helmet>
                    <title>Book Hive || Login</title>
                </Helmet>
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-3 mt-2">Books Swapp</h3>
                    <p className="text-center text-xl font-semibold">Login</p>
                    <form onSubmit={handleLogin} className="flex flex-col gap-7 px-10">
                        <input placeholder="Email" className="h-10 ps-3 rounded-md" type="email" name="email" />
                        <input placeholder="Password" className="h-10 ps-3 rounded-md" type="password" name="password" />
                        <input className="h-10 bg-[#31473a] text-white text-lg cursor-pointer font-semibold rounded-md" type="submit" value="Login" />
                    </form>
                    <p className="text-center my-4">Don&apos;t have an account?<span>
                        <Link to={"/register"}>
                            Register
                        </Link>

                    </span></p>
                </section>
            </section>
        </>
    );
};
export default Login;