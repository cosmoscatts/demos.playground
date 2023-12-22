export interface Project {
  id?: string
  name: string
  desc?: string
  img?: string // preview
  link: string
}

export const projects: Project[] = [
  {
    name: 'Vivid',
    desc: '使用 Acro Design 搭建的 Vue 后台管理模板 2.0，简单而优雅！',
    img: 'https://cdn.hilyc.cn/demos/vivid.png',
    link: 'https://demos.hilyc.cn/vivid',
  },
  {
    name: 'Parfait',
    desc: '使用 Acro Design 搭建的 Vue 后台管理模板（旧版）。',
    img: 'https://cdn.hilyc.cn/demos/parfait.png',
    link: 'https://demos.hilyc.cn/parfait',
  },
  {
    name: 'Frais',
    desc: '使用 Naive Ui 搭建的 Vue 后台管理模板，可以自由配置。',
    img: 'https://cdn.hilyc.cn/demos/frais.png',
    link: 'https://demos.hilyc.cn/frais',
  },
  {
    name: 'Oh Vue Tabs',
    desc: '仿谷歌浏览器风格的多页签。',
    img: 'https://cdn.hilyc.cn/demos/ohvuetabs.png',
    link: 'https://demos.hilyc.cn/ohvuetabs',
  },
  {
    name: 'Kof',
    desc: '简易版拳皇，仅实现了一个角色，能进行简单地对战。',
    img: 'https://cdn.hilyc.cn/demos/kof.png',
    link: 'https://demos.hilyc.cn/kof',
  },
]
