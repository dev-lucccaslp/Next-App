"use client"

import { useState } from "react";
import { BackButton } from "../components/BackButton";

export default function Blog() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>pagina Blog</h1> 
      <BackButton /> <br />

      <p>soma: {count}</p> <br />
      <button type="button" onClick={() => setCount(count + 1)}>Add +1</button>

    </div>
  )
}
