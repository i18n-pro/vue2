
# API

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.1.1` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
<details >
  <summary>目录</summary>

  &emsp;&emsp;[createI18n](#createi18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[类型](#createi18n-类型)<br/>
  &emsp;&emsp;&emsp;&emsp;[参数说明](#createi18n-参数说明)<br/>

</details>

## createI18n
初始化国际化状态并返回其插件函数<br />会在 Vue 的原型属性上注册如下 3 个属性，它们各自的类型及使用说明可点击链接查看
* <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#t">$t</a>
* <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#seti18n">$setI18n</a>
* <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#i18nstate">$i18nState</a>


<h3 id="createi18n-类型">类型</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#i18nstate">I18nState</a> & { with$?: boolean },
) => (Vue: VueConstructor) => void
</pre>

<h3 id="createi18n-参数说明">参数说明</h3>
其他参数与 <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API_zh-CN.md#initi18n">initI18n</a> 参数一致<table>
  <tr>
    <th>参数名</th>
    <th>说明</th>
  </tr>
  <tr>
    <tr>
      <td>with$</td>
      <td>
        注册的原型属性，使用时是否需要带前缀$<br /><br />默认为 true，只能通过 <code>$t</code>, <code>$setI18n</code>, <code>$i18nState</code> 来访问属性；若配置为 false，则可以直接通过 <code>t</code>, <code>setI18n</code>, <code>i18nState</code> 来访问属性
      </td>
    </tr>
  </tr>
</table>
