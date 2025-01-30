import { useState } from "react";
import { motion } from "framer-motion";

export default function Dropdown() {
    // State to track if the dropdown is open or closed
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left border-2 border-red-500 p-4">
            <button
             onClick={()=> setIsOpen(!isOpen)}
             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
                Toggle dropdown
            </button>

            <motion.div
             initial={{ opacity: 0, y: -200}}
             animate={{ opacity: isOpen ? 1:0 , y: isOpen ? 0 : -15}}
             transition={{ duration: 0.2 }}
             className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg ${ isOpen ? "block" : "hidden"}`}
            >
                <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                </ul>
            </motion.div>
        </div>
    )
}