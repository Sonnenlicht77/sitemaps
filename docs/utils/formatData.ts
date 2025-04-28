/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
import { DefaultTheme } from 'vitepress'
import data from '../src/nav_data.json'

export default function formatData(): any {
  // console.log('处理数据', data)
  // sidebar
  type SidebarItem = DefaultTheme.SidebarItem

  const sidebar: SidebarItem[] = []

  data.map((item: any, index) => {
    const i = index > 9 ? index : `0${index}`
    sidebar.push({
      text: item.text,
      link: `/views/${i}_${item.id}_guide.md`,
    })
  })

  return sidebar
}

// 读取views目录下的文件，如果存在则返回文件名 没有则返回空，
// 优化后的文件检查函数
// function getFileName(fileName: string): boolean {
//   const fs = require('fs')
//   const path = require('path')
//   // 修正路径为绝对路径
//   const filePath = path.resolve(__dirname, '../../views', fileName)
//   return fs.existsSync(filePath)
// }

// 并根据data里的数据进行创建md
