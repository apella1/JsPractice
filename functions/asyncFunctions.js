// functions that allow non-blocking
// using the fetch API

async function getNames() {
  try {
    const names = await fetch("fetchurlcom");
    if (!names.ok) {
      throw new Error(`Http Error: ${names.status}`);
    }
    const data = names.json();
    return data;
  } catch (error) {
    return `Unable to return names: ${error.status}`;
  }
}
