import Nav from '../components/nav.jsx';
import Star from '../components/bg.jsx';
import WindowWidth from '../hooks/width.jsx';
import profile from '../assets/professional.jpg';
import resume from '../pdfs/Resume4_compressed.pdf';

function About() {
  const width = WindowWidth();

  function HandleSD() {
    const bio = document.getElementById('bio')
    bio.innerHTML = '<p className="animate-fadeIn">💻 Software Development I’m Sai Charan Kotari, a B.Tech CSE (AI & Robotics) student at VIT Chennai, passionate about full-stack software development. I build scalable web applications using React, Tailwind CSS (daisyUI, RHT), Node.js, Express.js, and databases like MongoDB and MySQL. My projects include user authentication with JWT, bcrypt, Nodemailer, and real-time features powered by Socket.io. Skilled in Java, JavaScript, C, C++, and Python, I’ve solved over 100+ LeetCode problems and developed hands-on testing experience using Jasmine for front-end and API validation. You can explore my complete codebase and projects on GitHub.</p>'
  }
  function HandleR() {
    const bio = document.getElementById('bio')
    bio.innerHTML = '<p className="animate-fadeIn">🤖 Robotics With a strong foundation in robotics and intelligent systems, I’ve worked extensively with ROS1 and ROS2, focusing on navigation, manipulation, and system modeling. My experience includes integrating sensors and actuators, developing basic robotic projects, and training in ROS fundamentals, from mapping and motion control to autonomous behavior simulation. I explore how AI and robotics intersect to create adaptive, real-world solutions for intelligent automation.</p>'
  }
  function HandleA3() {
    const bio = document.getElementById('bio')
    bio.innerHTML = '<p className="animate-fadeIn">🧠🎮 Artificial Intelligence & 3D Design My work in AI explores the intersection of intelligence and creativity — including an AI DeepFake Detection System built using the Xception CNN model from Hugging Face, implemented with a FastAPI backend for real-time inference and validation. This project deepened my understanding of deepfake detection pipelines and ethical AI development.On the creative side, I specialize in 3D modeling and game design, using Blender, Unity, and Maya to build interactive 3D games and environments. I’ve also explored 3D pipelines with Noesis and Ninja Ripper, combining design, logic, and AI integration to create immersive digital experiences.</p>'
  }
  function HandleResume() {
    const link = document.createElement("a");
    link.href = { resume };
    link.download = "SaiCharan_Resume.pdf";
    link.click();
  }

  return (<>
    <div className="w-full h-screen overflow-hidden">
      <Star />
      <div className="relative z-[1] grid grid-rows-[15%,85%] h-full w-full">
        <Nav />
        {width > 767 ?
          <div id="tablap" className="grid grid-cols-[40%,60%] text-white">
            <div className="flex flex-col justify-center gap-2 items-center mb-16">
              <img src={profile} className="w-[70%] max-w-[370px] rounded-full ring-primary shadow-xl" />
              <button onClick={() => HandleResume()} className="btn btn-active w-[40%] max-w-[150px]" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
                </svg>
                Resume
              </button>
            </div>
            <div className="grid grid-rows-[30%,70%] ">
              <div id="3 options" className="flex flex-row justify-between items-center mx-16 md:mx-8 pr-16">
                <button onClick={() => HandleSD()} className="btn btn-active rounded-xl hover:text-black">SoftwareDevelopment</button>
                <button onClick={() => HandleR()} className="btn btn-active rounded-xl hover:text-black">Robotics</button>
                <button onClick={() => HandleA3()} className="btn btn-active rounded-xl hover:text-black">AI & 3d</button>
              </div>
              <div id="matter" className="md:text-base lg:text-lg 2xl:text-2xl md:tracking-normal lg:tracking-widest">
                <div id="bio" >
                  <p className="animate-fadeIn">
                    💻 Software Development

                    I’m Sai Charan Kotari, a B.Tech CSE (AI & Robotics) student at VIT Chennai, passionate about full-stack software development. I build scalable web applications using React, Tailwind CSS (daisyUI, RHT), Node.js, Express.js, and databases like MongoDB and MySQL. My projects include user authentication with JWT, bcrypt, Nodemailer, and real-time features powered by Socket.io. Skilled in Java, JavaScript, C, C++, and Python, I’ve solved over 100+ LeetCode problems and developed hands-on testing experience using Jasmine for front-end and API validation. You can explore my complete codebase and projects on GitHub
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          :
          <div id="mobile">
            <div className="grid h-full w-full text-white">
              <div className="grid grid-rows-[20%,70%,10%] ">
                <div id="3 options" className="flex flex-row justify-between items-center  mx-8">
                  <button onClick={() => HandleSD()} className="btn btn-active rounded-xl px-2 text-xs hover:text-black">SoftwareDevelopment</button>
                  <button onClick={() => HandleR()} className="btn btn-active rounded-xl px-2 text-xs hover:text-black">Robotics</button>
                  <button onClick={() => HandleA3()} className="btn btn-active rounded-xl px-2 text-xs hover:text-black">AI & 3d</button>
                </div>
                <div id="matter" className="text-sm mx-8 md:text-base">
                  <div id="bio" >
                    <p className="animate-fadeIn">
                      💻 Software Development I’m Sai Charan Kotari, a B.Tech CSE (AI & Robotics) student at VIT Chennai, passionate about full-stack software development. I build scalable web applications using React, Tailwind CSS (daisyUI, RHT), Node.js, Express.js, and databases like MongoDB and MySQL. My projects include user authentication with JWT, bcrypt, Nodemailer, and real-time features powered by Socket.io. Skilled in Java, JavaScript, C, C++, and Python, I’ve solved over 100+ LeetCode problems and developed hands-on testing experience using Jasmine for front-end and API validation. You can explore my complete codebase and projects on GitHub.
                    </p>
                  </div>
                </div>
                <button onClick={() => HandleResume()} className="btn btn-active mx-auto w-[35%] max-w-[150px]" >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
                  </svg>
                  Resume
                </button>
              </div>
            </div>
          </div>
        }
      </div>

    </div>

  </>
  );
}

export default About;
