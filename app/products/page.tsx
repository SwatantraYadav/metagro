import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Kavach Fruit Bag',
    description: 'Innovative solution designed to protect your Mango fruits during their growing phase.',
    image: '/images/KavachBags.jpeg',
    slug: '/products/kavach-fruit-bag',
  },
  {
    id: 2,
    name: 'Innovations in Agriculture',
    description: 'Innovative solution designed to protect your Mango fruits during their growing phase.',
    image: '/images/KavachAdv.jpeg',
    slug: '/products/kavach-fruit-bag',
  },
  // Add more products here as needed
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-2 text-gray-600">
            Discover our range of innovative agricultural solutions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={product.slug}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'contain' }}
                  className="rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600">
                  {product.description}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Learn more
                    <svg 
                      className="ml-2 h-4 w-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need help choosing the right product?
          </h2>
          <Link
            href="/contacts"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
