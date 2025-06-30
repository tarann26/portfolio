import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { personalInfo } from "../../data/portfolioData";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-foreground">
          <span className="text-gradient">Taranveer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button asChild variant="outline" size="sm">
            <a href={`mailto:${personalInfo.email}`} className="ml-2">
              Contact Me
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <NavLinks isMobile onClick={toggleMobileMenu} />
            <Button asChild variant="outline" size="sm" className="w-full">
              <a href={`mailto:${personalInfo.email}`}>Contact Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ isMobile, onClick }: NavLinksProps) => {
  const handleClick = () => {
    if (isMobile && onClick) {
      onClick();
    }
  };

  return (
    <>
      <a
        href="#about"
        className="hover:text-primary transition-colors"
        onClick={handleClick}
      >
        About
      </a>
      <a
        href="#skills"
        className="hover:text-primary transition-colors"
        onClick={handleClick}
      >
        Skills
      </a>
      <a
        href="#experience"
        className="hover:text-primary transition-colors"
        onClick={handleClick}
      >
        Experience
      </a>
      <a
        href="#projects"
        className="hover:text-primary transition-colors"
        onClick={handleClick}
      >
        Projects
      </a>
      <a
        href="#education"
        className="hover:text-primary transition-colors"
        onClick={handleClick}
      >
        Education
      </a>
    </>
  );
};

export default Navbar;
