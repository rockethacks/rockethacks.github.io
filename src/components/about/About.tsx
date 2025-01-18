import React from "react";

export default function about() {
  return (
    <div>
      <section
        id="about"
        className="about-us bg-[#030c1b] text-white py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        <div className="container text-left">
          <h2 className="text-3xl font-bold my-[10px]">ABOUT US</h2>
          <p className="mt-4 text-base text-pretty break-normal font-normal">
            RocketHacks is a 24-hour hackathon hosted by the University of
            Toledo, dedicated to fostering innovation and problem-solving among
            students from the Midwest and beyond.{" "}
            <br className="inline-block xl:hidden" />
            <br className="inline-block xl:hidden" /> This event will gather
            talented students, from budding programmers to visionary designers,
            to build real solutions to real-world challenges. With an emphasis
            on collaboration, creativity, and technical skills, RocketHacks will
            empower students to turn their ideas into impactful projects.
          </p>
        </div>
      </section>
    </div>
  );
}
