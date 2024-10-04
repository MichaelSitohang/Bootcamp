import React, { Component } from "react";
import commentsData from "./commentsData";
import LikeButton from "./likeButton";
import LikeCount from "./likeCount";

// Komponen Class untuk menampilkan komentar
class CommentsClass extends Component {
  constructor(props) {
    super(props);


// Inisialisasi state untuk menyimpan jumlah like per komentar
    this.state = {
      likes: Array(commentsData.length).fill(0), // Array dengan 0 untuk setiap komentar
    };
  }

  // Fungsi untuk menambah jumlah like pada komentar tertentu
  handleLikeClick = (index) => {
    const newLikes = [...this.state.likes]; // Salin array likes
    newLikes[index] += 1; // Tambah jumlah like pada index tertentu
    this.setState({ likes: newLikes }); // Update state
  };

  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {commentsData.map((comment, index) => (
          <div className="comment" key={index}>
            <a className="avatar">
              <img src={comment.avatar} alt="Avatar" />
            </a>

            <div className="content">
              <a className="author">{comment.author}</a>
              <div className="metadata">
                <span className="date">{comment.date}</span>

                {/* Menampilkan jumlah like di sebelah tanggal */}
                <LikeCount count={this.state.likes[index]} />
              </div>
              <div className="text">{comment.Comments}</div>
              <div className="actions">
                
                {/* Tombol Like di bawah tanggal */}
                <LikeButton handleClick={() => this.handleLikeClick(index)} />
                <a className="reply">Reply</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentsClass;
