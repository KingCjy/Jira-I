import React from 'react';
import './Notfound.scss';

function Notfound() {
  return (
    <div className="notFound">
      <div className="title">404</div>
      <p className="sub_title">Page not found :)</p>
      <p className="content">
        페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>
    </div>
  );
}

export default Notfound;
