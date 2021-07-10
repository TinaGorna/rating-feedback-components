type Params = {
    method: "POST" | "GET",
    body?: unknown,
    headers?: Record<any, unknown>
}

export async function request(url: string, {method, body, headers = {}}: Params) {
    try {
        const response = await fetch(url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                "content-type": "application/json",
                ...headers,
            }
        });

        if (!response.ok) {
            return {error: "error"}
        }

        const result = await response.json();
        if (!result.success) {
            return {error: "error"}
        }

        return {data: result}
    } catch (e) {
        return {error: e}
    }

}