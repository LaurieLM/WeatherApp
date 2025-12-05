export const fetchLocation = async (locationName) => {
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.searchParams.append("name", locationName);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erreur API : " + response.status);
  }

  const data = await response.json();
  return data;
};
