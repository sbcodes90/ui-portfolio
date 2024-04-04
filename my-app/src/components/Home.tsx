import React from 'react'
import { Link } from 'react-router-dom'
import avi from "../images/me.png";
import mbanner from "../images/mobile-banner.png";
import foodieApp from "../images/foodie-mobile.png";
import authappic from "../images/authapp.png";
import personalProjectHeader from "../images/pp-header.png";
import game from "../images/cardgame.png";
import TechStack from './TechStack';

function Home() {
  return (
    <div>
        <img src={mbanner} alt="banner" className=" h-full w-full " />
        <section className=" bg-white grid grid-cols-1 lg:grid-cols-2 pt-14 lg:px-20 lg:py-10  place-items-center">
          <img src={avi} alt="me" />

          <p className="text-sm text-black px-20 font-medium mt-[50px] lg:pt-10 lg:px-[30px] lg:mt-[20px]  justify-normal">
            Hey there, I'm Sydney Burrell, and I've worn multiple hats in the
            tech and design field. I started out as a Graphic Designer,
            transitioned to UX Design, and then dabbled in Email Design,
            Development, and Deployment, Web Development, and finally found my
            niche in Software Development. With five years of experience as a
            Front End Developer specializing in React JS, I'm confident in my
            abilities to tackle any challenge that comes my way. I'm native to
            Philadelphia, PA, and I love to explore new restaurants and attend
            comedy shows around the city. Laughter is my medicine, and I truly
            believe in the quote
            <br></br>
            <strong>
              "A day without laughter is wasted" by Charlie Chapman.
            </strong>
            <div className="flex gap-[20px] mt-[20px] pt-[50px] pb-[50px] place-content-center">
              <button className="bg-transparent  hover:bg-black hover:text-white border-black text-black border-2 font-semibold py-2 px-10 rounded-2xl">
                Contact
              </button>
              <button className="bg-transparent hover:bg-black hover:text-white border-2 border-black text-black font-semibold py-2 px-10   rounded-2xl">
                Github
              </button>
            </div>
          </p>
        </section>

        <section className=" lg:px-20 pt-10">
          <div className="flex justify-center items-center">
            <img src={personalProjectHeader} alt="Personal-Projects-Header" />
          </div>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 rounded-3xl py-10">
            <img
              src={foodieApp}
              className=" pb-10 w-[400px] lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              alt="placeholder"
            />

            <div className="rounded-3xl shadow-2xl lg:mr-20 mx-10 bg-[#ffffff] border-black border-2">
              <p className="font-black text-center mt-5 text-black">Meal App</p>
              <p className=" font-normal text-sm px-20 py-5 text-center lg:px-[50px] text-black">
                As a self proclaimed foodie, sometimes at home I want to try to
                random recipes, so I decided to make a application that browses
                for you. The Meal API app utilizes a free public API.
              </p>

              <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[20px] mt-[20px] pb-[50px] lg:place-content-center">
                <button className="bg-black text-white font-semibold py-2 px-[45px] mb-2 border border-black  hover:bg-black hover:text-white  rounded-2xl">
                  <Link
                    to="https://65ab32bd70a8274031649eb1--mealappbysb.netlify.app/"
                    target="blank"
                  >
                    Preview
                  </Link>
                </button>

                <button className="bg-black text-white font-semibold py-2 px-[50px] border border-black hover:bg-black hover:text-white  rounded-2xl">
                  <Link to="https://github.com/sbcodes90/Health-App" target="blank">Github</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black grid grid-cols-1 lg:grid-cols-2  justify-items-center lg:py-20 lg:px-20">
          <div className="text-white grid-col-1 px-20">
            <p className="pt-20 text-xl font-bold pb-5 text-center lg:text-left md:text-left">
              Authentication App
            </p>
            <div className=" md:hidden lg:hidden">
              <img
                src={authappic}
                className=" mt-5 pb-10 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                alt="placeholder"
              />
            </div>
            <div className="px-10">
              <p className="text-sm">
                I have always been fascinated by the process of authentication
                on web applications, so I decided to take matters into my own
                hands and develop a full-stack web application. The application
                employs
              </p>
              <p className="font-bold text-teal-300 text-sm">
                React, React Router 6, Tailwind CSS, and Node.js, and is
                connected to a MongoDB database.{" "}
              </p>
              <p className="pt-5 text-sm">
                This feature-rich application enables users to create and delete
                profiles, as well as sign up and log in with password encryption
                using bcrypt.js. To ensure a seamless user experience, the
                application includes form validations and a JWT token that
                unlocks access to a highly confidential database. I invite you
                to explore this web application and experience its robust
                functionalities.
              </p>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10 md:pt-5 lg:pt-5 pb-20 px-20 lg:px-0">
              <button className="text-white border-white border-2  px-2  md:px-10 lg:px-10 py-2 rounded-2xl lg:mt-5">
               <Link to="https://sbcodes-auth-app.vercel.app/"     target="blank">
                Check it out
                </Link>
              </button>
              <button className="text-white border-white border-2 px-2  md:px-10 lg:px-10 py-2 rounded-2xl lg:mt-5 lg:ml-5">
                <Link to="https://github.com/sbcodes90/react-mongo-tailwind-auth-app"     target="blank">GitHub</Link>
              </button>
            </div>
          </div>

          <div className="hidden md:block lg:block">
            <img
              src={authappic}
              className="pb-20 md:w-[500px] lg:pt-20 lg:w-[500px] grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              alt="placeholder"
            />
          </div>
        </section>

        <section className="lg:px-20 bg-cyan pb-10 lg:pb-0 ">
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 rounded-3xl ">
            <img
              src={game}
              className="grid-cols-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              alt="placeholder"
            />

            <div className="rounded-3xl shadow-2xl lg:mr-20 mx-10 bg-[#ffffff] border-black border-2">
              <p className="font-black text-center mt-5 text-black">Swift UI Mobile Card Game</p>
              <p className=" font-normal text-sm px-20 py-5 text-center lg:px-[50px] text-black">
                As my career grows my goal is to transition to mobile app development. This is my first project, using image assets from Chris Codes. 
                In order to test you would need XCode. Code found on my github page. Link below.
              </p>

              <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[20px] mt-[20px] pb-[50px] lg:place-content-center">
               

                <button className="bg-black text-white font-semibold py-2 px-[50px] border border-black hover:bg-black hover:text-white  rounded-2xl">
                  <Link to="https://github.com/sbcodes90/Mobile-App-Swift-UI"     target="blank">Github</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-[#000000]">
          <p className="text-center text-2xl font-black pt-[50px] text-white">
            D3.js Charts
          </p>
          <div className="grid grid-cols-1 gap-10 p-10">
            <div className="border-2 border-solid border-white rounded-2xl w-full h-full px-10 py-5">
              <p className="text-center">Line Graph</p>
              <iframe
                src="https://codesandbox.io/embed/n4qsf7?view=Editor+%2B+Preview&module=%2Fsrc%2FLineChart.js"
                className="w-[100%] h-[200px] md:h-[500px] lg:h-[500px] border-0 rounded-[4px] overflow-hidden"
                title="D3 line chart"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </section>
        <TechStack />
      </div>  )
}

export default Home