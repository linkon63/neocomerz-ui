'use client';

import React from 'react';
import { 
  Hero, 
  LayeredHeroUI, 
  InlineHeroUI, 
  GalleryColUI, 
  GalleryGridUI, 
  GalleryGrid6UI, 
  FeaturesUI, 
  DesignAndFitUI, 
  SizeChartUI, 
  FAQUI, 
  QualityUI, 
  TestimonialsUI, 
  Helpline,
  PrimaryButton
} from '../../src';

export default function PreviewPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <nav className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-600">NeoComerz UI Component Preview</h1>
        <div className="flex gap-4">
           <a href="#hero" className="hover:text-orange-600">Heroes</a>
           <a href="#gallery" className="hover:text-orange-600">Galleries</a>
           <a href="#commerce" className="hover:text-orange-600">Commerce</a>
           <a href="#info" className="hover:text-orange-600">Info</a>
        </div>
      </nav>

      <section id="hero">
        <h2 className="px-8 text-2xl font-bold mb-4 bg-gray-100 py-2">Hero Components</h2>
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="px-8 text-lg font-semibold text-gray-500 mb-2 underline">Classic Hero</h3>
            <Hero 
              title="Classic Hero Component"
              subtitle="The standard for high-converting landing pages"
            />
          </div>
          <div>
            <h3 className="px-8 text-lg font-semibold text-gray-500 mb-2 underline">Layered Hero</h3>
            <LayeredHeroUI 
              titlePrimary="Layered Hero"
              titleSecondary="Multi-dimensional presentation"
            />
          </div>
          <div>
            <h3 className="px-8 text-lg font-semibold text-gray-500 mb-2 underline">Inline Hero</h3>
            <InlineHeroUI 
              titlePrimary="Industrial Hero"
              titleSecondary="Bold and Product-focused"
            />
          </div>
        </div>
      </section>

      <section id="gallery">
        <h2 className="px-8 text-2xl font-bold mb-4 bg-gray-100 py-2">Gallery Components</h2>
        <div className="flex flex-col gap-10">
           <GalleryGridUI title="Standard Gallery Grid" />
           <GalleryGrid6UI title="6-Pack Gallery Grid" />
           <GalleryColUI title="Basic Gallery Columns" />
        </div>
      </section>

      <section id="commerce">
        <h2 className="px-8 text-2xl font-bold mb-4 bg-gray-100 py-2">Commerce & Details</h2>
        <div className="flex flex-col gap-10">
          <FeaturesUI 
            title="Product Features Section" 
            description="Experience the combined power of modern aesthetics and functional design."
            tagline="EXCEPTIONAL CRAFTSMANSHIP"
            features={[
              { text: "Premium quality materials" },
              { text: "Ergonomic and comfortable fit" },
              { text: "Durable and long-lasting build" }
            ]}
            colors={{ primary: '#F36621', text: '#222F28', background: '#f9fafb' }}
            ctaButton={{ text: "View Details", href: "#" }}
          />
          <DesignAndFitUI 
            title="Design & Fit Showcase" 
            subtitle="Perfectly tailored for your comfort"
            imageCards={[
              { title: "Premium Fabric", description: "Breathable and soft natural fibers", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400" },
              { title: "Expert Tailoring", description: "Precision cut for the perfect fit", image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?auto=format&fit=crop&w=400" }
            ]}
            detailCards={[
              { title: "Craftsmanship", items: [{ text: "Hand-stitched transitions" }, { text: "Reinforced seams" }] },
              { title: "Material", items: [{ text: "100% Organic Cotton" }, { text: "Eco-friendly dyes" }] }
            ]}
          />
          <SizeChartUI 
            title="Product Size Chart" 
            sizeData={[
              { measurement: "Chest", description: "Underarm to underarm", m: "20", l: "22", xl: "24", xxl: "26" },
              { measurement: "Length", description: "Shoulder to hem", m: "28", l: "29", xl: "30", xxl: "31" }
            ]}
          />
        </div>
      </section>

      <section id="info">
        <h2 className="px-8 text-2xl font-bold mb-4 bg-gray-100 py-2">Information & Trust</h2>
        <div className="flex flex-col gap-10">
          <FAQUI heading="Frequently Asked Questions" />
          <QualityUI title="Quality Assurance" />
          <TestimonialsUI title="Customer Testimonials" />
          <div className="px-8">
            <h3 className="text-lg font-semibold text-gray-500 mb-2 underline">Support & Buttons</h3>
            <div className="flex items-center gap-6 flex-wrap">
              <Helpline />
              <PrimaryButton>Primary Action</PrimaryButton>
              <PrimaryButton variant="secondary">Secondary Action</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
