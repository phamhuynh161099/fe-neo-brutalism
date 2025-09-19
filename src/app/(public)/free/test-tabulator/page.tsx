// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Script from "next/script";

// function TablePage() {
//   const tableRef = useRef(null);
//   const tableInstanceRef = useRef<any>(null);
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);

//   const initializeTable = () => {
//     const tabledata = [
//       {
//         id: 1,
//         name: "Oli Bob",
//         progress: 12,
//         gender: "male",
//         rating: 1,
//         col: "red",
//         dob: "19/02/1984",
//         car: 1,
//       },
//       {
//         id: 2,
//         name: "Mary May",
//         progress: 1,
//         gender: "female",
//         rating: 2,
//         col: "blue",
//         dob: "14/05/1982",
//         car: true,
//       },
//       {
//         id: 3,
//         name: "Christine Lobowski",
//         progress: 42,
//         gender: "female",
//         rating: 0,
//         col: "green",
//         dob: "22/05/1982",
//         car: "true",
//       },
//       {
//         id: 4,
//         name: "Brendon Philips",
//         progress: 100,
//         gender: "male",
//         rating: 1,
//         col: "orange",
//         dob: "01/08/1980",
//       },
//       {
//         id: 5,
//         name: "Margret Marmajuke",
//         progress: 16,
//         gender: "female",
//         rating: 5,
//         col: "yellow",
//         dob: "31/01/1999",
//       },
//       {
//         id: 6,
//         name: "Frank Harbours",
//         progress: 38,
//         gender: "male",
//         rating: 4,
//         col: "red",
//         dob: "12/05/1966",
//         car: 1,
//       },
//     ];

//     if (tableRef.current && window.Tabulator) {
//       const table = new window.Tabulator(tableRef.current, {
//         data: tabledata,
//         autoColumns: true,
//         height: "400px",
//         layout: "fitColumns",
//       });

//       tableInstanceRef.current = table;
//     }
//   };

//   useEffect(() => {
//     if (isLoaded) {
//       initializeTable();
//     }

//     return () => {
//       if (tableInstanceRef.current) {
//         tableInstanceRef.current.destroy();
//         tableInstanceRef.current = null;
//       }
//     };
//   }, [isLoaded]);

//   return (
//     <>
//       {/* Load CSS */}
//       <link
//         rel="stylesheet"
//         href="/libs/tabulator-master/dist/css/tabulator.min.css"
//       />

//       {/* Load JS */}
//       <Script
//         src="/libs/tabulator-master/dist/js/tabulator.min.js"
//         onLoad={() => {
//           console.log("Tabulator script loaded");
//           setIsLoaded(true);
//         }}
//         onError={(e) => {
//           console.error("Script failed to load", e);
//         }}
//       />

//       <div className="h-screen bg-sky-300 p-4">
//         <h1 className="text-2xl font-bold mb-4">Test Table</h1>
//         <div ref={tableRef} className="bg-white"></div>
//       </div>
//     </>
//   );
// }

// export default TablePage;

"use client";
import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

function TablePage() {
  const tableRef = useRef(null);
  const tableInstanceRef = useRef<any>(null);

  const initializeTable = () => {
    const tabledata = [
      {
        id: 1,
        name: "Oli Bob",
        progress: 12,
        gender: "male",
        rating: 1,
        col: "red",
        dob: "19/02/1984",
        car: 1,
      },
      {
        id: 2,
        name: "Mary May",
        progress: 1,
        gender: "female",
        rating: 2,
        col: "blue",
        dob: "14/05/1982",
        car: true,
      },
      {
        id: 3,
        name: "Christine Lobowski",
        progress: 42,
        gender: "female",
        rating: 0,
        col: "green",
        dob: "22/05/1982",
        car: "true",
      },
      {
        id: 4,
        name: "Brendon Philips",
        progress: 100,
        gender: "male",
        rating: 1,
        col: "orange",
        dob: "01/08/1980",
      },
      {
        id: 5,
        name: "Margret Marmajuke",
        progress: 16,
        gender: "female",
        rating: 5,
        col: "yellow",
        dob: "31/01/1999",
      },
      {
        id: 6,
        name: "Frank Harbours",
        progress: 38,
        gender: "male",
        rating: 4,
        col: "red",
        dob: "12/05/1966",
        car: 1,
      },
    ];

    // @ts-ignore
    if (tableRef.current && window.Tabulator) {
      // @ts-ignore
      const table = new window.Tabulator(tableRef.current, {
        data: tabledata,
        autoColumns: true,
        height: "400px",
        layout: "fitColumns",
      });

      tableInstanceRef.current = table;
    }
  };

  useEffect(() => {
    initializeTable();

    return () => {
      if (tableInstanceRef.current) {
        tableInstanceRef.current.destroy();
        tableInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Load CSS */}
      <link
        rel="stylesheet"
        href="/libs/tabulator-master/dist/css/tabulator.min.css"
      />
      {/* Load JS */}
      <script src="/libs/tabulator-master/dist/js/tabulator.min.js" />

      <div className="h-screen bg-sky-300 p-4">
        <h1 className="text-2xl font-bold mb-4">Test Table</h1>
        <div ref={tableRef} className="bg-white"></div>
      </div>
    </>
  );
}

export default TablePage;
