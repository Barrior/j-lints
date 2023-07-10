# @j-lints/stylelint-config-scss

统一 StyleLint 配置

## 安装

```bash
npm i @j-lints/stylelint-config-scss -D
```

## 使用

修改 `stylelint` 配置文件，将 `extends` 配置成 `@j-lints/stylelint-config-scss`

```json
{
  "extends": ["@j-lints/stylelint-config-scss"]
}
```

## 开启编辑器校验提示 - vscode

编辑项目配置文件 `.vscode/settings.json`（或开启编辑器全局校验配置）, 添加 `scss` 语法校验

```json
{
  "stylelint.validate": ["css", "less", "postcss", "scss"]
}
```
