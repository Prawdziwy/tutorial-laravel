<template>
    <div class="dropdown relative">
        <!-- trigger -->
        <div @click="isOpen = !isOpen">
            <slot name="trigger"></slot>
        </div>

        <!-- menu links -->
        <div
            v-show="isOpen"
            class="dropdown-menu absolute bg-card py-2 px-4 rounded shadow mt-2 pin-r w-full"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return { isOpen: false }
        }
    }
</script>