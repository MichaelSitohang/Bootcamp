    import React from "react";
    import commentsData from "./commentsData";

    // Komponen untuk menampilkan komentar
    const Comments = () => {
    return (
        <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {commentsData.map((commentsData, index) => (
            <div className="comment" key={index}>
            <a className="avatar">
                <img src={commentsData.avatar} alt="Avatar" />
            </a>

            <div className="content">
                <a className="author">{commentsData.author}</a>
                <div className="metadata">
                <span className="date">{commentsData.date}</span>
                </div>
                <div className="text">{commentsData.Comments}</div>
                <div className="actions">
                <a className="reply">Reply</a>
                </div>
            </div>
            </div>
        ))}
        </div>
    );
    };

    export default Comments;
