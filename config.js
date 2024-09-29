import dotenv from "dotenv";
dotenv.config();

const WSS_PROVIDER_URL = process.env.WSS_PROVIDER_URL;
const uniswapV3PoolAddress = process.env.POOL_ADDRESS;
export const eventName = process.env.EVENT_NAME;

import { providers, Contract } from "ethers5";
import { WebSocketProvider, Contract as _Contract } from "ethers6";

import UniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json" assert { type: "json" };

const providerV5 = new providers.WebSocketProvider(WSS_PROVIDER_URL);
const providerV6 = new WebSocketProvider(WSS_PROVIDER_URL);

export const uniswapV3PoolContractV5 = new Contract(uniswapV3PoolAddress, UniswapV3PoolABI.abi, providerV5);
export const uniswapV3PoolContractV6 = new _Contract(uniswapV3PoolAddress, UniswapV3PoolABI.abi, providerV6);
