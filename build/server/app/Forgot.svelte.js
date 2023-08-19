/* generated by Svelte v3.59.1 */
import { add_attribute, create_ssr_component } from "svelte/internal";

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const user = {};

	async function reset(e) {
		e.preventDefault();
		console.log('reset password', user);
	}

	return `<form method="post"><fieldset><legend>Forgot password?</legend>
      <div class="field"><label for="email">Email</label>
        <input type="email" id="email" name="email"${add_attribute("value", user.email, 0)}></div></fieldset>
    <footer><button>Reset</button>
      <p>Need an account? <a href="/register">Signup</a> or <a href="/login">Login</a></p></footer>
  </form>`;
});

export default Component;