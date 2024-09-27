# 🦄 Uniswap V2 Pool Event Listening

Uniswap V2 is a decentralized exchange protocol that allows users to swap ERC-20 tokens. Listening to events in the pool provides insights into liquidity movements and swap activities, enabling developers to build real-time applications and analytics.

### 📦 Overview
This repository provides examples of how to listen for various events in a Uniswap V2 pool using ethersV5.7.2 and ethersV6.0.0.
This project is capable to work on most of the EVM chains but sometimes might not work properly or completely, so feel free to reach me.

### ✅ Requirements
Before listen and pool's events, change .env.example to .env and provide WSS_PROVIDER_URL, POOL_ADDRESS and select EVENT_NAME

after that go into terminal with ctrl + j then type `npm install`

---

### 📜 Pool Events
| Event Name | Description | Returns |
|------------|-------------|---------|
| **Sync**   | Updates the reserves | `(reserve0, reserve1)` |
| **Swap**   | Details of token swaps | `(sender, amount0In, amount1In, amount0Out, amount1Out, to)` |
| **Mint**   | Details of liquidity added | `(sender, amount0, amount1)` |
| **Burn**   | Details of liquidity removed | `(sender, amount0, amount1, to)` |

---

### 🔊 Pool Listening Functions

#### *ethersV5*
- **`pool.on()`**: Listen for event continuously
- **`pool.once()`**: Listen for event just for once and stop listening after that
- **`pool.off()`**: Cancel listening process for event
- **`pool.removeListener()`**: Cancel listening process for event for a single listener
- **`pool.removeAllListeners()`**: Cancel listening process for event for all listeners

#### *ethersV6*
*All functions return **Promise** except `pool.getEvent()`*
- **`pool.addListener()`**: Listen for event continuously
- **`pool.on()`**: Listen for event continuously
- **`pool.once()`**: Listen for event just for once and stop listening after that
- **`pool.off()`**: Cancel listening process for event
- **`pool.removeListener()`**: Cancel listening process for event for a single listener
- **`pool.removeAllListeners()`**: Cancel listening process for event for all listeners

---

### 📊 Pool Listener Info
| Method | Description |
|--------|-------------|
| **`pool.listeners()`** | Returns an array of listeners registered for a specific event. |
| **`pool.listenerCount()`** | Returns the count of listeners registered for a specific event. |

---

### 🗂️ Pool Query Historical Event Data

#### *ethersV5*
- **`pool.queryFilter()`**: 
  - Provides historic access to event data for a specific event.
  - **Parameters**: 
    - `fromBlock` (default: `0`): The starting block number.
    - `toBlock` (default: `"latest"`): The ending block number (inclusive).
  
#### *ethersV6*
- **`pool.queryFilter()`**: 
  - Provides historic access to event data for a specific event.
  - **Parameters**: 
    - `fromBlock` (default: `0`): The starting block number.
    - `toBlock` (default: `"latest"`): The ending block number (inclusive).
  
- **`pool.getEvent()`**: 
  - Returns the event for a given name.
  - **Use Case**: This is useful when a contract event name conflicts with a JavaScript name such as `prototype` or when using a Contract programmatically.

