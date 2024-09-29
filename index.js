import { eventName } from "./config.js";
import EventLibraryEthersV5 from "./scripts/EventLibraryEthersV5.js";
import EventLibraryEthersV6 from "./scripts/EventLibraryEthersV6.js";
import { selectEventListenerFunction } from "./scripts/library/eventListenerFunctions.js";
import { yourExecutorFunction } from "./scripts/library/yourExecutorFunction.js";

const eventListenerFunction = selectEventListenerFunction(eventName, yourExecutorFunction); // select appropiate eventListenerFunction for eventName

// ------------------------------------- --------------------------

// Example Usages with EthersV5

{
	const listenerV5 = new EventLibraryEthersV5();

	async function listenWithEthersV5() {
		listenerV5.on(eventName, eventListenerFunction);
		// listenerV5.once(eventName, eventListenerFunction);

		// listenerV5.off(eventName, eventListenerFunction);
		// listenerV5.removeListener(eventName, eventListenerFunction);
		// listenerV5.removeAllListeners(eventName);

		console.log(listenerV5.listeners(eventName));
		console.log(listenerV5.listenerCount(eventName));

		// console.log(await listenerV5.queryFilter(eventName, 20854733, 20854743));
	}

	listenWithEthersV5();
}

// -------------------------- Seperation --------------------------

// Example Usages with EthersV6

{
	const listenerV6 = new EventLibraryEthersV6();

	async function listenWithEthersV6() {
		await listenerV6.addListener(eventName, eventListenerFunction);
		// await listenerV6.on(eventName, eventListenerFunction);
		// await listenerV6.once(eventName, eventListenerFunction);

		// await listenerV6.off(eventName, eventListenerFunction);
		// await listenerV6.removeListener(eventName, eventListenerFunction);
		// await listenerV6.removeAllListeners(eventName);

		console.log(await listenerV6.listeners(eventName));
		console.log(await listenerV6.listenerCount(eventName));

		// console.log(await listenerV6.queryFilter(eventName, 20854733, 20854743));

		// console.log(listenerV6.getEvent(eventName));
	}

	listenWithEthersV6();
}
