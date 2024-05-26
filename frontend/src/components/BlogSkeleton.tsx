import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div>
        <div role="status" className="animate-pulse">

            <div className="border-b-2 border-slate-200 pb-4 mt-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="flex justify-center flex-col">
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="font-extralight pl-2 text-sm 
            flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="pl-2
            flex justify-center flex-col">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-500 text-sm 
            flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="text-xl font-semibold">
                    <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div>

                </div>
                <div className="font-thin font-md">
                    <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="w-full text-slate-500 text-sm font-thin pt-4">
                    <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
        </div>
    </div>
}