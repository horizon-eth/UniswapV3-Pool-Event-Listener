export function selectEventListenerFunction(_eventName, _executorFunction) {
	const eventListenerFunctions = {
		Swap: (sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick) => {
			_executorFunction({
				sender: sender,
				recipient: recipient,
				amount0: amount0,
				amount1: amount1,
				sqrtPriceX96: sqrtPriceX96,
				liquidity: liquidity,
				tick: tick,
			});
		},
		Flash: (sender, recipient, amount0, amount1, paid0, paid1) => {
			_executorFunction({
				sender: sender,
				recipient: recipient,
				amount0: amount0,
				amount1: amount1,
				paid0: paid0,
				paid1: paid1,
			});
		},
		Mint: (sender, owner, tickLower, tickUpper, amount, amount0, amount1) => {
			_executorFunction({
				sender: sender,
				owner: owner,
				tickLower: tickLower,
				tickUpper: tickUpper,
				amount: amount,
				amount0: amount0,
				amount1: amount1,
			});
		},
		Burn: (owner, tickLower, tickUpper, amount, amount0, amount1) => {
			_executorFunction({
				owner: owner,
				tickLower: tickLower,
				tickUpper: tickUpper,
				amount: amount,
				amount0: amount0,
				amount1: amount1,
			});
		},
		Collect: (owner, recipient, tickLower, tickUpper, amount0, amount1) => {
			_executorFunction({
				owner: owner,
				recipient: recipient,
				tickLower: tickLower,
				tickUpper: tickUpper,
				amount0: amount0,
				amount1: amount1,
			});
		},
		IncreaseObservationCardinalityNext: (observationCardinalityNextOld, observationCardinalityNextNew) => {
			_executorFunction({
				observationCardinalityNextOld: observationCardinalityNextOld,
				observationCardinalityNextNew: observationCardinalityNextNew,
			});
		},
		SetFeeProtocol: (feeProtocol0Old, feeProtocol1Old, feeProtocol0New, feeProtocol1New) => {
			_executorFunction({
				feeProtocol0Old: feeProtocol0Old,
				feeProtocol1Old: feeProtocol1Old,
				feeProtocol0New: feeProtocol0New,
				feeProtocol1New: feeProtocol1New,
			});
		},
		CollectProtocol: (sender, recipient, amount0, amount1) => {
			_executorFunction({
				sender: sender,
				recipient: recipient,
				amount0: amount0,
				amount1: amount1,
			});
		},
	};

	if (!_eventName in eventListenerFunctions) throw new Error(`Couldn't find eventListenerFunction for ${_eventName}`);

	return eventListenerFunctions[_eventName];
}
