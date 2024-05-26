import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="border-b flex justify-between px-10 py-4 cursor-pointer">
        <Link to="/" className="text-2xl flex flex-col justify-center">
            BigTalk
        </Link>
        <div>
            <Link to="/publish">
                <button type="button" className="mr-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2">New Blog</button>
            </Link>
            <Avatar name="Sahil" size={"big"} />
        </div>
    </div>
}