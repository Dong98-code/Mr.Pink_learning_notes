<template>
	<div id="root">
		<TestOne/>
		<TestTwo/>
	</div>
</template>

<script>

import TestOne from './components/Test.vue'
import TestTwo from './components/Test2.vue'

export default {

	name:'App',
	components: {TestOne, TestTwo}

}

</script>