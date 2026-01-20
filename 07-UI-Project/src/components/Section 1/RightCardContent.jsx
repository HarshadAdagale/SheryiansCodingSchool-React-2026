import React from 'react';
import {MoveRight} from "lucide-react";

function RightCardContent(props) {
    return (
        <div className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between">
            <h2 className="bg-white rounded-full text-1xl font-bold h-12 w-12 flex justify-center items-center">{props.id + 1}</h2>
            <div>
                <p className="text-xl leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet ea hic optio quos velit!</p>
                <div className="flex justify-between mt-4">
                    <button style={{backgroundColor: props.color}} className="text-white font-medium px-8 py-3 rounded-full">{props.tag}</button>
                    <button style={{backgroundColor: props.color}} className="text-white font-medium px-3 py-3 rounded-full"><MoveRight /></button>
                </div>
            </div>
        </div>
    );
}

export default RightCardContent;