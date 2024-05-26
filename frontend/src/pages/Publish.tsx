import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();
    return <div>
        <AppBar />

        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className=" text-gray-900 text-3xl rounded-lg w-full p-2.5 focus:outline-none" placeholder="Title..." />
                <TextEditor onChange={(e) => {
                    setContent(e.target.value)
                }} />
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    },{
                        headers:{
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className=" pt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return <form className="mt-4">
        <div className="w-full mb-4">
            <div className="flex items-center justify-between ">
                <div className=" bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea onChange={onChange} id="editor" rows={8} className="block pl-2 block w-full px-0 text-lg text-gray-800 bg-white border-0 focus:outline-none" placeholder="Write an article..." required ></textarea>
                </div>
            </div>
        </div>
    </form>
}