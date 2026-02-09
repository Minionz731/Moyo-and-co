import React, { useState, useEffect } from 'react';
import { Wine, Users, Phone, Mail, MapPin, CheckCircle, Star, MessageCircle, Coffee } from 'lucide-react';

export default function MoyoEventsWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '+27670095574';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Moyo%20%26%20CO%20Events!%20I'd%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C5F5D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/assets/Moyo.png" alt="Moyo & CO Events Logo" className="w-16 h-16 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-teal-800">MOYO</h1>
                <p className="text-xs text-amber-700">& CO. EVENTS</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-teal-800 hover:text-amber-700 transition font-medium">Home</a>
              <a href="#about" className="text-teal-800 hover:text-amber-700 transition font-medium">About</a>
              <a href="#services" className="text-teal-800 hover:text-amber-700 transition font-medium">Services</a>
              <a href="#contact" className="text-teal-800 hover:text-amber-700 transition font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-amber-50">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(44, 95, 93, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(184, 149, 106, 0.05) 0%, transparent 50%)"
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-white flex items-center justify-center shadow-2xl transform hover:scale-105 transition duration-300 p-4">
              <img src="/assets/Moyo.png" alt="Moyo & CO Events" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
            Exceptional Events
          </h2>
          <p className="text-xl md:text-2xl text-teal-700 mb-4 font-light">
            Creating Memorable Experiences
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional waitering, bartending, and barista services for private and corporate events
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-700 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <MessageCircle className="mr-2" size={20} />
              Get a Quote
            </a>
            <a 
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-800 border-2 border-teal-700 rounded-full font-semibold hover:bg-teal-50 transform hover:scale-105 transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-40 left-10 text-6xl opacity-20 animate-bounce">🥂</div>
        <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🍾</div>
        <div className="absolute top-1/2 right-20 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>☕</div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">About Moyo & CO</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Moyo & CO Events, we believe every event deserves exceptional service. With years of experience in the hospitality industry, we specialize in providing top-tier waitering, bartending, and barista services that elevate your events from ordinary to extraordinary.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're hosting an intimate private gathering or a large-scale corporate function, our professional team ensures your guests receive impeccable service with a warm, friendly touch. From elegant table service to expertly crafted cocktails and specialty coffee, we've got you covered.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                  <div className="text-4xl font-bold text-teal-700 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Events Served</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
                  <div className="text-4xl font-bold text-amber-700 mb-2">5★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-teal-100 to-amber-100 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-30">
                  🎉
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-full flex items-center justify-center text-white text-5xl shadow-xl">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-teal-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional hospitality services tailored to make your event unforgettable
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {/* Waitering Service */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center relative overflow-hidden p-8">
                  <div 
                    className="absolute inset-0 opacity-10" 
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")"
                    }}
                  ></div>
                  <img src="/assets/waitering.png" alt="Waitering Services" className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition duration-300" />
                </div>
                <div className="md:w-3/5 p-8">
                  <h4 className="text-3xl font-bold text-teal-800 mb-4">Waitering Services</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our experienced waiters provide seamless, professional service for your events. From elegant table service to efficient buffet management, we ensure your guests are well taken care of.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Professional table service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Buffet & cocktail service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Event setup & breakdown</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Attentive guest service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bartending Service */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="md:flex md:flex-row-reverse">
                <div className="md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center relative overflow-hidden p-8">
                  <div 
                    className="absolute inset-0 opacity-10" 
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")"
                    }}
                  ></div>
                  <img src="/assets/Bartending.png" alt="Bartending Services" className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition duration-300" />
                </div>
                <div className="md:w-3/5 p-8">
                  <h4 className="text-3xl font-bold text-teal-800 mb-4">Bartending Services</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Expert bartenders who craft exceptional drinks and create a lively atmosphere. Whether it's classic cocktails or custom creations, we bring the bar experience to your event.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-teal-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Professional mixologists</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-teal-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Custom cocktail menus</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-teal-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Mobile bar setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-teal-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Responsible service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Barista Service */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-amber-700 to-amber-600 flex items-center justify-center relative overflow-hidden p-8">
                  <div 
                    className="absolute inset-0 opacity-10" 
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")"
                    }}
                  ></div>
                  <img src="/assets/barista.png" alt="Barista Services" className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition duration-300" />
                </div>
                <div className="md:w-3/5 p-8">
                  <h4 className="text-3xl font-bold text-teal-800 mb-4">Barista Services</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Specialty coffee services that bring café-quality beverages to your event. Our skilled baristas create perfect espresso-based drinks and specialty coffees that impress your guests.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-700 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Expert coffee preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-700 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Specialty drink menu</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-700 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Mobile coffee bar setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-700 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Premium coffee experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h4 className="text-3xl font-bold text-teal-800 mb-8 text-center">Perfect For Every Occasion</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🎊', text: 'Private Parties' },
                { icon: '💼', text: 'Corporate Events' },
                { icon: '💒', text: 'Weddings' },
                { icon: '🎂', text: 'Celebrations' },
                { icon: '🏢', text: 'Conferences' },
                { icon: '🎭', text: 'Galas' },
                { icon: '☕', text: 'Morning Events' },
                { icon: '✨', text: 'Special Events' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-sm font-semibold text-gray-700">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">What Our Clients Say</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                event: "Corporate Gala",
                text: "The team was absolutely professional and went above and beyond. Our guests were impressed with the level of service!"
              },
              {
                name: "John D.",
                event: "Wedding Reception",
                text: "Made our special day even more memorable. The bartenders were fantastic and kept everyone happy!"
              },
              {
                name: "Lisa K.",
                event: "Private Party",
                text: "Exceptional service from start to finish. They made hosting so stress-free. Highly recommend!"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-teal-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Get In Touch</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to make your event exceptional? Contact us for a personalized quote!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-teal-700 to-teal-600 p-12 text-white">
                  <h4 className="text-3xl font-bold mb-8">Let's Create Something Amazing</h4>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MessageCircle className="mr-4 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold mb-1">WhatsApp</p>
                        <a href={whatsappLink} className="hover:text-amber-300 transition">
                          {whatsappNumber}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-4 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p>info@moyoevents.co.za</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="mr-4 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold mb-1">Location</p>
                        <p>Johannesburg, South Africa</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-teal-500">
                    <p className="text-sm opacity-90">
                      Get a personalized quote today! Contact us via WhatsApp and we'll respond with pricing tailored to your event needs.
                    </p>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <h5 className="text-2xl font-bold text-teal-800 mb-6">Why Choose Moyo & CO?</h5>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Experienced & professional staff</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Competitive pricing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Flexible packages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Attention to detail</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">100% client satisfaction</span>
                    </li>
                  </ul>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-700 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition duration-300"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-900 to-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
                <img src="/assets/Moyo.png" alt="Moyo & CO Events" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">MOYO</h1>
                <p className="text-xs text-amber-400">& CO. EVENTS</p>
              </div>
            </div>
            <p className="text-teal-200 mb-6">Creating Memorable Experiences</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#home" className="hover:text-amber-400 transition">Home</a>
              <a href="#about" className="hover:text-amber-400 transition">About</a>
              <a href="#services" className="hover:text-amber-400 transition">Services</a>
              <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
            </div>
            <div className="border-t border-teal-700 pt-6">
              <p className="text-sm text-teal-300">
                © 2026 Moyo & CO Events. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 group-hover:animate-pulse" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
          !
        </span>
      </a>
    </div>
  );
}
