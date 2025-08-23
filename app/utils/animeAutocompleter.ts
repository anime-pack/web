import { AnimeClient } from "@tutkli/jikan-ts";

type AnimeAutocompleteEntry = {
    title: string;
    alts: string[];
    mal_id: number;
}

export default async (query: string): Promise<AnimeAutocompleteEntry[] | void> => {
    if (query.length < 4) return; // Otimiza a busca, evita requisições desnecessárias

    try {
        const data = (await new AnimeClient().getAnimeSearch({ q: query, limit: 10, sfw: true })).data;

        // Mapeia o resultado para pegar apenas os títulos
        return data.map((anime) => {
            return {
                title: anime.title,
                alts: anime.titles.map(t => t.title),
                mal_id: anime.mal_id,
            };
        });
    } catch (error) {
        console.error('Erro ao buscar animes:', error);
        return;
    }
};
