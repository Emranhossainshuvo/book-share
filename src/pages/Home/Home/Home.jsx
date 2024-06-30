import { useContext } from "react";
import Banner from "../Banner/Banner";
import BookCards from "../BookCards/BookCards";
import { UserContext } from "../../../Providers/UserContext";

const Home = () => {

    return (
        <div className="">
        <Banner />
        <BookCards />
           <h1>Home page</h1> 
        </div>
    );
};

export default Home;