function selectEventListenerFunction(_eventName) {
	const eventListenerFunctions = {
		Swap: (sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick) => {
			/* Your Logic */
		},
		Flash: (sender, recipient, amount0, amount1, paid0, paid1) => {
			/* Your Logic */
		},
		Mint: (sender, owner, tickLower, tickUpper, amount, amount0, amount1) => {
			/* Your Logic */
		},
		Burn: (owner, tickLower, tickUpper, amount, amount0, amount1) => {
			/* Your Logic */
		},
		Collect: (owner, recipient, tickLower, tickUpper, amount0, amount1) => {
			/* Your Logic */
		},
		IncreaseObservationCardinalityNext: (observationCardinalityNextOld, observationCardinalityNextNew) => {
			/* Your Logic */
		},
		SetFeeProtocol: (feeProtocol0Old, feeProtocol1Old, feeProtocol0New, feeProtocol1New) => {
			/* Your Logic */
		},
		CollectProtocol: (sender, recipient, amount0, amount1) => {
			/* Your Logic */
		},
	};

	if (!_eventName in eventListenerFunctions) throw new Error(`Couldn't find eventListenerFunction for ${_eventName}`);

	return eventListenerFunctions[_eventName];
}

module.exports = selectEventListenerFunction;
