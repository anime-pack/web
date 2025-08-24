<script lang="ts" setup>

</script>

<template>
    <USeparator />
    <footer class="w-full flex flex-col items-center px-6 pt-2">
        <div class="w-full flex flex-row items-center gap-2 pb-2">
            <div class="flex flex-col items-center">
                <img src="~/assets/images/app_icon.png" alt="App Icon" class="size-[60px]">
                <span class="text-xs text-muted font-semibold">Anime Pack</span>
            </div>
            <USeparator orientation="vertical" class="h-15" />
            <div class="flex flex-col items-center justify-center py-4 text-sm text-gray-500">
                <UButton to="/discord" variant="link" class="text-blue-500 hover:underline text-sm">Discord
                    <UIcon name="i-lucide-external-link" />
                </UButton>
                <UButton to="https://www.instagram.com/animepack_net/" target="_blank" variant="link"
                    class="text-blue-500 hover:underline text-sm">Instagram
                    <UIcon name="i-lucide-external-link" />
                </UButton>
            </div>
            <!-- <USeparator orientation="vertical" class="h-15" />
            <div class="flex flex-col items-center justify-center py-4 text-sm text-gray-500">
                    <UButton to="/legal#terms" variant="link" class="text-blue-500 hover:underline text-sm">{{
                        $t('footer.legal.termsOfService') }}</UButton>
                    <UButton to="/legal#privacy" variant="link" class="text-blue-500 hover:underline text-sm">{{
                        $t('footer.legal.privacyPolicy') }}</UButton>
            </div> -->
        </div>
        <p class="text-center text-xs">{{ $t('footer.communityLove') }}</p>
        <p class="text-center text-xs mb-1 text-gray-500">© 2025 Anime Pack. All rights reserved.</p>
        <!-- <p class="text-center text-xs mb-1 text-gray-500">{{ $t('footer.legal.notice') }}</p> -->
    </footer>
</template>
