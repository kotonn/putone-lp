import React from 'react'
import { Jumbotron } from './migration'
import { NavLink } from './migration'

const Created = ({ gradient }) => {
  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(to bottom,${gradient})`,
        backgroundSize: 'cover',
      }}
      className="title bg-transparent bgstyle text-light vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div className="created-container">
        <p className="created-text">
          登録が完了しました。アプリがリリースされた際にはメールをお送りさせて頂きます。
        </p>
        <NavLink href={process.env.PUBLIC_URL + '/#home'}>
          <p className="created-return">ホームに戻る</p>
        </NavLink>
      </div>
    </Jumbotron>
  )
}

Created.propTypes = {
  gradient: Jumbotron.propTypes.style,
}

export default Created
