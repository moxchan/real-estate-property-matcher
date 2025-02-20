export const capitalise = (s: string) =>
  s
    ?.split(" ")
    .map((v) => v[0].toUpperCase() + v.slice(1))
    .join(" ");
