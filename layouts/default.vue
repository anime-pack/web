<template>
    <UContainer class="min-h-screen flex flex-col justify-between sm:p-0 lg:p-0">
        <Header />

        <UContainer class="flex-1">
            <slot />
        </UContainer>

        <Footer />
    </UContainer>
</template>