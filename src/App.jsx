import React, { useState } from 'react'
import logo from './assets/logo.png'
import droneImage from './assets/drone1.png'
import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaTimes, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import video from './assets/WhatsApp Video 2026-06-23 at 12.27.37 PM.mp4'
import { motion, AnimatePresence } from 'motion/react'

const App = () => {
  const [showContact, setShowContact] = useState(false)
  const [showLocation, setShowLocation] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className='relative min-h-dvh overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_38%,#fbc79a_78%,#f4954f_100%)] px-4 py-3 text-[#121358] sm:px-6 sm:py-4 md:h-dvh md:overflow-hidden md:px-8 md:py-3'>
      <div className='mx-auto flex min-h-dvh max-w-6xl flex-col md:h-full'>
        <div className='self-start'>
          <motion.img
            src={logo}
            alt='Safe Sky Nexus Logo'
            className='h-10 w-auto object-contain sm:h-12 md:h-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        </div>

        <motion.h1
          className='mt-2 text-center text-[1.75rem] font-extrabold leading-[0.9] tracking-tight sm:text-[2.2rem] md:mt-0 md:text-[3.5rem]'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <span className='block'>We Are</span>
          <span className='block md:inline'>Coming </span>
          <span className='block text-[#f97316] md:inline'>Soon</span>
        </motion.h1>

        <div className='grid flex-1 items-center gap-4 sm:gap-6 md:grid-cols-[1fr_1.1fr] md:gap-4'>
          <motion.div
            className='flex flex-col items-center gap-3 text-center sm:gap-4 md:items-start md:text-left'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
          >
            <p className='max-w-md text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6 md:text-base md:leading-6'>
              Redefining autonomous flight with{' '}
              <span className='font-semibold text-[#121358]'>GPS independent</span>{' '}
              drone technology. Our vision based drones navigate where conventional systems fail,
              providing secure, resilient, and intelligent solutions for modern defense and
              real-world challenges.
            </p>

            <div className='flex flex-col gap-2.5 sm:flex-row sm:gap-3'>
              <button
                type='button'
                onClick={() => setShowContact(true)}
                className='inline-flex items-center justify-center rounded-full bg-[#121358] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f1050] sm:px-7 sm:py-3 sm:text-base'
              >
                Contact Us
              </button>
              <button
                type='button'
                onClick={() => setShowVideo(true)}
                className='inline-flex items-center justify-center rounded-full bg-[#f97316] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] sm:px-7 sm:py-3 sm:text-base'
              >
                Watch Video
              </button>
            </div>

            <div className='flex items-center gap-4 text-[#121358]'>
              <button
                type='button'
                onClick={() => setShowLocation(true)}
                aria-label='Location'
                className='transition hover:-translate-y-0.5 hover:text-[#f97316]'
              >
                <FaMapMarkerAlt size={18} />
              </button>
              <a href='https://www.instagram.com/safeskynexus?igsh=ODEyY2hueHAyZHRp&utm_source=qr' aria-label='Instagram' className='transition hover:-translate-y-0.5 hover:text-[#f97316]'>
                <FaInstagram size={18} />
              </a>
              <a href='https://www.linkedin.com/company/safesky-nexus-private-limited/' aria-label='LinkedIn' className='transition hover:-translate-y-0.5 hover:text-[#f97316]'>
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className='flex justify-center pb-6 sm:pb-8 md:justify-end md:pb-0'
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.24 }}
          >
            <motion.img
              src={droneImage}
              alt='Drone'
              className='h-[30vh] w-auto object-contain drop-shadow-[0_18px_28px_rgba(18,19,88,0.12)] sm:h-[35vh] md:h-[72vh]'
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Contact Us Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContact(false)}
          >
            <motion.div
              className='relative w-full max-w-md rounded-2xl bg-[#121358] p-6 text-white shadow-2xl sm:rounded-3xl sm:p-8'
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type='button'
                onClick={() => setShowContact(false)}
                aria-label='Close'
                className='absolute right-6 top-6 text-white/80 transition hover:text-white'
              >
                <FaTimes size={20} />
              </button>

              <h2 className='text-2xl font-extrabold sm:text-3xl'>Contact us</h2>
              <p className='mt-2 text-sm text-gray-400 sm:text-base'>
                Choose one of the options below.
              </p>

              <div className='mt-6 flex flex-col gap-4'>
                <a
                  href='tel:+923342388218'
                  className='flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-[#121358] transition hover:bg-gray-100'
                >
                  <FaPhoneAlt size={16} />
                  Call +92 334 2388218
                </a>
                <a
                  href='mailto:info@safeskynexus.com'
                  className='flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-[#121358] transition hover:bg-gray-100'
                >
                  <FaEnvelope size={16} />
                  Email info@safeskynexus.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Location Modal */}
      <AnimatePresence>
        {showLocation && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLocation(false)}
          >
            <motion.div
              className='relative w-full max-w-md rounded-2xl bg-[#121358] p-6 text-white shadow-2xl sm:rounded-3xl sm:p-8'
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type='button'
                onClick={() => setShowLocation(false)}
                aria-label='Close'
                className='absolute right-6 top-6 text-white/80 transition hover:text-white'
              >
                <FaTimes size={20} />
              </button>

              <h2 className='text-2xl font-extrabold sm:text-3xl'>Our Location</h2>
              <p className='mt-2 text-sm text-gray-400 sm:text-base'>Visit us at:</p>

              <div className='mt-6'>
                
                <a  href='https://maps.google.com/?q=Alpha+Square,+NICAT,+NASTP,+Rawalpindi,+Pakistan'
                  target='_blank'
                  rel='noreferrer'
                  className='block rounded-full bg-white px-6 py-4 text-center font-semibold text-[#121358] transition hover:bg-gray-100'
                >
                  Alpha Square, NICAT, NASTP, Rawalpindi, Pakistan
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className='relative w-[90vw] max-w-3xl'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type='button'
                onClick={() => setShowVideo(false)}
                className='absolute -top-3 -right-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-[#121358] shadow-lg transition hover:bg-gray-100'
              >
                <FaTimes size={16} />
              </button>
              <video
                src={video}
                controls
                autoPlay
                className='w-full rounded-xl shadow-2xl'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App