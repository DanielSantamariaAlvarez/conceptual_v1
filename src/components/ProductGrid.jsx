'use client';
import { useState } from 'react';
import Image from 'next/image';

const ProductGrid = ({ category }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    size: [],
    price: [],
    type: [],
  });

  // Datos de ejemplo para toda la ropa
  const products = [
    {
      id: 1,
      name: 'Top Asimétrico',
      price: '80.000',
      type: 'top',
      image: 'https://images.unsplash.com/photo-1602573991155-21f0143bb45c?q=80&w=1000',
    },
    {
      id: 2,
      name: 'Pantalón Cargo',
      price: '120.000',
      type: 'bottom',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000',
    },
    {
      id: 3,
      name: 'Vestido Verano',
      price: '90.000',
      type: 'dress',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000',
    },
    {
      id: 4,
      name: 'Set Coordinado',
      price: '150.000',
      type: 'set',
      image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=1000',
    },
    {
      id: 5,
      name: 'Blusa Seda',
      price: '75.000',
      type: 'top',
      image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1000',
    },
    {
      id: 6,
      name: 'Falda Plisada',
      price: '85.000',
      type: 'bottom',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000',
    },
    {
      id: 7,
      name: 'Vestido Noche',
      price: '180.000',
      type: 'dress',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000',
    },
  ];

  return (
    <div className="flex min-h-screen pt-40">
      {/* Sidebar de filtros */}
      <div className="w-1/4 fixed h-screen bg-white p-6 border-r overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Filtros</h2>
        
        {/* Filtro de Tipo */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Tipo</h3>
          <div className="space-y-2">
            {['Tops', 'Bottoms', 'Vestidos', 'Sets', 'Abrigos'].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro de Color */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Color</h3>
          <div className="space-y-2">
            {['Negro', 'Blanco', 'Beige', 'Azul', 'Rojo', 'Verde', 'Marrón'].map((color) => (
              <label key={color} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro de Talla */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Talla</h3>
          <div className="space-y-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <label key={size} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro de Precio */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Precio</h3>
          <div className="space-y-2">
            {['0-50.000', '50.000-100.000', '100.000-150.000', '150.000+'].map((range) => (
              <label key={range} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="w-3/4 ml-[25%] p-6">
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative h-[70vh] mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <p className="mt-2">{product.price}</p>
                    <p className="mt-1 text-sm">{product.type}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid; 