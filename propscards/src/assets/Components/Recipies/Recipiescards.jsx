import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recipiescards.css';

function Recipiescards({ SingleRecipie }) {
    const navigate = useNavigate();

    return (
        <div className='recipies-card'>
            <img src={SingleRecipie.image} alt={SingleRecipie.name} width={100} />
            <div className='recipies-card-details'>
                <h2>{SingleRecipie.name}</h2>
                <h4>Cuisine: {SingleRecipie.cuisine}</h4>
                {/* <h4>Ingredients: {SingleRecipie.ingredients.join(', ')}</h4> */}
                <button
                    onClick={() => navigate(`/recipies/${SingleRecipie.id}`)}
                    className="btn"
                >
                    View More
                </button>
            </div>
        </div>
    );
}

export default Recipiescards;