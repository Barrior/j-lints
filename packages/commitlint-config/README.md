# @j-lints/commitlint-config

统一 commitLint 配置

## 安装

```bash
npm i @j-lints/commitlint-config -D
```

## 使用

1、修改 `commitlint` 配置文件，将 `extends` 配置成 `@j-lints/commitlint-config`

```json
{
  "extends": ["@j-lints/commitlint-config"]
}
```

2、配置 [husky](https://github.com/typicode/husky) Git 提交时校验 commit 信息
