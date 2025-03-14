"use client";
import React from "react";
import Image from "next/image";

export default function Map() {
    return (
        <>
            <div className="h-auto bg-cover bg-center bg-gradient-to-b from-[#051735] from-10%  to-80% to-[#030c1b]/50 px-4 py-8">
                <Image
                    src="/COE_MAP_2.png"
                    alt="Event illustration"
                    width={2000}
                    height={1501}
                    className="object-cover rounded-lg shadow-lg cursor-pointer p-5"
                ></Image>
            </div>
        </>
    );
}
