"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { reactFormatter } from "react-tabulator";
import tTwoEvaluationApi from "../../../../../apis/t2-evaluation.api";
import "../../../../../public/css/test-tabulator/custom.css";

const PADDING_IN = 16;
function TablePage() {
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef(null);
  const [force, setForce] = useState<boolean>(false);
  const tableInstanceRef = useRef<any>(null);

  const [tablePointScroll, setTablePointScroll] = useState<{
    x: number;
    y: number;
  } | null>({ x: 0, y: 0 }); //? Quản lý tọa độ

  const [mainFilter, setMainFilter] = useState<{ division: string }>({
    division: "HWA",
  });

  //* React Tablutor
  const GenerateTablutorButton = (props: any) => {
    const rowData = props.cell._cell.row.data;
    const handleClickDelete = () => {
      console.log(">>>rowData", rowData);
    };

    return (
      <>
        <button
          className="ml-1 px-2 bg-red-500 rounded-sm cursor-pointer"
          onClick={() => handleClickDelete()}
        >
          Delete
        </button>
      </>
    );
  };
  let columns = [
    {
      title: "DIVISION",
      field: "division",
      hozAlign: "left",
      width: 160,
      //* filter dạng select
      headerFilter: "list" as any,
      headerFilterParams: { valuesLookup: true, clearable: true } as any,
      //*
    },
    {
      title: "SUPPLIER",
      field: "supplier",
      hozAlign: "left",
      width: 160,

      headerFilter: "input",
      // editor: "input",
      // editable: true,
    },
    {
      formatter: reactFormatter(<GenerateTablutorButton />),
      width: 100,
      hozAlign: "center",
    },
    {
      title: "MATERIAL CATEGORY",
      field: "material_category",
      hozAlign: "left",
      width: 160,
      // editor: "input",
      // editable: true,
      //* filter dạng select
      headerFilter: "list" as any,
      headerFilterParams: { valuesLookup: true, clearable: true } as any,
      //*
    },
    {
      title: "MATERIAL SUB CATEGORY",
      field: "material_sub_category",
      hozAlign: "left",
      width: 160,
      headerFilter: "input",
      // editor: "input",
      // editable: true,
    },
    {
      title: "RANK",
      field: "rank",
      hozAlign: "right",
      width: 160,

      headerFilter: "input",
      // editor: "input",
      // editable: true,
    },

    //* A SPIKE
    {
      title: "ADIDAS SPIKE",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "a_spike_achieved",
          hozAlign: "right",
          width: 160,
          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
        // {
        //   title: "Max Pts",
        //   field: "a_spike_max",
        //   hozAlign: "right",
        //   width: 160,

        //   headerFilter: "input",
        //   // editor: "input",
        //   // editable: true,
        // },
      ],
    },

    //* H_P DELIVERY
    {
      title: "HWASEUNG-PRODUCTION DELIVERY",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "h_p_delivery_achieved",
          hozAlign: "right",
          width: 360,
          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* H_P QUALITY
    {
      title: "HWASEUNG-PRODUCTION QUALITY",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "h_p_quality_achieved",
          hozAlign: "right",
          width: 360,
          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
        // {
        //   title: "Max Pts",
        //   field: "h_p_quality_max",
        //   hozAlign: "right",
        //   width: 160,

        //   headerFilter: "input",
        //   // editor: "input",
        //   // editable: true,
        // },
      ],
    },

    //* H_P COLLABORATION
    {
      title: "HWASEUNG-PRODUCTION COLLABORATION",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "h_p_collaboration_achieved",
          hozAlign: "right",
          width: 360,
          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
        // {
        //   title: "Max Pts",
        //   field: "h_p_collaboration_max",
        //   hozAlign: "right",
        //   width: 160,

        //   headerFilter: "input",
        //   // editor: "input",
        //   // editable: true,
        // },
      ],
    },

    //* H D DELIVERY
    {
      title: "HWASEUNG-DEVELOPMENT DELIVERY",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "h_d_delivery_achieved",
          hozAlign: "right",
          width: 360,
          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* H D QUALITY
    {
      title: "HWASEUNG-DEVELOPMENT QUALITY",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "h_d_quality_achieved",
          hozAlign: "right",
          width: 360,
          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* H D COLLABORATION
    {
      title: "HWASEUNG-DEVELOPMENT COLLABORATION",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "h_d_collaboration_achieved",
          hozAlign: "right",
          width: 360,
          headerFilter: "input",
        },
      ],
    },

    //* TOTAL
    {
      title: "TOTAL",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "h_d_total_achieved",
          hozAlign: "right",
          width: 160,
          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //====================
    //* O SPIKE
    {
      title: "OVERALL SPIKE",
      headerHozAlign: "center",
      columns: [
        //* O SPIKE
        {
          title: "Pts Achieved",
          field: "o_spike_achieved",
          hozAlign: "right",
          width: 160,

          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* O HWASEUNG
    {
      title: "OVERALL HWASEUNG",
      headerHozAlign: "center",
      columns: [
        //* O HWASEUNG
        {
          title: "Pts Achieved",
          field: "o_hwaseung_achieved",
          hozAlign: "right",
          width: 160,

          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* O PRODUCTION
    {
      title: "OVERALL PRODUCTION",
      headerHozAlign: "center",
      columns: [
        //* O PRODUCTION
        {
          title: "Pts Achieved",
          field: "o_production_achieved",
          hozAlign: "right",
          width: 180,

          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* O DEVELOPMENT
    {
      title: "OVERALL DEVELOPMENT",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "o_development_achieved",
          hozAlign: "right",
          width: 180,

          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* O DELIVERY
    {
      title: "OVERALL DELIVERY",
      headerHozAlign: "center",
      columns: [
        //* O DELIVERY
        {
          title: "Pts Achieved",
          field: "o_delivery_achieved",
          hozAlign: "right",
          width: 160,

          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* O QUALITY
    {
      title: "OVERALL QUALITY",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "o_quality_achieved",
          hozAlign: "right",
          width: 160,

          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },

    //* O COLLABORATION
    {
      title: "OVERALL COLLABORATION",
      headerHozAlign: "center",
      columns: [
        {
          title: "Pts Achieved",
          field: "o_collaboration_achieved",
          hozAlign: "right",
          width: 160,

          headerFilter: "input",
          // editor: "input",
          // editable: true,
        },
      ],
    },
  ];

  const initializeTable = () => {
    // @ts-ignore
    if (tableRef.current && window.Tabulator) {
      const element = document.getElementById("grid_wrapper");
      const height =
        element && element.getBoundingClientRect().height - PADDING_IN * 2;

      console.log("current height", height);

      // @ts-ignore
      const table = new window.Tabulator(tableRef.current, {
        columns: columns,
        data: [],
        height: height,
        layout: "fitColumns",

        pagination: "local",
        paginationSize: 6,
        paginationSizeSelector: [3, 6, 8, 10],

        selectableRows:true,
      });

      table.on("headerTap", function (e: any, column: any) {
        console.log("headerTap", e, column);
      });

      // table.on("scrollVertical", function (top: any) {
      //   console.log("scroll", top);
      //   setTablePointScroll({ x: tablePointScroll?.x || 0, y: top });
      // });

      // table.on("scrollHorizontal", function (left: any) {
      //   console.log("scroll", left, tableInstanceRef.current);
      //   setTablePointScroll({ x: left, y: tablePointScroll?.y || 0 });
      // });
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

  /**
   ** Call Api
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        let parameter = {
          data: {
            work_date: "202508",
            division: mainFilter.division,
          },
        };
        const res = await tTwoEvaluationApi.getListEvaluation(parameter);
        tableInstanceRef.current.replaceData(res.data.data);

        console.log("res", res);
      } catch (error) {
        console.error("error", error);
      } finally {
      }
    };

    fetchData();
  }, [force]);

  useEffect(() => {
    if (!mainWrapperRef.current) return; // Kiểm tra phần tử tồn tại

    // Khởi tạo ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const element = document.getElementById("grid_wrapper");
        const height =
          element && element.getBoundingClientRect().height - PADDING_IN * 2;

        console.log("current height", height);
        tableInstanceRef.current.setHeight(height);
      }
    });

    resizeObserver.observe(mainWrapperRef.current); // Bắt đầu theo dõi

    // Cleanup: Hủy observer khi component unmount hoặc ref thay đổi
    return () => {
      resizeObserver.disconnect();
    };
  }, []); // Chạy 1 lần khi mount

  return (
    <>
      {/* Load CSS */}
      <link
        rel="stylesheet"
        href="/libs/tabulator-master/dist/css/tabulator.min.css"
      />
      <link
        rel="stylesheet"
        href="/libs/tabulator-master/dist/css/tabulator_midnight.min.css"
      />
      {/* Load JS */}
      <script src="/libs/tabulator-master/dist/js/tabulator.min.js" />

      <section className="h-screen p-4 flex flex-col gap-2">
        <h1 className="text-2xl font-bold mb-4">Test Table</h1>
        <div className="h-[100px] w-full p-2 rounded-md shadow-md bg-white">
          <div className="flex flex-row gap-1">
            <Input
              className="flex-grow-0 w-fit"
              value={mainFilter.division}
              onChange={(e) =>
                setMainFilter((prev) => ({
                  ...prev,
                  division: e.target.value,
                }))
              }
            />
            <Button onClick={() => setForce(!force)}>Force Refresh</Button>
          </div>
        </div>

        <div
          ref={mainWrapperRef}
          id="grid_wrapper"
          className="flex-1 p-4 rounded-md shadow-md bg-white"
        >
          <div ref={tableRef} className=""></div>
        </div>
      </section>
    </>
  );
}

export default TablePage;
