import React from "react"
function NewsItem(props){
        let {title,description,imgurl,newsurl,author,date,source}=props;
        return(
            <div className="my-3"> 
                <div className="card">
                {/* 0dad799f28d741aa979a0ca0e8f96590&page */}
                    <div style={{display:'flex',
                justifyContent:'flex-end',
                position:'absolute',
                right:'0'}}>
                <span className="badge rounded-pill bg-danger"> {source}</span>
                    </div>
                <img src={!imgurl?"https://c.ndtvimg.com/2022-05/5npebf0g_citi-trader_625x300_03_May_22.jpg":imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Explore More</a>
            </div>
            </div>
            </div>
        )
}
export default NewsItem;