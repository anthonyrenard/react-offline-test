/**
 * Wrapper around fetch to make requests to the API
 * and return the response as typed JSON.
 *
 * @param url
 * @param config
 */
export async function request<T>(
  url: string,
  config: RequestInit = {}
): Promise<T> {
  const response = await fetch(url, config);

  if (!response.ok) {
    const errorMessage = `Network response was not ok. Status: ${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return (await response.json()) as T;
}
