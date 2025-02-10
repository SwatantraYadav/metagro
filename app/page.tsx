import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-gray-600">
            Bringing cutting-edge tech to traditional agriculture practices. Transforming Farming Through Technology
          </p>
        </div>
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-lg overflow-hidden shadow-xl mb-12">
            <Image
              src="/images/KavachAdv.jpeg"
              alt="Kavach Fruit Bag"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </div>
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-lg overflow-hidden shadow-xl mb-12">
          <Image
            src="/images/bg-home.webp" // Replace with your actual image path
            alt="Agricultural technology"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
              Revolutionizing Agricultural Services
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Metagro is automating the value chain of agricultural produce, starting with mango cultivation and supply & value chain management. Our innovative solutions connect buyers and sellers, provide domestic and overseas market exposure, optimize storage and time value management, and offer seamless farm-to-table services. By introducing cutting-edge AI-backed automated machinery, we are transforming the farming industry and empowering agricultural professionals.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.gavs.metaagroapp&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Image
              src="/images/GooglePlay.png"
              alt="Get it on Google Play"
              width={175}
              height={48}
              className="mr-2"
            />
            <span>Get it on Google Play</span>
          </a>
        </div>

      </div>
    </div>
  );
}
