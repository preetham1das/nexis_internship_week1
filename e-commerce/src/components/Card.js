import Button from "./Button";

function Card({ name, price, description, onAdd }) {
    return (
        <article className="product-card">
            <div className="product-icon" aria-hidden="true">{name.charAt(0)}</div>
            <h3>{name}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">₹{price.toLocaleString("en-IN")}</p>
            <Button text="Add to cart" onClick={onAdd} />
        </article>
    );
}

export default Card;