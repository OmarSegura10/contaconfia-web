import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiPhone, HiMail, HiLocationMarker, HiChevronDown, HiTrendingUp } from 'react-icons/hi';
import { HiUsers, HiCalculator } from 'react-icons/hi2';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContaConfiaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState({ loading: false, message: '', type: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, message: '', type: '' });

    const SERVICE_ID = 'service_lm86fia';
    const TEMPLATE_ID = 'template_igp75yc';
    const PUBLIC_KEY = 'LkXloNmrBATjMmOBi';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: e.target.nombre.value,
          from_email: e.target.email.value,
          phone: e.target.telefono.value,
          message: e.target.mensaje.value
        },
        PUBLIC_KEY
      );

      setFormStatus({ 
        loading: false, 
        message: '¡Mensaje enviado con éxito! Te contactaremos pronto.', 
        type: 'success' 
      });
      e.target.reset();
      setTimeout(() => setFormStatus({ loading: false, message: '', type: '' }), 5000);

    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ 
        loading: false, 
        message: 'Error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.', 
        type: 'error' 
      });
      setTimeout(() => setFormStatus({ loading: false, message: '', type: '' }), 5000);
    }
  };

  const services = [
    { icon: <HiCalculator className="w-12 h-12" />, title: "Contabilidad General", description: "Registros contables y estados financieros precisos para tu empresa.", items: ["Registros contables", "Estados financieros", "Libros contables", "Conciliaciones bancarias"] },
    { icon: <FaFileAlt className="w-12 h-12" />, title: "Asesoría Tributaria", description: "Te ayudamos con el cumplimiento tributario y declaración de impuestos.", items: ["Declaración de impuestos", "Planeación tributaria", "Asesoría fiscal", "Representación ante DIAN"] },
    { icon: <HiUsers className="w-12 h-12" />, title: "Nómina y Seguridad Social", description: "Gestión completa de nómina y prestaciones sociales.", items: ["Liquidación de nómina", "Prestaciones sociales", "Contratos laborales", "Afiliaciones a seguridad social"] },
    { icon: <HiTrendingUp className="w-12 h-12" />, title: "Asesoría Financiera", description: "Análisis financiero y planeación estratégica para tu crecimiento.", items: ["Presupuestos", "Análisis financiero", "Flujo de caja", "Indicadores financieros"] }
  ];

  const values = [
    { title: "Confianza", description: "Compromiso y transparencia en cada servicio" },
    { title: "Profesionalismo", description: "Expertos capacitados a tu servicio" },
    { title: "Calidad", description: "Excelencia en cada proceso" },
    { title: "Innovación", description: "Soluciones modernas y eficientes" }
  ];

  const LogoSVG = () => (
    <svg viewBox="0 0 170 170" className="h-16 w-auto" xmlns="http://www.w3.org/2000/svg">
      <path d="M140 85C140 115 115 140 85 140C55 140 30 115 30 85C30 55 55 30 85 30C95 30 104 33 112 38L105 52C99 48 92 46 85 46C64 46 46 64 46 85C46 106 64 124 85 124C106 124 124 106 124 85C124 80 123 75 121 71L136 65C138.7 71.4 140 78 140 85Z" fill="url(#blueGradient)"/>
      <rect x="70" y="90" width="8" height="15" fill="#0EA5E9"/><rect x="82" y="80" width="8" height="25" fill="#0EA5E9"/><rect x="94" y="70" width="8" height="35" fill="#0EA5E9"/>
      <path d="M50 100 Q80 95 110 105 L108 115 Q80 107 52 110 Z" fill="url(#greenGradient)"/><path d="M110 105 Q120 110 125 120 L120 125 Q115 117 110 115 Z" fill="url(#greenGradient)"/>
      <text x="85" y="160" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle"><tspan fill="#1E40AF">CONTA</tspan><tspan fill="#10B981">CONFIA</tspan></text>
      <line x1="45" y1="165" x2="80" y2="165" stroke="#1E40AF" strokeWidth="2"/><line x1="90" y1="165" x2="125" y2="165" stroke="#10B981" strokeWidth="2"/>
      <text x="85" y="172" fontFamily="Arial, sans-serif" fontSize="8" fill="#6B7280" textAnchor="middle">S.A.S</text>
      <defs><linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#3B82F6"/><stop offset="100%" stopColor="#1E40AF"/></linearGradient><linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#10B981"/><stop offset="100%" stopColor="#84CC16"/></linearGradient></defs>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center"><LogoSVG /></div>
            <div className="hidden md:flex items-center space-x-8">
              {['inicio', 'nosotros', 'servicios', 'contacto'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`capitalize font-semibold transition-colors duration-200 ${activeSection === item ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>
                  {item === 'nosotros' ? 'Sobre Nosotros' : item}
                </button>
              ))}
              <a href="https://wa.me/573014538051?text=Hola%20ContaConfia,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios%20contables%20y%20financieros." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <FaWhatsapp className="w-4 h-4" /><span>WhatsApp</span>
              </a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                {['inicio', 'nosotros', 'servicios', 'contacto'].map((item) => (<button key={item} onClick={() => scrollToSection(item)} className="text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors capitalize font-semibold">{item === 'nosotros' ? 'Sobre Nosotros' : item}</button>))}
                <a href="https://wa.me/573014538051?text=Hola%20ContaConfia,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios%20contables%20y%20financieros." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2"><FaWhatsapp className="w-4 h-4" /><span>WhatsApp</span></a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-500 bg-clip-text text-transparent leading-tight">
                Confianza que impulsa tu crecimiento
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Servicios contables y financieros profesionales en Ocaña, Colombia. Con más de una década de experiencia en el sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contacto')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Solicitar Asesoría
                </button>
                <button onClick={() => scrollToSection('servicios')} className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  Ver Servicios
                </button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="/oficina.png" 
                alt="Oficina ContaConfia - Equipo profesional trabajando" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "✓ Atención Personalizada", desc: "Servicio adaptado a tu empresa" },
              { title: "✓ Precios Competitivos", desc: "Tarifas justas y accesibles" },
              { title: "✓ Respuesta Rápida", desc: "Atención cuando la necesitas" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{stat.title}</h3>
                <p className="text-gray-600 text-lg">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Sobre <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Nosotros</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-3xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center"><FaCheckCircle className="w-6 h-6 mr-3 text-emerald-500" />Misión</h3>
              <p className="text-gray-700 leading-relaxed text-lg">Proporcionar servicios contables y financieros de alta calidad, brindando soluciones personalizadas que impulsen el crecimiento sostenible de nuestros clientes con transparencia y profesionalismo.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center"><FaCheckCircle className="w-6 h-6 mr-3 text-blue-600" />Visión</h3>
              <p className="text-gray-700 leading-relaxed text-lg">Ser la firma contable líder en Ocaña y región, reconocida por nuestra excelencia, innovación constante y compromiso inquebrantable con el éxito financiero de nuestros clientes.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 hover:border-blue-200">
                <FaCheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nuestros <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Servicios</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Soluciones contables y financieras completas adaptadas a las necesidades específicas de tu empresa</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 hover:border-blue-200">
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start"><HiChevronDown className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0 transform -rotate-90" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">¿Listo para <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Comenzar?</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus metas financieras</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl"><HiPhone className="w-8 h-8 text-blue-600" /></div>
                <div><h4 className="font-bold text-lg text-gray-900">Teléfono</h4><p className="text-gray-600">+57 (301) 453-8051</p></div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center space-x-4">
                <div className="bg-emerald-100 p-4 rounded-xl"><HiMail className="w-8 h-8 text-emerald-600" /></div>
                <div><h4 className="font-bold text-lg text-gray-900">Email</h4><p className="text-gray-600">Contaconfiasas@gmail.com</p></div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl"><HiLocationMarker className="w-8 h-8 text-blue-600" /></div>
                <div><h4 className="font-bold text-lg text-gray-900">Ubicación</h4><p className="text-gray-600">Ocaña, Departamento del Norte de Santander, Colombia</p></div>
              </div>
              <a href="https://wa.me/573014538051?text=Hola%20ContaConfia,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios%20contables%20y%20financieros." target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center space-x-3"><FaWhatsapp className="w-8 h-8" /><div className="text-left"><h4 className="font-bold text-lg">WhatsApp</h4><p className="text-emerald-100">Chatea con nosotros ahora</p></div></div>
              </a>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label><input type="text" name="nombre" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Tu nombre" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email</label><input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="tu@email.com" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label><input type="tel" name="telefono" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="+57 301 453 8051" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label><textarea name="mensaje" required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="¿En qué podemos ayudarte?"></textarea></div>
                {formStatus.message && (<div className={`p-4 rounded-xl ${formStatus.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>{formStatus.message}</div>)}
                <button type="submit" disabled={formStatus.loading} className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ${formStatus.loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {formStatus.loading ? (<><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span>Enviando...</span></>) : (<span>Enviar mensaje</span>)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><div className="mb-4"><LogoSVG /></div><p className="text-gray-400 leading-relaxed">Confianza que impulsa tu crecimiento. Servicios contables profesionales en Ocaña, Colombia.</p></div>
            <div><h4 className="font-bold mb-4 text-lg">Enlaces Rápidos</h4><ul className="space-y-2"><li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Inicio</button></li><li><button onClick={() => scrollToSection('nosotros')} className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</button></li><li><button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">Servicios</button></li><li><button onClick={() => scrollToSection('contacto')} className="text-gray-400 hover:text-white transition-colors">Contacto</button></li></ul></div>
            <div><h4 className="font-bold mb-4 text-lg">Síguenos</h4><div className="flex space-x-4"><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-blue-600 transition-colors duration-300" aria-label="Facebook"><FaFacebook className="w-6 h-6" /></a><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-pink-600 transition-colors duration-300" aria-label="Instagram"><FaInstagram className="w-6 h-6" /></a><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-blue-700 transition-colors duration-300" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6" /></a></div></div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400"><p>© 2024 ContaConfia S.A.S. Todos los derechos reservados. Ocaña, Colombia.</p></div>
        </div>
      </footer>

      <style>{`@keyframes fade-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in{animation:fade-in 0.8s ease-out}*{scroll-behavior:smooth}`}</style>
    </div>
  );
}