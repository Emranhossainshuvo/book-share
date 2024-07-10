import { useContext } from "react";
import useBooks from "../../Providers/useBooks";
import { AuthContext } from "../../Providers/AuthProvider";
import BookCard from "../Home/BookCard/BookCard";

const AllBooks = () => {

    const [article] = useBooks();
    const {loading} = useContext(AuthContext)

    return (
        <>

            {
                loading ?

                    <h5>Loading</h5>
                    :
                    <section className="max-w-screen-2xl mt-10 mb-10 mx-auto">
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

export default AllBooks;