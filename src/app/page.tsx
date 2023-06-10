"use client"
import { useState,useEffect } from "react"
export default function Home() {
  const[data,setData]= useState<post[]>([])
  useEffect(()=>{
   const fetchPosts = async ()=>{
    const response = await fetch('/api/posts')
    const jsonRes = await response.json()
    setData(jsonRes)
   }
   fetchPosts()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {data.map(p=>(
          <>
          <h2>
            {p.id}
          </h2>
          <h3>
            {p.title}
          </h3>
          <img
           src={p.Image}
           alt={p.title}
           />
           </>
        ))}
      </div>
    </main>
  )
}
