import './Recipiescards.css';
function Recipiescards({ SingleRecipie }) {
    return (
        <div className='recipies-card'>
            <img src={SingleRecipie.image} alt={SingleRecipie.name} width={100} />
            <div className='recipies-card-details'>
                <h2>{SingleRecipie.name}</h2>
                <h4>Cuisine: {SingleRecipie.cuisine}</h4>
                <h4>Ingredients: {SingleRecipie.ingredients.join(', ')}</h4>
            </div>
        </div>
    );
}
export default Recipiescards;