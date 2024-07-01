import { useContext, useEffect, useState } from "react";
import axios from "axios"
import BookCard from "../BookCard/BookCard";
import { AuthContext } from "../../../Providers/AuthProvider";

const BookCards = () => {

    const [article, setArticle] = useState([]);
    const [error, setError] = useState(null);
    const { loading } = useContext(AuthContext)

    console.log(article);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/books")
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
            {
                loading ?

                    <h5>Loading</h5>


                    :

                    <section className="max-w-screen-2xl mx-auto">

                        <div className="grid gap-x-3 gap-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                article.map(item => <BookCard
                                    item={item}
                                    key={item._id}
                                >

                                </BookCard>)
                            }
                        </div>

                    </section>
            }
        </>
    );
};

export default BookCards;