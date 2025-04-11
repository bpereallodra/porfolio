'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail,  } from 'lucide-react'



export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const tableauContainer = useRef(null)

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

   {/* Insertando el gráfico de Tableau*/}
  useEffect(() => {
    if (tableauContainer.current) {
      tableauContainer.current.innerHTML = `
        <div class='tableauPlaceholder' id='viz1744321844619' style='position: relative'>
          <noscript>
            <a href='#'>
              <img alt='Dashboard 1' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ca&#47;Caso_Hoteles_17211267806660&#47;Dashboard1&#47;1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='ejercicios_dashboards_17209755219650/Dashboard1' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='language' value='es-ES' />
          </object>
        </div>
      `

      const divElement = document.getElementById('viz1744321844619')
      const vizElement = divElement.getElementsByTagName('object')[0]

      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '1366px'
        vizElement.style.height = '795px'
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '1366px'
        vizElement.style.height = '795px'
      } else {
        vizElement.style.width = '100%'
        vizElement.style.height = '1577px'
      }

      const scriptElement = document.createElement('script')
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'
      vizElement.parentNode.insertBefore(scriptElement, vizElement)
    }
  }, [])

  // Simulando el div de proyectos
  const projects = [
     { title: 'Airbnb Property Profitability Analysis',
      image: './airbnb.jpg', 
      description: 'Tourism rental market analysis in Valencia aimed at identifying high-yield areas and ideal property characteristics. Data was cleaned and structured to be cross-referenced with price per square meter from Idealista, generating insights on the most profitable neighborhoods and property types to maximize return per stay.' },
     { title: 'Solar Plant Efficiency Loss Diagnosis', 
      image: './solar.jpg',
      description: 'Performance analysis of two solar power plants located in the Valencian Community to identify operational inefficiencies. Based on system behavior and energy output, potential malfunctions and performance drops were detected, enabling actionable improvements to minimize economic losses.' },
     { title: 'E-commerce Conversion Optimization', 
      image: './ecommerce1.jpg',
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
            src="./foto.jpg"
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
            Borja A. Perea Llodrà
          </motion.a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['About me', 'Projects', 'Contact'].map((item) => (
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
            Data scientist who <span className='text-cyan-400 font-bold'>enjoys</span> unlocking the power of  <span className='text-cyan-400 font-bold'>data</span><br className="hidden md:block" /> to drive <span className='font-bold text-cyan-400'>intelligent</span> decisions and innovation.
          </motion.p>
        </section>


      
        <section id="about" className="container mx-auto px-4 py-40 bg-[var(--dark)]">
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
              <p className="text-white">I’m a data scientist who enjoys digging into data and building models that tell a story. I work mostly with Python and love exploring machine learning, analytics, and data visualization.</p>
              <p className="text-white mt-4"> Currently, I teach computer science in vocational training programs, where I help students build strong foundations in programming, data, and software development.</p>
              <p className="text-white mt-4">In my free time, I build personal projects and dive into new tools and techniques. I’m always curious, always learning—and open to new opportunities where I can grow and make an impact through data.</p>
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
       <div className="bg-gray-900 rounded-lg overflow-hidden relative group">
  {/* Título siempre visible */}
  <h3 className="text-xl font-semibold p-4 text-center">{project.title}</h3>
  
  {/* Contenedor de la imagen */}
  <div className="relative">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-68 object-cover rounded"
    />
    {/* Overlay para pantallas md y mayores */}
    <div className="
      absolute inset-0 
      bg-black bg-opacity-75 
      flex flex-col items-center justify-center gap-2
      opacity-0 
      transition-opacity duration-300 
      group-hover:opacity-100
      hidden lg:flex
    ">
      <h2 className="text-xl font-semibold text-white">
        Description &amp; Goals
      </h2>
      <p className="text-white p-4 text-left">
        {project.description}
      </p>
    </div>
  </div>
            {/* Bloque fijo debajo de la imagen para móviles */}
<div className="block lg:hidden bg-black bg-opacity-75 p-4">
    <h2 className="text-xl font-semibold text-white">
      Description &amp; Goals
    </h2>
    <p className="text-white text-left mt-4">
      {project.description}
    </p>
  </div>
</div>
      </motion.div>
    ))}
  </div>
</section>

{ /* Tableau Dashboard 
<section className="container mx-auto px-4 py-20">
  <h2 className="text-5xl text-center font-semibold font-sans mb-8">Tableau Dashboard</h2>
  <div className="mx-auto w-16 h-2 bg-cyan-400 mb-8 rounded-md"></div>
  <div 
  ref={tableauContainer} 
  className="w-full max-w-[1400px] mx-auto flex justify-center"
></div>
</section>
*/}

        <footer className="container mx-auto px-4 py-8 flex justify-center space-x-6">
          <motion.a
            href="https://github.com/bpereallodra"
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