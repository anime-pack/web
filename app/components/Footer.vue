<script lang="ts" setup>

</script>

<template>
    <footer>
        <div
            class="flex flex-col items-center justify-center py-4 text-sm text-gray-500 border-t border-white/10">
            <p>{{ $t('footer.copyright') }}</p>
            <p class="mt-2 text-center">{{ $t('footer.communityLove') }}</p>
            <!-- <p class="mt-2">
                    <NuxtLink to="/legal/privacy-policy" class="text-blue-500 hover:underline">{{ $t('footer.legal.privacyPolicy') }}</NuxtLink> |
                    <NuxtLink to="/legal/terms-of-service" class="text-blue-500 hover:underline">{{ $('footer.legal.termsOfService') }}</NuxtLink>
                </p> -->
            <p>{{ $t('footer.legal.notice') }}</p>
        </div>
    </footer>
</template>
