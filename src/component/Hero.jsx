import github from "../assets/github.svg"
import Linked from "../assets/Linked.svg"
import gmail from "../assets/gmail.svg"
import CV from "../assets/Resume..pdf"
import Pic1 from "../assets/Hero.png"


function Hero({darkmode }) {
    const socialIcons = [
        {icon: github ,alt:'github',link: 'https://github.com/Rohitchouhan23'},
        {icon: Linked ,alt:'linked',link: 'https://www.linkedin.com/in/rohit-chouhan-rc18/'},
        {icon: gmail ,alt:'gmail',link: 'https://mail.google.com/mail/?view=cm&fs=1&to=rohitchouhan.1811@gmail.com'},
    ];

    const darkTheme ={
        textPrimary:'text-white',
        textSecondary:'text-gray-300',
        buttonSecondary:`text-white border-2 border-orange-500 hover:bg-orange-600`,
        decorativeCircle:'bg-orange-500 opacity-10'
    };

    const lightThem={
        textPrimary:'text-gray-900',
        textSecondary:'text-gray-700',
        buttonSecondary:`text-gray-800 border-2 border-orange-500 hover:bg-orange-600 hover:text-white`,
        decorativeCircle:'bg-orange-400 opacity-20',
    };
    const theme= darkmode ? darkTheme : lightThem; 
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
        <section
        id="home"
        data-aos='fade-up'
        data-aos-delay='250'
        className="body-font z-10"
        >
            <div className="container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14
            ">
                <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12">
                    <div className="flex justify-center  lg:justify-start lg:pl-32 gap-4 sm:gap-8 mb-6 sm:mb-7 w-full">
                        {socialIcons.map((social,index)=>(
                            <a
                            key={index}
                            href={social.link}
                            rel="noopener noreferrer"
                            target="_blank"
                            data-aos-delay={`${400 + index * 100}`}
                            className="transform hover:scale-110 transition-transform duration-300">
                                <img
                                src={social.icon}
                                alt={social.alt}
                                className={`w-8 h-8 sm:w-10 sm:h-10
                                    object-contain ${darkmode 
                                        ?""
                                        :'filter brightness-75'
                                    }`}/>

                            </a>
                        ))}
                    </div>
                    <h1 className={`title-font text-3xl sm:text-4xl lg:pl-28 lg:mt-4
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}
                        `}data-aos='fade-up'
                        data-aos-delay='500'
                        >
                        Hi, I'm Rohit Chouhan
                    </h1>
                    <p className={`mb-6 sm:mb-8 leading-relaxed lg:ml-28 font-semibold max-w-md sm:max-w-lg ${theme.textSecondary}`}
                    data-aos='fade-up'
                    data-aos-delay='600'
                    >
                        I am a motivated Full Stack Developer with a strong focus on frontend development.
                        I have hands-on experience with React and Tailwind CSS for building responsive and modern user interfaces.
                        On the backend, I work with Node.js and MongoDB to develop scalable and efficient web applications.
                    </p>
                    {/* Button */}
                    <div className="w-full pt-4 sm:pt-6">
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start lg:pl-28 gap-3 sm:gap-4"
                        data-aos='fade-up'
                        data-aos-delay='700'
                        >
                            <a href={CV} download className="w-full sm:w-auto ">
                                <button className="w-full sm:w-auto inline-flex items-center justify-center text-white
                                bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform
                                ">
                                    Download CV
                                </button>
                            </a>
                            <a href="#contact" className="w-full sm:w-auto ">
                                <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center
                                 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform
                                `}>
                                    Contact Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 
                lg:mt-0 flex justify-center"
                data-aos="fade-left"
                data-aos-delay='400'
                >
                    <div className="relative w-4/5 sm:w-3/4 lg:w-full ">
                        <div className="relative overflow-hidden">
                        <img src={Pic1} alt="Hero image"
                        className="w-full h-auto object-cover transform 
                        hover:scale-105 transition-transform duration-500"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero