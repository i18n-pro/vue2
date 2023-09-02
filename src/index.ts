import { Translate, I18nState, initI18n, SetI18n } from 'i18n-pro'
export { Langs, I18nState, SetI18n, Translate } from 'i18n-pro'
import { VueConstructor } from 'vue'
import Vue from 'vue'

interface VueExt extends Vue {
  _t: Translate
  _i18nState: I18nState
}

const installNamespace: string[] = []

export function createI18n(props: I18nState & { with$?: boolean }) {
  const { with$ = true, ...i18nState } = props
  const i18n = initI18n(i18nState)
  const namespace = i18nState.namespace
  const prefix = with$ ? '$' : ''

  let instances: VueExt[] = []

  const setI18n: SetI18n = (...args) => {
    const newState = i18n.setI18n(...args)
    instances.forEach((instance) => {
      instance._t = i18n.t.bind(null)
      instance._i18nState = newState
    })

    return newState
  }

  return function install(V: VueConstructor) {
    if (installNamespace.includes(namespace)) return
    installNamespace.push(namespace)

    V.mixin({
      beforeCreate() {
        const self = this as VueExt
        instances.push(self)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(V.util as any)?.defineReactive(self, '_t', i18n.t)
        ;(V.util as any)?.defineReactive(self, '_i18nState', i18nState)
      },
      destroyed() {
        const self = this as VueExt

        instances = instances.filter((item) => item != self)
      },
    })

    Object.defineProperties(V.prototype, {
      [`${prefix}setI18n`]: {
        get: () => setI18n,
      },
      [`${prefix}t`]: {
        get() {
          return this._t
        },
      },
      [`${prefix}i18nState`]: {
        get() {
          return this._i18nState
        },
      },
    })
  }
}
