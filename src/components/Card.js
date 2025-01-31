import React from "react";

export default function Card({ title, description, component }) {
    return (
        <div className="min-h-screen bg-slate-100">
            {/* Dropdown container */}
            <div className="bg-white rounded-xl shadow-sm p-4 gap-4 flex flex-col">
                <div className="bg-slate-100 rounded-xl justify-center h-[300px] flex items-center">
                {component}
                </div>
                <div className="flex flex-col gap-2">
                    {title && <h2 className="text-xl font-bold">{title}</h2>}
                    {description && <p className="text-gray-500">{description}</p>}
                </div>
            </div>
        </div>
    )
}
