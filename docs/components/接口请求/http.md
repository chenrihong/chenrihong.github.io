---
sidebar_position: 1
---

# window.http


:::tip[我需要调用后端一个定制接口怎么办呢？]
比如，在点击按钮时，我需要调用一个接口，拿到数据之后，判断这个接下来的业务能不能走。
:::

## 脚本的定义

```ts
{
    http: {
        get: (url: string, options: any = {}) => Promise<any>
        post: (url: string, options: any = {}) => Promise<any>,
        delete: (url: string, options: any = {}) => Promise<any>,
        put: (url: string, options: any = {}) => Promise<any>,
    },
}
```

参数说明：

- url: 请求地址
- options: 请求参数
  - params: get 参数
  - data: post 参数(FormBody)
  - timeout: 超时时间(毫秒)
  - 更多参数参考 [axios](https://axios-http.com/docs/req_config)


### 示例

```js
const userInfo = JSON.parse(localStorage.getItem('userinfo'))
const MODEL_ID = this.getFormVal({ col: 'MODEL_ID' });
const PLAN_ID = this.getFormVal({ col: 'PLAN_ID' });
http.post('/a0/dev/DataSet/previewSqlPage2?dataSetId=000120230919170611SGCP2NI', {
    data: [
        { "name": "hosp_id", "type": "String", "defaultValue": userInfo.hospId },
        { "name": "tenant_id", "type": "String", "defaultValue": userInfo.tenantId },
        { "name": "HOSP_ID", "type": "String", "defaultValue": userInfo.hospId },
        { "name": "TENANT_ID", "type": "String", "defaultValue": userInfo.tenantId },
        { "name": "MODEL_ID", type: "String", defaultValue: MODEL_ID }
    ]
}).then(res => {

})
``` 