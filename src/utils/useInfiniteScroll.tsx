// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "../axios";
const RESULT_LIMIT = 20;

const useInfiniteScroll = (pageNumber: number) => {
    const [user, setUser] = useState<object>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios({
            method: "GET",
            url: `api/`,
            params: {results: RESULT_LIMIT, page: pageNumber},
        })
        .then(res => {
            const data = res.data.results;
            setUser((prevState: any[]) => [...prevState, ...data]);
            setLoading(false);
            if(data.length < 20){
                setHasMore(false);
            }
        })
        .catch((error) => {
            setError(true);
        })
    }, [pageNumber])
    return { user , loading, error , hasMore}
}

export default useInfiniteScroll;