import React from 'react'

const News = () => {
  return (
    <>
      <section
        id="top-news"
        className="top-news"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="300"
      >
        <div className="top-news__container">
          <div className="top-news__heading">
            <h2 className="page-heading">
              <div className="page-heading__content--center">
                <div className="page-heading__text-main">ニュース</div>
                <div className="page-heading__text-sub">新着情報</div>
              </div>
            </h2>
          </div>
          <ul className="top-news__list">
            <li className="top-news__list-item">
              <article className="news-item">
                <div className="news-item__container">
                  <div className="news-item__date">2023/08/01</div>
                  <div className="news-item__category">
                    <span className="news-item__category-label">サービス</span>
                  </div>
                </div>
                <a href="/" className="news-item__title">
                  モバイルアプリ『PuTone』リリース予定
                </a>
              </article>
            </li>
            <li className="top-news__list-item">
              <article className="news-item">
                <div className="news-item__container">
                  <div className="news-item__date">2023/07/10</div>
                  <div className="news-item__category">
                    <span className="news-item__category-label">SNS</span>
                  </div>
                </div>
                <a href="/" className="news-item__title">
                  『PuTone』公式Instagramアカウント開設
                </a>
              </article>
            </li>
            <li className="top-news__list-item">
              <article className="news-item">
                <div className="news-item__container">
                  <div className="news-item__date">2023/04/01</div>
                  <div className="news-item__category">
                    <span className="news-item__category-label">企業情報</span>
                  </div>
                </div>
                <a href="/" className="news-item__title">
                  『Putone』始動
                </a>
              </article>
            </li>
          </ul>
          {/* <div className="top-news__guide">
            <a href="./news.html" className="button-guide">
              もっと見る
            </a>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default News
