function Footer({ year = new Date().getFullYear() }) {
    return (
        <footer className="site-footer">
            <p>© {year} ShopNow. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;  