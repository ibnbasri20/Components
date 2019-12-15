<template>
  <table
    v-if="state"
    class="table"
  >
    <thead>
        <tr>
            <th class="border px-4 py-2" v-for="(column, index) in columns" :key="index"> {{column}}</th>
        </tr>
    </thead>
    <slot
      :items="items"
      :insights="state.insights"
    >
        <tbody>
          <tr  v-for="(item, itemIndex) in items" :key="item.objectID">
            <template v-for="(name, key) in columns">
                <td  class="border px-4 py-2" v-if="$scopedSlots[key]" :key="key">
                  <slot :name="key" :index="itemIndex" :item="item"></slot>
                </td>
                <td  class="border px-4 py-2" v-else :key="key">{{item[key]}}</td>
            </template>
          </tr>
        </tbody>
    </slot>
  </table>
</template>

<script>
import { connectHitsWithInsights } from 'instantsearch.js/es/connectors';
import { createWidgetMixin } from 'vue-instantsearch';

export default {
  name: 'AisHits',
  mixins: [
    createWidgetMixin({ connector: connectHitsWithInsights }),
  ],
  props: {
    escapeHTML: {
      type: Boolean,
      default: true,
    },
    transformItems: {
      type: Function,
      default(items) {
        return items;
      },
    },
    columns: Object,
  },
  computed: {
    items() {
      return this.state.hits;
    },
    widgetParams() {
      return {
        escapeHTML: this.escapeHTML,
        transformItems: this.transformItems,
      };
    },
  },
};
</script>
