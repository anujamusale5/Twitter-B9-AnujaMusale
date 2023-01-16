import './Trending.css'
function Trending(props)
{
    return(
        <div className="trendingmain">
        <p className="header-small">{props.data.header}</p>
        <p className="text">{props.data.text}</p>
        <p className="header-small">{props.data.Tweetcount}</p>
        </div>
    )
}
export default Trending;