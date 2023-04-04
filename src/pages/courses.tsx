import Layout from "@/components/layout";
import styles from "../styles/pageHeaderImage.module.scss";
import React from 'react'

const courses = () => {
  return (
    <Layout>
        <section className="">
        <div className="h-[438px] bg-cover bg-center relative">
          <img
            className="w-full h-[380px] sm:h-[430px] md:h-[350px] lg:h-[438px] xl:h-[438px] object-cover absolute mix-blend-overlay "
            src="/assets/students.svg"
            alt="course-details logo"
          />
          <div className="flex flex-col lg:flex-row items-center px-0 md:px-10 lg:px-16 xl:px-20  py-0 md:py-5 lg:py-12 xl:py-10">
            <div className="w-screen flex flex-col items-start flex-wrap md:items-start px-5 py-5 sm:px-5 md:px-10 sm:py-5 md:py-[10px] lg:py-5 xl:py-14">
              <h1 className={styles.course3}>Courses</h1>
              <h1 className={styles.course2}>Courses</h1>
              <h1 className={styles.course1}>Courses</h1>
            </div>
            <div className="w-full mb-28 h-fit flex flex-col gap-3 lg:flex-row sm:gap-0 sm:flex-row xl:mr-28 lg:mt-10">
              <div className="w-full flex flex-col lg:flex-col gap-5 px-5 md:px-0 ">
                <h1 className="font-bold text-2xl lg:text-5xl text-gray-50">Best selling courses on the planet</h1>
                <h2 className="text-sm sm:text-md lg:text-lg font-md text-bodyBackground">
                Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque placerat arcu dignissim condimentum nibh et. Vestibulum a non pharetra volutpat. 
                </h2>
                <button className="w-fit my-auto font-normal text-md md:text-lg items-center px-4 py-2 lg:px-6 lg:py-4 h-fit rounded-md text-darkblue-500 bg-gray-50 ">
                Get Started
              </button>
              </div>
            </div>
          </div>
        </div>
        </section>

        <main className="bg-bodyBackground w-full pb-10">
        
        <div className="flex flex-col gap-3 lg:flex-row shadow-lg shadow-gray-500 w-9/12 justify-around py-5 items-center mx-auto mb-auto">
            <div className="flex flex-col justify-center">
                <img src="/assets/icon(1).svg" className="bg-cyan1-50 px-3 py-4 rounded-full w-14 h-14 mx-auto" alt="" />
                <h1 className="text-darkblue-500 font-extrabold text-lg mt-3">Seamless User experience</h1>
                <p className="text-gray-900 text-md font-thin">Learn at your own pace</p>
            </div>
  
            <div className="flex flex-col justify-center">
                <img src="/assets/icon(1).svg" className="bg-cyan1-50 px-3 py-4 rounded-full w-14 h-14 mx-auto" alt="" />
                <h1 className="text-darkblue-500 font-extrabold text-lg mt-3">Practical courses</h1>
                <p className="text-gray-900 text-md font-thin">Get implementable knowledge</p>
            </div>

            <div className="flex flex-col justify-center">
                <img src="/assets/icon(1).svg" className="bg-cyan1-50 px-3 py-4 rounded-full w-14 h-14 mx-auto" alt="" />
                <h1 className="text-darkblue-500 font-extrabold text-lg mt-3">Result driven courses</h1>
                <p className="text-gray-900 text-md font-thin">Success in the digital space</p>
            </div>
        </div>
        </main>
    </Layout>
  )
}

export default courses