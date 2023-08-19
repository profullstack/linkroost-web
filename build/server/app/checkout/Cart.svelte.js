/* generated by Svelte v3.59.1 */
import { add_attribute, create_ssr_component } from "svelte/internal";

import { onMount } from "svelte";
import { loadStripe } from "@stripe/stripe-js";

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const product = { priceId: 100, isSubscription: false };

	onMount(async () => {
		const stripe = await loadStripe("YOUR_STRIPE_PUBLIC_KEY");
	});

	async function checkout(e) {
		e.preventDefault();
		console.log("checkout", product);

		try {
			const res = await fetch("/checkout/session", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(product)
			});

			const data = await res.json();
			const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });

			if (result.error) {
				console.error(result.error.message);
			}

			console.log(result);
		} catch(err) {
			console.error(err);
		}
	}

	return `<form method="post"><fieldset><legend>Shopping Cart</legend>
        <div class="field"><label for="qty">Quantity</label>
            <input type="number" id="qty" name="qty"${add_attribute("value", product.qty, 0)}></div>
        <div class="field"><input type="checkbox" id="subscription" name="subscription"${add_attribute("value", product.isSubscription, 0)}>
            <label for="subscription">is this a subscription?</label></div></fieldset>
    <footer><button>Checkout</button></footer>
</form>`;
});

export default Component;