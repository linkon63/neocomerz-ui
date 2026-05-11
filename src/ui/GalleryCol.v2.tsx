import img1 from "./images/products/product1.webp";
import img2 from "./images/products/product2.webp";
import img3 from "./images/products/product3.webp";
import img4 from "./images/products/product4.webp";
import { GalleryColProps } from './GalleryCol';

export default function GalleryColV2({
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
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500 text-white text-sm font-bold mb-3">📸 GALLERY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{title}</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto">{description}</p>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${images.length <= 2 ? 'lg:grid-cols-2' : images.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-4`}>
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="relative group aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-all">
              <img src={image.src} alt={image.alt || `Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300" />
              {index === 0 && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">BESTSELLER</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#order-form" className="inline-block px-8 py-3 rounded-2xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg">
            🛒 এখনই অর্ডার করুন
          </a>
        </div>
      </div>
    </section>
  );
}
