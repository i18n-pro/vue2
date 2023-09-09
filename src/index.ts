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
  return function install(V: VueConstructor) {
    const namespace = props.namespace

    if (installNamespace.includes(namespace)) return
    installNamespace.push(namespace)

    const { with$ = true, ...i18nState } = props
    const { t, setI18n: _setI18n } = initI18n(i18nState)
    const prefix = with$ ? '$' : ''

    let instances: VueExt[] = []

    const setI18n: SetI18n = (...args) => {
      const newState = _setI18n(...args)
      instances.forEach((instance) => {
        instance._t = t.bind(null)
        instance._i18nState = newState
      })

      return newState
    }

    V.mixin({
      beforeCreate() {
        instances.push(this as VueExt)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(V.util as any)?.defineReactive(this, '_t', t)
        ;(V.util as any)?.defineReactive(this, '_i18nState', i18nState)
      },
      destroyed() {
        instances = instances.filter((item) => item != this)
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
