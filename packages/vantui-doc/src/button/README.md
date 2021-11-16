# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

在 Taro 文件中引入组件

```js
import { Button } from "vantui"; 
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`。

```jsx
<View>
  <Button type="default">
    默认按钮
  </Button>
  <Button type="primary">
    主要按钮
  </Button>
  <Button type="info">
    信息按钮
  </Button>
  <Button type="warning">
    警告按钮
  </Button>
  <Button type="danger">
    危险按钮
  </Button>
</View>
 
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx
<View>
  <Button
    plain={ true }
    type="primary"
  >
    朴素按钮
  </Button>
  <Button
    plain={ true }
    type="info"
  >
    朴素按钮
  </Button>
</View>
 
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现。

```jsx
<View>
  <Button
    plain={ true }
    hairline={ true }
    type="primary"
  >
    细边框按钮
  </Button>
  <Button
    plain={ true }
    hairline={ true }
    type="info"
  >
    细边框按钮
  </Button>
</View>
 
```

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮的`onClick`事件不会触发。

```jsx
<View>
  <Button
    disabled={ true }
    type="primary"
  >
    禁用状态
  </Button>
  <Button
    disabled={ true }
    type="info"
  >
    禁用状态
  </Button>
</View>
 
```

### 加载状态

```jsx
<View>
  <Button
    loading={ true }
    type="primary"
  />
  <Button
    loading={ true }
    type="primary"
    loadingType="spinner"
  />
  <Button
    loading={ true }
    type="info"
    loadingText="加载中..."
  />
</View>
 
```

### 按钮形状

```jsx
<View>
  <Button
    square={ true }
    type="primary"
  >
    方形按钮
  </Button>
  <Button
    round={ true }
    type="info"
  >
    圆形按钮
  </Button>
</View>
 
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```jsx
<View>
  <Button
    icon="starO"
    type="primary"
  />
  <Button
    icon="starO"
    type="primary"
  >
    按钮
  </Button>
  <Button
    icon="https://img.yzcdn.cn/vant/logo.png"
    type="info"
  >
    按钮
  </Button>
</View>
 
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`。

```jsx
<View>
  <Button
    type="primary"
    size="large"
  >
    大号按钮
  </Button>
  <Button
    type="primary"
    size="normal"
  >
    普通按钮
  </Button>
  <Button
    type="primary"
    size="small"
  >
    小型按钮
  </Button>
  <Button
    type="primary"
    size="mini"
  >
    迷你按钮
  </Button>
</View>
 
```

### 块级元素

通过`block`属性可以将按钮的元素类型设置为块级元素。

```jsx
<View>
  <Button
    type="primary"
    block={ true }
  >
    块级元素
  </Button>
</View>
 
```

### 自定义颜色

通过`color`属性可以自定义按钮的颜色。

```jsx
<View>
  <Button color="#7232dd">
    单色按钮
  </Button>
  <Button
    color="#7232dd"
    plain={ true }
  >
    单色按钮
  </Button>
  <Button color="linearGradient(to right, #4bb0ff, #6149f6)">
    渐变色按钮
  </Button>
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'

export interface ButtonProps extends Omit<TaroButtonProps, 'size' | 'type'> {
  icon?: string
  classPrefix?: string
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger'
  size?: 'small' | 'normal' | 'large' | 'mini'
  block?: boolean
  round?: boolean
  square?: boolean
  loading?: boolean
  hairline?: boolean
  disabled?: boolean
  loadingText?: string
  loadingSize?: string
  style?: string
  loadingType?: 'spinner' | 'circular'
  color?: string
  children: ReactNode
}

declare const Button: ComponentClass<ButtonProps>

export { Button }
```