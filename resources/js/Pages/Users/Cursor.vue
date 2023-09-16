<script setup>
import { computed, watch, ref, onMounted } from 'vue';
import { Head, Link, useForm, router, usePage } from '@inertiajs/vue3';

import AppLayout from '@/Layouts/AppLayout.vue';

import Observer from '@/Components/Observer.vue';

const props = defineProps({ 
    users: Object
})

console.log(props.users)
const items = ref(props.users.data)
const meta_path = ref(props.users.meta.path)
const meta_prev_cursor = ref(props.users.meta.prev_cursor)
const meta_next_cursor = ref(props.users.meta.next_cursor)

const getItems = async () => {
    let url = route('paginate.cursor');
    if (meta_next_cursor.value !== null) {
        url = route('paginate.cursor') + '?cursor='+ meta_next_cursor.value;
    }
    router.visit(url, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: (data) => {
            console.log(data.props.users);
            meta_prev_cursor.value = data.props.users.meta.prev_cursor
            meta_next_cursor.value = data.props.users.meta.next_cursor
            items.value.push(...data.props.users.data)
        },
    })
}
</script>

<template>
    <AppLayout title="Users">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Users
            </h2>
        </template>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <div class="mt-10 sm:mt-0">
                <div v-if="items.length > 0" class="w-full overflow-x-auto">
                    <div class="bg-white shadow sm:rounded-lg">
                        <div class="bg-white rounded-md shadow overflow-x-auto">
                            <div class="h-[400px] w-[800px] overflow-auto border border-solid border-blue-300">
                                <ul>
                                    <li v-for="user in items" :key="user.id">
                                        {{ user.id }}
                                    </li>
                                </ul>

                                <Observer @intersect="getItems" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="px-4 py-4">No users found.</div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>