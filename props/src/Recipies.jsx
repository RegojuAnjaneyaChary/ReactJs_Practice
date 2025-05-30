import { Recipiesdata } from './Recipiesdata';
import Recipiescards from './Recipiescards.jsx';
import React from 'react';

function Recipies() {
    return (
        <div className="recipies-container">
            {
                Recipiesdata.recipes.map((r) => (
                    <Recipiescards key={r.id} SingleRecipie={r} />
                ))
            }
        </div>
    );
}
export default Recipies;