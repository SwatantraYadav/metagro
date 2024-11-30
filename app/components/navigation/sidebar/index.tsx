import Link from "next/link";
import { useEffect } from "react";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggle}
      ></div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          onClick={toggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <nav className="mt-16">
          <ul className="space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/press", label: "Press Releases" },
              { href: "/services", label: "Services" },
              { href: "/solutions", label: "PRUNEX" },
              { href: "/contacts", label: "Contacts" },
              { href: "/certificate", label: "Certificate" }, // Add this line
              { href: "/signin", label: "SignIn" }, 
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={toggle}>
                  <span className="block py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
