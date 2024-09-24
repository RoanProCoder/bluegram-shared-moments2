import React from 'react';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Bluegram</h1>
        <nav className="flex space-x-4">
          <Home className="text-blue-600" />
          <Search className="text-blue-600" />
          <PlusSquare className="text-blue-600" />
          <Heart className="text-blue-600" />
          <User className="text-blue-600" />
        </nav>
      </div>
    </header>
  );
};

export default Header;