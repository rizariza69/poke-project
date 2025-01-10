import { useState, useEffect } from "react";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface FetchResult {
  results: Pokemon[];
  count: number;
}

interface FetchPokemonDetail {
  name: string;
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}
interface FetchPokemonDetailProps {
  url: string;
}

export const useFetchData = (
  endpoint: string,
  limit: number,
  offset: number
) => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get<FetchResult>(`${endpoint}/?offset=${offset}&limit=${limit}`)
      .then((response) => {
        setData(response.data.results);
        setTotalCount(response.data.count);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, [endpoint, limit, offset]);

  return { data, totalCount, loading, error };
};

export const useFetchDetail = ({ url }: FetchPokemonDetailProps) => {
  const [pokemonDetail, setPokemonDetail] = useState<FetchPokemonDetail | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get<FetchPokemonDetail>(`${url}`)
      .then((response) => {
        setPokemonDetail(response?.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPokemonDetail(null);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { pokemonDetail, loading, error };
};
