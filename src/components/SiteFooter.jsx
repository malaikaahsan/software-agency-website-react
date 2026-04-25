import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 max-w-7xl mx-auto px-4 py-6 text-xs text-gray-500 text-center sm:text-left">
        <p>© {new Date().getFullYear()} MES Technology (Pvt) Ltd. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/privacy-terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacy-terms" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
