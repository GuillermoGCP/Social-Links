import useGetComments from "../hooks/useGetComments";
import PropTypes from "prop-types";
import Comment from "../components/Comment";
import { ClockLoader } from "react-spinners";

const CommentListComponent = ({ linkId }) => {
  const { commentList, loading } = useGetComments(linkId);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <ClockLoader color="#4f46e5" size={50} />
        </div>
      ) : (
        <ul>
          {commentList
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map((comment) => {
              return (
                <li key={comment.id}>
                  {comment.parent_comment_id === null && (
                    <Comment comment={comment} />
                  )}
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};
CommentListComponent.propTypes = {
  linkId: PropTypes.number,
};
export default CommentListComponent;
