import '../cards/Cards.css'
import photo from '../../assets/Frame (30).png'
import photo2 from '../../assets/IMAGE (1).svg'
import photo3 from '../../assets/IMAGE.svg'
import photo4 from '../../assets/Frame (31).png'
import photo5 from '../../assets/Frame (32).png'
import photo6 from '../../assets/IMAGE (13).png'
import photo7 from '../../assets/IMAGE (14).png'
import photo8 from '../../assets/IMAGE (15).png'


const Cards = () =>{
    return (
        <>
         <h1 className='cards-text'>Most Recent</h1>
        <div className="container cards">
            <div className="card">
                <img src={photo} alt="" />
                <h2>Still Standing Tall</h2>
                <p>Life begins at the end of your comfort zone.</p>
                <div className="flex">
                <div className="text">
                    <img src={photo2} alt="" />
                    <span>Mat Vogels</span>
                </div>
                <span>9/25/2015</span>
                </div>
            </div>

            <div className="card">
                <img src={photo4} alt="" />
                <h2>Sunny Side Up</h2>
                <p>No place is ever as bad as they tell you it’s going to be.</p>
                <div className="flex">
                <div className="text">
                    <img src={photo3} alt="" />
                    <span>Mat Vogels</span>
                </div>
                <span>9/25/2015</span>
                </div>
            </div>

            <div className="card">
                <img src={photo5} alt="" />
                <h2>Water Falls</h2>
                <p>We travel not to escape life, but for life not to escape us.</p>
                <div className="flex">
                <div className="text">
                    <img src={photo3} alt="" />
                    <span>Mat Vogels</span>
                </div>
                <span>9/25/2015</span>
                </div>
            </div>

            <div className="card">
            <img src={photo6} alt="" />
            <h2>Through the Mist</h2>
            <p>Travel makes you see what a tiny place you occupy in the world.</p>
            <div className="flex">
            <div className="text">
                <img src={photo2} alt="" />
                <span>Mat Vogels</span>
            </div>
            <span>9/25/2015</span>
            </div>
        </div>

        <div className="card">
            <img src={photo7} alt="" />
            <h2>Awaken Early</h2>
            <p>Not all those who wander are lost.</p>
            <div className="flex2">
            <div className="text">
                <img src={photo3} alt="" />
                <span>Mat Vogels</span>
            </div>
            <span>9/25/2015</span>
            </div>
        </div>

        <div className="card">
            <img src={photo8} alt="" />
            <h2>Try it Always</h2>
            <p>The world is a book, and those who do not travel read only one page.</p>
            <div className="flex">
            <div className="text">
                <img src={photo3} alt="" />
                <span>Mat Vogels</span>
            </div>
            <span>9/25/2015</span>
            </div>
        </div>
        </div>
</>
    )
}

export default Cards
