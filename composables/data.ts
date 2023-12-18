import type { Project } from '~/constants/data'
import { projects } from '~/constants/data'

export function getData() {
  return projects.map((p, i) => {
    return {
      ...p,
      id: ensurePrefix((i + 1)),
    } as Project
  })
}

/**
 * 补 0
 */
function ensurePrefix(s: string | number, targetLength = 3) {
  s = String(s)

  while (s.length < targetLength)
    s = `0${s}`

  return s
}
