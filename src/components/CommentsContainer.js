import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
    {
        name: "Junaid Syed",
        comment: "This is the comment",
        replies: []
    },
    {
        name: "Junaid Syed",
        comment: "This is the comment",
        replies: [{
            name: "Junaid Syed",
            comment: "This is the comment",
            replies: [{
                name: "Junaid Syed",
                comment: "This is the comment",
                replies: [{
                    name: "Junaid Syed",
                    comment: "This is the comment",
                    replies: []
                },]
            },]
        },]
    }, {
        name: "Junaid Syed",
        comment: "This is the comment",
        replies: [{
            name: "Junaid Syed",
            comment: "This is the comment",
            replies: [{
                name: "Junaid Syed",
                comment: "This is the comment",
                replies: []
            },]
        },]
    }, {
        name: "Junaid Syed",
        comment: "This is the comment",
        replies: [{
            name: "Junaid Syed",
            comment: "This is the comment",
            replies: []
        },]
    },
]

const CommentsContainer = () => {
    return (
        <div className="py-2">
            <h1 className="font-bold text-2xl">Comments</h1>
            <div>
                <CommentsList comments={commentsData} />
            </div>
        </div>
    )
}

export default CommentsContainer;