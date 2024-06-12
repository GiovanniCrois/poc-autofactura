import BookingInfo from "./bookingInfo";
export default async function Hotel({ params }) {
  let names = {
    HardRock: "Hard Rock Hotel",
    PearlCity: "Pearl City Hotel",
    Tokio: "Tokio Hotel",
  };

  let name = names[params.hotel];

  return (
    <>
      <div className="w-1/2 mx-auto my-4 p4">
        <h1 className="text-2xl text-[#01204E] text-center font-bold">
          {name}
        </h1>
      </div>
      <BookingInfo />
    </>
  );
}
