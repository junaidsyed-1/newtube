import Comment from "./Comment";

const CommentsList = ({ comments }) => {
    console.log(comments)
    return comments.map((comment, i) => <div key={i}>
        <Comment data={comment} />
        <div className="ml-4 border border-l-black">
            <CommentsList comments={comment.replies} />
        </div>
    </div>)
}

export default CommentsList;