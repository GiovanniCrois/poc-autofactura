import axios from "axios";
import { NextResponse } from "next/server";
export async function GET() {
  let data = JSON.stringify({
    key1: "44397d4fa392c94e018f8e72f84e852e",
    key2: "b6b7b7e5c42229afed6673275bba63f8",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://app.reservatio.com.mx/api/public/v1/openapi/3303/token",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const token = await axios
    .request(config)
    .then((response) => {
      return response.data.token;
    })
    .catch((error) => {
      return "Error";
    });

  console.log(token);
  return new NextResponse(token);
}
