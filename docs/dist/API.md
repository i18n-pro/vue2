
# API

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.1.1`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[createI18n](#createi18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#createi18n-type)<br/>
  &emsp;&emsp;&emsp;&emsp;[Parameter Description](#createi18n-parameter-description)<br/>

</details>

## createI18n
Initialize internationalization state and return its plugin function<br />It will register the following 3 properties on Vue's prototype properties. You can click on the links to view their respective types and usage instructions
* <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API.md#t">$t</a>
* <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API.md#seti18n">$setI18n</a>
* <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API.md#i18nstate">$i18nState</a>


<h3 id="createi18n-type">Type</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API.md#i18nstate">I18nState</a> & { with$?: boolean },
) => (Vue: VueConstructor) => void
</pre>

<h3 id="createi18n-parameter-description">Parameter Description</h3>
The other parameters are consistent with the  <a href="https://github.com/i18n-pro/core/blob/v2.1.1/docs/dist/API.md#initi18n">initI18n</a>  parameters<table>
  <tr>
    <th>Parameter name</th>
    <th>Description</th>
  </tr>
  <tr>
    <tr>
      <td>with$</td>
      <td>
        Registered prototype properties, do you need to bring prefix $ when used<br /><br />The default is TRUE, you can only access the properties through  <code>$t</code>, <code>$setI18n</code>, <code>$i18nState</code> ; if configured to false, you can directly access the properties through  <code>t</code>, <code>setI18n</code>, <code>i18nState</code> 
      </td>
    </tr>
  </tr>
</table>
