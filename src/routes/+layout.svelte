<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	const { children } = $props()
</script>

<Navbar />
{@render children?.()}
<Footer />