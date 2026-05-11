import img1 from "./images/products/product1.webp";
import img2 from "./images/products/product2.webp";
import img3 from "./images/products/product3.webp";
import img4 from "./images/products/product4.webp";
import { GalleryColProps } from './GalleryCol';

export default function GalleryColV5({
  title = "Our Product Gallery",
  description = "Check out our latest collection and high-quality product images.",
  images = [
    { src: img1.src, alt: "Product 1" },
    { src: img2.src, alt: "Product 2" },
    { src: img3.src, alt: "Product 3" },
    { src: img4.src, alt: "Product 4" },
  ],
}: GalleryColProps) {
  return (
    <section className="py-16 bg-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-2">{title}</h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">{description}</p>
        </div>
        {/* Staggered layout */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${images.length <= 2 ? 'lg:grid-cols-2' : images.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-4`}>
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`relative group aspect-square overflow-hidden rounded-3xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 ${index % 2 === 1 ? 'mt-6' : ''}`}
            >
              <img src={image.src} alt={image.alt || `Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
