<template>
    <div v-if="isLoading" class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <template v-if="products">
            <template v-for="product in products" :key="product.id">
                <router-link class="text-decoration-none text-dark" :to="{name: 'product_view', params: { id: product.id }}">
                    <div class="border border-dark mt-1 bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 p-3">
                            <h5 class="display-5">{{ product.name }}</h5>
                            <p class="lead">${{ product.price }}</p>
                        </div>
                        <div class="mx-auto im">
                            <img :src="product.img" :alt="product.name">
                        </div>
                    </div>
                </router-link>
            </template>
        </template>
        <div v-else class="alert alert-warning">
        Данные не найдены
        </div>
    </div>
    <preload v-else-if="!fatalError" />
    <fatal-error v-if="fatalError" />
</template>
<script>
import { mapState } from 'vuex'
import { actionsTypes } from '@/store/modules/product'
import Preload from '@/components/Preload'
import FatalError from '@/components/FatalError'

export default {
    name: 'MvcProduct',
    components: {
        Preload,
        FatalError
    },
    created() {
        if (this.$route.query.id) {
            this.$store.dispatch(actionsTypes.product, { id: this.$route.query.id })
        } else {
            this.$store.dispatch(actionsTypes.product, { id: 0 })
        }
    },
    computed: {
        ...mapState({
            products: state => state.product.product,
            isLoading: state => state.product.isLoading,
            fatalError: state => state.product.fatalError
        })
    }
}
</script>
<style>
.im {
    height: 300px;
}

.products {
    width: 100%;
    background: #FFFFFF;
    z-index: 2;
}

.product {
    width: calc((100% - 90px) / 4);
    margin-top: 20px;
    margin-bottom: 59px;
    padding-left: 63px;
}

.product_image {
    width: 100%;
}

.product_image img {
    max-width: 100%;
}

.product_content {
    width: 100%;
    padding-top: 36px;
    padding-bottom: 38px;
}

.product_title a {
    font-size: 18px;
    font-weight: 500;
    color: #1b1b1b;
    line-height: 1.1;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}

.product_title a:hover {
    color: #e95a5a;
}

.product_price {
    font-size: 16px;
    font-weight: 500;
    color: #6c6a74;
    line-height: 0.75;
    margin-top: 13px;
}
</style>