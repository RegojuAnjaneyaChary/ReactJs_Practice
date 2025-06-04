import React from "react";
import "./Cartitems.css";
import { MdDelete } from "react-icons/md";

function Cartitems() {
    // const dataFromLS = JSON.parse(localStorage.getItem("cartitems")) || [];
    const dataFromLS = (JSON.parse(localStorage.getItem("cartitems")) || []).filter(Boolean);
   
    // Optional: log all items once
    console.log(dataFromLS, "dataFromLS");
// delete handler

 const removeFromCart = (id) => {
    alert("Product removed from Cart!");
        const updatedCartItems = dataFromLS.filter((item) => item && item.id !== id);
        localStorage.setItem("cartitems", JSON.stringify(updatedCartItems));
        window.location.reload();
    };


    if (!dataFromLS.length) {
        return <div style={{ textAlign: "center", marginTop: "40px" }}>No items in cart.</div>;
    }

    return (
        <div className="cart-items">
            <h2>Cart Items</h2>
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
                    {dataFromLS.map((item, index) => {
                        if (!item) return null; // Skip null/undefined items

                        return (
                            <tr key={item.id || index}>
                                <td data-label="S.No.">{index + 1}</td>
                                <td data-label="Product Name">{item.title || item.name}</td>
                                <td data-label="Image">
                                    <img src={item.images || item.image} alt={item.title || item.name} width={80} />
                                </td>
                                <td data-label="Category">{item.category}</td>
                                <td data-label="Price">${item.price}</td>
                                <td> <span className="delete-icon" onClick={() => removeFromCart(item.id)}><MdDelete /></span></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Cartitems;