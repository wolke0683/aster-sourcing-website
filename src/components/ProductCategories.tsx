import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faFootballBall, faGamepad } from '@fortawesome/free-solid-svg-icons';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Category {
  name: string;
  icon: string;
  description: string;
}

interface ProductCategoriesData {
  categories: Category[];
  layout: {
    columns: number;
    spacing: string;
    background: string;
    text_align: string;
    card_style: {
      padding: string;
      border_radius: string;
      box_shadow: string;
      hover: {
        transform: string;
        transition: string;
      };
    };
  };
}

const ProductCategories = () => {
  // Fetch categories data
  const fetchData = async (): Promise<ProductCategoriesData> => {
    const response = await fetch('/data/product_categories.json');
    const data = await response.json();
    
    // Define priority categories that should appear first
    const priorityCategories = ['Packaging', 'Outdoor', 'Bags & Cases', 'Sports', 'Garden & Tools'];
    
    // Sort categories to put priority ones first
    data.categories.sort((a: any, b: any) => {
      const aIndex = priorityCategories.indexOf(a.name);
      const bIndex = priorityCategories.indexOf(b.name);
      
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
    
    return data;
  };

  const [categoriesData, setCategoriesData] = useState<ProductCategoriesData | null>(null);

  useEffect(() => {
    fetchData().then(setCategoriesData);
  }, []);

  // Function to get FontAwesome icon from string name
  const getIcon = (iconName: string): IconDefinition => {
    // Special cases for our updated icons
    if (iconName === 'fas fa-box-open') return faBoxOpen;
    if (iconName === 'fas fa-football-ball') return faFootballBall;
    if (iconName === 'fas fa-gamepad') return faGamepad;

    // Default handling for other icons
    const iconKey = iconName.replace('fas fa-', '');
    const capitalizedKey = `fa${iconKey.charAt(0).toUpperCase()}${iconKey.slice(1)}` as keyof typeof Icons;
    const icon = Icons[capitalizedKey];
    return (typeof icon === 'object' && icon !== null) ? icon as IconDefinition : Icons.faBox;
  };

  if (!categoriesData) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categoriesData.categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:-translate-y-1 transform transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 hover:shadow-lg"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                <FontAwesomeIcon
                  icon={getIcon(category.icon)}
                  className="text-primary text-2xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;