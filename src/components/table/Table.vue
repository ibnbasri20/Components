<template>
    <table class="table table-responsive">
        <thead>
          <tr>
            <th class="border px-4 py-2" v-for="(column, index) in columns" :key="index"> {{column}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <template v-for="(name, key) in columns">
                <td  class="border px-4 py-2" v-if="$scopedSlots[key]" :key="key">
                  <slot :name="key" :item="item"></slot>
                </td>
                <td  class="border px-4 py-2" v-else :key="key">{{item[key]}}</td>
            </template>
          </tr>
        </tbody>
    </table>
</template>



<script>
export default {
    props: {
      columns: Object,
      items: Array
    },
}
</script>