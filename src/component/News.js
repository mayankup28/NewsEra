import React,{useEffect, useState} from "react"
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


function News(props){
    const[articles,setarticles]=useState([])
    const[loading,setloading]=useState(true)
    const[page,setpage]=useState(1)
    const[totalResults,settotalResults]=useState(1)
    
    const updatepage=async()=>{
        props.changeProgress(10)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0dad799f28d741aa979a0ca0e8f96590&page=${page}&pageSize=${props.pageSize}`
        setloading(true)
        let data= await fetch(url)
        props.changeProgress(30)
        let parsedata=await data.json()
        props.changeProgress(60)
        console.log(parsedata)
        setarticles(parsedata.articles)
        settotalResults(parsedata.totalResults)
        setloading(false)
        props.changeProgress(100)
    }
    useEffect(()=>{
        document.title=props.category
        updatepage()
    },[])

    const NextClicks=async()=>{
    setpage(page+1)
    updatepage()
    }
    
    const PreClicks=async()=>{
        setpage(page-1)
        updatepage()
    }

    const fetchMoreData =async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0dad799f28d741aa979a0ca0e8f96590&page=${page+1}&pageSize=${props.pageSize}`
        setpage(page+1)
        let data= await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        setarticles(articles.concat(parsedata.articles))
        settotalResults(parsedata.totalResults)
        };


        return(
            <>
                <h2 className="text-center" style={{marginTop:'80px'}}>NewsEra-Top Headlines on {props.category}</h2>
                {loading&&<Spinner/>}
                <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles!==totalResults}
            loader={<Spinner/>}
        >
            <div className="container">
                <div className="row">
                {articles.map((ele)=>{
                    return <div className="col-md-4" key={ele.url}>
                    <NewsItem title={ele.title?ele.title.slice(0,45):""} description={ele.description?ele.description.slice(0,88):""} imgurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
                        </div>
                })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.PreClicks}>&larr; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.NextClicks}>Next &rarr;</button>
                </div> */}
            </>
        )
}
News.defaultprop={
    country:'in',
    pageSize:5,
    category:'general'
}
News.propsTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}
export default News;