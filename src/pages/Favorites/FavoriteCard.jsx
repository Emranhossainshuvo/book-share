import axios from "axios";
import swal from "sweetalert"

const FavoriteCard = ({ item, index }) => {

    const { name, author, _id } = item || {};

    const handleDelete = async (id) => {
        console.log("Deleting item with id:", id);
        try {
            const response = await axios.delete(`http://localhost:5000/favorites/${id}`);
            swal("Good job!", `${name} has been deleted from favorites`, "success");
            console.log("Delete response:", response.data);
            return response.data;
        } catch (error) {
            console.error('Error deleting favorite item:', error);
            swal("Oh no!", "There was an error deleting the item!", "error");
            throw error;
        }
    };


    return (
        <>
            <tr className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
                    <span className="hover:underline cursor-pointer hover:text-blue-600">
                        {name}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button onClick={() => handleDelete(_id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default FavoriteCard;