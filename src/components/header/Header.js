import "../header/Header.css"

const Header = () =>{
    return (
        <header>
            <div className="container">
              <nav>
              <div className="navText">
                    <h1>Escape.</h1>
                </div>
                <div className="navLink">
                <h4>Home</h4>
                <h4>Categories</h4>
                <h4>About</h4>
                <h4>Contact</h4>
                </div>
              </nav>
              <div className="header-title">
                <h1>Let's do it together.</h1>
                <p>We travel the world in search of stories. Come along for the ride.</p>
                <button>View Latest Posts</button>
              </div>
            </div>
        </header>
    )
}
export default Header