import Link from "next/link";
import Image from "next/image";
import logo from "../app/public/Group 11.jpg";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Image src={logo} alt="" />
            <span>DIGITAL PROJECT</span>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <Link href={"/"}>
                  <button>Home</button>
                </Link>
              </li>
              <li>
                {" "}
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
                {" "}
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
          </nav>
        </div>
      </header>
    </>
  );
}
