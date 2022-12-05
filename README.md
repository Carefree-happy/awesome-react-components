# awesome-react-components

## react ts 模拟 antd
目的：
1、提升特定技术，打造自己的组件库
2、提升代码质量，了解大厂单元测试，代码提交过程，CI、CD流程
3、开源自己的项目

相关链接:
[数据基础类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

[管理type的github组织](https://github.com/DefinitelyTyped/DefinitelyTyped)
[@types/jquery](https://npmjs.com/package/@types/jquery)

[类型插件查询](https://www.typescriptlang.org/dt/search?search=)

npx 作用
- 避免安装全局模块
- 调用项目内部安装的模块

Effect Hook

- 无需清除的 Effect: 例如使用DOM更新title
    componentDidMount() componentDidUpdate()

- 需要清除的 Effect: 例如完成一个鼠标跟踪器
    componentDidMount() componentDidUpdate()
    document.removeEventListener("click", this.updateMouse)
mouseTracker 点击动作
inner
MouseTracker.tsx:20 before render 157
MouseTracker.tsx:20 before render 157
MouseTracker.tsx:15 remove effect 0
MouseTracker.tsx:7 

- 控制 useEffect 的执行时机，添加控制变量