import React from "react";
import { terminal } from "@/app/fonts/fonts";

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
                <div className="mt-5"></div>

            </section>
        </div>
    );
};
