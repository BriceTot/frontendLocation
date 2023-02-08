<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-light">
	<div class="container">
		<a class="navbar-brand" href="/">Home</a>
		<ul class="nav navbar-nav pull-xs-right">

			{#if $page.data.user}
				<li class="nav-item">
					<i>{$page.data.user.username}</i>
				</li>
				<li class="nav-item">
					<a href="/sign_out" class="nav-link" class:active={$page.url.pathname === '/sign_out'}>
						Sign out
					</a>
				</li>
			{:else}
				<li class="nav-item">
					<a href="/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
						Sign in
					</a>
				</li>

				<li class="nav-item">
					<a href="/register" class="nav-link" class:active={$page.url.pathname === '/register'}>
						Sign up
					</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>
