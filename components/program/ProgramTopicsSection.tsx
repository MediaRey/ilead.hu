import Image from 'next/image';

export default function ProgramTopicsSection() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          <span className="text-orange">Képzési program a vezetők számára:</span> 10 stratégiai terület
        </h2>

        {/* Circular Diagram Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl aspect-[16/10]">
            <Image
              src="/program-topics.png"
              alt="10 stratégiai terület - Képzési program diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
