"use server";
async function getToken() {
  const tokenRequest = await fetch("http://localhost:3000/api/getToken");
  const token = await tokenRequest.text();
  return token;
}

export const getBooking = async (formData) => {
  const id = await formData.get("id");
  console.log("Buscando el servicio con el id: " + id + " ...");
  const token = await getToken();
  let config = {
    method: "get",
    headers: {
      "x-api-token": token,
    },
  };
  const bookingResponse = await fetch(
    "https://app.reservatio.com.mx/api/public/v2/openapi/3303/folios?offset=0&booking_id=" +
      id,
    config
  );
  const booking = await bookingResponse.json();
  console.log(booking.folios);
  return await booking.folios;
};
