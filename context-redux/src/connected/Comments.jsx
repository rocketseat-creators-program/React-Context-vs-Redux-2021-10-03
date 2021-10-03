import { connect } from "react-redux"
import { incrementComment } from "../slices/counterSlice"

const mapStateToProps = (state) => ({
  comments: state.counter.comments,
})

const mapDispatchToProps = { incrementComment }

export function CommentsConnect({ incrementComment, comments }) {
  return (
    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="object-center object-cover rounded-full h-36 w-36 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-700 font-bold mb-2">
          Comments: {comments}
        </p>
      </div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => incrementComment()}
      >
        Add Comments
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsConnect)
