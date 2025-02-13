const Location = () => {
  const googleMapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.78924918251295!2d-100.29256640765202!3d25.650469563319877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfd0c602af5b%3A0xf06498f3a8f2d823!2sEl%20Rey%20del%20Paste%20Mty!5e0!3m2!1ses-419!2smx!4v1738777012431!5m2!1ses-419!2smx";
  return (
    <section id="franchises" className="flex flex-col items-center p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold">
        <span className="text-yellow-500">DONDE</span> ESTAMOS
      </h2>

      {/* Window Frame Container */}
      <div className="relative bg-gray-100 w-full max-w-lg mt-6 rounded-lg shadow-lg border border-gray-300">

        {/* Google Maps Iframe */}
        <iframe
          src={googleMapSrc}
          className="w-full h-64 rounded-b-lg"
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        ></iframe>


        {/* Decorative Cactus Images */}
        <img
          src="/images/cactus1.png"
          alt="Cactus Left"
          className="absolute left-0 bottom-0 w-20 -ml-6"
        />
        <img
          src="/images/cactus2.png"
          alt="Cactus Right"
          className="absolute right-0 bottom-0 w-24 -mr-6"
        />
      </div>
    </section>
  );
};

export default Location;
