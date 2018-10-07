// 由于改为vuex 所以不再采用
export default {
  save: function (StorageKey, task) {
    window.localStorage.setItem(StorageKey, JSON.stringify(task))
  },
  get: function (StorageKey) {
    return JSON.parse(window.localStorage.getItem(StorageKey) || '[]')
  },
  remove: function (StorageKey) {
    window.localStorage.removeItem(StorageKey)
  },
  clean: function () {
    window.localStorage.clean()
  }
}
