import { useEffect } from "react";
import { useState } from "react";
import { encodeFibonacci, getIndexOfFibonacci, getIthFibonacci } from "../Fibonacci";

export default function FindNumber() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let n = BigInt(params.get('n') ?? 0n);
  const [res, setRes] = useState<bigint | undefined>(undefined);
  useEffect(() => {
    setRes(getIthFibonacci(n));
  }, []);
  return <>
    <p className="text-slate-500">Find n-th fibonacci number</p>
    <div id="tasks" className="my-10">
      <div className="block text-gray-500 font-bold text-left mb-0 ">
        {`n=${n.toString()}`}
      </div>
    </div>
    <div className="block text-gray-500 font-bold text-left mb-0 ">
      The n-th fibonacci number is:
    </div>
    {res && <div className="bg-gray-100 p-4 mt-2">
      <div className="break-all text-center text-lg font-bold">
        {res.toString()}
      </div>
    </div>}
  </>;
}