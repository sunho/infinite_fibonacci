import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  return <>
    <p className="text-slate-500">Pick a number and select the task</p>
    <div id="tasks" className="my-10">
    <div className="flex items-center mb-6">
    <div className="px-2">
      <label className="block text-gray-500 font-bold text-right mb-0 pr-4">
        n = 
      </label>
    </div>
    <div className="flex-1">
      <input value={input} onChange={e=>{setInput(e.target.value);}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight overflow-visible focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-full-name" type="text"/>
    </div>
  </div>
    </div>
    <div id="tasks" className="my-5">
      <a id="task" href={`/find-number?n=${input}`} className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 hover:border-l-indigo-300 hover:bg-gradient-to-r from-indigo-100 to-transparent hover:from-indigo-200">
        <div className="inline-flex items-center space-x-2">
            <div>Find n-th fibonacci number</div>
        </div>
      </a>
      <a id="task" href={`/find-index?n=${input}`} className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 hover:border-l-indigo-300 hover:bg-gradient-to-r from-indigo-100 to-transparent hover:from-indigo-200">
        <div className="inline-flex items-center space-x-2">
            <div>Determine which term in fibonacci sequence is n</div>
        </div>
      </a>
      <a id="task" href={`/find-encode?n=${input}`} className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 hover:border-l-indigo-300 hover:bg-gradient-to-r from-indigo-100 to-transparent hover:from-indigo-200">
        <div className="inline-flex items-center space-x-2">
            <div>Express n as a sum of distinct fibonacci numbers</div>
        </div>
      </a>
    </div>
  </>;
}