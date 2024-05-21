---
editLink: false
prev: false
next: false
aside: false
lastUpdated: false
---

<script setup>
const websites = [
  {
    name: 'Vite',
    url: 'https://cn.vitejs.dev/',
    icon: 'https://cn.vitejs.dev/logo.svg',
  },
  {
    name: 'Vue',
    url: 'https://cn.vuejs.org/',
    icon: 'https://cn.vuejs.org/logo.svg',
  },
  {
    name: 'React',
    url: 'https://zh-hans.react.dev/',
    icon: 'https://zh-hans.react.dev/apple-touch-icon.png',
  },
  {
    name: 'Nuxt',
    url: 'https://nuxt.com/',
    icon: 'https://nuxt.com/icon.png',
  },
  {
    name: 'NextJS',
    url: 'https://nextjs.org/',
    icon: 'https://nextjs.org/favicon.ico',
  },
  {
    name: 'VueUse',
    url: 'https://vueuse.org/',
    icon: 'https://vueuse.org/favicon.svg',
  },
  {
    name: 'naiveui',
    url: 'https://www.naiveui.com/zh-CN/',
    icon: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg',
  },
  {
    name: 'Ant Design',
    url: 'https://ant-design.antgroup.com/index-cn/',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png',
  },
  {
    name: 'Element Plus',
    url: 'https://element-plus.org/zh-CN/',
    icon: 'https://element-plus.org/apple-touch-icon.png',
  },
  {
    name: 'UnoCSS',
    url: 'https://unocss.dev/',
    icon: 'https://unocss.dev/favicon.svg',
  },
  {
    name: 'TailwindCSS',
    url: 'https://www.tailwindcss.cn/',
    icon: 'https://www.tailwindcss.cn/favicons/apple-touch-icon.png?v=3',
  },
  {
    name: 'iconfont',
    url: 'https://www.iconfont.cn/',
    icon: 'https://img.alicdn.com/imgextra/i4/O1CN01XZe8pH1USpiUNT1QN_!!6000000002517-2-tps-114-114.png',
  },
  {
    name: 'icones',
    url: 'https://icones.js.org/',
    icon: 'https://icones.js.org/favicon.svg',
  },
  {
    name: 'tinify',
    url: 'https://tinify.cn/',
    icon: 'https://tinify.cn/images/apple-touch-icon.png',
  },
]
</script>

<div style="min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
  <p align="center" style="font-size: 58px; color: var(--vp-home-hero-name-color); font-weight: 700;">Yu's blog</p>
  <p style="color: var(--vp-c-text-2); font-weight: 500; font-size: 22px;">不念过往 不畏将来 不乱于心 不困于情</p>
  <div style="width: 100%; margin: 20px 0;">
    <div style="width: 100%;display: flex;flex-wrap: wrap;">
      <a v-for="website in websites" :key="website.name" :href="website.url" style="display: flex;flex-direction: column;align-items: center;width: 110px;margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(0, 0, 0, 0.05); background-color: rgb(248, 248, 248);">
          <img width="48" height="48" :src="website.icon" />
        </div>
        <div style="text-align: center;">{{ website.name }}</div>
      </a>
    </div>
  </div>
</div>

<style scoped>
a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}
</style>
