"use client";

import dynamic from "next/dynamic";

export default dynamic(() => import("./scene"), {
  ssr: false,
  loading: () => <p className="p-4">Loading scene…</p>,
});
