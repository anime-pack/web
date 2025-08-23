<template>
    <main class="w-full flex flex-col justify-between">
        <section>
            <DisplayHero />
        </section>
        <section class="flex-1">
            <USeparator />
            <USkeleton class="size-full flex flex-col items-center justify-center">
                <h1 class="font-bold"><UIcon name="i-lucide-heart" /> Hey, we're still working on this page...</h1>
            </USkeleton>
        </section>
        <SearchAppeal />
    </main>
</template>
