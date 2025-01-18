import React from "react";

export default function about() {
  return (
    <div>
      <section
        id="about"
        className="about-us bg-white text-black py-16 px-5 md:px-10 xl:py-20 xl:px-[300px]"
      >
        <div className="container text-left">
          <h2 className="text-3xl font-bold my-[10px]">ABOUT US</h2>
          <p className="mt-4 text-lg">
            This is the About Us section. Add your content here.
          </p>
        </div>
      </section>
    </div>
  );
}
