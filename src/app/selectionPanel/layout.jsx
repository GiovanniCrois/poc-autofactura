import Link from "next/link";
export default function selectionPanelLayout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="w-1/4  bg-[#F6DCAC]">
          <Link href={"/selectionPanel/HardRock"} replace={true}>
            <h2 className="w-full  border-b-4 border-[#01204E] p-2 text-[#01204E] hover:text-[#028391]">
              Hard Rock Hotel{" "}
            </h2>
          </Link>
          <Link href={"/selectionPanel/PearlCity"} replace>
            <h2 className="w-full border-b-4 border-[#01204E] p-2 text-[#01204E] hover:text-[#028391]">
              Pearl City Hotel{" "}
            </h2>
          </Link>
          <Link href={"/selectionPanel/Tokio"} replace>
            <h2 className="w-full border-b-4 border-[#01204E] p-2 text-[#01204E] hover:text-[#028391]">
              Tokio Hotel{" "}
            </h2>
          </Link>
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </>
  );
}
