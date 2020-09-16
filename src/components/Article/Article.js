import React,{Fragment}  from 'react'
import s from './Article.module.css';

function Article({ post }) {
    return (
        <Fragment>
        <div className={s.post_wrapper}>
            <img alt="news-img" className={s.post_img} src={post.url}></img>
            <div>
                <h3 className={s.title}>{post.title}</h3>
                <p className={s.text}>{post.text}</p>
                <p className={s.published}>{post.published}</p>
            </div>
        </div>
        </Fragment>
    )
}

export default Article

