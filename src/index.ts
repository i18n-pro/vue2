import { Translate, I18nState, initI18n, SetI18n } from 'i18n-pro'
import type { VueConstructor } from 'vue'
import type Vue from 'vue'

interface VueExt extends Vue {
  _t: Translate
}

const installNamespace: string[] = []

export function createI18n(i18nState: I18nState) {
  const { namespace } = i18nState
  const i18n = initI18n(i18nState)

  let instances: VueExt[] = []

  const setI18n: SetI18n = (...args) => {
    const newState = i18n.setI18n(...args)
    instances.forEach((instance) => {
      instance._t = i18n.t.bind(null)
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
      },
      destroyed() {
        const self = this as VueExt

        instances = instances.filter((item) => item != self)
      },
    })

    Object.defineProperty(V.prototype, '$setI18n', {
      get: () => setI18n,
    })

    Object.defineProperty(V.prototype, '$t', {
      get: function () {
        return this._t
      },
    })
  }
}
