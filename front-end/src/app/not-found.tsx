import React from "react";

export default function custom404() {
  return (
    <section
      id="404"
      className="min-h-screen max-h-fit w-full flex flex-col items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#9905A0]/20"
    >
      <h1 className="text-[340px] font-bold">404</h1>
      <h3 className="text-[64px] font-semibold text-yellow-300">Oops!</h3>
      <h4 className="text-[32px] font-light text-white">This page was not found.</h4>
    </section>
  )
}
