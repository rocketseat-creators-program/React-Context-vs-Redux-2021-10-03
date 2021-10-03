import React, { useState } from "react"
import Likes from "../components/Likes"
import LikesConnect from "../connected/Likes"
import CommentsConnect from "../connected/Comments"
import Comments from "../components/Comments"
import { DataContext } from "../context/DataContext"
import { useDispatch } from "react-redux"
import { incrementComment, incrementLike } from "../slices/counterSlice"

export default function Layout() {
  const [data, setData] = useState({ likes: 0, comments: 0 })
  return (
    <div>
      <div className="flex h-screen bg-green-300">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex h-full">
            <main className="flex flex-row w-full bg-white overflow-x-hidden overflow-y-auto ">
              <div className="flex-1 border-2 border-red-900 border-dashed bg-blue-400">
                <h1 className="text-7xl text-center text-gray-900 font-extrabold mb-4">
                  Context
                </h1>
                <DataContext.Provider value={data}>
                  <Likes
                    incrementLike={() =>
                      setData((d) => ({ ...d, likes: d.likes + 1 }))
                    }
                  />
                  <Comments
                    incrementComments={() =>
                      setData((d) => ({ ...d, comments: d.comments + 1 }))
                    }
                  />
                </DataContext.Provider>
              </div>
              <div className="flex-1 border-2 border-blue-900 border-dashed bg-yellow-400">
                <h1 className="text-7xl text-center text-gray-900 font-extrabold mb-4">
                  Redux
                </h1>
                <LikesConnect />
                <CommentsConnect />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
