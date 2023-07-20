import React from 'react'

const Functions = () => {
  return (
    <>
      <section
        id="function"
        className="top-service"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="300"
      >
        <div className="top-service__container">
          <div className="top-service__heading">
            <h2 className="page-heading">
              <div className="page-heading__content--center">
                <div className="page-heading__text-main">機能</div>
                <div className="page-heading__text-sub">
                  『PuTone』で利用可能な機能は以下の通りです。
                </div>
              </div>
            </h2>
          </div>
          <div className="top-service__list">
            <div className="top-service__list-item">
              <div className="service-feature-item">
                <figure className="service-feature-item__thumbnail">
                  <img
                    src="home-screen.jpg"
                    className="service-feature-item__thumbnail-image"
                  />
                </figure>
                <div className="service-feature-item__content">
                  <h4 className="service-feature-item__content-title">
                    ホーム
                  </h4>
                  <div className="service-feature-item__content-text">
                    ここから感性に溢れる投稿や音楽に触れよう！
                  </div>
                </div>
              </div>
            </div>
            <div className="top-service__list-item">
              <div className="service-feature-item">
                <figure className="service-feature-item__thumbnail">
                  <img
                    src="story-screen.jpg"
                    className="service-feature-item__thumbnail-image"
                  />
                </figure>
                <div className="service-feature-item__content">
                  <h4 className="service-feature-item__content-title">
                    お気に入り曲共有機能
                  </h4>
                  <div className="service-feature-item__content-text">
                    ストリーミングサービスでお気に入りした曲がPuToneに自動でシェアされるから、気に入ったらお気に入りボタンを押すだけで即シェアできる！
                  </div>
                </div>
              </div>
            </div>
            <div className="top-service__list-item">
              <div className="service-feature-item">
                <figure className="service-feature-item__thumbnail">
                  <img
                    src="pass-screen.jpg"
                    className="service-feature-item__thumbnail-image"
                  />
                </figure>
                <div className="service-feature-item__content">
                  <h4 className="service-feature-item__content-title">
                    すれ違い機能
                  </h4>
                  <div className="service-feature-item__content-text">
                    すれ違った人とおすすめしたい曲を交換し合って、一期一会の音楽との出会いを楽しもう！
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-service__list">
            <div className="top-service__list-item">
              <div className="service-feature-item">
                <figure className="service-feature-item__thumbnail">
                  <img
                    src="real-screen.jpg"
                    className="service-feature-item__thumbnail-image"
                  />
                </figure>
                <div className="service-feature-item__content">
                  <h4 className="service-feature-item__content-title">
                    リアルタイム音楽共有
                  </h4>
                  <div className="service-feature-item__content-text">
                    友達と音楽ストリーミングサービスで今聴いている曲をリアルタイムでシェアしあおう！
                  </div>
                </div>
              </div>
            </div>
            <div className="top-service__list-item">
              <div className="service-feature-item">
                <figure className="service-feature-item__thumbnail">
                  <img
                    src="friend-screen.jpg"
                    className="service-feature-item__thumbnail-image"
                  />
                </figure>
                <div className="service-feature-item__content">
                  <h4 className="service-feature-item__content-title">
                    コミュニティでの友達探し機能
                  </h4>
                  <div className="service-feature-item__content-text">
                    大学やサークルなどの同じコミュニティ内で、共通のお気に入りアーティストを持つ友達と繋がろう！
                  </div>
                </div>
              </div>
            </div>
            <div className="top-service__list-item">
              <div className="service-feature-item">
                <figure className="service-feature-item__thumbnail">
                  <img
                    src="post-screen.jpg"
                    className="service-feature-item__thumbnail-image"
                  />
                </figure>
                <div className="service-feature-item__content">
                  <h4 className="service-feature-item__content-title">
                    投稿機能
                  </h4>
                  <div className="service-feature-item__content-text">
                    自分の感じたことをみんなに共有しよう！
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="top-service__guide">
            <a href="./service.html" className="button-guide">
              もっと見る
            </a>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Functions
