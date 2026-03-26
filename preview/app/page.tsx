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
  PrimaryButton,
  OrderFormUI,
  SectionHeader,
  CheckListItem,
} from '../../src';

// ─── Sample Images ──────────────────────────────────────────────────────────
const SAMPLE_IMAGES = {
  product1: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
  product2: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?auto=format&fit=crop&w=600&q=80",
  product3: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
  product4: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
  product5: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
  review1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  review2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  review3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  review4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  quality1: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=600&q=80",
  quality2: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
  quality3: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
};

export default function PreviewPage() {
  return (
    <div className="flex flex-col pb-20">
      {/* ─── Sticky Nav ─────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-600">🎨 NeoComerz UI Preview</h1>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#hero" className="hover:text-orange-600 transition-colors">Heroes</a>
          <a href="#gallery" className="hover:text-orange-600 transition-colors">Galleries</a>
          <a href="#commerce" className="hover:text-orange-600 transition-colors">Commerce</a>
          <a href="#info" className="hover:text-orange-600 transition-colors">Info</a>
          <a href="#utility" className="hover:text-orange-600 transition-colors">Utility</a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO COMPONENTS
          ═══════════════════════════════════════════════════════ */}
      <section id="hero" className="mt-8">
        <div className="px-8 py-3 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 mx-4 rounded-r-xl mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🖼️ Hero Components</h2>
          <p className="text-gray-500 text-sm">Full-width hero sections for landing pages</p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Classic Hero */}
          <div>
            <h3 className="px-8 text-lg font-semibold text-gray-500 mb-3">① Classic Hero</h3>
            <Hero 
              title="👑 STYLISH & COMFORTABLE"
              subtitle="✨ LUXURY SUMMER COLLECTION"
              discountTag="UP TO 50% OFF"
              cta={{ text: "SHOP NOW", href: "#" }}
              secondaryCta={{ text: "VIEW CATALOG", href: "#" }}
              settings={{
                overlayOpacity: 15,
                overlayColor: "#000000",
                textAlignment: "center",
                contentAlignment: "right",
              }}
              theme={{
                primaryColor: "#F36621",
                textColor: "#222F28",
              }}
            />
          </div>

          {/* Layered Hero */}
          <div>
            <h3 className="px-8 text-lg font-semibold text-gray-500 mb-3">② Layered Hero</h3>
            <LayeredHeroUI 
              titlePrimary="এই শীতের"
              titleSecondary="স্টাইল গেমে আনুন নতুনত্ব"
              description="শীত এলেই শুরু হয় স্টাইলের নতুন অধ্যায়। বাজেট ফ্রেন্ডলি প্রাইসে পাচ্ছেন আমাদের এক্সক্লুসিভ প্রিমিয়াম Sweatshirt Collection।"
              productName="Sweat Shirt Set"
              originalPrice="৳1427"
              discountPrice="৳999"
              watermarkText="Shirt"
              cta={{ text: "অর্ডার করুন (৩০% ছাড়ে)", href: "#" }}
              settings={{
                showWatermark: true,
                showShadow: true,
                showPolaroid: true,
                showCtaIcon: true,
              }}
              theme={{
                primaryColor: "#FBBF24",
                textColor: "#222F28",
                descriptionColor: "#6B6B6B",
              }}
              priceSuffix="only"
            />
          </div>

          {/* Inline Hero */}
          <div>
            <h3 className="px-8 text-lg font-semibold text-gray-500 mb-3">③ Inline Hero</h3>
            <InlineHeroUI 
              titlePrimary="প্রিমিয়াম"
              titleSecondary="Pakistani Dress"
              description="সেই ডিজাইন—যেটা পরলে আলাদা করে কিছু বলার দরকার পড়ে না। ফ্যাশন-লাভারদের নতুন obsession"
              ctaText="এখনই অর্ডার করুন"
              ctaHref="#order"
              theme={{
                primaryColor: "#27272a",
                secondaryColor: "#5b21b6",
                textColor: "#27272a",
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: GALLERY COMPONENTS
          ═══════════════════════════════════════════════════════ */}
      <section id="gallery" className="mt-20">
        <div className="px-8 py-3 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 mx-4 rounded-r-xl mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🖼️ Gallery Components</h2>
          <p className="text-gray-500 text-sm">Product image showcase grids</p>
        </div>

        <div className="flex flex-col gap-16">
          <GalleryGridUI 
            title="Curated Collection"
            description="Explore our visually stunning grid of premium products and lifestyle shots."
          />
          <GalleryGrid6UI 
            title="Premium Collection"
            description="A specialized 6-pack grid for your finest products."
          />
          <GalleryColUI 
            title="Our Product Gallery"
            description="Check out our latest collection and high-quality product images."
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: COMMERCE & DETAILS
          ═══════════════════════════════════════════════════════ */}
      <section id="commerce" className="mt-20">
        <div className="px-8 py-3 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 mx-4 rounded-r-xl mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🛒 Commerce & Details</h2>
          <p className="text-gray-500 text-sm">Product features, sizing, and order components</p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Features */}
          <FeaturesUI 
            title="কেন এটা আলাদা করে নজর কাড়ে"
            description="শুধু সুন্দর নয়, আরামদায়কও। আমাদের প্রিমিয়াম কোয়ালিটির Quality Panjabi সেট আপনাকে দেবে এক অনন্য অভিজ্ঞতা।"
            tagline="এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।"
            features={[
              { text: "Premium Indian Embroidery কারুকাজ" },
              { text: "Soft, Skin-friendly ফ্যাব্রিক" },
              { text: "Perfect Fit — আরামদায়ক ও স্টাইলিশ" },
              { text: "ফ্রি পায়জামা সহ কমপ্লিট সেট" },
              { text: "৩ দিনের মধ্যে রিটার্ন/এক্সচেঞ্জ" },
            ]}
            ctaButton={{ text: "এখনই অর্ডার করুন", href: "#order-form" }}
            colors={{ primary: '#F36621', text: '#222F28', background: '#ffffff' }}
            whatsappNumber="+880 1712-508063"
          />

          {/* Design & Fit */}
          <DesignAndFitUI 
            title="ইন্ডিয়ান এমব্রয়ডারি,"
            subtitle="পাঞ্জাবি সাশ্রয় দামে - আজকের সেরা ডিল"
            imageCards={[
              { title: "ফিল:", description: "সফট, স্কিন-ফ্রেন্ডলি, আরামদায়ক", image: SAMPLE_IMAGES.product1, alt: "Premium Fabric" },
              { title: "থিকনেস:", description: "রাজকীয় কারুকাজে অভিজাত্যের ছোঁয়া", image: SAMPLE_IMAGES.product2, alt: "Thickness Quality" },
              { title: "ফ্রি অফার:", description: "প্রিমিয়াম কোয়ালিটির পায়জামা সম্পূর্ণ ফ্রি!", image: SAMPLE_IMAGES.product3, alt: "Free Offer" },
            ]}
            detailCards={[
              {
                title: "Design & Cut",
                items: [
                  { text: "Modern Quality silhouette" },
                  { text: "Clean finishing & elegant tailoring" },
                  { text: "এমন ডিজাইন যা আলাদা করে নজর কাড়ে" },
                ],
              },
              {
                title: "Fit & Styling",
                items: [
                  { text: "Comfortable fit – ঢিলাও না, আঁটসাঁটও না" },
                  { text: "Casual, festive বা semi-formal—সব জায়গায় মানানসই" },
                  { text: "Dupatta ও dress balance perfectly matched" },
                ],
              },
              {
                title: "Color & Variations",
                items: [
                  { text: "Trend-based colour selection" },
                  { text: "Limited colour runs (স্টক শেষ হলে আর আসবে না)" },
                ],
              },
            ]}
            ctaButton={{ text: "এখনই অর্ডার করুন", href: "#order-form" }}
            colors={{ primary: '#F36621', text: '#27272a', background: '#f3f4f6' }}
          />

          {/* Size Chart */}
          <SizeChartUI 
            title="সাইজ চার্ট"
            description="আপনার সঠিক সাইজ বেছে নিন"
            sizeData={[
              { measurement: "Chest", description: "বুকের মাপ (ফ্ল্যাট করে)", m: "43", l: "46", xl: "48", xxl: "50" },
              { measurement: "Length", description: "কাঁধ থেকে নিচ পর্যন্ত", m: "44", l: "44", xl: "45", xxl: "46" },
              { measurement: "Shoulder", description: "কাঁধের প্রস্থ", m: "18", l: "19", xl: "20", xxl: "21" },
              { measurement: "Sleeve", description: "হাতার দৈর্ঘ্য", m: "25", l: "25.5", xl: "26", xxl: "26.5" },
            ]}
            whatsappText="যেকোন প্রয়োজনে"
            whatsappNumber="01712508063"
            contactText="যোগাযোগ করুন"
            returnPolicy="অবশ্যই 100% কনফার্ম হয়ে অর্ডারটি করবেন। সাইজে প্রবলেম হলে অথবা অন্য কোন সমস্যা হলে রিটার্ন বা এক্সচেঞ্জ করে নিতে পারবেন ৩ দিনের ভেতরে।"
            colors={{ primary: '#10b981', text: '#27272a', background: '#ffffff' }}
          />

          {/* Order Form */}
          <OrderFormUI 
            title="অর্ডার ফর্ম"
            description="আপনার পছন্দের পণ্যটি অর্ডার করুন"
            productName="Premium Panjabi Set"
            productPrice="৳999"
            submitButtonText="অর্ডার কনফার্ম করুন"
            namePlaceholder="আপনার নাম"
            phonePlaceholder="মোবাইল নম্বর"
            addressPlaceholder="সম্পূর্ণ ঠিকানা"
            notesPlaceholder="অতিরিক্ত তথ্য (ঐচ্ছিক)"
            cashOnDeliveryText="ক্যাশ অন ডেলিভারি"
            shippingOptions={[
              { id: "inside", label: "ঢাকার ভেতরে (৬০ টাকা)", price: 60 },
              { id: "outside", label: "ঢাকার বাইরে (১২০ টাকা)", price: 120 },
            ]}
            primaryColor="#F36621"
            textColor="#27272a"
            backgroundColor="#ffffff"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: INFORMATION & TRUST
          ═══════════════════════════════════════════════════════ */}
      <section id="info" className="mt-20">
        <div className="px-8 py-3 bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 mx-4 rounded-r-xl mb-6">
          <h2 className="text-2xl font-bold text-gray-800">ℹ️ Information & Trust</h2>
          <p className="text-gray-500 text-sm">FAQ, quality assurance, and customer testimonials</p>
        </div>

        <div className="flex flex-col gap-16">
          {/* FAQ */}
          <FAQUI 
            heading="সচরাচর জিজ্ঞাসা"
            descriptionPart1="যেকোন প্রয়োজনে"
            descriptionPart2="আমাদের সাথে যোগাযোগ করুন"
            descriptionPart3="আমরা সবসময় আপনাদের সেবায় প্রস্তুত"
            contactLabel="WhatsApp"
            contactNumber="+880 1712-508063"
            faqs={[
              { question: "প্রোডাক্ট কি অরিজিনাল?", answer: "হ্যাঁ, আমাদের সকল প্রোডাক্ট ১০০% অরিজিন্যাল এবং প্রিমিয়াম কোয়ালিটির। প্রতিটি পণ্য কঠোর মান নিয়ন্ত্রণের মধ্য দিয়ে যায়।" },
              { question: "ডেলিভারি কত দিনে হয়?", answer: "ঢাকার ভেতরে ১-২ দিন, ঢাকার বাইরে ২-৪ দিনের মধ্যে ডেলিভারি দেওয়া হয়। প্রতিটি অর্ডারের জন্য ট্র্যাকিং নম্বর প্রদান করা হয়।" },
              { question: "রিটার্ন পলিসি কী?", answer: "ডেলিভারির ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করা যায়। প্রোডাক্ট অবশ্যই অব্যবহৃত এবং ট্যাগসহ থাকতে হবে।" },
              { question: "পেমেন্ট কিভাবে করবো?", answer: "ক্যাশ অন ডেলিভারি, বিকাশ, নগদ, এবং রকেটে পেমেন্ট করা যায়। অনলাইনে পেমেন্ট করলে বিশেষ ছাড় পাবেন।" },
              { question: "সাইজ কিভাবে বুঝব?", answer: "প্রতিটি প্রোডাক্টের সাথে বিস্তারিত সাইজ চার্ট দেওয়া থাকে। এছাড়া আমাদের WhatsApp-এ যোগাযোগ করলে সাইজ নির্বাচনে আমরা সাহায্য করব।" },
            ]}
            colors={{
              primary: '#F36621',
              background: '#fff7ed',
              faqBackground: '#ffffff',
            }}
          />

          {/* Quality */}
          <QualityUI 
            title="আমাদের কোয়ালিটি গ্যারান্টি"
            subtitle="প্রতিটি পণ্যে আমরা যা নিশ্চিত করি"
            imageCards={[
              { image: SAMPLE_IMAGES.quality1, title: "ফ্যাব্রিক টেস্ট", description: "প্রতিটি কাপড় ৫ ধাপে টেস্ট করা হয়", alt: "Fabric Testing" },
              { image: SAMPLE_IMAGES.quality2, title: "স্টিচিং", description: "ডাবল স্টিচ দিয়ে দীর্ঘস্থায়ী করা হয়", alt: "Stitching Quality" },
              { image: SAMPLE_IMAGES.quality3, title: "কালার ফাস্টনেস", description: "ধোয়ার পরেও রং থাকে অক্ষুণ্ণ", alt: "Color Fastness" },
            ]}
            detailCards={[
              {
                title: "Raw Material",
                items: [
                  { text: "100% Premium Cotton ব্যবহার করা হয়" },
                  { text: "Indian Embroidery Thread — ওয়াশেবল এবং টেকসই" },
                  { text: "Eco-friendly Dyes — ত্বকে নিরাপদ" },
                ],
              },
              {
                title: "Manufacturing",
                items: [
                  { text: "দক্ষ কারিগর দ্বারা হাতে তৈরি" },
                  { text: "প্রতিটি সেলাই মেশিন + হ্যান্ড ফিনিশিং" },
                  { text: "QC পাস না হলে প্রোডাক্ট রিজেক্ট" },
                ],
              },
              {
                title: "Packaging",
                items: [
                  { text: "প্রিমিয়াম বক্স প্যাকেজিং" },
                  { text: "গিফট-ready presentation" },
                ],
              },
            ]}
            ctaButton={{ text: "এখনই অর্ডার করুন", href: "#order-form" }}
            colors={{ primary: '#F36621', text: '#27272a', background: '#f3f4f6' }}
          />

          {/* Testimonials */}
          <TestimonialsUI 
            title="গ্রাহকের মতামত"
            description="আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট! প্রথম যোগাযোগ থেকে শুরু করে চূড়ান্ত ডেলিভারি পর্যন্ত আমরা সর্বোচ্চ মানের সেবা ও পণ্য দেওয়ার চেষ্টা করি।"
            images={[
              { src: SAMPLE_IMAGES.review1, alt: "Customer Review 1" },
              { src: SAMPLE_IMAGES.review2, alt: "Customer Review 2" },
              { src: SAMPLE_IMAGES.review3, alt: "Customer Review 3" },
              { src: SAMPLE_IMAGES.review4, alt: "Customer Review 4" },
              { src: SAMPLE_IMAGES.product1, alt: "Product Review 1" },
              { src: SAMPLE_IMAGES.product2, alt: "Product Review 2" },
              { src: SAMPLE_IMAGES.product3, alt: "Product Review 3" },
              { src: SAMPLE_IMAGES.product4, alt: "Product Review 4" },
            ]}
            loadMoreText="আরো দেখুন"
            loadingText="লোড হচ্ছে..."
            colors={{ primary: '#F36621', text: '#27272a', background: '#f3f4f6' }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: UTILITY COMPONENTS
          ═══════════════════════════════════════════════════════ */}
      <section id="utility" className="mt-20">
        <div className="px-8 py-3 bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 mx-4 rounded-r-xl mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🔧 Utility Components</h2>
          <p className="text-gray-500 text-sm">Buttons, headers, checklist items, and support widgets</p>
        </div>

        <div className="max-w-4xl mx-auto px-8 space-y-12">
          {/* Section Header */}
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-4 underline">SectionHeader</h3>
            <SectionHeader 
              title="এটা একটা সেকশন হেডার"
              description="এখানে সেকশনের বিবরণ থাকবে"
            />
          </div>

          {/* CheckListItem */}
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-4 underline">CheckListItem</h3>
            <ul className="space-y-2">
              <CheckListItem>প্রিমিয়াম কোয়ালিটির ফ্যাব্রিক</CheckListItem>
              <CheckListItem>১০০% মানি ব্যাক গ্যারান্টি</CheckListItem>
              <CheckListItem>ফ্রি হোম ডেলিভারি সারাদেশে</CheckListItem>
              <CheckListItem>৩ দিনের রিটার্ন পলিসি</CheckListItem>
            </ul>
          </div>

          {/* PrimaryButton Variants */}
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-4 underline">PrimaryButton</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <PrimaryButton href="#">এখনই কিনুন</PrimaryButton>
              <PrimaryButton variant="secondary">বিস্তারিত দেখুন</PrimaryButton>
              <PrimaryButton style={{ background: '#5b21b6' }}>কাস্টম কালার</PrimaryButton>
              <PrimaryButton style={{ background: '#10b981' }}>সবুজ বাটন</PrimaryButton>
            </div>
          </div>

          {/* Helpline */}
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-4 underline">Helpline</h3>
            <div className="flex items-center gap-6 flex-wrap">
              <Helpline />
              <Helpline whatsappNumber="+880 1912-345678" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gray-900 text-center text-gray-400 text-sm">
        <p>NeoComerz UI Component Library — Preview Mode</p>
        <p className="mt-1">Total Components: 18 | Version: 1.0.3</p>
      </footer>
    </div>
  );
}
