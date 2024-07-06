import React from 'react'
import data from '../data/about'
import { motion } from 'framer-motion'
import {
  AiFillFacebook,
  AiFillGithub,
  AiOutlineCodeSandbox,
} from 'react-icons/ai'
const About = () => {
  const img = {
    width: '70px',
    heigh: '60px',
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <section>
          <div className='py-20 flex flex-col flex-wrap md:flex-row md:1/2 md:justify-between items-center'>
            <div className='w-1/2 h-1/2 '>
              <img
                className=' h-52 w-64 object-center md:h-72 md:w-96'
                src={data.img.avatar.url}
                alt={data.img.avatar.alt}
              />
            </div>
            <div className=' h-1/2 w-full x-5 md:px-8 sm:p-8 md:rounded-lg shadow-lg justify-between md:w-6/12 '>
              <h1 className='font-bold text-teal-50 text-center md:text-left text-xl md:text-2xl'>
                {' '}
                Миний тухай
              </h1>
              <p className='text-teal-100  text-lg md:text-xl m-2'>
                MERN , MEAN , FULL stack сонирхолтой ба чөлөөт цагаараа i3wm ,
                vim ,linux bash сурах зэргээр өнгөрөөдөг . Орчин үед мэдээллийн
                аюулгүй байдал чухал бөгөөд хамгийн сонирхолтой салбарыг өөрийн
                холби болгон Web pen testing чиглэлээр илүү түлхүү судалдаг.
              </p>
              <div>
                <div className='flex flex-row flex-wrap  m-2'>
                  <div className='mr-4 '>
                    <button
                      className='text-blue-700 font-bold py-2 px-4 mb-2 flex flex-row items-end border border-gray-500 rounded-lg text-lg'
                      onClick={() =>
                        window.open(
                          'https://www.facebook.com/profile.php?id=100006862092540'
                        )
                      }
                    >
                      <AiFillFacebook className='mb-1' />
                      facebook
                    </button>
                  </div>
                  <div className='mr-4'>
                    <button
                      className='text-white font-bold py-2 px-4 mb-2 flex flex-row items-end border border-gray-500 rounded-lg text-lg'
                      onClick={() => window.open('https://github.com/nogtoGH')}
                    >
                      <AiFillGithub className='mb-1' />
                      github
                    </button>
                  </div>
                  <div className='mr-4'>
                    <button
                      className='text-black font-bold py-2 px-4 mb-2 flex flex-row items-end border border-gray-500 rounded-lg text-lg'
                      onClick={() =>
                        window.open('https://codepen.io/lmprgrjz-the-looper')
                      }
                    >
                      <AiOutlineCodeSandbox className='mb-1' />
                      CodePen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='skill'>
          <div className='mb-10'>
            <h2 className=' text-4xl md:text-6xl font-bold text-transparent text-gray-300 text-center'>
              {' '}
              ур чадвар
            </h2>
          </div>
          <div className='text-xl md:text-2xl font-bold '>
            <h2 className='text-teal-50'>програмчлалын хэлүүд</h2>
          </div>
          <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
            {data.stack.lang.map((lang, index) => {
              return (
                <div
                  className={`${
                    index % 2 ? 'animate-float' : 'animate-refloat'
                  } flex flex-col items-center text-teal-100`}
                  tabIndex='0'
                  role='img'
                >
                  <img
                    src={lang.url}
                    alt={lang.alt}
                    loading='lazy'
                    style={img}
                  />
                  {lang.desc}
                </div>
              )
            })}
          </div>
        </section>

        <section id='skill'>
          <div className='text-xl md:text-2xl font-bold '>
            <h2 className='text-teal-50'>Хэрэгсэл ба технологи</h2>
          </div>
          <div className=' grid gap-5 grid-cols-3 md:grid-cols-6'>
            {data.stack.tools.map((tools, index) => {
              return (
                <div
                  className='flex flex-col items-center text-teal-100'
                  tabIndex='0'
                  role='img'
                >
                  <img
                    src={tools.url}
                    alt={tools.alt}
                    loading='lazy'
                    className='w-16 mb-1'
                    width='70px'
                    height='64px'
                  />
                  {tools.desc}
                </div>
              )
            })}
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default About
