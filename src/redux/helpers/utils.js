export async function request(path) {
  const response = await fetch(`https://swapi.dev/api/${path}`);
  const { results } = await response.json();

  return results;
}
