import Nav from '../components/nav.jsx';
import Star from '../components/bg.jsx';

function Contact() {
  return (
    <div className="w-full h-screen overflow-hidden text-white">
      <Star />

      <div className="relative grid grid-rows-[15%,85%] h-full w-full">
        <Nav />

        <div className="flex flex-col items-center justify-start gap-6 pt-20 font-poppins text-base md:text-2xl">
          <div className="flex flex-row gap-3">
            <p className="font-semibold text-gray-400">Name:</p>
            <span className="tracking-wide font-poppins">Sai Charan Kotari</span>
          </div>

          <div className="flex flex-row gap-3">
            <p className="font-semibold text-gray-400">Personal Mail:</p>
            <a
              className="font-mono  hover:text-white hover:underline"
            >
              saicharankotari@gmail.com
            </a>
          </div>

          <div className="flex flex-row gap-3">
            <p className="font-semibold text-gray-400">College Mail:</p>
            <a
              className="font-mono hover:text-white hover:underline"
            >
              kotarisai.charan2023@vitstudent.ac.in
            </a>
          </div>

          <div className="flex flex-row gap-3">
            <p className="font-semibold text-gray-400">Contact No:</p>
            <a className="font-mono hover:text-white hover:underline">
              +91 8885214225
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
