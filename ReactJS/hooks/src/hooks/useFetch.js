import { useEffect, useState } from "react"

export const useFetch = (url, method) => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}
