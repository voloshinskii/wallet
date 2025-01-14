import { Middleware } from './utils';

export interface PathPattern<Path extends string = string> {
  path: Path;
  caseSensitive?: boolean;
  end?: boolean;
}

export type Params<Key extends string = string> = {
  readonly [key in Key]: string;
}

export type DeeplinkingResolverOptions = {
  query: Params;
  params: Params;
  resolveParams: Record<string, any>
}

export type DeeplinkingResolver = (options: DeeplinkingResolverOptions) => Promise<void> | void;

export type DeeplinkingResolveOptions = {
  delay?: number;
  params?: Record<string, any>;
}

export type DeepLinkingContextValue = {
  getResolver: (path: string, options?: DeeplinkingResolveOptions) => (() => Promise<void>) | null;
  resolve: (path: string, options?: DeeplinkingResolveOptions) => void;
  add: (path: string, resolver: DeeplinkingResolver) => void;
  setPrefixes: (prefixes: string[]) => void;
  addMiddleware: (middleware: Middleware) => void;
}