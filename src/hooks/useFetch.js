import { useEffect, useState } from "react";

const useFetch = (route) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (route === '') return;
        const controller = new AbortController();

        const URL = import.meta.env.VITE_API_BASE_URL + route;

        (async () => {
            setLoading(true);
            try {
                const data = await fetch(URL, { signal: controller.signal });
                const json = await data.json();
                setResponse(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();

        return () => {
            controller.abort();
        }

    }, [route]);

    return { response, loading, error };
}

export default useFetch;
