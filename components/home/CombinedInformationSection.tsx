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
                {/* 1. Be Future Ready Executive Program (Image Left, Text Right) */}
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
                            Be Future Ready Executive Program
                        </h2>
                        <p className="text-lg mb-4 text-gray-200">
                            <strong className="text-white">A modern vezetés kulcsa:</strong> egy gyakorlatorientált, felsővezetőknek szóló alternatívája a klasszikus MBA-knek.
                        </p>
                        <p className="mb-4 text-gray-300">
                            A <strong className="text-white">Be Future Ready Executive Program</strong> azoknak a vezetőknek szól, akik nemcsak követni, hanem értelmezni és alakítani szeretnék a gyorsan változó üzleti környezetet.
                        </p>
                        <p className="mb-4 text-gray-300">
                            A program az <strong className="text-white">Massachusetts Institute of Technology (MIT) vezetés- és szervezeti gondolkodására épül</strong>, miközben a <strong className="text-white">MIT Sloan Management Review</strong> szakmai háttere segít abban, hogy a résztvevők valós döntési helyzeteken és aktuális menedzsmentkérdéseken keresztül kapjanak azonnal alkalmazható vezetői eszközöket.
                        </p>
                        <p className="mb-6 text-gray-300">
                            Célunk, hogy a résztvevők <strong className="text-white">magabiztosabban hozzanak stratégiai döntéseket, felkészülten reagáljanak a bizonytalanságra</strong> — és egy olyan <strong className="text-white">nemzetközi szemléletű, inspiráló vezetői közösség</strong> részévé váljanak, amely túlmutat magán a programon.
                        </p>
                        <Button href="/be-future-ready-executive-program" className="bg-[#ea8d32] hover:bg-[#d67a25] text-white font-semibold  px-4 sm:px-8 py-3 rounded-md transition-colors border border-[#ea8d32]">
                            Érdekel a program
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
                            MIT Sloan Management Review
                        </h2>
                        <p className="text-lg mb-4 text-gray-200">
                            A <strong className="text-white">MIT Sloan Management Review</strong> a világ egyik legelismertebb üzleti magazinja, amely a <strong className="text-white">MIT tudományos gondolkodását</strong> kapcsolja össze a vezetői gyakorlat valós kérdéseivel.
                        </p>
                        <p className="mb-4 text-gray-300">
                            A magazin a technológia, az innováció és a vezetés metszéspontjában vizsgálja, hogyan formálják át az új megoldások a szervezeteket és a döntéshozatalt.
                        </p>
                        <p className="mb-6 text-gray-300">
                            Előfizetőink olyan elemzésekhez, esettanulmányokhoz és gondolatébresztő írásokhoz férnek hozzá, amelyek segítenek <strong className="text-white">tágabb összefüggésekben gondolkodni</strong> és felkészülten reagálni a változásokra.
                        </p>
                        <Button href="/subscription" className="bg-[#ea8d32] hover:bg-[#d67a25] text-white font-semibold px-4 sm:px-8 py-3 rounded-md transition-colors border border-[#ea8d32]">
                            A magazinról
                        </Button>
                    </div>

                    {/* Image Container (Right) */}
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                        {/* Replace '/magazine-cover.png' with your actual image file path */}
                        <Image
                            src="/magazine-cover.png"
                            alt="Magazín MIT Sloan Management Review"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
