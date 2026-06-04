import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import AnimatedBackground from '../common/AnimatedBackground';

const Contact = () => {
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
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Error sending message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedBackground>
      <section name="contact" className="flex min-h-screen w-full items-center bg-transparent py-20">
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
            <h2 className="inline border-b-4 border-secondary text-4xl font-bold text-text-primary">
              Contact
            </h2>
            <p className="py-6 text-text-secondary">Start a conversation about your next software project.</p>
          </motion.div>

          <div className="flex flex-col gap-8 md:flex-row">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass flex-1 space-y-6 rounded-lg p-6"
            >
              <div className="flex items-center space-x-4 text-text-secondary">
                <FaEnvelope className="text-secondary text-2xl" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-4 text-text-secondary">
                <FaPhone className="text-secondary text-2xl" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4 text-text-secondary">
                <FaMapMarkerAlt className="text-secondary text-2xl" />
                <span>Your Location</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="glass flex flex-1 flex-col space-y-4 rounded-lg p-6"
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
                  placeholder="Your Name"
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
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-white/10 bg-primary-dark/60 p-3 text-text-primary transition-colors duration-300 placeholder:text-text-muted focus:border-secondary focus:outline-none"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
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
                className={`rounded-lg bg-gradient-to-r from-secondary via-accent-cyan to-accent-blue px-6 py-3 font-semibold text-primary-dark shadow-lg shadow-secondary/10 transition-all duration-300 hover:shadow-secondary/25 disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Contact; 
