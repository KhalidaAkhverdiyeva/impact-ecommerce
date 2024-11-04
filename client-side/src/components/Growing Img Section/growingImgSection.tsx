// "use client"; // Ensure you're using the 'use client' directive in Next.js
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const GrowingImgSection: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const growingDivRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const section = sectionRef.current;
//     const growingDiv = growingDivRef.current;

//     if (!section || !growingDiv) return;

//     // Set initial position and size of the div
//     gsap.set(growingDiv, {
//       width: "200px", // Initial width
//       height: "200px", // Initial height
//       xPercent: -50,
//       yPercent: -50,
//       top: "50%",
//       left: "50%",
//     });

//     // Create a timeline for the div's growth animation
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top center", // Start when the top of the section hits the center of the viewport
//           end: "bottom top", // End when the bottom of the section hits the top of the viewport
//           scrub: 1.5,
//           pin: section,
//           pinSpacing: true,
//           invalidateOnRefresh: true,
//         },
//       })
//       .to(growingDiv, {
//         width: "100vw",
//         height: "100vh",
//         ease: "power3.inOut",
//       });

//     // Clean up ScrollTrigger instances on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="sticky top-[100px] h-[100vh] flex items-center justify-center overflow-hidden"
//     >
//       <div ref={growingDivRef} className="bg-orange-600 absolute"></div>
//     </section>
//   );
// };

// export default GrowingImgSection;
