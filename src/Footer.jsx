import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="text-center p-10 bg-purple-200">
        <h2 className="text-3xl font-bold mb-10">This is footer</h2>
        <p>&copy; {year}</p>
      </footer>
    </>
  );
};

export default Footer;
