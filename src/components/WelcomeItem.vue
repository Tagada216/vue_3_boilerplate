<template>
  <div
    class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-4 relative"
  >
    <div class="relative">
      <div
        class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shadow-md"
      >
        <slot name="icon"></slot>
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"
      ></div>
    </div>
    <div class="flex-1 text-center md:text-left">
      <h3 class="text-xl font-semibold mb-2 text-gray-800">
        <slot name="heading"></slot>
      </h3>
      <div class="text-gray-600">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .flex-row::before {
    content: "";
    @apply absolute left-8 top-20 bottom-0 w-px bg-gray-200;
  }
}
</style>
