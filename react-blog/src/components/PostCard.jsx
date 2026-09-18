function PostCard({post}){
    return(
        <div className="post-card">
            <h2>{post.title}</h2>
            <p className="category">
                {post.category}
            </p>
            <p>{post.description}</p>
            <small>By {post.author}</small>
        </div>
    );
}
export default PostCard;