import { uniswapV3PoolContractV6 } from "../config.js";

export default class EventLibraryEthersV6 {
	// ---------------------- activating pool listening ----------------------
	addListener = (eventName, eventListenerFunction) => uniswapV3PoolContractV6.addListener(eventName, eventListenerFunction); // addListener() => Listen for eventName continuously

	on = (eventName, eventListenerFunction) => uniswapV3PoolContractV6.on(eventName, eventListenerFunction); // on() => Listen for eventName continuously

	once = (eventName, eventListenerFunction) => uniswapV3PoolContractV6.once(eventName, eventListenerFunction); // once() => Listen for eventName just for once and stops listening after that
	// ---------------------- activating pool listening ----------------------

	// ---------------------- deactivating pool listening ----------------------
	off = (eventName, eventListenerFunction) => uniswapV3PoolContractV6.off(eventName, eventListenerFunction); // off() => Cancel listening process for eventName

	removeListener = (eventName, eventListenerFunction) => uniswapV3PoolContractV6.removeListener(eventName, eventListenerFunction); // removeListener() => Cancel listening process for a single listener

	removeAllListeners = (eventName) => uniswapV3PoolContractV6.removeAllListeners(eventName); // removeAllListeners() => Cancel listening process for all listeners
	// ---------------------- deactivating pool listening ----------------------

	// ---------------------- pool listener info ----------------------
	listeners = (eventName) => uniswapV3PoolContractV6.listeners(eventName); // listeners() => Returns listeners which registered for eventName

	listenerCount = (eventName) => uniswapV3PoolContractV6.listenerCount(eventName); // listenerCount() => Returns listeners' count which registered for eventName
	// ---------------------- pool listener info ----------------------

	// ---------------------- fetching pool events ----------------------
	queryFilter = (eventName, fromBlock, toBlock) => uniswapV3PoolContractV6.queryFilter(eventName, fromBlock, toBlock); // queryFilter() => Returns all events that have been occured between fromBlockOrBlockhash to toBlock range
	// ---------------------- fetching pool events ----------------------

	// ---------------------- get pool event ----------------------
	getEvent = (eventName) => uniswapV3PoolContractV6.getEvent(eventName); // getEvent() => Returns the event for a given name
	// ---------------------- get pool event ----------------------
}
