import { useContext } from "react";
import { UserContext } from "../../../Providers/UserContext";
import swal from "sweetalert";
import axios from "axios";

const BookCard = ({ item }) => {

    const { name, _id, author, description, photo } = item || {};
    const { person } = useContext(UserContext);
    // const { user } = useContext(AuthContext)
    // console.log(item)

    const handleAddToFavorites = async e => {
        try {
            const response = await axios.post(`http://localhost:5000/favorites`, e);
            swal("Good job!", `${name} has been added as favorites`, "success");

            return response.data;
        } catch (error) {
            console.error('Error adding user information:', error);
            swal("Ohh shit!", "Maybe there is something wrong!", "error");
            throw error;
        }
    }

    return (
        <>
            <div href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src={
                        photo ? photo : "https://i.ibb.co/FnkbxWm/hayden-walker-ihi-Ed-4-TNY-unsplash.jpg"
                    }
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">5h ago</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">{name}, {author}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                            <img className="w-14" src={
                                person?.photo ? person.photo : "https://i.ibb.co/jRJwGT3/profile-pic.png"

                            } alt="" />

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">
                                    Alex bot
                                </p>

                                <p className="font-medium">2 pieces</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                className="size-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Condition</p>

                                <p className="font-medium">
                                    Average
                                </p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                                className="size-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Used for</p>

                                <p className="font-medium">4 months</p>
                            </div>

                        </div>
                        <button onClick={() => handleAddToFavorites(_id)} className="py-2 px-3 bg-gray-900 text-white text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-black">
                            + Favorites
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCard;