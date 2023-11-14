"use client";

import Script from "next/script";
import RssItem from "../components/RssItem.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [rssUrl, setRssUrl] = useState("");
useEffect(() => {

  })

  function fetchRss(url) {
    const data = await fetch(url);
  }

  return (
    <main className="bg-primary">
      <div className="bg-[#454545] flex pb-24 pt-36 justify-center flex-col items-center">
        <Script src="https://kit.fontawesome.com/f6f851698f.js" />
        <h2 className="font-bold text-primary text-4xl">
          Really Simple Syndication (RSS) Reader
        </h2>
        <h3 className="font-medium text-2xl my-8 text-primary">
          Please enter or paste your RSS URL
        </h3>
        <form className="relative">
          <i className="fa-solid fa-link absolute left-0 top-1/2 translate-x-4 -translate-y-1/2 text-2xl">
          </i>
          <input
            type="text"
            className="border-1 border py-3 text-lg rounded-2xl outline-0 w-[1000px] pr-48 pl-16"
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1 rounded-xl bg-accent text-primary font-bold text-xl px-6 py-2"
          >
            SUBMIT<i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
      <div class="px-36 py-8 flex flex-col">
        <div class="flex items-center mb-6">
          <div class="h-6 w-2 bg-accent rounded mr-4"></div>
          <h3 class="font-bold text-2xl my-2">
            Results
          </h3>
        </div>
        <div class="grid grid-cols-12 gap-12">
          <RssItem />
          <RssItem />
          <RssItem />
          <RssItem />
          <RssItem />
          <RssItem />
        </div>
      </div>
    </main>
  );
}
