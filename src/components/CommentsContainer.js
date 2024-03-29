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
        <div className="py-2 text-black">
            <div>
                <h1 className="font-bold text-2xl">Comments</h1>
                <div>
                    <CommentsList comments={commentsData} />
                </div>
            </div>
        </div>
    )
}

export default CommentsContainer;