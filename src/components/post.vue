<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue';
import axios from 'axios';
const route = useRoute();
const postDetails = reactive({
    post_title: " ",
    post_description: " ",
    post_img: " ",
    post_time: " ",
})
onBeforeMount(() => {
    getpostDetails();

})

async function getpostDetails() {
    let url = "https://basic-blog.teamrabbil.com/api/post-details/" + route.params.id;
    let res = await axios.get(url);

    if (res.status == 200) {
        postDetails.post_title = res.data.postDetails.title;
        postDetails.post_description = res.data.postDetails.content;
        postDetails.post_img = res.data.postDetails.img;
        postDetails.post_date = res.data.postDetails.created_at;
    }

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
                    <div class="text-left mx-auto mb-[60px] lg:mb-20 max-w-[1200px]">
                        <div class="mb-8 overflow-hidden rounded">
                            <img :src="postDetails.post_img" alt="image" class="w-full" />
                        </div>
                        <h2
                            class="inline-block mb-4 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl text-dark hover:text-primary">
                            {{ postDetails.post_title }}
                        </h2>
                        <span
                            class="inline-block px-4 mb-1 text-xs font-semibold leading-loose text-center text-black rounded bg-primary">
                            <strong>প্রকাশের সময় :</strong>{{ formateDate(postDetails.post_date) }}
                        </span>
                        <p class="text-base text-body-color">
                            {{ postDetails.post_description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>