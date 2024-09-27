//
//
//

const { eventName, uniswapV3PoolContractV5, uniswapV3PoolContractV6 } = require("./config");

// const EventLibraryEthersV5 = require("./scripts/EventLibraryEthersV5");
// const EventLibraryEthersV6 = require("./scripts/EventLibraryEthersV6");

// const listenerV5 = new EventLibraryEthersV5();
// const listenerV6 = new EventLibraryEthersV6();

// Select the appropriate event listener function based on event name
const selectEventListenerFunction = require("./scripts/library/eventListenerFunctions");

const eventListenerFunction = selectEventListenerFunction("Swap");

// console.log(listenerV5);
// console.log(listenerV6);

let par;

async function addListeners() {
	uniswapV3PoolContractV5.on("Swap", () => {
		try {
			console.log("params.sender", params);
		} catch (error) {
			console.error("Error fetching reserves or fee ratio:", error);
		}
	});
}

addListeners();

async function Listen() {
	async function re_initialize() {
		for (const pool of poolsData) {
			const object_name = `${pool.token0_symbol}_${pool.token1_symbol}_${(pool.pool_fee / 1000000).toString().replace(".", "_")}_POOL`;

			const pool_object = eval(object_name);

			WSS_POOL_PROVIDER = new ethersV5.providers.WebSocketProvider(process.env.POLYGONZKEVM_V3_WSS_POOL_PROVIDER_URL);

			pool_object.wss_contract = new ethersV5.Contract(pool_object.address, poolABI, WSS_POOL_PROVIDER);

			global[object_name] = pool_object;
		}
	}

	async function addListeners() {
		pool_object.wss_contract.on("Swap", async (sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick, protocolFeesToken0, protocolFeesToken1) => {
			try {
				pool_object.sqrtPriceX96 = BigInt(sqrtPriceX96);
				pool_object.tick = BigInt(tick);
				pool_object.liquidity = BigInt(liquidity);

				// console.log("sqrtPriceX96 of", pool_object.address, pool_object.sqrtPriceX96);
				// console.log("tick of", pool_object.address, pool_object.tick);
				// console.log("liquidity of", pool_object.address, pool_object.liquidity);

				global[object_name] = pool_object;

				const StateV3 = JSON.parse(fs.readFileSync(`Scripts/StateV3/${chain}.json`, "utf8"));

				StateV3[projectName][object_name].sqrtPriceX96 = pool_object.sqrtPriceX96.toString();
				StateV3[projectName][object_name].tick = pool_object.tick.toString();
				StateV3[projectName][object_name].liquidity = pool_object.liquidity.toString();

				fs.writeFileSync(`Scripts/StateV3/${chain}.json`, JSON.stringify(StateV3, null, 2));

				Executor(pool_object);
			} catch (error) {
				console.error("Error fetching reserves or fee ratio:", error);
			}
		});
	}

	function setupHeartbeat() {
		clearInterval(heartbeatInterval);
		heartbeatInterval = setInterval(() => {
			WSS_POOL_PROVIDER._websocket.ping();
		}, 15000);
	}

	async function monitorPool() {
		await addListeners();

		WSS_POOL_PROVIDER._websocket.on("close", async () => {
			// console.log("WebSocket connection closed. Attempting to reconnect...");
			clearInterval(heartbeatInterval);
			await reconnect();
		});

		WSS_POOL_PROVIDER._websocket.on("error", async (error) => {
			// console.error("WebSocket error:", error);
			clearInterval(heartbeatInterval);
			await reconnect();
		});

		WSS_POOL_PROVIDER._websocket.on("open", async () => {
			// console.log("WebSocket connection opened.");
			setupHeartbeat();
		});
	}

	// await monitorPool();

	await addListeners();

	function reconnect() {
		setTimeout(async () => {
			// console.log("Reconnecting to WebSocket...");
			await re_initialize(); // Re Initialize Websocket Provider and Pool Contract of each Pool
			monitorPool();
		}, 3000);
	}
}

// Listen();
