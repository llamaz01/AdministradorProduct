import { useState } from "react";
import "./page.module.css";

const ProductForm = ({ titleInitial = "", priceInitial = 0, descriptionInitial = "", onSubmitFn, btnLabel = "Submit", clearStates = true }) => {
    const [title, setTitle] = useState(titleInitial);
    const [price, setPrice] = useState(priceInitial);
    const [description, setDescription] = useState(descriptionInitial);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            price,
            description,
        };
        await onSubmitFn(data);
        if (clearStates) {
            setTitle("");
            setPrice(0);
            setDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="input-container">
                    <label htmlFor="">Title</label>
                    <input className="input"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="">Price</label>
                    <input className="input"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="">Description</label>
                    <input
                    className="input"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">{btnLabel}</button>
            </div>
        </form>
    );
};

export default ProductForm;
