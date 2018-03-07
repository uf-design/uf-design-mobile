# checkbox

#### Props

| 属性                | 说明             | 类型       | 默认值                 |
| ------------------- | ---------------- | ---------- | ---------------------- |
| **`checked`**       |                  | `object`   | {width:150, height:50} |
| **`size`**          | 按钮类型         | `string`   | 'primary'              |
| **`cb`**            | 是否显示加载动画 | `boolean`  | false                  |
| **`label`**         | touch 事件       | `function` |                        |
| **`labelStyle`**    | 是否显示加载动画 | `boolean`  | false                  |
| **`checkBoxColor`** | 按钮禁用状态     | `boolean`  | false                  |
| **`isRight`**       | touch 事件       | `function` |                        |

# checkboxGroup

#### Props

| 属性                | 说明                                                                                   | 类型     | 默认值   |
| ------------------- | -------------------------------------------------------------------------------------- | -------- | -------- |
| **`isRight`**       | 文本内容的位置是否在右边                                                               | `bool`   | false    |
| **`size`**          | 多选框大小                                                                             | `num`    | 20       |
| **`checkBoxColor`** | 多选框颜色                                                                             | `string` | -        |
| **`checkKey`**      | 多选框是否被选中的 key 值，比如，每行中选中的 isChecked:true，未选中为 isChecked:false | `string` | 必须有值 |
| **`renderLabel`**   | 文本内容，格式：renderLabel={data => this.renderLabel(data)}；其中 data 是每行的 data  | `func`   | -        |
| **`CheckboxData`**  | 需要遍历的数据                                                                         | `arr`    | -        |
