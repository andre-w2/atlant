<template>
	<div class="alert alert-danger">
		Не удалось загрузить данные!
		Попробуйте <a href="#" @click="reload" class="text-info fw-bold">перезагрузить</a> страницу
	</div>
</template>

<script>
export default {
	name: 'MvcFatalError',
	methods: {
		reload() {
			location.reload()
		}
	}
}
</script>