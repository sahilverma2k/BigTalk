import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number,
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="border-b-2 border-slate-200 pb-4 mt-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName} size={"small"} />
            </div>
            <div className="font-extralight pl-2 text-sm 
            flex justify-center flex-col">
                {authorName}
            </div>
            <div className="pl-2
            flex justify-center flex-col">
                <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm 
            flex justify-center flex-col">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className="font-thin font-md">
            {content.slice(0, 200) + "..."}
        </div>
        <div className="w-full text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s)`}
        </div>
    </div>
    </Link >
}


export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-lg"} 
        font-extralight text-gray-600`}>{name[0]} </span>
    </div>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}