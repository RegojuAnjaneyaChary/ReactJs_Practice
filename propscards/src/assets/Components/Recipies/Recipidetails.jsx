import Recipiesdata from './Recipiesdata';
import { useParams } from "react-router-dom";
import './Recipidetails.css';
import Notfound from '../Products/Notfound.jsx';
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

function Recipidetails() {
    const params = useParams();
    const recipe = Recipiesdata.recipes.find((recipe) => recipe.id === parseInt(params.id));

//  const handleCartItems = (xyz) => {
//     alert("Recipi added to Cart!");
//     const allCartItemsFromLS = JSON.parse(localStorage.getItem("cartitems")) || [];
//     allCartItemsFromLS.push({
//         id: xyz.id,
//         title: xyz.title,           // Map 'name' to 'title'
//         images: xyz.thumbnail,         // Map 'image' to 'images'
//         category: xyz.category || "Recipe",
//         price: xyz.price || 0
//     });
//     localStorage.setItem("cartitems", JSON.stringify(allCartItemsFromLS));
// };
// cart items
const handleCartItems = (xyz) => {
    alert("Recipi added to Cart!");
    const allCartItemsFromLS = JSON.parse(localStorage.getItem("cartitems")) || [];
    allCartItemsFromLS.push({
        id: xyz.id,
        title: xyz.name,
        images: xyz.image,
        category: xyz.category || "Recipe",
        price: xyz.price || 0
    });
    localStorage.setItem("cartitems", JSON.stringify(allCartItemsFromLS));
};



// fav items
const handleFavItems = (xyz) => {
    alert("Recipi added to FavItems!");
    const allFavItemsFromLS = JSON.parse(localStorage.getItem("favitems")) || [];
    allFavItemsFromLS.push({
        id: xyz.id,
        title: xyz.name,
        images: xyz.image,
        category: xyz.category || "Recipe",
        price: xyz.price || 0
    });
    localStorage.setItem("favitems", JSON.stringify(allFavItemsFromLS));
};

  
    if (!recipe) {
        return <Notfound />;
    }

    return (
        <div className="recipedetails">
            <div>
                <img src={recipe.image} alt={recipe.name} />
            </div>
            <div>
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
                <h2>Ingredients:</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <div className="product-details-actions">
                    <button onClick={() => handleCartItems(recipe)}>
                        Add to Cart <IoCartOutline className="icon1" />
                    </button>
                    <button onClick={() => handleFavItems(recipe)}>
                        Fav Items <MdFavorite className="icon1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Recipidetails;