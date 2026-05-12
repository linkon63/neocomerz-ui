'use client';

import React, { useState } from 'react';
import HeroPreview          from './previews/HeroPreview';
import LayeredHeroPreview   from './previews/LayeredHeroPreview';
import InlineHeroPreview    from './previews/InlineHeroPreview';
import FeaturesPreview      from './previews/FeaturesPreview';
import DesignAndFitPreview  from './previews/DesignAndFitPreview';
import FAQPreview           from './previews/FAQPreview';
import GalleryPreview       from './previews/GalleryPreview';
import QualityPreview       from './previews/QualityPreview';
import SizeChartPreview     from './previews/SizeChartPreview';
import TestimonialsPreview  from './previews/TestimonialsPreview';
import CheckListItemPreview from './previews/CheckListItemPreview';
import SectionHeaderPreview from './previews/SectionHeaderPreview';
import HelplinePreview      from './previews/HelplinePreview';
import OrderFormPreview     from './previews/OrderFormPreview';

// ─── Nav Groups ──────────────────────────────────────────────────────────────
const NAV_GROUPS = [
  { id: 'hero',          label: 'Hero',           icon: '🖼️',  count: 8  },
  { id: 'layeredhero',   label: 'Layered Hero',   icon: '🎨',  count: 6  },
  { id: 'inlinehero',    label: 'Inline Hero',    icon: '⚡',  count: 2  },
  { id: 'features',      label: 'Features',       icon: '✨',  count: 6  },
  { id: 'designandfit',  label: 'Design & Fit',   icon: '👗',  count: 6  },
  { id: 'faq',           label: 'FAQ',            icon: '❓',  count: 6  },
  { id: 'gallery',       label: 'Gallery',        icon: '🖼️',  count: 18 },
  { id: 'quality',       label: 'Quality',        icon: '🏆',  count: 6  },
  { id: 'sizechart',     label: 'Size Chart',     icon: '📏',  count: 6  },
  { id: 'testimonials',  label: 'Testimonials',   icon: '💬',  count: 6  },
  { id: 'checklistitem', label: 'CheckListItem',  icon: '✅',  count: 6  },
  { id: 'sectionheader', label: 'SectionHeader',  icon: '📌',  count: 6  },
  { id: 'helpline',      label: 'Helpline',       icon: '📞',  count: 6  },
  { id: 'orderform',     label: 'Order Form',     icon: '🛒',  count: 1  },
];

const PREVIEW_MAP: Record<string, React.ReactNode> = {
  hero:          <HeroPreview />,
  layeredhero:   <LayeredHeroPreview />,
  inlinehero:    <InlineHeroPreview />,
  features:      <FeaturesPreview />,
  designandfit:  <DesignAndFitPreview />,
  faq:           <FAQPreview />,
  gallery:       <GalleryPreview />,
  quality:       <QualityPreview />,
  sizechart:     <SizeChartPreview />,
  testimonials:  <TestimonialsPreview />,
  checklistitem: <CheckListItemPreview />,
  sectionheader: <SectionHeaderPreview />,
  helpline:      <HelplinePreview />,
  orderform:     <OrderFormPreview />,
};

const TOTAL = NAV_GROUPS.reduce((a, g) => a + g.count, 0);

export default function PreviewPage() {
  const [active, setActive] = useState('hero');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeGroup = NAV_GROUPS.find(g => g.id === active);

  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden font-sans">

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside
        className={`${
          sidebarOpen ? 'w-60' : 'w-0 overflow-hidden'
        } flex-shrink-0 bg-gray-950 border-r border-gray-800/70 flex flex-col transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="px-4 pt-5 pb-4 border-b border-gray-800/70 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-900/40 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h1 className="text-sm font-bold text-white leading-tight truncate">NeoComerz UI</h1>
              <p className="text-[10px] text-gray-500 mt-0.5">Component Library</p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="px-4 py-2.5 border-b border-gray-800/70 flex items-center gap-4 flex-shrink-0">
          <div className="text-center">
            <p className="text-sm font-bold text-orange-400">{TOTAL}</p>
            <p className="text-[9px] text-gray-600 uppercase tracking-wider">Components</p>
          </div>
          <div className="w-px h-6 bg-gray-800" />
          <div className="text-center">
            <p className="text-sm font-bold text-gray-300">{NAV_GROUPS.length}</p>
            <p className="text-[9px] text-gray-600 uppercase tracking-wider">Sections</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-2 px-2 scrollbar-thin">
          <p className="px-2 pt-1 pb-2 text-[9px] font-semibold text-gray-600 uppercase tracking-widest">
            Sections
          </p>
          {NAV_GROUPS.map((group) => {
            const isActive = active === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActive(group.id)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg mb-0.5 text-left transition-all duration-150 ${
                  isActive
                    ? 'bg-orange-500/15 text-orange-400 border border-orange-500/25'
                    : 'text-gray-400 hover:bg-gray-800/60 hover:text-gray-200 border border-transparent'
                }`}
              >
                <span className="text-sm flex-shrink-0 w-5 text-center">{group.icon}</span>
                <span className="text-xs font-medium flex-1 truncate">{group.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 ${
                  isActive
                    ? 'bg-orange-500/20 text-orange-400'
                    : 'bg-gray-800 text-gray-500'
                }`}>
                  {group.count}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-800/70 flex-shrink-0">
          <p className="text-[10px] text-gray-600">v1.0.3 · MIT License</p>
        </div>
      </aside>

      {/* ── Main Area ───────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* Top Bar */}
        <header className="flex-shrink-0 bg-gray-950 border-b border-gray-800/70 px-4 py-3 flex items-center gap-3">
          {/* Sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-md hover:bg-gray-800 text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0"
            title="Toggle sidebar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="h-4 w-px bg-gray-800 flex-shrink-0" />

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-gray-600 text-xs flex-shrink-0">Preview</span>
            <svg className="w-3 h-3 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-sm font-semibold text-white truncate">
              {activeGroup?.icon} {activeGroup?.label}
            </span>
          </div>

          {/* Variant count pill */}
          <div className="ml-auto flex items-center gap-2 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full border border-gray-700/60">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
              {activeGroup?.count} variant{(activeGroup?.count ?? 0) > 1 ? 's' : ''}
            </span>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="min-h-full">
            {PREVIEW_MAP[active]}
          </div>
        </main>
      </div>
    </div>
  );
}
