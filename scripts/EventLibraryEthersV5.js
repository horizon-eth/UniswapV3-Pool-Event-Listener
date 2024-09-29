import { uniswapV3PoolContractV5 } from "../config.js";

export default class EventLibraryEthersV5 {
	// ---------------------- activating pool listening ----------------------
	on = (eventName, eventListenerFunction) => uniswapV3PoolContractV5.on(eventName, eventListenerFunction); // on() => Listen for eventName continuously

	once = (eventName, eventListenerFunction) => uniswapV3PoolContractV5.once(eventName, eventListenerFunction); // once() => Listen for eventName just for once and stops listening after that
	// ---------------------- activating pool listening ----------------------

	// ---------------------- deactivating pool listening ----------------------
	off = (eventName, eventListenerFunction) => uniswapV3PoolContractV5.off(eventName, eventListenerFunction); // off() => Cancel listening process for eventName

	removeListener = (eventName, eventListenerFunction) => uniswapV3PoolContractV5.removeListener(eventName, eventListenerFunction); // removeListener() => Cancel listening process for a single listener

	removeAllListeners = (eventName) => uniswapV3PoolContractV5.removeAllListeners(eventName); // removeAllListeners() => Cancel listening process for all listeners
	// ---------------------- deactivating pool listening ----------------------

	// ---------------------- pool listener info ----------------------
	listeners = (eventName) => uniswapV3PoolContractV5.listeners(eventName); // listeners() => Returns listeners which registered for eventName

	listenerCount = (eventName) => uniswapV3PoolContractV5.listenerCount(eventName); // listenerCount() => Returns listeners' count which registered for eventName
	// ---------------------- pool listener info ----------------------

	// ---------------------- fetching pool events ----------------------
	queryFilter = (eventName, fromBlockOrBlockhash = 0, toBlock = "latest") => uniswapV3PoolContractV5.queryFilter(eventName, fromBlockOrBlockhash, toBlock); // queryFilter() => Returns all events that have been occured between fromBlockOrBlockhash to toBlock range
	// ---------------------- fetching pool events ----------------------
}
