<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="flex flex-col flex-grow w-full h-full min-h-screen">
      <Header />

      <UContainer as="main" class="flex flex-grow mx-0 pt-3 min-w-[100%] sm:p-0 lg:p-0">
        <slot />
      </UContainer>
    </div>

    <Footer />
  </div>
</template>
