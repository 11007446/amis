amis.define('docs/renderers/JSON.md', function(require, exports, module, define) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"json\" href=\"#json\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>JSON</h2><p>可以用来显示深层嵌套的 JSON 内容。</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;json&quot;</code></td>\n<td>指定为 JSON 渲染器</td>\n</tr>\n<tr>\n<td>name</td>\n<td><code>string</code></td>\n<td></td>\n<td>用于 CRUD 或 Form 中，通过这个 name 来获取数值</td>\n</tr>\n<tr>\n<td>jsonTheme</td>\n<td><code>string</code></td>\n<td><code>&quot;twilight&quot;</code></td>\n<td>颜色主题，还有一个是 <code>&quot;eighties&quot;</code></td>\n</tr>\n<tr>\n<td>levelExpand</td>\n<td><code>number</code></td>\n<td>1</td>\n<td>默认展开的层级</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 350px\"><script type=\"text/schema\" height=\"350\" scope=\"body\">{\n    \"type\": \"json\",\n    \"levelExpand\": 2,\n    \"value\": {\n        \"name\": \"amis\",\n        \"source\": {\n            \"github\": \"https://github.com/baidu/amis\"\n        }\n    }\n}\n\n</script></div>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/JSON.md\">/docs/renderers/JSON.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "JSON",
          "fragment": "json",
          "fullPath": "#json",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
