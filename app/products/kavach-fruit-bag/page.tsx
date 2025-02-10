import Image from 'next/image'
import Link from 'next/link'

export default function KavachFruitBag() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-900">
                Products
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium">Kavach Fruit Bag</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/KavachBags.jpeg"
              alt="Kavach Fruit Bag"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Kavach Fruit Bag
            </h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">
                  The Kavach Fruit Bag is an innovative solution designed to protect your Mango fruits during their growing phase. Made with high-quality materials, it provides excellent protection against pests, harsh weather conditions, and ensures optimal fruit development.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Superior pest protection</li>
                  <li>Weather-resistant material</li>
                  <li>Promotes healthy fruit growth</li>
                  <li>Easy to install and remove</li>
                  <li>Reusable and durable</li>
                  <li>Environment-friendly</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="font-medium">Material</p>
                    <p>High-grade protective eco-friendly paper pulp</p>
                  </div>
                  <div>
                    <p className="font-medium">Size</p>
                    <p>Available in multiple sizes</p>
                  </div>
                  <div>
                    <p className="font-medium">Colors Available</p>
                    <p>Saffron, Yellow</p>
                  </div>
                  <div>
                    <p className="font-medium">Usage</p>
                    <p>Multiple seasons</p>
                  </div>
                </div>
              </div>

              {/* Contact/Inquiry Button */}
              <div className="mt-8">
                <Link
                  href="/contacts"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Contact for Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
