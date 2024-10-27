import Link from "next/link";
import Image from "next/image";
import logo from "../app/public/Group 11 1.png"
export default function Footer() {
  return (
    <>
      <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

        <div className="footer-container">
          {/* Logo and Branding Section */}
          <div className="footer-logo">
          <Image src={logo} alt="logo" />
            <span>DIGITAL PROJECT</span>
          </div>

          {/* Information Section */}
          <div className="footer-info">
            <h3>Information</h3>
            <ul>
              <li>
                <Link href={"/"}>
                  <button>Home</button>
                </Link>
              </li>
              <li>
                <Link href={"/certification"}>
                  <button>Certification</button>
                </Link>
              </li>
              <li>
                <Link href={"/gallary"}>
                  <button>Gallery</button>
                </Link>
              </li>
              <li>
                <Link href={"/projects"}>
                  <button>Projects</button>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <button>Contact</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3>Contacts</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 1234 Sample Street
              <br />
              Karachi Pakistan
            </p>
            <p>
              <i className="fas fa-phone"></i> +923481341392
            </p>
            <p>
              <i className="fas fa-envelope"></i> <a href="mailto:kshahmeer10@gmail.com">kshahmeer10@gmail.com</a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <h3>Social Media</h3>
            <a href="https://www.facebook.com/kshahmeer10">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=923481341392">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/shahmeer-khan-96b1a42b4/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.pinterest.com/kshahmeer10/">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
