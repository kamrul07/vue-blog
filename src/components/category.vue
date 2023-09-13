<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import bloglist from './bloglist.vue';
const catBlogLists = ref();


onBeforeMount(() => {
    getCatBloglist();

})

async function getCatBloglist() {
    let url = "https://basic-blog.teamrabbil.com/api/post-newest";
    let res = await axios.get(url);

    if (res.status == 200) {
        catBlogLists.value = res.data;
    }
    console.log(catBlogLists.value);
}

function formateDate(date) {
    let formatedDate = new Date(date);
    return formatedDate.toLocaleDateString("bn-BD");
}

</script>


<template>
    <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div class="container">
            <div class="flex flex-wrap justify-center -mx-4">
                <div class="w-full px-4">
                    <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                        <span class="block mb-2 text-lg font-semibold text-primary">
                            Blog posts from
                        </span>
                        <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                            {{ $route.params.category }}
                        </h2>
                        <p class="text-base text-body-color">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="item in catBlogLists" :key="item.id">
                    <div class="max-w-[370px] mx-auto mb-10">
                        <div class="mb-8 overflow-hidden rounded">
                            <router-link :to="{ name: 'blog', params: { 'id': item.id } }"
                                class="inline-block mb-4 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl text-dark hover:text-primary">
                                <img :src="item.img" alt="image" class="w-full" />
                            </router-link>
                        </div>
                        <div>
                            <span
                                class="inline-block px-4 mb-1 text-xs font-semibold leading-loose text-center text-black rounded bg-primary">
                                <strong>প্রকাশের সময় :</strong>{{ formateDate(item.created_at) }}
                            </span>
                            <h3>
                                <router-link :to="{ name: 'blog', params: { 'id': item.id } }"
                                    class="inline-block mb-4 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl text-dark hover:text-primary">
                                    {{ item.title }}
                                </router-link>
                            </h3>
                            <p class="text-base text-body-color">
                                {{ item.short }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoprd></style>