<template>
    <div class="min-h-screen flex flex-col justify-between sm:p-0 lg:p-0">
        <Header />

        <UContainer as="main" class="flex flex-col flex-grow mx-0 pt-3 min-w-[100%]">
            <slot />
        </UContainer>

        <Footer />
    </div>
</template>
