'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail,  } from 'lucide-react'



export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Simulando el div de proyectos
  const projects = [
     { title: 'Airbnb Property Profitability Analysis',
      image: '/airbnb.jpg', 
      description: 'Tourism rental market analysis in Valencia aimed at identifying high-yield areas and ideal property characteristics. Data was cleaned and structured to be cross-referenced with price per square meter from Idealista, generating insights on the most profitable neighborhoods and property types to maximize return per stay.' },
     { title: 'Solar Plant Efficiency Loss Diagnosis', 
      image: '/solar.jpg',
      description: 'Performance analysis of two solar power plants located in the Valencian Community to identify operational inefficiencies. Based on system behavior and energy output, potential malfunctions and performance drops were detected, enabling actionable improvements to minimize economic losses.' },
     { title: 'E-commerce Conversion Optimization Strategy', 
      image: '/ecommerce.jpg',
      description: 'Data-driven audit of an e-commerce platform facing stagnant performance. By analyzing user behavior, conversion funnels, and RFM segmentation, tailored CRO actions were proposed to increase qualified traffic, improve conversion rates, and raise average order value—ultimately maximizing revenue.'
 },
     //{ title: 'Project 4', description: 'Description for Project 4' },
  ]

  // const technologies = [
  //   { name: 'Frontend', icon: Code, skills: ['React', 'Vue', 'Angular'] },
  //   { name: 'Backend', icon: Database, skills: ['Node.js', 'Python', 'Ruby'] },
  //   { name: 'Web', icon: Globe, skills: ['HTML', 'CSS', 'JavaScript'] },
  //   { name: 'Design', icon: Palette, skills: ['Figma', 'Sketch', 'Adobe XD'] },
  // ]

  const technologies1 = ["Python", "SQL","Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "PostgreSQL", "SQlite", 
     "Docker","FastAPI", "MLflow","Git", "Optuna", "Jupyter NB", "Spark", "PyTorch", "Scikit-learn"]
  
  return (
    <div className="bg-[var(--darkBlue)] text-white min-h-screen">
      {isHeaderVisible && (
        <header className="fixed w-full top-0 z-50 bg-[var(--headerBg)] backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/foto.jpg"
            alt="Perfil"
            className="w-10 h-10 rounded-full ring-2 ring-white-500 ring-offset-2 ring-offset-[var(--darkBlue)]"
    />
          
          
          
          
          <motion.a
            href="#"
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Borja A. Perea Llodrá
          </motion.a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      )}

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col space-y-8 text-2xl">
            {['About', 'Projects','Technologies', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}

      <main className="pt-20">
        <section id="hero" className="container mx-auto px-4 py-40 text-center">
          <motion.h1
            className="text-5xl font-sans md:text-7xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hey, I'm Borja!
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Data scientist who <span className='text-cyan-400 font-bold'>enjoys</span> unlocking the power of  <span className='text-cyan-400 font-bold'>data</span><br></br> to drive <span className='font-bold text-cyan-400'>intelligent</span> decisions and innovation.
          </motion.p>
        </section>


      <div className='hidden md:flex md:flex-col bg-[var(--dark)]'>
        <section id="about" className="container mx-auto px-4 py-40">
          <h2 className="text-5xl text-center font-semibold font-sans mb-8">About me</h2>
          {/* Barra cian */}
          <div className="mx-auto w-16 h-2 bg-cyan-400 mb-8 rounded-md"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className=" p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold font-sans mb-6">Get to know me!</h3>
              <p className="text-white">I'm a software developer proficient in JavaScript and the web. I'm passionate about web performance, accessibility, mentoring, user & developer experience.</p>
              <p className="text-white mt-4"> Beyond university, I've pursued self-learning, hackathons, and courses, sharpening my proficiency in JavaScript and web technologies.</p>
              <p className="text-white mt-4">In my free time, I build side projects and explore new tech. Open to opportunities where I can learn, grow, and contribute.</p>
              {/* <ul className="list-disc ml-4 mt-4 list-none list-inside text-gray-400">
                <li className=" ">
                  <span className="mr-2 font-semibold">2021 - Present</span> 
                  Politechnic University of Valencia</li>
                <li className="mt-2">
                <span className="mr-2  font-semibold">2023 - 2024</span> 
                 University of La Laguna</li>
              </ul> */}
            </motion.div>
            <motion.div
              className="p-6 rounded-lg mg-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold font-sans mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies1.map((tech, index) => (
                  <span
                  className="bg-[var(--darkLighter)] inline-block p-3 px-4 font-mono font-bold rounded text-black"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        </div>
        {/*Simulando el div de proyectos */}
        
        
        <section id="projects" className="container mx-auto px-12 py-20">
  <h2 className="text-5xl text-center font-semibold font-sans mb-8">Projects</h2>
  {/* Barra cian */}
  <div className="mx-auto w-16 h-2 bg-cyan-400 mb-8 rounded-md"></div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="bg-gray-900 rounded-lg overflow-hidden relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Título arriba, siempre visible */}
        <h3 className="text-xl font-semibold p-4 text-center">{project.title}</h3>
        
        {/* Contenedor de la imagen + overlay */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-68 object-cover rounded"
          />
         {/* Overlay que aparece al hacer hover */}
         <div className="
            absolute inset-0 
            bg-black bg-opacity-75 
            flex flex-col items-center justify-center gap-2
            opacity-0 
            transition-opacity duration-300 
            group-hover:opacity-100
          ">
            {/* Título arriba */}
            <h2 className="text-xl font-semibold p-4 text-white">
              Description &amp; Goals
            </h2>
            {/* Descripción abajo */}
            <p className="text-white p-4 text-center">
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

        <footer className="container mx-auto px-4 py-8 flex justify-center space-x-6">
          <motion.a
            href="https://github.com/J0anM4rc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/borjaperea/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:bpereallodra@gmail.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </footer>
      </main>
    </div>
  )
}