import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/10 backdrop-blur-lg shadow-lg">
      {/* Logo (Imagen) */}

      <ul>
        <li>
          <a href="#home" className="text-white">
            👑
          </a>
        </li>
        <li>
          <a href="#menu" className="text-white">
            Menu
          </a>
        </li>
        <li>
          <a href="#franchises" className="text-white">
            Sucursales
          </a>
        </li>
        <li>
          <a href="#about" className="text-white">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#deals" className="text-white">
            Promos
          </a>
        </li>
        <li>
          <a href="#invoicing" className="text-white">
            Facturación
          </a>
        </li>
        <li>
          <a href="#franchises" className="text-white">
            Franquicias
          </a>
        </li>
      </ul>

      <a href="#contact" className="text-white">
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;
