import { IRootFetch } from "./types";

const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOSY_API_KEY}`,
  },
};

export const fetchMuseum = async () => {
  try {
    const res: IRootFetch = await (
      await fetch(
        "https://www.nosyapi.com/apiv2/museum/getMuseum?city=istanbul",
        fetchOptions
      )
    ).json();
    return res;
  } catch (error) {
    throw new Error(error as any);
  }
};
