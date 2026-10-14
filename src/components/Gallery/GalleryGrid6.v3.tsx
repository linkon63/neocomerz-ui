import img1 from '../../images/products/product1.webp';
import img2 from '../../images/products/product2.webp';
import img3 from '../../images/products/product3.webp';
import img4 from '../../images/products/product4.webp';
import img5 from '../../images/products/product5.webp';
import { GalleryGrid6Props } from './GalleryGrid6';

export default function GalleryGrid6V3({
  title = "Premium Collection",
  description = "A specialized 6-pack grid for your finest products.",
  images = [
    { src: img1.src, alt: "Featured" }, { src: img2.src, alt: "Product 1" },
    { src: img3.src, alt: "Product 2" }, { src: img4.src, alt: "Product 3" },
    { src: img5.src, alt: "Product 4" }, { src: img1.src, alt: "Product 5" },
  ],
}: GalleryGrid6Props) {
  const imagesToDisplay = images.slice(0, 6);
  const count = imagesToDisplay.length;
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{title}</h2>}
              {description && <p className="text-base text-gray-500 max-w-md">{description}</p>}
            </div>
            <span className="text-sm text-gray-400">{count} items</span>
          </div>
        )}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${count <= 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-2 min-h-[200px]`}>
          {imagesToDisplay.map((image, index) => {
            const isFeatured = index === 0 && count >= 4;
            return (
              <div key={index} className={`relative group overflow-hidden rounded-2xl bg-gray-100 border-2 border-gray-200 hover:border-blue-400 transition-colors h-full ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={image.src} alt={image.alt || `Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
