import Recipiesdata from './Recipiesdata';
import { useParams } from "react-router-dom";
import './Recipidetails.css';
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

function Recipidetails() {
    const params = useParams();
    const recipe = Recipiesdata.recipes.find((recipe) => recipe.id === parseInt(params.id));

    if (!recipe) {
        return <div>Recipe not found.</div>;
    }

    // Add to cart with mapped fields
    const handleCartItems = () => {
        alert("Recipi added to Cart!");
        const allCartItemsFromLS = JSON.parse(localStorage.getItem("cartitems")) || [];
        allCartItemsFromLS.push({
            id: recipe.id,
            title: recipe.name,           // Map 'name' to 'title'
            images: recipe.image,         // Map 'image' to 'images'
            category: recipe.category || "Recipe",
            price: recipe.price || 0
        });
        localStorage.setItem("cartitems", JSON.stringify(allCartItemsFromLS));
    };

    // Add to favorites with mapped fields
    const handleFavItems = () => {
        alert("Recipi added to FavItems!");
        const allFavItemsFromLS = JSON.parse(localStorage.getItem("favitems")) || [];
        allFavItemsFromLS.push({
            id: recipe.id,
            title: recipe.name,
            images: recipe.image,
            category: recipe.category || "Recipe",
            price: recipe.price || 0
        });
        localStorage.setItem("favitems", JSON.stringify(allFavItemsFromLS));
    };

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
                    <button onClick={handleCartItems}>
                        Add to Cart <IoCartOutline className="icon1" />
                    </button>
                    <button onClick={handleFavItems}>
                        Fav Items <MdFavorite className="icon1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Recipidetails;