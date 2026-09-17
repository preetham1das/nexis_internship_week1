import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";

function App() {
    const [cartCount, setCartCount] = useState(0);
    const [message, setMessage] = useState("");

    const products = [
        { name: "Wireless Headphones", price: 1999, description: "Immersive sound with a comfortable wireless design." },
        { name: "Smart Watch", price: 2499, description: "Track your day with health and fitness insights." },
        { name: "Running Shoes", price: 2999, description: "Lightweight cushioning for every active journey." }
    ];

    function addToCart(productName) {
        setCartCount((count) => count + 1);
        setMessage(`${productName} added to your cart.`);
    }

    return (
        <div className="app-shell">
            <Header cartCount={cartCount} />

            <main>
                <section className="hero" id="home">
                    <p className="eyebrow">Simple shopping, better choices</p>
                    <h1>Find something you will love.</h1>
                    <p>Quality essentials selected for everyday life.</p>
                    <Button text="Browse products" onClick={() => document.getElementById("products").scrollIntoView()} />
                </section>

                <section className="products-section" id="products">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Featured collection</p>
                            <h2>Popular products</h2>
                        </div>
                        {message && <p className="cart-message" role="status">{message}</p>}
                    </div>

                    <div className="product-grid">
                        {products.map((product) => (
                            <Card key={product.name} {...product} onAdd={() => addToCart(product.name)} />
                        ))}
                    </div>
                </section>

                <section className="subscribe-section" id="contact">
                    <p className="eyebrow">Stay in the loop</p>
                    <h2>Get thoughtful updates.</h2>
                    <p>Join our list for new arrivals and useful offers.</p>
                    <Form onSubmit={(name) => setMessage(`Thanks for subscribing, ${name}!`)} />
                </section>
            </main>

            <Footer year={2026} />
        </div>
    );
}

export default App;