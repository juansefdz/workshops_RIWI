<template>
    <div class="card-movie">
        <h3 class="title-card">{{props.title}}</h3>
        <img :src="props.poster" :alt="props.title" >
        <p>
            <span>{{props.year}}</span>
            
        </p>
        <p>
            <span>{{ props.type }}</span>
            
        </p>
        <a href="#">More details</a>
    </div>
</template>

<script setup lang="ts"> 
interface IProps{
    title: string;
    year: string;
    type: string;
    poster: string;
    id: string;
}

const props= defineProps<IProps>();

</script>

<style scoped lang ="scss"> 
.card-movie{
    width: 300px;
    height: 100px;
    background-color: $secondary;
    padding: 10px;
    text-align: center;
    border: 2px solid $primary;
    border-radius: 10px;
    
    .title-card{
        color: $white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p{
        color: $white;
        span{
            color: $primary;
            font-weight: bold;
        }
    }
    img{
        width: 98%;
        height: 300px;
        object-fit: scale-down;
        border-radius: 10px;
    }
}
</style>