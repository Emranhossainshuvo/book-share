import axios from "axios";
import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {

    const [article, setArticle] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/favorites")
                setArticle(response.data)
            }
            catch (err) {
                setError(err)
            }
        }
        fetchData()
    }, [])



    return (
        <>
            <div className="flex flex-col max-w-screen-2xl mx-auto mt-10 h-[100vh]">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        article?.map(item => <FavoriteCard key={item._id} item={item}></FavoriteCard>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Favorites;