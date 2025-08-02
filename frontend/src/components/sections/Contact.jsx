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
      <section name="contact" className="min-h-screen w-full bg-primary py-20 flex items-center">
        <div 
          ref={sectionRef}
          className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full section-animate"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-8"
          >
            <h2 className="text-4xl font-bold inline border-b-4 border-secondary text-textPrimary">
              Contact
            </h2>
            <p className="py-6 text-textSecondary">Get in touch with me</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <div className="flex items-center space-x-4 text-textSecondary">
                <FaEnvelope className="text-secondary text-2xl" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-4 text-textSecondary">
                <FaPhone className="text-secondary text-2xl" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4 text-textSecondary">
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
              className="flex-1 flex flex-col space-y-4"
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
                  className="w-full p-2 bg-transparent border-2 border-text-secondary rounded-lg text-text-primary focus:outline-none focus:border-secondary-DEFAULT transition-colors duration-300"
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
                  className="w-full p-2 bg-transparent border-2 border-text-secondary rounded-lg text-text-primary focus:outline-none focus:border-secondary-DEFAULT transition-colors duration-300"
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
                  className="w-full p-2 bg-transparent border-2 border-text-secondary rounded-lg text-text-primary focus:outline-none focus:border-secondary-DEFAULT resize-none transition-colors duration-300"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink px-6 py-3 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent-purple/25 disabled:opacity-50 disabled:cursor-not-allowed`}
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