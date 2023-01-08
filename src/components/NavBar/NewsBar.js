import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Ticker from "react-ticker";
import Link from "next/link";
import useSWR from "swr";
import { withTheme } from "styled-components";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

function NewsBar(props) {
  const [news, setNews] = useState([]);
  const { data } = useSWR("/api/newsfeeds", fetcher);
  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-05-08&sortBy=publishedAt&apiKey=1c7d1f64055c4caa80e0113c6c8adb41"
      );
      if (response.data.status == "ok") {
        console.log("koko");
        setNews(response.data.articles);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(response.data);
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <Fragment>
      <div className="newsBar">
        <div className="title">Latest news</div>
        <div className="links_to_news">
          {/* {news.length > 0 ? (
            <marquee>
              {news.map((singleNews, index) => (
                <New singleNews={singleNews} key={index} />
              ))}
            </marquee>
          ) : (
            "Loading News, Please Wait ..."
          )} */}
          {data ? (
            data?.data?.length > 0 ? (
              <marquee style={{ width: "100%" }} scrollamount={1}>
                {data?.data?.map((item, index) => (
                  <Link href={`/company-news/${item._id}`} key={index}>
                    <a style={{ color: "#fff", fontSize: "12px" }}>
                      <span> * {item.title}</span>
                    </a>
                  </Link>
                ))}
              </marquee>
            ) : (
              "No News Uploaded"
            )
          ) : (
            "Loading News, Please Wait ..."
          )}
        </div>
      </div>
      <style jsx>{`
        .newsBar {
          background-color: #001218;
          color: #fff;
          padding: 5px;
          display: flex;
        }
        .newsBar .title {
          border-right: 2px solid gray;
          padding-right: 10px;
          flex-shrink: 0;
          text-decoration: none !important;
          color: ${props.theme.colors.yellow};
          text-transform: uppercase;
          font-weight: 600;
        }
        .newsBar .links_to_news {
          padding: 0px 10px;
          flex-grow: 1;
        }
        .newsBar .links_to_news marquee a {
          color: #fff !important;
        }
        .newsBar .links_to_news:hover marquee {
          scroll: none;
        }
        @media only screen and (max-width: 480px) {
          .newsBar {
            display: none;
          }
        }
      `}</style>
    </Fragment>
  );
}

export default withTheme(NewsBar);

const New = ({ singleNews }) => {
  console.log({ singleNews });
  return (
    <>
      <a
        href={singleNews.url}
        target="_blank"
        style={{
          color: "#fff",
          textTransform: "capitalize",
        }}
      >
        {singleNews.title}
      </a>
      <span> ******** </span>
    </>
  );
};
