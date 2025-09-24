import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="logo.png" alt="Logo" className="w-auto h-20" />

        </Link>

        {/* Menu */}
        <nav className="space-x-6">
          <Link to="/" className="text-white text-lg font-medium hover:text-blue-600 transition">
            Trang chủ
          </Link>
          <Link to="/shops" className="text-white text-lg font-medium hover:text-blue-600 transition">
            Cửa hàng
          </Link>
          <Link to="/products" className="text-white text-lg  font-medium hover:text-blue-600 transition">
            Sản phẩm
          </Link>
          <Link to="/about" className="text-white font-medium text-lg hover:text-blue-600 transition">
            Giới thiệu
          </Link>
        </nav>


        {/* Nút đăng nhập */}
        <Link to="/login">
          <button>Đăng nhập</button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
