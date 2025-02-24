const platforms = [
  { name: "Clubers", image: "/clubers.png", link: "#" },
  { name: "Rappi", image: "/rappi.jpg", link: "#" },
  { name: "Uber Eats", image: "/ubereats.png", link: "#" },
  { name: "DiDi", image: "/didi.png", link: "#" },
];

const AvailableOn = () => {
  return (
    <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">

      <section className="max-w-4xl mx-auto text-center p-6">
        <h2 className="text-3xl font-bold">
          TAMBIÉN <span className="text-yellow-500">DISPONIBLES</span> EN
        </h2>

        <div className="flex justify-center gap-6 mt-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-24 h-24 object-contain"
              />
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AvailableOn;
