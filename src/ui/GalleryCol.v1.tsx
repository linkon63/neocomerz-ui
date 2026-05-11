import img1 from "./images/products/product1.webp";
import img2 from "./images/products/product2.webp";
import img3 from "./images/products/product3.webp";
import img4 from "./images/products/product4.webp";
import { GalleryColProps } from './GalleryCol';

export default function GalleryColV1({
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-500 max-w-xl">{description}</p>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${images.length <= 2 ? 'lg:grid-cols-2' : images.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-4`}>
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="relative group aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img src={image.src} alt={image.alt || `Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
