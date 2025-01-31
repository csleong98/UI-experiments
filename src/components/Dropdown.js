import { useState } from "react";
import { motion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

export default function Dropdown() {
    // State to track if the dropdown is open or closed
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
             onClick={()=> setIsOpen(!isOpen)}
             className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
            >
                Toggle dropdown
                <CaretDown className="-mr-1 h-5 w-5" color="text-gray-500" aria-hidden="true" />
            </button>

            <motion.div
             initial={{ opacity: 0, y: -200}}
             animate={{ opacity: isOpen ? 1:0 , y: isOpen ? 0 : -15}}
             transition={{ duration: 0.2 }}
             className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg px-2 ${ isOpen ? "block" : "hidden"}`}
            >
                <ul className="py-2">
                    <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Option 1</li>
                    <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Option 2</li>
                    <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Option 3</li>
                </ul>
            </motion.div>
        </div>
    )
}