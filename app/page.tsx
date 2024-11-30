import dynamic from "next/dynamic";

/**
 * disable ssr to avoid pre-rendering issues of Next.js
 */
const App = dynamic(() => import("./App"), { ssr: false });

export default App;
