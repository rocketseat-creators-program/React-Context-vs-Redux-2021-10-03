import { useRef } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { getLikes, incrementLike } from "../slices/counterSlice"

const mapStateToProps = (state) => ({
  likes: state.counter.likes,
})

const mapDispatchToProps = { incrementLike }

export function LikesConnect({ incrementLike, likes }) {
  const renders = useRef(0)
  return (
    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="object-center object-cover rounded-full h-36 w-36"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-700 font-bold mb-2">Likes: {likes}</p>
      </div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => incrementLike()}
      >
        Add likes
      </button>
      <br />
      <div className="text-4xl text-red-400 ">Renders: {renders.current++}</div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LikesConnect)
