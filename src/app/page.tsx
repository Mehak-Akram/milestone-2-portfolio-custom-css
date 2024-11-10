"use client";

import Image from "next/image";
import profile from "../../image/profile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";


export default function hi(){
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  },[]);
  return(
    <div>
     <div className="first">
        <div className="leftSection" data-aos="zoom-in-up">
          Hi, it's <span className="brown">Mehak</span>
          <div>
            and I am  passionate<span className="brown"><br />Front-end Developer</span>
          </div>
          <p>
            As a front-end developer with a strong foundation in HTML, CSS,
            <br />
            JavaScript, and TypeScript a focus on Nextjs and Tailwind CSS,
            <br /> I focus on writing clean, efficient, and maintainable code
          </p>
        </div>
        <div className="rightSection">
          <Image src={profile} alt="profile-pic" data-aos="zoom-in-up"></Image>
        </div>
      </div>

    </div>
  )
}