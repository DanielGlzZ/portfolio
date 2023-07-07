import '../styles/styles.scss';
import Menu from '../components/Menu'
export default function Home(){
    return (
        <div className="flex">
            <header
                className="w-1/6"
            >
                <Menu className=""/>
            </header>
            <main
                className="w-5/6"
            >
                <section
                    id="section1"
                >
                    <Profile />
                </section>
                <section
                    id="section2"
                >
                    <AboutMe />
                </section>
                <section>
                    <Links />
                </section>
            </main>
        </div>
    )
}

function Profile() {
    return (
        <>
            <div
                className="m-20 rounded-xl bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed"
            >
                <h1 className="pb-10">
                    <span
                        className="text-8xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
                    >
                         Luis Daniel
                    </span>
                    <span
                        className="text-7xl block box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
                    >
                        González Zamudio
                    </span>
                </h1>
                <h3
                    className=""
                >Graduated from Computer Systems Engineering with experience in web development
                </h3>
            </div>
        </>
    )
}

function AboutMe() {
    return (
        <>
            <div
                className="m-20 rounded-xl bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed"
            >
                <h1
                    className="text-6xl pb-10"
                >
                    <span
                        className="text-8xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
                    >
                        About
                    </span>
                    <span
                        className="text-7xl block box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
                    >
                        Me
                    </span>
                </h1>
                <p>
                    I am passionate about web development and have experience building web applications,
                    I have a strong understanding of programming languages like HTML, CSS, and JavaScript,
                    as well as experience using popular frameworks like Vue.js.

                    I have teamwork skills, which allow me to collaborate effectively with designers,
                    developers, and other professionals to achieve project goals.

                    I am looking for a web development position where I can apply my knowledge,
                    skills and passion for technology to contribute to the development of scalable,
                    innovative and successful web systems.
                </p>
            </div>
        </>
    )
}

function Links() {
    return(
        <>
            <div className="m-20 rounded-xl p-6">
                <h1
                    className="text-6xl pb-10"
                >
                    Links
                </h1>
                <div
                    className="flex"
                >
                    <a
                        className="mx-10" href="https://www.linkedin.com/in/luis-daniel-gonzalez-zamudio/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="w-8 h-8 img" src="assets/icons/linkedin.png" alt=""/>
                    </a>
                    <a
                        href="https://github.com/DanielGlzZ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="w-8 h-8 img" src="assets/icons/github.png" alt=""/>
                    </a>
                </div>
            </div>
        </>
    )
}