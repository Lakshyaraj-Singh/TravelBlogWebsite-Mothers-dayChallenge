import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../locals.json";
import { Searchcard } from "./Searchcard";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const [allArticles, setAllArticles] = useState([]);
   
  const filteredArticles = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setAllArticles([]); 
    } else {
      const filtered = data.filter((article) =>
        article.title.toLowerCase().includes(value.toLowerCase())
      );
      setAllArticles(filtered);
    }
  };

  return (
    <div>
      <div className="navbar relative max-h-20 bg-base-100 shadow-sm">
        <div className="flex-1 invisible md:block">
          <Link to="/" className="btn-ghost font-bold text-xl">
            Personal Travel Blog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-medium" to="/about">
                About Me
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/categories">
                Categories
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="searchArticles flex flex-col gap-3 relative">
            <input
              value={query}
              onChange={filteredArticles}
              type="text"
              placeholder="Search articles..."
              className="input font-medium text-center input-bordered w-79 md:w-127"
            />
            {allArticles.length > 0 && (
              <div className="flex flex-col gap-1 overflow-y-scroll absolute max-h-80 w-100 md:w-127 left-36 md:left-0 md:right-1 z-50 top-17 bg-white rounded shadow-md p-2">
                {allArticles.map((article)=>(

                <Searchcard data={article} setQuery={setQuery}  />
                ))}
              </div>
            )}
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
