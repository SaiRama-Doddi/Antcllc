import wkcllcLogo from '../../assets/wkcllc.jpeg';

export default function OurGroups() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* LOGO CARD */}
      <a
        href="http://www.placeandpeoplemuseum.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="h-64 bg-white rounded-xl shadow-lg flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/logo4.jpeg"
            alt="Place & People Museum"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </a>

      {/* LOGO CARD */}
      <a
        href="http://www.kurkumoman.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="h-64 bg-white rounded-xl shadow-lg flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/logo2.jpg"
            alt="Kurkum Oman"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </a>

      {/* LOGO CARD */}
      <a
        href="https://www.antcllc.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="h-64 bg-white rounded-xl shadow-lg flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
          <img
            src="/antc-logo.png"
            alt="ANTC Group"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </a>

      {/* LOGO CARD */}
      <a
        href="http://wkcllc.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="h-64 bg-white rounded-xl shadow-lg flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
          <img
            src={wkcllcLogo}
            alt="WKC LLC"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </a>

    </div>
  );
}
