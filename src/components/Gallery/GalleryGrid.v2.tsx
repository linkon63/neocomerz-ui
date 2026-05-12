import img1 from '../../images/products/product1.webp';
import img2 from '../../images/products/product2.webp';
import img3 from '../../images/products/product3.webp';
import img4 from '../../images/products/product4.webp';
import img5 from '../../images/products/product5.webp';
import { GalleryGridProps } from './GalleryGrid';

export default function GalleryGridV2({
  title = "Curated Collection",
  description = "Explore our visually stunning grid of premium products.",
  images = [
    { src: img1.src, alt: "Featured" },
    { src: img2.src, alt: "Product 1" },
    { src: img3.src, alt: "Product 2" },
    { src: img4.src, alt: "Product 3" },
    { src: img5.src, alt: "Product 4" },
  ],
}: GalleryGridProps) {
  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{title}</h2>}
            {description && <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto">{description}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${images.length <= 2 ? 'md:grid-cols-2' : images.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-3 min-h-[200px]`}>
          {images.slice(0, 9).map((image, index) => {
            const isFeatured = index === 0 && images.length >= 4;
            return (
              <div key={index} className={`relative group overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-all h-full ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={image.src} alt={image.alt || `Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {isFeatured && (
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-red-500 text-white font-bold text-sm shadow-lg">
                    🔥 BESTSELLER
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <a href="#order-form" className="inline-block px-10 py-4 rounded-2xl bg-red-500 text-white font-extrabold text-lg hover:bg-red-600 transition-colors shadow-xl">
            🛒 এখনই অর্ডার করুন
          </a>
        </div>
      </div>
    </section>
  );
}
