require("dotenv").config();

const WSS_PROVIDER_URL = process.env.WSS_PROVIDER_URL;
const uniswapV3PoolAddress = process.env.POOL_ADDRESS;
const eventName = process.env.EVENT_NAME;

const ethersV5 = require("ethers5");
const ethersV6 = require("ethers6");

const UniswapV3PoolABI = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json").abi;

const providerV5 = new ethersV5.providers.WebSocketProvider(WSS_PROVIDER_URL);
const providerV6 = new ethersV6.WebSocketProvider(WSS_PROVIDER_URL);

const uniswapV3PoolContractV5 = new ethersV5.Contract(uniswapV3PoolAddress, UniswapV3PoolABI, providerV5);
const uniswapV3PoolContractV6 = new ethersV6.Contract(uniswapV3PoolAddress, UniswapV3PoolABI, providerV6);

module.exports = {
	eventName,
	uniswapV3PoolContractV5,
	uniswapV3PoolContractV6,
};
