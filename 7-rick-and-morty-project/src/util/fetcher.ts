export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("error");

    return response.json();
  } catch (error) {
    throw new Error("An error occurred while fetching the data." + error);
  }
};
