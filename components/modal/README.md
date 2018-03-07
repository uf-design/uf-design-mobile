# Modal

#### Props

| 属性                     | 说明                      | 类型              | 默认值  |
| ------------------------ | ------------------------- | ----------------- | ------- |
| **`show`**               | 控制 modal 显示           | `boolean`         | false   |
| **`style`**              | modal 样式                | `any`             |         |
| **`children`**           | modal 内容                | `ReactNativeNode` |         |
| **`animationInTiming`**  | modal 打开 animate-timing | `number`          | 300     |
| **`animationOutTiming`** | modal 关闭 animate-timing | `number`          | 300     |
| **`backdropColor`**      | 遮罩层背景颜色            | `string`          | 'black' |
| **`backdropOpacity`**    | 遮罩层背景透明度          | `number`          | .6      |
| **`onBackdropPress`**    | 遮罩层 touch 事件         | `function`        |         |
| **`onModalHide`**        | modal 关闭触发事件        | `function`        |         |
| **`onModalShow`**        | modal 打开触发事件        | `function`        |         |
