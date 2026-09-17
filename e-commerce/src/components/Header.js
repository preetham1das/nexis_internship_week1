function Header({ cartCount = 0 }) {
    return (
        <header className="site-header">
            <a className="brand" href="#home">ShopNow</a>
            <nav className="site-nav" aria-label="Main navigation">
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
                <span className="cart-count" aria-label={`${cartCount} items in cart`}>
                    Cart ({cartCount})
                </span>
            </nav>
        </header>
    );
}

export default Header;