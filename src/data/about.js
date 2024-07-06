/*********************************************************************************
 *     File Name           :     about.js
 *     Created By          :     otgon
 *     Creation Date       :     [2022-10-10 17:07]
 *     Last Modified       :     [2022-10-13 14:07]
 *     Description         :
 **********************************************************************************/
import html from '../assets/images/icons/html5-original.svg'
import css from '../assets/images/icons/css3-original.svg'
import tailwind from '../assets/images/icons/tailwind-css.svg'
import javascript from '../assets/images/icons/javascript-original.svg'
import react from '../assets/images/icons/react-original.svg'
import nodejs from '../assets/images/icons/nodejs-icon.svg'
import express from '../assets/images/icons/expressjs-icon.svg'
import mongodb from '../assets/images/icons/mongodb.png'
import redux from '../assets/images/icons/redux.svg'
import avatar from '../assets/images/icons/avatar.svg'
import github from '../assets/images/icons/github.svg'
import firebase from '../assets/images/icons/icons8-firebase.svg'
const data = {
  img: {
    avatar: {
      url: avatar,
      alt: 'avatar',
    },
  },
  stack: {
    lang: [
      {
        url: html,
        alt: 'html',
        desc: 'html',
      },
      {
        url: css,
        alt: 'css',
        desc: 'css',
      },
      {
        url: javascript,
        alt: 'javascripts',
        desc: 'javascripts',
      },
      {
        url: tailwind,
        alt: 'tailwindcss',
        desc: 'tailwind css',
      },
      {
        url: react,
        alt: 'reactjs',
        desc: 'reactjs',
      },
      {
        url: redux,
        alt: 'redux',
        desc: 'redax',
      },
      {
        url: mongodb,
        alt: 'mongodb',
        desc: 'mongodb',
      },
      {
        url: nodejs,
        alt: 'nodejs',
        desc: 'nodejs',
      },
      {
        url: express,
        alt: 'express',
        desc: 'expressjs ',
      },
    ],
    tools: [
      {
        url: 'data:image/png;base64,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',
        alt: 'linux',
        desc: 'linux',
      },
      {
        url: github,
        alt: 'github',
        desc: 'github',
      },
      {
        url: firebase,
        alt: 'firebase',
        desc: 'firebase',
      },
    ],
  },
}
export default data
