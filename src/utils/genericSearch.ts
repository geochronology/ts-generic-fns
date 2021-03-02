export default function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
): boolean {

  // return true if there's no filter query
  if (query === "") {
    return true
  }

  return properties.some(property => {

    const value = object[property]

    // type guard
    if (typeof value === "string" || typeof value === "number") {

      if (shouldBeCaseSensitive) {
        return value.toString().includes(query)
      }
      else {
        return value.toString().toLowerCase().includes(query)

      }

    }

    return false;
  })
}