import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import AnimatedBackground from '../common/AnimatedBackground';

const Contact = () => {
  const contactEmail = 'qasim.nouman850@gmail.com';
  const formspreeEndpoint = 'https://formspree.io/f/maqzeyey';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const sectionRef = useScrollAnimation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Project inquiry from ${formData.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus({
        type: 'success',
        message: 'Thanks. Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Message could not be sent. Please email me directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedBackground>
      <section name="contact" className="flex w-full items-center bg-transparent py-16 sm:py-20">
        <div 
          ref={sectionRef}
          className="section-animate mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-8"
          >
            <h2 className="inline border-b-4 border-secondary text-3xl font-bold text-text-primary sm:text-4xl">
              Let&apos;s Build
            </h2>
            <p className="max-w-2xl py-6 text-text-secondary">
              Need a frontend specialist, full-stack engineer, AI application developer, or reliable product partner? Share what you are building and I will help turn it into a clear delivery plan.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass min-w-0 flex-1 space-y-6 rounded-lg p-5 sm:p-6"
            >
              <h3 className="text-2xl font-bold text-text-primary">Available for client work</h3>
              <p className="leading-7 text-text-secondary">
                I work with founders, agencies, and product teams on React, Next.js, TypeScript, AI-based applications, MERN, Spring Boot, dashboards, portals, and frontend modernization.
              </p>
              <div className="flex min-w-0 items-center space-x-4 text-text-secondary">
                <FaEnvelope className="text-secondary text-2xl" />
                <span className="min-w-0 break-words">{contactEmail}</span>
              </div>
              <div className="flex min-w-0 items-center space-x-4 text-text-secondary">
                <FaPhone className="text-secondary text-2xl" />
                <span className="min-w-0 break-words">Remote and contract projects</span>
              </div>
              <div className="flex min-w-0 items-center space-x-4 text-text-secondary">
                <FaMapMarkerAlt className="text-secondary text-2xl" />
                <span className="min-w-0 break-words">Pakistan, serving global clients</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="glass flex min-w-0 flex-1 flex-col space-y-4 rounded-lg p-5 sm:p-6"
            >
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  {status.message}
                </div>
              )}

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-primary-dark/60 p-3 text-text-primary transition-colors duration-300 placeholder:text-text-muted focus:border-secondary focus:outline-none"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full rounded-lg border border-white/10 bg-primary-dark/60 p-3 text-text-primary transition-colors duration-300 placeholder:text-text-muted focus:border-secondary focus:outline-none"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your project, timeline, and budget range"
                  rows="5"
                  className="w-full resize-none rounded-lg border border-white/10 bg-primary-dark/60 p-3 text-text-primary transition-colors duration-300 placeholder:text-text-muted focus:border-secondary focus:outline-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-lg bg-gradient-to-r from-secondary via-accent-cyan to-accent-blue px-5 py-3 font-semibold text-primary-dark shadow-lg shadow-secondary/10 transition-all duration-300 hover:shadow-secondary/25 disabled:cursor-not-allowed disabled:opacity-50 sm:px-6`}
              >
                {loading ? 'Sending...' : 'Start Project Discussion'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Contact; 
