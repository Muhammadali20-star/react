import '../posts/Posts.css'
import photo from '../../assets/IMAGE.svg'
import rasm from '../../assets/IMAGE (1).svg'

const Posts = ()=>{
    return(
        <div className="container posts-title">
            <h1>Featured Posts</h1>
        <div className="grid">
            <div className="left-img">
                <h1>The Road Ahead</h1>
                <p>The road ahead might be paved - it might not be.</p>
                <div className="posts-left-flex">
                    <div className="text">
                    <img src={photo} alt="" />
                    <span>Mat Vogels</span>
                    </div>
                    <span>September 25, 2015</span>
                </div>
            </div>
            <div className="right-img">
                <h1>From Top Down</h1>
                <p>Once a year, go someplace you’ve never been before.</p>
                <div className="posts-right-flex">
                    <div className="text">
                    <img src={rasm} alt="" />
                    <span>William Wong</span>
                    </div>
                    <span>September 25, 2015</span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Posts