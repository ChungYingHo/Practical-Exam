## 針對下面幾題進行紀錄
### 可使用任意的 HTML / CSS / JavaScript Framework
這裡使用 NextJS 搭配 Tailwind CSS 進行。

### Logo 僅限使用 CSS 撰寫
撰寫 logo 部份的 CSS 放在一下資料夾結構：
```xml
---| App/
------| components/
---------| logo/
------------| logo.tsx
------------| logo.module.css
```

### 需有 RWD，breakpoint 可以自行設定
這次把 breakpoint 主要設定在 1536px。

### 選單的選項要能被選擇，需做出 selected 的效果
我理解為這部分可能會切換路由，所以我讓選項的樣式跟著路由走，即去到相對應的路由選項才會呈現被選到的樣式。

### 備援連結
防止 CodeSandbox 出現問題，這裡一併附上 [vercel 的連結](https://practical-exam-phi.vercel.app/)