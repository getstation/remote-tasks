import Peer from '@magne4000/json-rpc-peer';
import { Duplex } from 'stream';

export interface RPCRequestHandler<X, T, R> {
  (method: X, handler: (params: T) => R | Promise<R>, timeout?: number): () => void,
}

export interface RPCNotificationHandler<X, T> {
  (method: X, handler: (params: T) => void, timeout?: number): () => void,
}

export interface RPCChannel {
  connect(duplex: Duplex): RPCChannelPeer,
}

export interface RPCChannelPeer extends Peer {
  setRequestHandler: RPCRequestHandler<any, any, any>,
  setNotificationHandler: RPCNotificationHandler<any, any>,
}
