module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    //文件结尾添加空行
    "eol-last": ["error", "always"],
    //使用unix换行符
    "linebreak-style": ["error", "unix"],
    //缩进使用2个空格
    "indent": ["error", 2],
    //多行if for 需要使用大括号括住,单行不限;一个整体内 如果有多行语句 则无论单行多行,都加大括号
    "curly": ["error", "multi-line", "consistent"],
    // 大括号开始的行必须有if for等关键字;大括号后如果还有逻辑判断，则必须在同一行。
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    // if for while后面紧跟()语句 不能有空格,else/else if前后都不能有空格
    "keyword-spacing": ["error", {"overrides": {"if": {"after": false }, "for": {"after": false }, "while": {"after": false}, "else": {"before": false, "after": false}}}],
    //定义函数时 函数名和小括号之间不用空格 匿名函数function关键字和小括号之间需要空格
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    //大括号(语句块)内的开头结尾不允许空行
    "padded-blocks": ["error", "never"],
    //运算符连接多行语句,运算符跟在当前行结尾,别的参数另起一行, ? :不限
    "operator-linebreak": ["error", "after", { "overrides": { "?": "ignore", ":": "ignore" } }],
    //大括号(语句块)内必须有空格或换行符,Object除外
    "block-spacing": "error",
    // 声明语句或者对象内的多个属性之间，逗号后必须有空格 逗号前不能有空格
    "comma-spacing": "error",
    //Object内的键名和值 对齐,使用默认配置 冒号和值中间必须有空格,多个值之间用逗号加空格分开
    "key-spacing": "error",
    //运算符两侧必须有空格
    "space-infix-ops": "error",
    //new delete等前后必须有空格, ++ --等是符号而不是单词的运算符前后不能有空格
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    //大括号(语句块)之前不能有空格 如if(a>0)后 Class之后
    "space-before-blocks": ["error", "never"],
    //不要有大于两行的连续空行
    "no-multiple-empty-lines": "error",
    // 不要有连续的空格 变量声明 import Object中的value为了对齐 例外,乘法 位运算 不例外
    "no-multi-spaces":["error", {"exceptions": {"Property": true, "BinaryExpression": false, "VariableDeclarator": true, "ImportDeclaration":true}}],
    //任何地方都不要出现tab
    "no-tabs": "error",
    //行尾不要有空格
    "no-trailing-spaces": "error",
    //不能有BOM头
    "unicode-bom": "error",
    //未使用的变量
    "no-unused-vars": "warn",
    //有console 警告
    "no-console": "warn",
    //有debugger 警告
    "no-debugger": "warn"
  }
};
