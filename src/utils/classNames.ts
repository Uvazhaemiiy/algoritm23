type TListTest = {
   [key: string]: any
}

type TList = (string | number | boolean | null | undefined | TListTest)[]

export function classNames (...list: TList): string | undefined
{
   const classList: string[] = []

   list.forEach(item => {
      if (!item) return

      if (typeof item === 'object')
      {
         for (let key in item)
         {
            if (item[key])
            {
               classList.push(key)
            }
         }
      }
      else
      {
         classList.push(String(item))
      }
   })

   return (classList.length
      ? classList.join(' ')
      : undefined
   )
}
