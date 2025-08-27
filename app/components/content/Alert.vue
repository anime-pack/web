<script setup lang="ts">
interface AlertProps {
    type?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'neutral';
    icon?: string;
    class?: string;
    variant?: 'solid' | 'outline' | 'soft' | 'subtle';
};

const props = defineProps<AlertProps>();
</script>

<template>
    <UAlert :color="props.type" :variant="props.variant" :icon="props.icon" :class="cn('my-4', props.class)">
        <template #leading>
            <slot name="leading" mdc-unwrap="p" />
        </template>
        <template #title>
            <slot name="title" mdc-unwrap="p" />
        </template>
        <template #description>
            <slot mdc-unwrap="p" />
        </template>
    </UAlert>
</template>