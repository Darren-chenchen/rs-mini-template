import { Component, Vue } from 'vue-property-decorator'
import RsSearchBar from '@/components/rs-searchbar/rs-searchbar.vue'

@Component({ components: { RsSearchBar } })
export default class index extends Vue {
  keyword: string = ''
  beginSearch(val) {
    console.log(val, this.keyword)
  }
  textChange(val) {}
  _searchClick() {}
}
