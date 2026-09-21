import React from 'react';
import { 
  ShoppingBag, 
  Apple, 
  Salad, 
  Cookie, 
  Dumbbell, 
  Smartphone, 
  Sparkles, 
  Home, 
  Brush, 
  Baby, 
  PawPrint, 
  Shirt,
  Info,
  Layers
} from 'lucide-react';
import { CategoryCardItem } from '../types/index.ts';

export const Categories: React.FC = () => {
  const categories: (CategoryCardItem & { icon: React.ReactNode })[] = [
    {
      id: 'groceries-pantry',
      number: '01',
      title: 'Groceries & Pantry',
      description: 'Rice, atta, cooking oil, spices and everyday staples.',
      badge: 'Everyday Essentials',
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'fruits-vegetables-dairy',
      number: '02',
      title: 'Fruits, Vegetables & Dairy',
      description: 'Fresh produce, milk, curd, paneer and other daily essentials.',
      badge: 'Fresh & Daily',
      icon: <Apple className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'healthy-food-choices',
      number: '03',
      title: 'Healthy Food Choices',
      description: 'Explore food options using available ingredient, nutrition, quantity and price information.',
      badge: 'Nutritional Clarity',
      icon: <Salad className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'kids-food-snacks',
      number: '04',
      title: "Kids' Food & Snacks",
      description: 'Discover age-appropriate food and snack options using available product information, ingredient labels and relevant dietary considerations.',
      badge: 'Family & Nutrition',
      icon: <Cookie className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'fitness-high-protein',
      number: '05',
      title: 'Fitness & High-Protein Foods',
      description: 'Compare everyday protein-rich foods and fitness-oriented groceries using available nutrition, serving-size and price information.',
      badge: 'Active Lifestyle',
      icon: <Dumbbell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'electronics-phones',
      number: '06',
      title: 'Electronics & Phones',
      description: 'Explore phones, earbuds, chargers and other electronics using relevant specifications and available shopping information.',
      badge: 'Tech & Gadgets',
      icon: <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'beauty-personal-care',
      number: '07',
      title: 'Beauty & Personal Care',
      description: 'Skincare, haircare, hygiene and personal-care essentials.',
      badge: 'Self Care',
      icon: <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'home-kitchen',
      number: '08',
      title: 'Home & Kitchen',
      description: 'Kitchen tools, storage, cookware and household accessories.',
      badge: 'Living & Dining',
      icon: <Home className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'household-cleaning',
      number: '09',
      title: 'Household & Cleaning',
      description: 'Laundry products, surface cleaners and everyday home-care supplies.',
      badge: 'Home Hygiene',
      icon: <Brush className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'baby-care',
      number: '10',
      title: 'Baby Care',
      description: 'Diapers, baby-care essentials and other relevant products.',
      badge: 'Infant Essentials',
      icon: <Baby className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'pet-care',
      number: '11',
      title: 'Pet Care',
      description: 'Pet food, grooming products and everyday pet supplies.',
      badge: 'Pet Supplies',
      icon: <PawPrint className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: 'fashion-accessories-stationery',
      number: '12',
      title: 'Fashion, Accessories & Stationery',
      description: 'Everyday accessories, clothing essentials, notebooks and school or office supplies.',
      badge: 'Daily Utility',
      icon: <Shirt className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section
      id="categories"
      className="relative py-16 md:py-24 bg-[#fafbfc] dark:bg-[#070b11] border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 transition-colors"
      aria-labelledby="categories-main-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
            <span>Intended Coverage</span>
          </div>

          <h2
            id="categories-main-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Shop Across Everyday Categories
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From daily essentials to electronics and thoughtful food choices, QuickBachat is being designed to help you explore products, understand your options and compare value across shopping categories.
          </p>
        </div>

        {/* 12 Category Cards Grid (4 columns on lg, 3 on md, 2 on sm, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.id}`}
              className="group relative bg-white dark:bg-slate-900/90 hover:bg-slate-50/70 dark:hover:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Number Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100/80 dark:group-hover:bg-emerald-900/60 group-hover:border-emerald-200 dark:group-hover:border-emerald-700 transition-colors">
                    {category.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-100 dark:border-slate-700">
                    {category.number}
                  </span>
                </div>

                {/* Title & Badge */}
                <div className="space-y-1 mb-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-950 dark:group-hover:text-emerald-200 transition-colors">
                    {category.title}
                  </h3>
                  {category.badge && (
                    <span className="inline-block text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-800">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {category.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                <span className="font-medium text-slate-500 dark:text-slate-400">Planned Catalog</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Pre-Launch</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footnote / Disclaimer */}
        <div
          id="categories-section-footnote"
          className="mt-12 max-w-3xl mx-auto rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 flex items-start gap-3 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Category availability, product information and comparison options will depend on supported retailers, authorized data access and the shopper's location.
          </p>
        </div>

      </div>
    </section>
  );
};
