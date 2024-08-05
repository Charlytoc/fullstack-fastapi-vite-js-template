import "./Navbar.css"
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <section>koko glam</section>
      <section>
        <Link to={"contacts"}>Contactos</Link>
      </section>
    </nav>
  );
};
