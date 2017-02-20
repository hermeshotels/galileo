import accounting from 'accounting'
var vueCurrency = {}
vueCurrency.install = (Vue) => {
  Vue.filter('currency', (value) => {
    return accounting.formatMoney(value, 'EUR ')
  })
}
export default vueCurrency
