import Image from 'next/image'

export default function GovernorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Taj Hotel Event
          </h1>
          <p className="text-xl text-gray-600">
            Excellency Governor of Uttar Pradesh, Madam Anandiben Patel
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full mb-8">
          <div className="relative w-full">
            <Image
              src="/images/camp.jpeg"
              alt="Governor R. N. Ravi"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto' }}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">
            MetaAgro booth at Taj Hotel, Lucknow. 
          </p>
        </div>
      </div>
    </div>
  )
}
