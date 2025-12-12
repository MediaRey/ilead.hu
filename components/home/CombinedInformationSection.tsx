'use client';

import Image from 'next/image';
import Button from '../Button'; // Assuming your Button component is styled orange

export default function CombinedInformationSection() {
    // Define a consistent dark background color
    const darkBackground = "bg-[#0E2738]";

    // Define the common orange color for hovers/accents if needed,
    // but the Button component handles its own color here.

    return (
        <section className={`${darkBackground} text-white py-20 px-6 lg:px-16`}>
            <div className="max-w-7xl mx-auto space-y-24">

                {/* ======================================================= */}
                {/* 1. Future Ready Executive Program (Image Left, Text Right) */}
                {/* ======================================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Container (Left) */}
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                        {/* Replace '/mit-building.jpg' with your actual image file path */}
                        <Image
                            src="/mit-building.webp"
                            alt="Budova MIT"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text Content (Right) */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Future Ready<br />
                            Executive Program
                        </h2>
                        <p className="text-lg mb-4 text-gray-200">
                            A modern vezetés kulcsa – <strong className="text-white">gyakorlati és rugalmas MBA alternatíva</strong>, amely összeköti a <strong className="text-white">tudományos ismereteket az üzleti gyakorlattal</strong>.
                        </p>
                        <p className="mb-6 text-gray-300">
                            Célunk a menedzserek képességeinek fejlesztése úgy, hogy ne csak reagáljanak a változásokra, hanem előre lássák és stratégiailag irányítsák azokat. A program része az MIT által ajánlott témák, a <strong className="text-white">legújabb menedzsment trendek</strong> és gyakorlati eszközök, amelyek támogatják a vezetőket a csapatok hatékony irányításában. A program <strong className="text-white">nemzetközi perspektívát</strong> nyújt a vezetésről, és a résztvevőket a jövő vezetőinek inspiráló közösségében köti össze.
                        </p>
                        <Button href="/future-ready-executive-program123" className="bg-[#ea8d32] hover:bg-[#d67a25] text-white font-semibold px-8 py-3 rounded-md transition-colors border border-[#ea8d32]">
                            Legyen része a Future Ready Executives programnak
                        </Button>
                    </div>
                </div>

                {/* --- Separator --- */}
                <hr className="border-gray-700 mx-auto w-1/2 lg:w-1/4" />

                {/* ======================================================= */}
                {/* 2. Předplatné MIT Sloan (Text Left, Image Right) */}
                {/* ======================================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content (Left) */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            MIT Sloan<br />
                            Management Review előfizetés
                        </h2>
                        <p className="text-lg mb-4 text-gray-200">
                            Szerezzen hozzáférést <strong className="text-white">exkluzív tartalmakhoz</strong> a menedzsmentről, innovációról és vezetésről. <strong className="text-white">Szakmai cikkeket</strong> hozunk a rangos MIT Sloan-tól, amelyek segítenek személyesen és szakmailag fejlődni.
                        </p>
                        <Button href="/subscription123" className="bg-[#ea8d32] hover:bg-[#d67a25] text-white font-semibold px-8 py-3 rounded-md transition-colors border border-[#ea8d32]">
                            Regisztráljon
                        </Button>
                    </div>

                    {/* Image Container (Right) */}
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl flex justify-center items-center">
                        {/* Replace '/magazine-cover.png' with your actual image file path */}
                        <Image
                            src="/magazine-cover.png"
                            alt="Magazín MIT Sloan Management Review"
                            fill
                            className="object-contain p-4" // Use padding/smaller image size to prevent the cover from being cut off if needed
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Optional: Add a subtle overlay or dark shadow around the content if the image is transparent */}
                    </div>
                </div>

            </div>
        </section>
    );
}
