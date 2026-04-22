export function arrDifference (a: any[], b: any[]): any[]
{
   const diff = a.filter((x) => !~b.indexOf(x))
   return diff.concat(b.filter((x) => !~a.indexOf(x)))
}
