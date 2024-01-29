
function App() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="card">
        {/* Card Content Goes Here */}
        <div className="w-full flex mt-5 justify-center ">
          {/* Image container */}
          <img src="./assets/avatar_avwaveaf.jpg" alt="" className="object-cover h-28 rounded-full" />
        </div>

        {/* Title */}
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl font-semibold">Afif Fadillah</h1>
          <h2 className="text-xl text-primary">Jakarta, Indonesia</h2>
        </div>

        {/* Description */}
        <p className="text-md">&quot;Front-end developer and avid reader.&quot;</p>
        {/* Links  */}
        <div className="p-2 flex flex-col gap-4">
          <a href="https://github.com/Avwaveaf"  className="links__button">
            GitHub
          </a>
          <a href="https://www.frontendmentor.io/profile/Avwaveaf" className="links__button">
            Frontend Mentor
          </a>
          <a href="https://www.linkedin.com/in/muhamad-afif-fadillah-9bab0221a/?locale=en_US" className="links__button">
            LinkedIn
          </a>
          <a  href="#" className="links__button">
            Twitter
          </a>
          <a  href="#" className="links__button">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
