import { useEffect, useState } from "react";
import axios from "axios"
import BookCard from "../BookCard/BookCard";

const BookCards = () => {

    const [article, setArticle] = useState([]);
    const [error, setError] = useState(null);

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
            <section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        article.map(item => <BookCard
                        item={item}
                            key={item._id}
                        >

                        </BookCard>)
                    }
                </div>

            </section>
        </>
    );
};

export default BookCards;