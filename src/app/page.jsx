import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="my-8 mx-auto p-4 w-3/4 bg-[#F6DCAC] rounded-md border-x-8 border-[#01204E]">
        <h1 className="text-3xl text-[#01204E] font-bold">
          Bienvenido al sistema de auto factura. Ahora para tus servicios de
          hospedaje favoritos{" "}
        </h1>
        <h2 className="text-xl p-2 text-[#01204E]">
          Para iniciar, por favor, seleccione el establecimiento en el cual se
          hospedo
        </h2>
      </div>
      <div className="flex mx-auto my-8 p-8 w-3/4 bg-[#F6DCAC] rounded-md border-x-8 border-[#01204E] justify-between">
        <Link
          href={"selectionPanel/HardRock"}
          className="w-1/4 h-32 border-4 border-[#01204E] rounded-md "
        >
          <img
            className="size-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjBoIRAKiZXbbaHy4QVjSU2DohHxp9ZsJwg&s"
          ></img>
        </Link>
        <Link
          href={"selectionPanel/PearlCity"}
          className="w-1/4 h-32 border-4 border-[#01204E] rounded-md"
        >
          <img
            className="size-full"
            src="https://hmihotelgroup.com/corporate/en/images/Asset%205.png"
          ></img>
        </Link>
        <Link
          href={"selectionPanel/Tokio"}
          className="w-1/4 h-32 border-4 border-[#01204E] rounded-md bg-white"
        >
          <img
            className="size-full"
            src="https://i.pinimg.com/originals/15/e9/28/15e928af4908e00a1afaad1545cba255.png"
          ></img>
        </Link>
      </div>
    </>
  );
}
