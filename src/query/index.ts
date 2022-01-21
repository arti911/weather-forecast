export const getData = async <T>(url: string): Promise<T> => {
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json() as T;

    return data;
  } catch (error) {
    throw error;
  }
};