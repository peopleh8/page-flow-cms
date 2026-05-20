export const hsl = (value: string, alpha?: number) => {
  if (alpha === undefined) return `hsl(${value})`

  return `hsl(${value} / ${alpha})`
}
