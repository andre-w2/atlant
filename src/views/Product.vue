<template>
    <div v-if="isLoading" class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
        <template v-if="products">
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                <div v-for="product in products" :key="product.id" class="col">
                    <div class="card h-100 shadow-sm"> 
                      <router-link class="text-decoration-none" :to="{name: 'product_view', params: { id: product.id }}">
                        <img :src="product.img" :alt="product.name" class="card-img-top" />
                        <div class="card-body">
                            <div class="clearfix mb-3">
                                <span class="float-start badge rounded-pill bg-primary">
                                    {{ product.name }}
                                </span> 
                                <span class="float-end text-dark price-hp">
                                    ${{ product.price }}
                                </span> 
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </template>
    <div class="alert alert-warning">
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
    .card {
        background: #fff;
        box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
        transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
        border: 0;
        border-radius: 1rem
    }

    .card-img-top {
        border-top-left-radius: calc(1rem - 1px);
        border-top-right-radius: calc(1rem - 1px);
        width: 100%;
        max-height: 180px;
        object-fit: contain;
        padding: 30px
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)
    }

    @media (max-width: 768px) {
        .card-img-top {
            max-height: 250px
        }
    }
</style>