import { useEffect, useState } from "react";
import { encodeFibonacci, getIthFibonacci } from "../Fibonacci";

export default function FindEncode() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let n = BigInt(params.get('n') ?? 0n);
  const [len, setLen] = useState<number | undefined>(undefined);
  const [str, setStr] = useState<string | undefined>(undefined);
  useEffect(() => {
    const res = encodeFibonacci(n);
    setLen(res.length);
    setStr(res.join(" + "));
  }, []);
  return <>
    <p className="text-slate-500">Find n-th fibonacci number</p>
    <div id="tasks" className="my-10">
      <div className="block text-gray-500 font-bold text-left mb-0 break-all ">
        {`n=${n.toString()}`}
      </div>
    </div>
    <div className="block text-gray-500 font-bold text-left mb-0 ">
      {`n can be represented as a sum of distinct ${len ? len : "(loading)"} fibonacci numbers:`}
    </div>
    {str &&
      <div className="bg-gray-100 p-4 mt-2">
        <div className="break-all text-center text-lg font-bold">
          {str}
        </div>
      </div>
  }
  </>;
}