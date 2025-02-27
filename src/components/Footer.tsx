import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className=" text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-bold">Contacto</h3>
              <p className="text-sm">Teléfono: 55 1234 5678</p>
              <p className="text-sm">Correo:
                <a href="mailto:paste@gamil.com" className="text-yellow-500">
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Horarios</h3>
              <p className="text-sm">Lunes a Domingo de 9:00 a 21:00</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Dirección</h3>
              <p className="text-sm">Calle Falsa 123, Col. Centro, CDMX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
