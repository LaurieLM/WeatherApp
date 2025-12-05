import { useQuery } from "@tanstack/react-query";

export default function API() { 
    const { isLoading, error, data } = useQuery({
        queryKey: ["weatherData"],
        queryFn: async () => {

            // Création de l'URL de base
            const url = new URL('https://api.open-meteo.com/v1/forecast');

            // Ajout de paramètres
            url.searchParams.append('latitude', '45.7485');
            url.searchParams.append('longitude', '4.8467');
            url.searchParams.append('daily', 'weather_code');

            const response = await fetch(url);
            const responseJSON = await response.json();
            
            if (!response.ok) {
                throw new Error("Erreur API : " + response.status);
            }

            console.log(responseJSON)

            return responseJSON;
        }
    })

    // Gestion des états
    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.message}</div>;

}
