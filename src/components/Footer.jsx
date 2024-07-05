function Footer() {
    const currentYear = new Date().getFullYear(); // Dynamically get the current year

    return (
        <footer className="bg-[#0B090A] text-white py-4">
            <div className="flex justify-center items-center">
                <p>© {currentYear} Wolf Of BIST. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;