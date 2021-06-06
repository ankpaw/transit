import React from "react";
const Footer = (): JSX.Element => {
  return (
    <footer className="footer bg-white relative pt-1 border-b-2 border-black">
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6"></div>
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-black font-bold mb-2">
              © {new Date().getFullYear()} | @ankpaw 🧑🏻‍💻
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
