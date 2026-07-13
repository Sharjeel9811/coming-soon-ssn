import React from 'react'
import logo from './assets/logo.png'
import droneImage from './assets/drone1.png'
import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'motion/react'

const App = () => {
  return (
    <div className='relative h-dvh overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_38%,#fbc79a_78%,#f4954f_100%)] px-4 py-1.5 text-[#121358] sm:px-6 sm:py-2 md:px-8 md:py-3'>
      <div className='mx-auto flex h-full max-w-6xl flex-col'>
        <div className='self-start'>
          <motion.img
            src={logo}
            alt='Safe Sky Nexus Logo'
            className='h-12 w-auto object-contain sm:h-14 md:h-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        </div>

        <motion.h1
          className='text-center text-[2rem] font-extrabold leading-[0.9] tracking-tight sm:text-[2.8rem] md:text-[3.5rem]'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <span className='block'>We Are</span>
          <span className='block md:inline'>Coming </span>
          <span className='block text-[#f97316] md:inline'>Soon</span>
        </motion.h1>

        <div className='grid flex-1 items-center gap-1 md:grid-cols-[1fr_1.1fr] md:gap-4'>
          <motion.div
            className='flex flex-col items-center gap-1.5 text-center md:items-start md:text-left'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
          >
            <p className='max-w-md text-sm leading-5 text-gray-600 sm:text-[15px] sm:leading-6 md:text-base md:leading-6'>
              Redefining autonomous flight with{' '}
              <span className='font-semibold text-[#121358]'>GPS independent</span>{' '}
              drone technology. Our vision based drones navigate where conventional systems fail,
              providing secure, resilient, and intelligent solutions for modern defense and
              real-world challenges.
            </p>

            <div className='flex gap-2'>
              <a
                href='https://www.linkedin.com/company/safesky-nexus-private-limited/'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-[#121358] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f1050]'
              >
                Contact Us
              </a>
              <a
                href='https://www.instagram.com/safeskynexus?igsh=ODEyY2hueHAyZHRp&utm_source=qr'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-[#f97316] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c]'
              >
                Watch Video
              </a>
            </div>

            <div className='flex items-center gap-3 text-[#121358]'>
              <a href='https://maps.google.com' aria-label='Location' className='transition hover:-translate-y-0.5 hover:text-[#f97316]'>
                <FaMapMarkerAlt size={18} />
              </a>
              <a href='https://www.instagram.com/safeskynexus?igsh=ODEyY2hueHAyZHRp&utm_source=qr' aria-label='Instagram' className='transition hover:-translate-y-0.5 hover:text-[#f97316]'>
                <FaInstagram size={18} />
              </a>
              <a href='https://www.linkedin.com/company/safesky-nexus-private-limited/' aria-label='LinkedIn' className='transition hover:-translate-y-0.5 hover:text-[#f97316]'>
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className='flex justify-center md:justify-end'
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.24 }}
          >
            <motion.img
              src={droneImage}
              alt='Drone'
              className='h-[38vh] w-auto object-contain drop-shadow-[0_18px_28px_rgba(18,19,88,0.12)] sm:h-[45vh] md:h-[60vh]'
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
