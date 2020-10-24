
import React from 'react'

const CommentDetail = ({ avatar, author, date, text }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{JSON.stringify(date)}</span>
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    )
}

export default CommentDetail

