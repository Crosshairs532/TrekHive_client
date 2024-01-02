import { GiAxeSwing } from "react-icons/gi";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#002537] text-[#f1f3fa]">
                <aside>
                    <h1><GiAxeSwing size={60}></GiAxeSwing></h1>
                    <p className=" font-sans" ><span className=" font-syne text-3xl font-extrabold">TrekHive</span><br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;