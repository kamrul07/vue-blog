<script setup>
   import { ref } from 'vue';
   import axios from 'axios';
   const blogList = ref();
   getBloglist();
   async function getBloglist() {
      let url = "https://basic-blog.teamrabbil.com/api/post-newest";
      let res=  await axios.get(url);
       
      if(res.status == 200 ){
         blogList.value = res.data;
      }
      console.log(blogList.value); 
   }
  
   function formateDate(date){
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
               <span class="font-semibold text-lg text-primary mb-2 block">
               Our Blogs
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  Our Recent News
               </h2>
               <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full md:w-1/2 lg:w-1/3 px-4" v-for="item in blogList" :key="item.id">
            <div class="max-w-[370px] mx-auto mb-10">
               <div class="rounded overflow-hidden mb-8">
                  <img
                     :src="item.img"
                     alt="image"
                     class="w-full"
                     />
               </div>
               <div>
                  <span
                     class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-black
                     mb-1
                     "
                     >
                     <strong>প্রকাশের সময় :</strong>{{ formateDate(item.created_at)  }}
                  </span>
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                        >
                     {{ item.title  }}
                     </a>
                  </h3>
                  <p class="text-base text-body-color">
                     {{ item.short  }}
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- ====== Blog Section End -->
        
    
</template>


<style scoped></style>