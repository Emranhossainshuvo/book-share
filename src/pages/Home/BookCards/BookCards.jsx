import { useContext, useEffect, useState } from "react";
import axios from "axios"
import BookCard from "../BookCard/BookCard";
import { AuthContext } from "../../../Providers/AuthProvider";
import useBooks from "../../../Providers/useBooks";

const BookCards = () => {

    const { loading } = useContext(AuthContext)

    const [article, error] = useBooks()

    return (
        <>
            {
                loading ?

                    <h5>Loading</h5>
                    :
                    <section className="max-w-screen-2xl mb-5  mx-auto">
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