<template>
    <section class="banner-section d-middle w-100 p-10">
        <form >
            <div class="search-input d-middle">
                <input 
                    type="text" 
                    required ="true"
                >
                <span>Search Movie</span>
            </div>
        </form>
        <div class="container-banner-img">
            <img :src="img" alt="">
        </div>
    </section>

</template>

<script lang="ts">
    import svgImage from '@/assets/images/header-img.svg'
    const img = svgImage;
</script>

<style lang="scss" scoped>
.banner-section{
    width: 100%;
    height: 50vh;
    background-image: url(../assets/images/banner-bg.png);
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    form {
        .search-input {

        }
    }
    .container-banner-img img{
        width: 200px;
        animation: animated-img 4s linear infinite;
        
    }
}

.d-middle{
    display: flex;
    justify-content: center;
    align-items: center;

}

@keyframes animated-img {
    30%{
        transform:translateY(-15px);
    }
    60%{
        transform:translateY(30px);
    }
    
}

</style>