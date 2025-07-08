<template>
    <UContainer class="min-h-screen flex flex-col justify-between sm:p-0 lg:p-0">
        <Header />

        <UContainer as="main" class="flex-grow">
            <slot />
        </UContainer>

        <Footer />
    </UContainer>
</template>