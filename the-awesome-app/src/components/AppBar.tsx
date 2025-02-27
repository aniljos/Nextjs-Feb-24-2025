'use client'
import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";
export default function AppBar(){

    const theme = useContext(AppThemeContext);
    const mode = theme.mode;

    function changeTheme(){
      theme.changeMode(theme.mode === "dark" ? "light" : "dark");
      console.log("theme mode", theme.mode);
    }

    return (
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
              <Link className="navbar-brand" href="#">Next.js</Link>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link"  href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/gadgets">Gadgets Store</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/view-cart">View Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/customers">Customers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">Login</Link>
                </li>
                <li>
                  <button className="btn btn-warning" onClick={changeTheme}>Switch Theme</button>
                </li>
              </ul>
            </div>
          </nav>
    )
}