# drag

使用vue-draggable-plus实现的拖拽组件,左侧列表拖动到中间区域，中间会显示对应的组件。中间可以拖动组件进行排序并且嵌套拖拽。
点击组件时右侧会显示对应的组件信息。

目前已知的bug：
<ul>
 <li>如果先拖拽左边的组件到中间，可能会实现中间无法排序，或排序混乱</li>
 <li>左边的组件无法直接拖动到中间水平布局中</li>
 <li>从外面拖进到水平布局中时，新加的元素可能无法拖拽排序</li>
</ul>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
