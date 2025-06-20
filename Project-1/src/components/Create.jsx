import React, { useState } from "react";

function Create() {
  useState[(title, settitle)] = useState("");
  return (
    <form className="flex flex-col items-center p-[5%] w-screen h-screen bg-zinc-600">
      <h1 className="mb-5 w-1/2 text-3xl">Add new product</h1>
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3"
      />
      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-100 rounded p-4 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
      />
    </form>
  );
}

export default Create;
