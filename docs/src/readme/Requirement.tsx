import { BlockQuote, H1, List, Link, render } from 'jsx-to-md'

export default function Requirement() {
  return (
    <>
      <H1>{t('要求')}</H1>
      <BlockQuote>
        {t(
          '当前库仅适用于{0}, 需要支持{1}的请点击{2}查看',
          ' `Vue 2.0` ',
          ' `Vue 3.0` ',
          ` ${render(
            <Link href="https://github.com/i18n-pro/vue">i18n-pro/vue</Link>,
          )} `,
        )}
      </BlockQuote>
      <List
        items={['U', 'vue >= **2.0.0** < **3.0.0**', 'i18n-pro >= **2.0.0**']}
      />
    </>
  )
}
