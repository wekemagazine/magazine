// components/Layout.js
import React from 'react';
import Header from './Header';
// import Footer from './Footer'; // Optional: Create and import a Footer component if needed

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        {children}
      </main>
      {/* <Footer /> */}
      {/* Basic Footer Example */}
      <footer className="bg-gray-100 py-4 mt-auto">
        <div className="container mx-auto text-center text-sm text-gray-600">
          © 2025 MelhoresOfertas. Todos os direitos reservados.
          {/* Add other footer links/info as needed */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;

