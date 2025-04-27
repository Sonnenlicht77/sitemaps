/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
export type ListNav = ListNavItem[]

export interface ListNavItem {
  id: string
  text: string
  link: string
  children?: ListNavItemChid[]
}

export interface ListNavItemChid {
  id: string
  title: string
  link: string
  children?: ListNavItemChid2[]
}

export interface ListNavItemChid2 {
  id: string
  title: string
  url: string
}
