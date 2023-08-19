/* generated by Svelte v3.59.1 */
import { add_attribute, create_ssr_component } from "svelte/internal";

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const user = {};

	async function register(e) {
		e.preventDefault();
		console.log('register user', user);
	}

	return `<form method="post"><fieldset><legend>Your Info</legend>
    <div class="field"><label for="username">Username (public)</label>
      <input type="text" id="username" name="username"${add_attribute("value", user.username, 0)}></div>
    <div class="field"><label for="password">Password</label>
      <input type="password" name="password" id="password"${add_attribute("value", user.password, 0)}></div>
    <div class="field"><label for="password2">Re-type Password</label>
      <input type="password" name="password2" id="password2"${add_attribute("value", user.password2, 0)}></div></fieldset>
  <footer><button>Signup</button></footer>
</form>`;
});

export default Component;