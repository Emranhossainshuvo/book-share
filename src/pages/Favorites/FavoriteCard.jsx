
const FavoriteCard = ({item, index}) => {

    const {name, author} = item || {};


    return (
        <>
            <tr className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default FavoriteCard;