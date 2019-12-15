<template>
  <nav class="bg-grey-light p-3 rounded font-sans w-full m-4 -mx-2 flex">
    <slot></slot>
  </nav>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      separator: {
        type: String,
        default: ''
      }
    }
  }
</script>
