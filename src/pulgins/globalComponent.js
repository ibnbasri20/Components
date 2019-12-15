import Card from "@/components/card/Card.vue";
import Row from '@/components/layout/Row.vue';
import Table from '@/components/table/Table.vue'
import Dropdown from "@/components/dropdown/Dropdown.vue"
import Pagination from "@/components/pagination/Pagination.vue"
import Breadcrumb from "@/components/breadcrum/Breadcrum.vue"
import BreadcrumbItem from "@/components/breadcrum/Breadcrum-Item.vue"
export default {
    install(Vue) {
      Vue.component("Card", Card);
      Vue.component("Row", Row);
      Vue.component("Table", Table);
      Vue.component("Dropdown", Dropdown);
      Vue.component("Pagination", Pagination);
      Vue.component("Breadcrumb", Breadcrumb);
      Vue.component("Breadcrumb-Item", BreadcrumbItem);
    }
  };
