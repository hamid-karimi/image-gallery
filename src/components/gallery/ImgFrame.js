import React, { useState } from 'react'


const ImgFrame = ({ src, h, author }) => {
  const [show, setShow] = useState(0);

  return (
    <div className={"imgframe " + (show ? 'pop' : '')} style={{ height: h }}>
      <img className={show ? "mainimgpop" : "mainimg"} src={src} height={h} onClick={() => setShow(show ? 0 : 1)}/>
      <span className={(show ? 'show' : 'close')} onClick={() => setShow(0)}>X</span>
      <div className="actions">
        <span className={show ? 'hide' : ''} >{author}</span>
        <div className={show ? '' : 'hide'}>
          {author}
        </div>
        <button onClick={() => window.location = src}>Download</button>
      </div>
    </div>
  )
}

export default ImgFrame