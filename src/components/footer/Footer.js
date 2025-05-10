import '../footer/Footer.css'


const Footer = ()=>{
    return (
        <footer>
            <div className="container">
                <div className="footer-title">
                    <h1>Stay in Touch</h1>
                    <div className="input">
                    <input type="text" placeholder='Enter your email address' />
                    <h2>Submit</h2>
                    </div>
                </div>
            </div>
            <div className="bg-footer">
            <div className="container footerBar">
                <div className="left-text">
                    <h1>Escape.</h1>
                </div>
                <div className="right-text">
                    <p>Home</p>
                    <p>Categories</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
               </div>
            </div>
        </footer>
    )
}

export default Footer