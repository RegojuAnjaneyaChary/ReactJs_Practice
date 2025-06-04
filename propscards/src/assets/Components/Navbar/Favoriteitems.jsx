import React from 'react';
import './Favitems.css';
import { MdDelete } from "react-icons/md";

function Favoriteitems() {
    const datafavFromLs = (JSON.parse(localStorage.getItem("favitems")) || []).filter(Boolean);

    const removeFromFav = (id) => {
        alert("Product removed from FavItems!");
        const updatedFavItems = datafavFromLs.filter((item) => item && item.id !== id);
        localStorage.setItem("favitems", JSON.stringify(updatedFavItems));
        window.location.reload();
    };

    return (
        <div className="fav-items-container">
            <h2>Favourite Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {datafavFromLs.map((item, index) => (
                        <tr key={item.id}>
                            <td data-label="S.No.">{index + 1}</td>
                            <td data-label="Product Name">{item.title}</td>
                            <td data-label="Image"><img src={item.images} alt={item.title} width={80} /></td>
                            <td data-label="Category">{item.category}</td>
                            <td data-label="Price">${item.price}</td>
                            <td>
                                <span className="delete-icon" onClick={() => removeFromFav(item.id)}>
                                    <MdDelete />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Favoriteitems;