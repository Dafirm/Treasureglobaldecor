// "use client"
// import React from "react";

// export default function AnimatedText({
//   text = "Treasure Global Event Decor.",
// }) {
//   return (
//     <>
//       <span
//         className="wow charsAnimIn words chars splitting"
//         data-splitting="chars"
//         aria-hidden="true"
//         style={{
//           "--word-total": text.split(" ").length,
//           "--char-total": text.split("").length,
//           visibility: "visible",
//         }}
//       >
//         {text
//           .trim()
//           .split(" ")
//           .map((elm, i) => (
//             <React.Fragment key={i}>
//               <span
//                 className="word"
//                 data-word="Grow"
//                 style={{ "--word-index": i }}
//               >
//                 {elm.split("").map((elm2, i2) => (
//                   <span
//                     key={i2}
//                     className="char"
//                     data-char="G"
//                     style={{ "--char-index": i + i2 }}
//                   >
//                     {elm2}
//                   </span>
//                 ))}
//               </span>
//               <span className="whitespace"> </span>
//             </React.Fragment>
//           ))}
//       </span>
//     </>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";

export default function AnimatedText({ text = "TG GALLERY" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <span
      className="charsAnimIn words chars splitting"
      aria-hidden="true"
      style={{
        "--word-total": text.split(" ").length,
        "--char-total": text.length,
        visibility: "visible",
        display: "inline-block",
      }}
    >
      {text.split(" ").map((word, i) => (
        <React.Fragment key={i}>
          <span
            className="word"
            style={{ "--word-index": i, display: "inline-block" }}
          >
            {word.split("").map((char, j) => (
              <span
                className="char"
                key={j}
                style={{
                  "--char-index": i + j,
                  display: "inline-block",
                  transform: "translateY(0)",
                  opacity: 1,
                  transition: "all 0.5s ease",
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="whitespace"> </span>
        </React.Fragment>
      ))}
    </span>
  );
}
