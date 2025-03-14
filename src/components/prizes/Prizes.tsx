import React from "react";
import { terminal } from "@/app/fonts/fonts";
import Image from "next/image";

export const Prizes = () => {
    return (
        <div>
            <section
                id="sponsor"
                className="sponsor bg-gradient-to-b from-[#030c1b] to-[#051735] text-white py-16 px-5 md:px-10 xl:py-10 xl:px-[300px]"
            >
                <div className="text-center">
                    <h2
                        className={`${terminal.className} text-4xl md:text-6xl mb-8 text-[#FFDA20]`}
                    >
                        PRIZES
                    </h2>
                </div>
                <div className="mt-5 w-96 md:w-2/3 mx-auto">
                    <Image src={"/assets/Prizes.gif"} width={1915} height={1800} alt="Prizes" />
                </div>

            </section>
        </div>
    );
};
