import './navigationSide.css';

import { IcRoundKeyboardArrowDown } from '../../assets/icons';

import { navigationData } from '../../data/navigation.data';
import { useState } from 'react';

export default function NavigationSide() {
  const [selectedCategory, setSelectedCategory] = useState('Getting Started');

  const [selectedSubCategory, setSelectedSubCategory] =
    useState('Installation');

  return (
    <nav className='nav-side'>
      {navigationData.map((category) =>
        selectedCategory === category.category ? (
          <ul key={category.id}>
            <button
              onClick={() => setSelectedCategory(category.category)}
              className='button nav-side-category-active flex-horizontal flex-align-center font-ml'
            >
              <IcRoundKeyboardArrowDown className='font-lg' />
              {category.category}
            </button>

            {category.subCategories.map((subCategory) =>
              selectedSubCategory === subCategory.subCategory ? (
                <li
                  key={subCategory.id}
                  className='font-md font-semi-bold spc-vt-sm spc-l-sm'
                >
                  <a
                    href={subCategory.link}
                    className='nav-side-sub-category nav-side-sub-category-active'
                  >
                    {subCategory.subCategory}
                  </a>
                </li>
              ) : (
                <li
                  key={subCategory.id}
                  className='font-md font-semi-bold spc-vt-sm spc-l-sm'
                >
                  <a href={subCategory.link} className='nav-side-sub-category'>
                    {subCategory.subCategory}
                  </a>
                </li>
              )
            )}
          </ul>
        ) : (
          <ul key={category.id}>
            <button
              onClick={() => setSelectedCategory(category.category)}
              className='button flex-horizontal flex-align-center font-ml'
            >
              <IcRoundKeyboardArrowDown className='font-lg' />
              {category.category}
            </button>
          </ul>
        )
      )}
    </nav>
  );
}
