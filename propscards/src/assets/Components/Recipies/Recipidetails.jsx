import Recipiesdata from './Recipiesdata';
import { useParams } from "react-router-dom";
import './Recipidetails.css';
import Notfound from '../Products/Notfound.jsx';

function Recipidetails() {
    const params = useParams();
    const recipe = Recipiesdata.recipes.find((recipe) => recipe.id === parseInt(params.id));

    if (!recipe) {
        return <Notfound />;
    }

    return (
        <div className="recipedetails">
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.description}</p>
            <h2>Ingredients:</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}
export default Recipidetails;