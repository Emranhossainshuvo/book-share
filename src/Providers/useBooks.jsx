import axios from "axios";
import { useEffect, useState } from "react";

const useBooks = () => {

    const [article, setArticle] = useState([]);
    const [error, setError] = useState(null);

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



    return [article, error]
};

export default useBooks;