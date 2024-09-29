# 🦄 Uniswap V3 Pool Event Listening

Uniswap V3 is a decentralized exchange protocol that improves on V2 by introducing concentrated liquidity and customizable fee tiers. Listening to pool events in V3 can provide deeper insights into swaps, liquidity additions, removals, and fees, helping developers build robust real-time analytics and applications.

### 📦 Overview
This repository provides examples of how to listen for various events in a Uniswap V3 pool using **ethers v5.7.2** and **ethers v6.0.0**.
This project works on most EVM-compatible chains but may sometimes experience issues, so feel free to reach out for assistance.

### ✅ Requirements
1. Rename `.env.example` to `.env` and provide the following environment variables:
   - `WSS_PROVIDER_URL`: WebSocket URL for your provider.
   - `POOL_ADDRESS`: The address of the Uniswap V3 pool.
   - `EVENT_NAME`: The name of the event you wish to listen to (see below).

2. Install project dependencies by running the following command:
   ```bash
   npm install
   ```

---

### 📜 Pool Events in Uniswap V3

| Event Name    | Returns                                            |
|---------------|----------------------------------------------------|
| **Swap**      | \`(sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick)\` |
| **Flash**     | \`(sender, recipient, amount0, amount1, paid0, paid1)\` |
| **Mint**      | \`(sender, owner, tickLower, tickUpper, amount, amount0, amount1)\` |
| **Burn**      | \`(owner, tickLower, tickUpper, amount, amount0, amount1)\` |
| **Collect**   | \`(owner, recipient, tickLower, tickUpper, amount0, amount1)\` |
| **IncreaseObservationCardinalityNext** | \`(observationCardinalityNextOld, observationCardinalityNextNew)\` |
| **SetFeeProtocol** | \`(feeProtocol0Old, feeProtocol1Old, feeProtocol0New, feeProtocol1New)\` |
| **CollectProtocol** | \`(sender, recipient, amount0, amount1)\` |


These events offer more granularity than in V2, as liquidity in V3 is managed within specific price ranges (\`tickLower\`, \`tickUpper\`), and the \`sqrtPriceX96\` and \`tick\` provide additional price and liquidity metrics.

---

### 🔊 Pool Listening Functions

#### *ethers v5*
- **\`pool.on(eventName, listener)\`**: Listen for an event continuously.
- **\`pool.once(eventName, listener)\`**: Listen for an event once and stop listening after that.
- **\`pool.off(eventName, listener)\`**: Cancel the listening process for an event.
- **\`pool.removeListener(eventName, listener)\`**: Remove a specific listener for an event.
- **\`pool.removeAllListeners(eventName)\`**: Remove all listeners for a specific event.

#### *ethers v6*
- **\`pool.addListener(eventName, listener)\`**: Listen for an event continuously.
- **\`pool.on(eventName, listener)\`**: Alias for \`addListener\`.
- **\`pool.once(eventName, listener)\`**: Listen for an event once and stop after that.
- **\`pool.off(eventName, listener)\`**: Cancel the listening process for an event.
- **\`pool.removeListener(eventName, listener)\`**: Remove a specific listener for an event.
- **\`pool.removeAllListeners(eventName)\`**: Remove all listeners for an event.

---

### 📊 Pool Listener Info

| Method                       | Description                                          |
|-------------------------------|------------------------------------------------------|
| **\`pool.listeners(eventName)\`** | Returns an array of listeners registered for the event. |
| **\`pool.listenerCount(eventName)\`** | Returns the number of listeners registered for the event. |

---

### 🗂️ Query Historical Pool Event Data

#### *ethers v5*
- **\`pool.queryFilter(eventName, fromBlock, toBlock)\`**:
  - Fetches historical event data for a specific event.
  - **Parameters**:
    - \`eventName\` (default: none): The event name.
    - \`fromBlock\` (default: \`0\`): The starting block number.
    - \`toBlock\` (default: \`"latest"\`): The ending block number.

#### *ethers v6*
- **\`pool.queryFilter(eventName, fromBlock, toBlock)\`**:
  - Fetches historical event data for a specific event.
  - **Parameters**:
    - \`eventName\` (default: none): The event name.
    - \`fromBlock\` (default: \`0\`): The starting block number.
    - \`toBlock\` (default: \`"latest"\`): The ending block number.
  
- **\`pool.getEvent(eventName)\`**:
  - Returns the event object for a given name.
  - **Use Case**: Useful when a contract event name conflicts with a JavaScript reserved word, or when accessing a contract programmatically.

---

### 💡 Usage Notes:
1. Uniswap V3 introduces the concept of **concentrated liquidity**, allowing liquidity providers to focus their liquidity within a specific price range.
2. Events like \`Swap\`, \`Mint\`, and \`Burn\` provide tick data (\`tickLower\`, \`tickUpper\`), which can be crucial for determining how liquidity is distributed within the pool.

Feel free to modify the event listeners according to your application's needs.