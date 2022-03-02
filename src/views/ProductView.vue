<template>
    <div v-if="isLoading" class="product_details">
        <template v-if="products_view.length">
            <div class="container">
                <template v-for="product_view in products_view" :key="product_view.id">
                    <div class="row details_row">
                        <div class="col-lg-6">
                            <div class="details_image">
                                <div class="details_image_large">
                                    <img :src="product_view.img" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="details_content">
                                <div class="details_name">{{ product_view.name }}</div>
                                <div class="details_price">${{ product_view.price }}</div>
                                <div class="in_stock_container">
                                    <div class="availability">Наличие:</div>
                                    <span :class="{ 'text-danger': parseInt(product_view.availability) === 0}">
                                        {{ parseInt(product_view.availability) === 1 ? 'Есть в наличии' : 'Нету в наличии' }}
                                    </span>
                                </div>
                                <div class="details_text">
                                    <h3 class="mt-3 mb-1">Характеристики</h3>
                                    <pre class="fw-bold" v-html="product_view.desk"></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </template>
        <div v-else class="alert alert-warning">Данные не найдены</div>
    </div>
    <preload v-else-if="!fatalError" />
    <fatal-error v-if="fatalError" />
</template>
<script>
import { mapState } from 'vuex'
import { actionsTypes } from '@/store/modules/product_view'
import Preload from '@/components/Preload'
import FatalError from '@/components/FatalError'

export default {
    name: 'MvcProduct',
    components: {
        Preload,
        FatalError
    },
    created() {
        this.$store.dispatch(actionsTypes.product_view, {
            id: this.$route.params.id
        })
    },
    computed: {
        ...mapState({
            products_view: state => state.product_view.product,
            isLoading: state => state.product_view.isLoading,
            fatalError: state => state.product_view.fatalError
        }),
    }
}
</script>
<style>
.product_details {
    width: 100%;
    background: #FFFFFF;
    z-index: 2;
}

.details_row {
    margin-top: 95px;
}

.details_image {}

.details_image_large {
    width: 100%;
}

.details_image_large img {
    max-width: 100%;
}

.details_image_thumbnails {
    margin-top: 17px;
}

.details_image_thumbnail {
    width: calc((100% - 51px) / 4);
    cursor: pointer;
}

.details_image_thumbnail::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 2px #1b1b1b;
    content: '';
    background: transparent;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}

.details_image_thumbnail.active::after,
.details_image_thumbnail:hover::after {
    visibility: visible;
    opacity: 1;
}

.details_image_thumbnail img {
    max-width: 100%;
}

.product_name {
    font-size: 30px;
    font-weight: 600;
    color: #232323;
    line-height: 0.75;
}

.product_price {
    font-size: 24px;
    font-weight: 600;
    margin-top: 9px;
    color: #8a8a8a;
}

.in_stock_container {
    margin-top: 22px;
}

.availability {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: #6c6a74;
}

.in_stock_container span {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: #44a038;
    margin-left: 5px;
}

.details_name {
    font-size: 24px;
    font-weight: 500;
    color: #1b1b1b;
    margin-top: 35px;
}

.details_discount {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: #e95a5a;
    margin-right: 20px;
    text-decoration: line-through;
}

.details_price {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: #6c6a74;
    margin-top: 12px;
}

.details_text {
    margin-top: 49px;
}

.details_text p {
    font-weight: 500;
}

.product_quantity_container {
    margin-top: 48px;
}

.product_quantity {
    display: inline-block;
    width: 147px;
    height: 61px;
    border: solid 2px #d0d0d0;
    overflow: hidden;
    padding-left: 78px;
    vertical-align: middle;
}

.product_quantity span {
    position: absolute;
    top: 50%;
    left: 23px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    color: #6c6a74;
}

.product_quantity input {
    display: block;
    width: 30px;
    height: 57px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #1b1b1b;
    text-align: left;
    padding-left: 9px;
    line-height: 39px;
    float: left;
}
</style>