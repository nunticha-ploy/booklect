
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ToRead
 * 
 */
export type ToRead = $Result.DefaultSelection<Prisma.$ToReadPayload>
/**
 * Model Read
 * 
 */
export type Read = $Result.DefaultSelection<Prisma.$ReadPayload>
/**
 * Model InProgress
 * 
 */
export type InProgress = $Result.DefaultSelection<Prisma.$InProgressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ToReads
 * const toReads = await prisma.toRead.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ToReads
   * const toReads = await prisma.toRead.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.toRead`: Exposes CRUD operations for the **ToRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToReads
    * const toReads = await prisma.toRead.findMany()
    * ```
    */
  get toRead(): Prisma.ToReadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.read`: Exposes CRUD operations for the **Read** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reads
    * const reads = await prisma.read.findMany()
    * ```
    */
  get read(): Prisma.ReadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inProgress`: Exposes CRUD operations for the **InProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InProgresses
    * const inProgresses = await prisma.inProgress.findMany()
    * ```
    */
  get inProgress(): Prisma.InProgressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ToRead: 'ToRead',
    Read: 'Read',
    InProgress: 'InProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "toRead" | "read" | "inProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ToRead: {
        payload: Prisma.$ToReadPayload<ExtArgs>
        fields: Prisma.ToReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>
          }
          findFirst: {
            args: Prisma.ToReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>
          }
          findMany: {
            args: Prisma.ToReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>[]
          }
          create: {
            args: Prisma.ToReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>
          }
          createMany: {
            args: Prisma.ToReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>[]
          }
          delete: {
            args: Prisma.ToReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>
          }
          update: {
            args: Prisma.ToReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>
          }
          deleteMany: {
            args: Prisma.ToReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>[]
          }
          upsert: {
            args: Prisma.ToReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToReadPayload>
          }
          aggregate: {
            args: Prisma.ToReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToRead>
          }
          groupBy: {
            args: Prisma.ToReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToReadCountArgs<ExtArgs>
            result: $Utils.Optional<ToReadCountAggregateOutputType> | number
          }
        }
      }
      Read: {
        payload: Prisma.$ReadPayload<ExtArgs>
        fields: Prisma.ReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>
          }
          findFirst: {
            args: Prisma.ReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>
          }
          findMany: {
            args: Prisma.ReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>[]
          }
          create: {
            args: Prisma.ReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>
          }
          createMany: {
            args: Prisma.ReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>[]
          }
          delete: {
            args: Prisma.ReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>
          }
          update: {
            args: Prisma.ReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>
          }
          deleteMany: {
            args: Prisma.ReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>[]
          }
          upsert: {
            args: Prisma.ReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadPayload>
          }
          aggregate: {
            args: Prisma.ReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRead>
          }
          groupBy: {
            args: Prisma.ReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadCountArgs<ExtArgs>
            result: $Utils.Optional<ReadCountAggregateOutputType> | number
          }
        }
      }
      InProgress: {
        payload: Prisma.$InProgressPayload<ExtArgs>
        fields: Prisma.InProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>
          }
          findFirst: {
            args: Prisma.InProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>
          }
          findMany: {
            args: Prisma.InProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>[]
          }
          create: {
            args: Prisma.InProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>
          }
          createMany: {
            args: Prisma.InProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>[]
          }
          delete: {
            args: Prisma.InProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>
          }
          update: {
            args: Prisma.InProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>
          }
          deleteMany: {
            args: Prisma.InProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>[]
          }
          upsert: {
            args: Prisma.InProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InProgressPayload>
          }
          aggregate: {
            args: Prisma.InProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInProgress>
          }
          groupBy: {
            args: Prisma.InProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<InProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.InProgressCountArgs<ExtArgs>
            result: $Utils.Optional<InProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    toRead?: ToReadOmit
    read?: ReadOmit
    inProgress?: InProgressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ToRead
   */

  export type AggregateToRead = {
    _count: ToReadCountAggregateOutputType | null
    _avg: ToReadAvgAggregateOutputType | null
    _sum: ToReadSumAggregateOutputType | null
    _min: ToReadMinAggregateOutputType | null
    _max: ToReadMaxAggregateOutputType | null
  }

  export type ToReadAvgAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type ToReadSumAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type ToReadMinAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    author: string | null
    pages: number | null
    pubDate: string | null
    category: string | null
    rating: string | null
    createdAt: Date | null
  }

  export type ToReadMaxAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    author: string | null
    pages: number | null
    pubDate: string | null
    category: string | null
    rating: string | null
    createdAt: Date | null
  }

  export type ToReadCountAggregateOutputType = {
    id: number
    image: number
    title: number
    description: number
    author: number
    pages: number
    pubDate: number
    category: number
    rating: number
    createdAt: number
    _all: number
  }


  export type ToReadAvgAggregateInputType = {
    id?: true
    pages?: true
  }

  export type ToReadSumAggregateInputType = {
    id?: true
    pages?: true
  }

  export type ToReadMinAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
  }

  export type ToReadMaxAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
  }

  export type ToReadCountAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type ToReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToRead to aggregate.
     */
    where?: ToReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToReads to fetch.
     */
    orderBy?: ToReadOrderByWithRelationInput | ToReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToReads
    **/
    _count?: true | ToReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToReadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToReadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToReadMaxAggregateInputType
  }

  export type GetToReadAggregateType<T extends ToReadAggregateArgs> = {
        [P in keyof T & keyof AggregateToRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToRead[P]>
      : GetScalarType<T[P], AggregateToRead[P]>
  }




  export type ToReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToReadWhereInput
    orderBy?: ToReadOrderByWithAggregationInput | ToReadOrderByWithAggregationInput[]
    by: ToReadScalarFieldEnum[] | ToReadScalarFieldEnum
    having?: ToReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToReadCountAggregateInputType | true
    _avg?: ToReadAvgAggregateInputType
    _sum?: ToReadSumAggregateInputType
    _min?: ToReadMinAggregateInputType
    _max?: ToReadMaxAggregateInputType
  }

  export type ToReadGroupByOutputType = {
    id: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt: Date
    _count: ToReadCountAggregateOutputType | null
    _avg: ToReadAvgAggregateOutputType | null
    _sum: ToReadSumAggregateOutputType | null
    _min: ToReadMinAggregateOutputType | null
    _max: ToReadMaxAggregateOutputType | null
  }

  type GetToReadGroupByPayload<T extends ToReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToReadGroupByOutputType[P]>
            : GetScalarType<T[P], ToReadGroupByOutputType[P]>
        }
      >
    >


  export type ToReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["toRead"]>

  export type ToReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["toRead"]>

  export type ToReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["toRead"]>

  export type ToReadSelectScalar = {
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type ToReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "title" | "description" | "author" | "pages" | "pubDate" | "category" | "rating" | "createdAt", ExtArgs["result"]["toRead"]>

  export type $ToReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToRead"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      title: string
      description: string
      author: string
      pages: number
      pubDate: string
      category: string
      rating: string
      createdAt: Date
    }, ExtArgs["result"]["toRead"]>
    composites: {}
  }

  type ToReadGetPayload<S extends boolean | null | undefined | ToReadDefaultArgs> = $Result.GetResult<Prisma.$ToReadPayload, S>

  type ToReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToReadCountAggregateInputType | true
    }

  export interface ToReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToRead'], meta: { name: 'ToRead' } }
    /**
     * Find zero or one ToRead that matches the filter.
     * @param {ToReadFindUniqueArgs} args - Arguments to find a ToRead
     * @example
     * // Get one ToRead
     * const toRead = await prisma.toRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToReadFindUniqueArgs>(args: SelectSubset<T, ToReadFindUniqueArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToReadFindUniqueOrThrowArgs} args - Arguments to find a ToRead
     * @example
     * // Get one ToRead
     * const toRead = await prisma.toRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToReadFindUniqueOrThrowArgs>(args: SelectSubset<T, ToReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToReadFindFirstArgs} args - Arguments to find a ToRead
     * @example
     * // Get one ToRead
     * const toRead = await prisma.toRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToReadFindFirstArgs>(args?: SelectSubset<T, ToReadFindFirstArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToReadFindFirstOrThrowArgs} args - Arguments to find a ToRead
     * @example
     * // Get one ToRead
     * const toRead = await prisma.toRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToReadFindFirstOrThrowArgs>(args?: SelectSubset<T, ToReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToReads
     * const toReads = await prisma.toRead.findMany()
     * 
     * // Get first 10 ToReads
     * const toReads = await prisma.toRead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toReadWithIdOnly = await prisma.toRead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToReadFindManyArgs>(args?: SelectSubset<T, ToReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToRead.
     * @param {ToReadCreateArgs} args - Arguments to create a ToRead.
     * @example
     * // Create one ToRead
     * const ToRead = await prisma.toRead.create({
     *   data: {
     *     // ... data to create a ToRead
     *   }
     * })
     * 
     */
    create<T extends ToReadCreateArgs>(args: SelectSubset<T, ToReadCreateArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToReads.
     * @param {ToReadCreateManyArgs} args - Arguments to create many ToReads.
     * @example
     * // Create many ToReads
     * const toRead = await prisma.toRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToReadCreateManyArgs>(args?: SelectSubset<T, ToReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToReads and returns the data saved in the database.
     * @param {ToReadCreateManyAndReturnArgs} args - Arguments to create many ToReads.
     * @example
     * // Create many ToReads
     * const toRead = await prisma.toRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToReads and only return the `id`
     * const toReadWithIdOnly = await prisma.toRead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToReadCreateManyAndReturnArgs>(args?: SelectSubset<T, ToReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToRead.
     * @param {ToReadDeleteArgs} args - Arguments to delete one ToRead.
     * @example
     * // Delete one ToRead
     * const ToRead = await prisma.toRead.delete({
     *   where: {
     *     // ... filter to delete one ToRead
     *   }
     * })
     * 
     */
    delete<T extends ToReadDeleteArgs>(args: SelectSubset<T, ToReadDeleteArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToRead.
     * @param {ToReadUpdateArgs} args - Arguments to update one ToRead.
     * @example
     * // Update one ToRead
     * const toRead = await prisma.toRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToReadUpdateArgs>(args: SelectSubset<T, ToReadUpdateArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToReads.
     * @param {ToReadDeleteManyArgs} args - Arguments to filter ToReads to delete.
     * @example
     * // Delete a few ToReads
     * const { count } = await prisma.toRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToReadDeleteManyArgs>(args?: SelectSubset<T, ToReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToReads
     * const toRead = await prisma.toRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToReadUpdateManyArgs>(args: SelectSubset<T, ToReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToReads and returns the data updated in the database.
     * @param {ToReadUpdateManyAndReturnArgs} args - Arguments to update many ToReads.
     * @example
     * // Update many ToReads
     * const toRead = await prisma.toRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToReads and only return the `id`
     * const toReadWithIdOnly = await prisma.toRead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToReadUpdateManyAndReturnArgs>(args: SelectSubset<T, ToReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToRead.
     * @param {ToReadUpsertArgs} args - Arguments to update or create a ToRead.
     * @example
     * // Update or create a ToRead
     * const toRead = await prisma.toRead.upsert({
     *   create: {
     *     // ... data to create a ToRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToRead we want to update
     *   }
     * })
     */
    upsert<T extends ToReadUpsertArgs>(args: SelectSubset<T, ToReadUpsertArgs<ExtArgs>>): Prisma__ToReadClient<$Result.GetResult<Prisma.$ToReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToReadCountArgs} args - Arguments to filter ToReads to count.
     * @example
     * // Count the number of ToReads
     * const count = await prisma.toRead.count({
     *   where: {
     *     // ... the filter for the ToReads we want to count
     *   }
     * })
    **/
    count<T extends ToReadCountArgs>(
      args?: Subset<T, ToReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToReadAggregateArgs>(args: Subset<T, ToReadAggregateArgs>): Prisma.PrismaPromise<GetToReadAggregateType<T>>

    /**
     * Group by ToRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToReadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToReadGroupByArgs['orderBy'] }
        : { orderBy?: ToReadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToRead model
   */
  readonly fields: ToReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ToRead model
   */
  interface ToReadFieldRefs {
    readonly id: FieldRef<"ToRead", 'Int'>
    readonly image: FieldRef<"ToRead", 'String'>
    readonly title: FieldRef<"ToRead", 'String'>
    readonly description: FieldRef<"ToRead", 'String'>
    readonly author: FieldRef<"ToRead", 'String'>
    readonly pages: FieldRef<"ToRead", 'Int'>
    readonly pubDate: FieldRef<"ToRead", 'String'>
    readonly category: FieldRef<"ToRead", 'String'>
    readonly rating: FieldRef<"ToRead", 'String'>
    readonly createdAt: FieldRef<"ToRead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToRead findUnique
   */
  export type ToReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * Filter, which ToRead to fetch.
     */
    where: ToReadWhereUniqueInput
  }

  /**
   * ToRead findUniqueOrThrow
   */
  export type ToReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * Filter, which ToRead to fetch.
     */
    where: ToReadWhereUniqueInput
  }

  /**
   * ToRead findFirst
   */
  export type ToReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * Filter, which ToRead to fetch.
     */
    where?: ToReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToReads to fetch.
     */
    orderBy?: ToReadOrderByWithRelationInput | ToReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToReads.
     */
    cursor?: ToReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToReads.
     */
    distinct?: ToReadScalarFieldEnum | ToReadScalarFieldEnum[]
  }

  /**
   * ToRead findFirstOrThrow
   */
  export type ToReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * Filter, which ToRead to fetch.
     */
    where?: ToReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToReads to fetch.
     */
    orderBy?: ToReadOrderByWithRelationInput | ToReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToReads.
     */
    cursor?: ToReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToReads.
     */
    distinct?: ToReadScalarFieldEnum | ToReadScalarFieldEnum[]
  }

  /**
   * ToRead findMany
   */
  export type ToReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * Filter, which ToReads to fetch.
     */
    where?: ToReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToReads to fetch.
     */
    orderBy?: ToReadOrderByWithRelationInput | ToReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToReads.
     */
    cursor?: ToReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToReads.
     */
    skip?: number
    distinct?: ToReadScalarFieldEnum | ToReadScalarFieldEnum[]
  }

  /**
   * ToRead create
   */
  export type ToReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * The data needed to create a ToRead.
     */
    data: XOR<ToReadCreateInput, ToReadUncheckedCreateInput>
  }

  /**
   * ToRead createMany
   */
  export type ToReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToReads.
     */
    data: ToReadCreateManyInput | ToReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToRead createManyAndReturn
   */
  export type ToReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * The data used to create many ToReads.
     */
    data: ToReadCreateManyInput | ToReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToRead update
   */
  export type ToReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * The data needed to update a ToRead.
     */
    data: XOR<ToReadUpdateInput, ToReadUncheckedUpdateInput>
    /**
     * Choose, which ToRead to update.
     */
    where: ToReadWhereUniqueInput
  }

  /**
   * ToRead updateMany
   */
  export type ToReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToReads.
     */
    data: XOR<ToReadUpdateManyMutationInput, ToReadUncheckedUpdateManyInput>
    /**
     * Filter which ToReads to update
     */
    where?: ToReadWhereInput
    /**
     * Limit how many ToReads to update.
     */
    limit?: number
  }

  /**
   * ToRead updateManyAndReturn
   */
  export type ToReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * The data used to update ToReads.
     */
    data: XOR<ToReadUpdateManyMutationInput, ToReadUncheckedUpdateManyInput>
    /**
     * Filter which ToReads to update
     */
    where?: ToReadWhereInput
    /**
     * Limit how many ToReads to update.
     */
    limit?: number
  }

  /**
   * ToRead upsert
   */
  export type ToReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * The filter to search for the ToRead to update in case it exists.
     */
    where: ToReadWhereUniqueInput
    /**
     * In case the ToRead found by the `where` argument doesn't exist, create a new ToRead with this data.
     */
    create: XOR<ToReadCreateInput, ToReadUncheckedCreateInput>
    /**
     * In case the ToRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToReadUpdateInput, ToReadUncheckedUpdateInput>
  }

  /**
   * ToRead delete
   */
  export type ToReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
    /**
     * Filter which ToRead to delete.
     */
    where: ToReadWhereUniqueInput
  }

  /**
   * ToRead deleteMany
   */
  export type ToReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToReads to delete
     */
    where?: ToReadWhereInput
    /**
     * Limit how many ToReads to delete.
     */
    limit?: number
  }

  /**
   * ToRead without action
   */
  export type ToReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToRead
     */
    select?: ToReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToRead
     */
    omit?: ToReadOmit<ExtArgs> | null
  }


  /**
   * Model Read
   */

  export type AggregateRead = {
    _count: ReadCountAggregateOutputType | null
    _avg: ReadAvgAggregateOutputType | null
    _sum: ReadSumAggregateOutputType | null
    _min: ReadMinAggregateOutputType | null
    _max: ReadMaxAggregateOutputType | null
  }

  export type ReadAvgAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type ReadSumAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type ReadMinAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    author: string | null
    pages: number | null
    pubDate: string | null
    category: string | null
    rating: string | null
    createdAt: Date | null
  }

  export type ReadMaxAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    author: string | null
    pages: number | null
    pubDate: string | null
    category: string | null
    rating: string | null
    createdAt: Date | null
  }

  export type ReadCountAggregateOutputType = {
    id: number
    image: number
    title: number
    description: number
    author: number
    pages: number
    pubDate: number
    category: number
    rating: number
    createdAt: number
    _all: number
  }


  export type ReadAvgAggregateInputType = {
    id?: true
    pages?: true
  }

  export type ReadSumAggregateInputType = {
    id?: true
    pages?: true
  }

  export type ReadMinAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
  }

  export type ReadMaxAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
  }

  export type ReadCountAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type ReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Read to aggregate.
     */
    where?: ReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reads to fetch.
     */
    orderBy?: ReadOrderByWithRelationInput | ReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reads
    **/
    _count?: true | ReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadMaxAggregateInputType
  }

  export type GetReadAggregateType<T extends ReadAggregateArgs> = {
        [P in keyof T & keyof AggregateRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRead[P]>
      : GetScalarType<T[P], AggregateRead[P]>
  }




  export type ReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadWhereInput
    orderBy?: ReadOrderByWithAggregationInput | ReadOrderByWithAggregationInput[]
    by: ReadScalarFieldEnum[] | ReadScalarFieldEnum
    having?: ReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadCountAggregateInputType | true
    _avg?: ReadAvgAggregateInputType
    _sum?: ReadSumAggregateInputType
    _min?: ReadMinAggregateInputType
    _max?: ReadMaxAggregateInputType
  }

  export type ReadGroupByOutputType = {
    id: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt: Date
    _count: ReadCountAggregateOutputType | null
    _avg: ReadAvgAggregateOutputType | null
    _sum: ReadSumAggregateOutputType | null
    _min: ReadMinAggregateOutputType | null
    _max: ReadMaxAggregateOutputType | null
  }

  type GetReadGroupByPayload<T extends ReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadGroupByOutputType[P]>
            : GetScalarType<T[P], ReadGroupByOutputType[P]>
        }
      >
    >


  export type ReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["read"]>

  export type ReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["read"]>

  export type ReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["read"]>

  export type ReadSelectScalar = {
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type ReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "title" | "description" | "author" | "pages" | "pubDate" | "category" | "rating" | "createdAt", ExtArgs["result"]["read"]>

  export type $ReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Read"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      title: string
      description: string
      author: string
      pages: number
      pubDate: string
      category: string
      rating: string
      createdAt: Date
    }, ExtArgs["result"]["read"]>
    composites: {}
  }

  type ReadGetPayload<S extends boolean | null | undefined | ReadDefaultArgs> = $Result.GetResult<Prisma.$ReadPayload, S>

  type ReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadCountAggregateInputType | true
    }

  export interface ReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Read'], meta: { name: 'Read' } }
    /**
     * Find zero or one Read that matches the filter.
     * @param {ReadFindUniqueArgs} args - Arguments to find a Read
     * @example
     * // Get one Read
     * const read = await prisma.read.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadFindUniqueArgs>(args: SelectSubset<T, ReadFindUniqueArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Read that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadFindUniqueOrThrowArgs} args - Arguments to find a Read
     * @example
     * // Get one Read
     * const read = await prisma.read.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Read that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadFindFirstArgs} args - Arguments to find a Read
     * @example
     * // Get one Read
     * const read = await prisma.read.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadFindFirstArgs>(args?: SelectSubset<T, ReadFindFirstArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Read that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadFindFirstOrThrowArgs} args - Arguments to find a Read
     * @example
     * // Get one Read
     * const read = await prisma.read.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reads
     * const reads = await prisma.read.findMany()
     * 
     * // Get first 10 Reads
     * const reads = await prisma.read.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readWithIdOnly = await prisma.read.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadFindManyArgs>(args?: SelectSubset<T, ReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Read.
     * @param {ReadCreateArgs} args - Arguments to create a Read.
     * @example
     * // Create one Read
     * const Read = await prisma.read.create({
     *   data: {
     *     // ... data to create a Read
     *   }
     * })
     * 
     */
    create<T extends ReadCreateArgs>(args: SelectSubset<T, ReadCreateArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reads.
     * @param {ReadCreateManyArgs} args - Arguments to create many Reads.
     * @example
     * // Create many Reads
     * const read = await prisma.read.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadCreateManyArgs>(args?: SelectSubset<T, ReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reads and returns the data saved in the database.
     * @param {ReadCreateManyAndReturnArgs} args - Arguments to create many Reads.
     * @example
     * // Create many Reads
     * const read = await prisma.read.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reads and only return the `id`
     * const readWithIdOnly = await prisma.read.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Read.
     * @param {ReadDeleteArgs} args - Arguments to delete one Read.
     * @example
     * // Delete one Read
     * const Read = await prisma.read.delete({
     *   where: {
     *     // ... filter to delete one Read
     *   }
     * })
     * 
     */
    delete<T extends ReadDeleteArgs>(args: SelectSubset<T, ReadDeleteArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Read.
     * @param {ReadUpdateArgs} args - Arguments to update one Read.
     * @example
     * // Update one Read
     * const read = await prisma.read.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadUpdateArgs>(args: SelectSubset<T, ReadUpdateArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reads.
     * @param {ReadDeleteManyArgs} args - Arguments to filter Reads to delete.
     * @example
     * // Delete a few Reads
     * const { count } = await prisma.read.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadDeleteManyArgs>(args?: SelectSubset<T, ReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reads
     * const read = await prisma.read.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadUpdateManyArgs>(args: SelectSubset<T, ReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reads and returns the data updated in the database.
     * @param {ReadUpdateManyAndReturnArgs} args - Arguments to update many Reads.
     * @example
     * // Update many Reads
     * const read = await prisma.read.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reads and only return the `id`
     * const readWithIdOnly = await prisma.read.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReadUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Read.
     * @param {ReadUpsertArgs} args - Arguments to update or create a Read.
     * @example
     * // Update or create a Read
     * const read = await prisma.read.upsert({
     *   create: {
     *     // ... data to create a Read
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Read we want to update
     *   }
     * })
     */
    upsert<T extends ReadUpsertArgs>(args: SelectSubset<T, ReadUpsertArgs<ExtArgs>>): Prisma__ReadClient<$Result.GetResult<Prisma.$ReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadCountArgs} args - Arguments to filter Reads to count.
     * @example
     * // Count the number of Reads
     * const count = await prisma.read.count({
     *   where: {
     *     // ... the filter for the Reads we want to count
     *   }
     * })
    **/
    count<T extends ReadCountArgs>(
      args?: Subset<T, ReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Read.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReadAggregateArgs>(args: Subset<T, ReadAggregateArgs>): Prisma.PrismaPromise<GetReadAggregateType<T>>

    /**
     * Group by Read.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadGroupByArgs['orderBy'] }
        : { orderBy?: ReadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Read model
   */
  readonly fields: ReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Read.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Read model
   */
  interface ReadFieldRefs {
    readonly id: FieldRef<"Read", 'Int'>
    readonly image: FieldRef<"Read", 'String'>
    readonly title: FieldRef<"Read", 'String'>
    readonly description: FieldRef<"Read", 'String'>
    readonly author: FieldRef<"Read", 'String'>
    readonly pages: FieldRef<"Read", 'Int'>
    readonly pubDate: FieldRef<"Read", 'String'>
    readonly category: FieldRef<"Read", 'String'>
    readonly rating: FieldRef<"Read", 'String'>
    readonly createdAt: FieldRef<"Read", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Read findUnique
   */
  export type ReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * Filter, which Read to fetch.
     */
    where: ReadWhereUniqueInput
  }

  /**
   * Read findUniqueOrThrow
   */
  export type ReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * Filter, which Read to fetch.
     */
    where: ReadWhereUniqueInput
  }

  /**
   * Read findFirst
   */
  export type ReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * Filter, which Read to fetch.
     */
    where?: ReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reads to fetch.
     */
    orderBy?: ReadOrderByWithRelationInput | ReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reads.
     */
    cursor?: ReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reads.
     */
    distinct?: ReadScalarFieldEnum | ReadScalarFieldEnum[]
  }

  /**
   * Read findFirstOrThrow
   */
  export type ReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * Filter, which Read to fetch.
     */
    where?: ReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reads to fetch.
     */
    orderBy?: ReadOrderByWithRelationInput | ReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reads.
     */
    cursor?: ReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reads.
     */
    distinct?: ReadScalarFieldEnum | ReadScalarFieldEnum[]
  }

  /**
   * Read findMany
   */
  export type ReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * Filter, which Reads to fetch.
     */
    where?: ReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reads to fetch.
     */
    orderBy?: ReadOrderByWithRelationInput | ReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reads.
     */
    cursor?: ReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reads.
     */
    skip?: number
    distinct?: ReadScalarFieldEnum | ReadScalarFieldEnum[]
  }

  /**
   * Read create
   */
  export type ReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * The data needed to create a Read.
     */
    data: XOR<ReadCreateInput, ReadUncheckedCreateInput>
  }

  /**
   * Read createMany
   */
  export type ReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reads.
     */
    data: ReadCreateManyInput | ReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Read createManyAndReturn
   */
  export type ReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * The data used to create many Reads.
     */
    data: ReadCreateManyInput | ReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Read update
   */
  export type ReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * The data needed to update a Read.
     */
    data: XOR<ReadUpdateInput, ReadUncheckedUpdateInput>
    /**
     * Choose, which Read to update.
     */
    where: ReadWhereUniqueInput
  }

  /**
   * Read updateMany
   */
  export type ReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reads.
     */
    data: XOR<ReadUpdateManyMutationInput, ReadUncheckedUpdateManyInput>
    /**
     * Filter which Reads to update
     */
    where?: ReadWhereInput
    /**
     * Limit how many Reads to update.
     */
    limit?: number
  }

  /**
   * Read updateManyAndReturn
   */
  export type ReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * The data used to update Reads.
     */
    data: XOR<ReadUpdateManyMutationInput, ReadUncheckedUpdateManyInput>
    /**
     * Filter which Reads to update
     */
    where?: ReadWhereInput
    /**
     * Limit how many Reads to update.
     */
    limit?: number
  }

  /**
   * Read upsert
   */
  export type ReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * The filter to search for the Read to update in case it exists.
     */
    where: ReadWhereUniqueInput
    /**
     * In case the Read found by the `where` argument doesn't exist, create a new Read with this data.
     */
    create: XOR<ReadCreateInput, ReadUncheckedCreateInput>
    /**
     * In case the Read was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadUpdateInput, ReadUncheckedUpdateInput>
  }

  /**
   * Read delete
   */
  export type ReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
    /**
     * Filter which Read to delete.
     */
    where: ReadWhereUniqueInput
  }

  /**
   * Read deleteMany
   */
  export type ReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reads to delete
     */
    where?: ReadWhereInput
    /**
     * Limit how many Reads to delete.
     */
    limit?: number
  }

  /**
   * Read without action
   */
  export type ReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Read
     */
    select?: ReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Read
     */
    omit?: ReadOmit<ExtArgs> | null
  }


  /**
   * Model InProgress
   */

  export type AggregateInProgress = {
    _count: InProgressCountAggregateOutputType | null
    _avg: InProgressAvgAggregateOutputType | null
    _sum: InProgressSumAggregateOutputType | null
    _min: InProgressMinAggregateOutputType | null
    _max: InProgressMaxAggregateOutputType | null
  }

  export type InProgressAvgAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type InProgressSumAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type InProgressMinAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    author: string | null
    pages: number | null
    pubDate: string | null
    category: string | null
    rating: string | null
    createdAt: Date | null
  }

  export type InProgressMaxAggregateOutputType = {
    id: number | null
    image: string | null
    title: string | null
    description: string | null
    author: string | null
    pages: number | null
    pubDate: string | null
    category: string | null
    rating: string | null
    createdAt: Date | null
  }

  export type InProgressCountAggregateOutputType = {
    id: number
    image: number
    title: number
    description: number
    author: number
    pages: number
    pubDate: number
    category: number
    rating: number
    createdAt: number
    _all: number
  }


  export type InProgressAvgAggregateInputType = {
    id?: true
    pages?: true
  }

  export type InProgressSumAggregateInputType = {
    id?: true
    pages?: true
  }

  export type InProgressMinAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
  }

  export type InProgressMaxAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
  }

  export type InProgressCountAggregateInputType = {
    id?: true
    image?: true
    title?: true
    description?: true
    author?: true
    pages?: true
    pubDate?: true
    category?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type InProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InProgress to aggregate.
     */
    where?: InProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgresses to fetch.
     */
    orderBy?: InProgressOrderByWithRelationInput | InProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InProgresses
    **/
    _count?: true | InProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InProgressMaxAggregateInputType
  }

  export type GetInProgressAggregateType<T extends InProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateInProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInProgress[P]>
      : GetScalarType<T[P], AggregateInProgress[P]>
  }




  export type InProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InProgressWhereInput
    orderBy?: InProgressOrderByWithAggregationInput | InProgressOrderByWithAggregationInput[]
    by: InProgressScalarFieldEnum[] | InProgressScalarFieldEnum
    having?: InProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InProgressCountAggregateInputType | true
    _avg?: InProgressAvgAggregateInputType
    _sum?: InProgressSumAggregateInputType
    _min?: InProgressMinAggregateInputType
    _max?: InProgressMaxAggregateInputType
  }

  export type InProgressGroupByOutputType = {
    id: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt: Date
    _count: InProgressCountAggregateOutputType | null
    _avg: InProgressAvgAggregateOutputType | null
    _sum: InProgressSumAggregateOutputType | null
    _min: InProgressMinAggregateOutputType | null
    _max: InProgressMaxAggregateOutputType | null
  }

  type GetInProgressGroupByPayload<T extends InProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InProgressGroupByOutputType[P]>
            : GetScalarType<T[P], InProgressGroupByOutputType[P]>
        }
      >
    >


  export type InProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inProgress"]>

  export type InProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inProgress"]>

  export type InProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inProgress"]>

  export type InProgressSelectScalar = {
    id?: boolean
    image?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    pages?: boolean
    pubDate?: boolean
    category?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type InProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "title" | "description" | "author" | "pages" | "pubDate" | "category" | "rating" | "createdAt", ExtArgs["result"]["inProgress"]>

  export type $InProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      title: string
      description: string
      author: string
      pages: number
      pubDate: string
      category: string
      rating: string
      createdAt: Date
    }, ExtArgs["result"]["inProgress"]>
    composites: {}
  }

  type InProgressGetPayload<S extends boolean | null | undefined | InProgressDefaultArgs> = $Result.GetResult<Prisma.$InProgressPayload, S>

  type InProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InProgressCountAggregateInputType | true
    }

  export interface InProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InProgress'], meta: { name: 'InProgress' } }
    /**
     * Find zero or one InProgress that matches the filter.
     * @param {InProgressFindUniqueArgs} args - Arguments to find a InProgress
     * @example
     * // Get one InProgress
     * const inProgress = await prisma.inProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InProgressFindUniqueArgs>(args: SelectSubset<T, InProgressFindUniqueArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InProgressFindUniqueOrThrowArgs} args - Arguments to find a InProgress
     * @example
     * // Get one InProgress
     * const inProgress = await prisma.inProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, InProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressFindFirstArgs} args - Arguments to find a InProgress
     * @example
     * // Get one InProgress
     * const inProgress = await prisma.inProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InProgressFindFirstArgs>(args?: SelectSubset<T, InProgressFindFirstArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressFindFirstOrThrowArgs} args - Arguments to find a InProgress
     * @example
     * // Get one InProgress
     * const inProgress = await prisma.inProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, InProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InProgresses
     * const inProgresses = await prisma.inProgress.findMany()
     * 
     * // Get first 10 InProgresses
     * const inProgresses = await prisma.inProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inProgressWithIdOnly = await prisma.inProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InProgressFindManyArgs>(args?: SelectSubset<T, InProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InProgress.
     * @param {InProgressCreateArgs} args - Arguments to create a InProgress.
     * @example
     * // Create one InProgress
     * const InProgress = await prisma.inProgress.create({
     *   data: {
     *     // ... data to create a InProgress
     *   }
     * })
     * 
     */
    create<T extends InProgressCreateArgs>(args: SelectSubset<T, InProgressCreateArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InProgresses.
     * @param {InProgressCreateManyArgs} args - Arguments to create many InProgresses.
     * @example
     * // Create many InProgresses
     * const inProgress = await prisma.inProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InProgressCreateManyArgs>(args?: SelectSubset<T, InProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InProgresses and returns the data saved in the database.
     * @param {InProgressCreateManyAndReturnArgs} args - Arguments to create many InProgresses.
     * @example
     * // Create many InProgresses
     * const inProgress = await prisma.inProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InProgresses and only return the `id`
     * const inProgressWithIdOnly = await prisma.inProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, InProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InProgress.
     * @param {InProgressDeleteArgs} args - Arguments to delete one InProgress.
     * @example
     * // Delete one InProgress
     * const InProgress = await prisma.inProgress.delete({
     *   where: {
     *     // ... filter to delete one InProgress
     *   }
     * })
     * 
     */
    delete<T extends InProgressDeleteArgs>(args: SelectSubset<T, InProgressDeleteArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InProgress.
     * @param {InProgressUpdateArgs} args - Arguments to update one InProgress.
     * @example
     * // Update one InProgress
     * const inProgress = await prisma.inProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InProgressUpdateArgs>(args: SelectSubset<T, InProgressUpdateArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InProgresses.
     * @param {InProgressDeleteManyArgs} args - Arguments to filter InProgresses to delete.
     * @example
     * // Delete a few InProgresses
     * const { count } = await prisma.inProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InProgressDeleteManyArgs>(args?: SelectSubset<T, InProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InProgresses
     * const inProgress = await prisma.inProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InProgressUpdateManyArgs>(args: SelectSubset<T, InProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InProgresses and returns the data updated in the database.
     * @param {InProgressUpdateManyAndReturnArgs} args - Arguments to update many InProgresses.
     * @example
     * // Update many InProgresses
     * const inProgress = await prisma.inProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InProgresses and only return the `id`
     * const inProgressWithIdOnly = await prisma.inProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, InProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InProgress.
     * @param {InProgressUpsertArgs} args - Arguments to update or create a InProgress.
     * @example
     * // Update or create a InProgress
     * const inProgress = await prisma.inProgress.upsert({
     *   create: {
     *     // ... data to create a InProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InProgress we want to update
     *   }
     * })
     */
    upsert<T extends InProgressUpsertArgs>(args: SelectSubset<T, InProgressUpsertArgs<ExtArgs>>): Prisma__InProgressClient<$Result.GetResult<Prisma.$InProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressCountArgs} args - Arguments to filter InProgresses to count.
     * @example
     * // Count the number of InProgresses
     * const count = await prisma.inProgress.count({
     *   where: {
     *     // ... the filter for the InProgresses we want to count
     *   }
     * })
    **/
    count<T extends InProgressCountArgs>(
      args?: Subset<T, InProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InProgressAggregateArgs>(args: Subset<T, InProgressAggregateArgs>): Prisma.PrismaPromise<GetInProgressAggregateType<T>>

    /**
     * Group by InProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InProgressGroupByArgs['orderBy'] }
        : { orderBy?: InProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InProgress model
   */
  readonly fields: InProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InProgress model
   */
  interface InProgressFieldRefs {
    readonly id: FieldRef<"InProgress", 'Int'>
    readonly image: FieldRef<"InProgress", 'String'>
    readonly title: FieldRef<"InProgress", 'String'>
    readonly description: FieldRef<"InProgress", 'String'>
    readonly author: FieldRef<"InProgress", 'String'>
    readonly pages: FieldRef<"InProgress", 'Int'>
    readonly pubDate: FieldRef<"InProgress", 'String'>
    readonly category: FieldRef<"InProgress", 'String'>
    readonly rating: FieldRef<"InProgress", 'String'>
    readonly createdAt: FieldRef<"InProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InProgress findUnique
   */
  export type InProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * Filter, which InProgress to fetch.
     */
    where: InProgressWhereUniqueInput
  }

  /**
   * InProgress findUniqueOrThrow
   */
  export type InProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * Filter, which InProgress to fetch.
     */
    where: InProgressWhereUniqueInput
  }

  /**
   * InProgress findFirst
   */
  export type InProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * Filter, which InProgress to fetch.
     */
    where?: InProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgresses to fetch.
     */
    orderBy?: InProgressOrderByWithRelationInput | InProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InProgresses.
     */
    cursor?: InProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InProgresses.
     */
    distinct?: InProgressScalarFieldEnum | InProgressScalarFieldEnum[]
  }

  /**
   * InProgress findFirstOrThrow
   */
  export type InProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * Filter, which InProgress to fetch.
     */
    where?: InProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgresses to fetch.
     */
    orderBy?: InProgressOrderByWithRelationInput | InProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InProgresses.
     */
    cursor?: InProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InProgresses.
     */
    distinct?: InProgressScalarFieldEnum | InProgressScalarFieldEnum[]
  }

  /**
   * InProgress findMany
   */
  export type InProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * Filter, which InProgresses to fetch.
     */
    where?: InProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InProgresses to fetch.
     */
    orderBy?: InProgressOrderByWithRelationInput | InProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InProgresses.
     */
    cursor?: InProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InProgresses.
     */
    skip?: number
    distinct?: InProgressScalarFieldEnum | InProgressScalarFieldEnum[]
  }

  /**
   * InProgress create
   */
  export type InProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a InProgress.
     */
    data: XOR<InProgressCreateInput, InProgressUncheckedCreateInput>
  }

  /**
   * InProgress createMany
   */
  export type InProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InProgresses.
     */
    data: InProgressCreateManyInput | InProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InProgress createManyAndReturn
   */
  export type InProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * The data used to create many InProgresses.
     */
    data: InProgressCreateManyInput | InProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InProgress update
   */
  export type InProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a InProgress.
     */
    data: XOR<InProgressUpdateInput, InProgressUncheckedUpdateInput>
    /**
     * Choose, which InProgress to update.
     */
    where: InProgressWhereUniqueInput
  }

  /**
   * InProgress updateMany
   */
  export type InProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InProgresses.
     */
    data: XOR<InProgressUpdateManyMutationInput, InProgressUncheckedUpdateManyInput>
    /**
     * Filter which InProgresses to update
     */
    where?: InProgressWhereInput
    /**
     * Limit how many InProgresses to update.
     */
    limit?: number
  }

  /**
   * InProgress updateManyAndReturn
   */
  export type InProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * The data used to update InProgresses.
     */
    data: XOR<InProgressUpdateManyMutationInput, InProgressUncheckedUpdateManyInput>
    /**
     * Filter which InProgresses to update
     */
    where?: InProgressWhereInput
    /**
     * Limit how many InProgresses to update.
     */
    limit?: number
  }

  /**
   * InProgress upsert
   */
  export type InProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the InProgress to update in case it exists.
     */
    where: InProgressWhereUniqueInput
    /**
     * In case the InProgress found by the `where` argument doesn't exist, create a new InProgress with this data.
     */
    create: XOR<InProgressCreateInput, InProgressUncheckedCreateInput>
    /**
     * In case the InProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InProgressUpdateInput, InProgressUncheckedUpdateInput>
  }

  /**
   * InProgress delete
   */
  export type InProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
    /**
     * Filter which InProgress to delete.
     */
    where: InProgressWhereUniqueInput
  }

  /**
   * InProgress deleteMany
   */
  export type InProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InProgresses to delete
     */
    where?: InProgressWhereInput
    /**
     * Limit how many InProgresses to delete.
     */
    limit?: number
  }

  /**
   * InProgress without action
   */
  export type InProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InProgress
     */
    select?: InProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InProgress
     */
    omit?: InProgressOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ToReadScalarFieldEnum: {
    id: 'id',
    image: 'image',
    title: 'title',
    description: 'description',
    author: 'author',
    pages: 'pages',
    pubDate: 'pubDate',
    category: 'category',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type ToReadScalarFieldEnum = (typeof ToReadScalarFieldEnum)[keyof typeof ToReadScalarFieldEnum]


  export const ReadScalarFieldEnum: {
    id: 'id',
    image: 'image',
    title: 'title',
    description: 'description',
    author: 'author',
    pages: 'pages',
    pubDate: 'pubDate',
    category: 'category',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type ReadScalarFieldEnum = (typeof ReadScalarFieldEnum)[keyof typeof ReadScalarFieldEnum]


  export const InProgressScalarFieldEnum: {
    id: 'id',
    image: 'image',
    title: 'title',
    description: 'description',
    author: 'author',
    pages: 'pages',
    pubDate: 'pubDate',
    category: 'category',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type InProgressScalarFieldEnum = (typeof InProgressScalarFieldEnum)[keyof typeof InProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ToReadWhereInput = {
    AND?: ToReadWhereInput | ToReadWhereInput[]
    OR?: ToReadWhereInput[]
    NOT?: ToReadWhereInput | ToReadWhereInput[]
    id?: IntFilter<"ToRead"> | number
    image?: StringFilter<"ToRead"> | string
    title?: StringFilter<"ToRead"> | string
    description?: StringFilter<"ToRead"> | string
    author?: StringFilter<"ToRead"> | string
    pages?: IntFilter<"ToRead"> | number
    pubDate?: StringFilter<"ToRead"> | string
    category?: StringFilter<"ToRead"> | string
    rating?: StringFilter<"ToRead"> | string
    createdAt?: DateTimeFilter<"ToRead"> | Date | string
  }

  export type ToReadOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ToReadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ToReadWhereInput | ToReadWhereInput[]
    OR?: ToReadWhereInput[]
    NOT?: ToReadWhereInput | ToReadWhereInput[]
    image?: StringFilter<"ToRead"> | string
    title?: StringFilter<"ToRead"> | string
    description?: StringFilter<"ToRead"> | string
    author?: StringFilter<"ToRead"> | string
    pages?: IntFilter<"ToRead"> | number
    pubDate?: StringFilter<"ToRead"> | string
    category?: StringFilter<"ToRead"> | string
    rating?: StringFilter<"ToRead"> | string
    createdAt?: DateTimeFilter<"ToRead"> | Date | string
  }, "id">

  export type ToReadOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: ToReadCountOrderByAggregateInput
    _avg?: ToReadAvgOrderByAggregateInput
    _max?: ToReadMaxOrderByAggregateInput
    _min?: ToReadMinOrderByAggregateInput
    _sum?: ToReadSumOrderByAggregateInput
  }

  export type ToReadScalarWhereWithAggregatesInput = {
    AND?: ToReadScalarWhereWithAggregatesInput | ToReadScalarWhereWithAggregatesInput[]
    OR?: ToReadScalarWhereWithAggregatesInput[]
    NOT?: ToReadScalarWhereWithAggregatesInput | ToReadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ToRead"> | number
    image?: StringWithAggregatesFilter<"ToRead"> | string
    title?: StringWithAggregatesFilter<"ToRead"> | string
    description?: StringWithAggregatesFilter<"ToRead"> | string
    author?: StringWithAggregatesFilter<"ToRead"> | string
    pages?: IntWithAggregatesFilter<"ToRead"> | number
    pubDate?: StringWithAggregatesFilter<"ToRead"> | string
    category?: StringWithAggregatesFilter<"ToRead"> | string
    rating?: StringWithAggregatesFilter<"ToRead"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ToRead"> | Date | string
  }

  export type ReadWhereInput = {
    AND?: ReadWhereInput | ReadWhereInput[]
    OR?: ReadWhereInput[]
    NOT?: ReadWhereInput | ReadWhereInput[]
    id?: IntFilter<"Read"> | number
    image?: StringFilter<"Read"> | string
    title?: StringFilter<"Read"> | string
    description?: StringFilter<"Read"> | string
    author?: StringFilter<"Read"> | string
    pages?: IntFilter<"Read"> | number
    pubDate?: StringFilter<"Read"> | string
    category?: StringFilter<"Read"> | string
    rating?: StringFilter<"Read"> | string
    createdAt?: DateTimeFilter<"Read"> | Date | string
  }

  export type ReadOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ReadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReadWhereInput | ReadWhereInput[]
    OR?: ReadWhereInput[]
    NOT?: ReadWhereInput | ReadWhereInput[]
    image?: StringFilter<"Read"> | string
    title?: StringFilter<"Read"> | string
    description?: StringFilter<"Read"> | string
    author?: StringFilter<"Read"> | string
    pages?: IntFilter<"Read"> | number
    pubDate?: StringFilter<"Read"> | string
    category?: StringFilter<"Read"> | string
    rating?: StringFilter<"Read"> | string
    createdAt?: DateTimeFilter<"Read"> | Date | string
  }, "id">

  export type ReadOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: ReadCountOrderByAggregateInput
    _avg?: ReadAvgOrderByAggregateInput
    _max?: ReadMaxOrderByAggregateInput
    _min?: ReadMinOrderByAggregateInput
    _sum?: ReadSumOrderByAggregateInput
  }

  export type ReadScalarWhereWithAggregatesInput = {
    AND?: ReadScalarWhereWithAggregatesInput | ReadScalarWhereWithAggregatesInput[]
    OR?: ReadScalarWhereWithAggregatesInput[]
    NOT?: ReadScalarWhereWithAggregatesInput | ReadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Read"> | number
    image?: StringWithAggregatesFilter<"Read"> | string
    title?: StringWithAggregatesFilter<"Read"> | string
    description?: StringWithAggregatesFilter<"Read"> | string
    author?: StringWithAggregatesFilter<"Read"> | string
    pages?: IntWithAggregatesFilter<"Read"> | number
    pubDate?: StringWithAggregatesFilter<"Read"> | string
    category?: StringWithAggregatesFilter<"Read"> | string
    rating?: StringWithAggregatesFilter<"Read"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Read"> | Date | string
  }

  export type InProgressWhereInput = {
    AND?: InProgressWhereInput | InProgressWhereInput[]
    OR?: InProgressWhereInput[]
    NOT?: InProgressWhereInput | InProgressWhereInput[]
    id?: IntFilter<"InProgress"> | number
    image?: StringFilter<"InProgress"> | string
    title?: StringFilter<"InProgress"> | string
    description?: StringFilter<"InProgress"> | string
    author?: StringFilter<"InProgress"> | string
    pages?: IntFilter<"InProgress"> | number
    pubDate?: StringFilter<"InProgress"> | string
    category?: StringFilter<"InProgress"> | string
    rating?: StringFilter<"InProgress"> | string
    createdAt?: DateTimeFilter<"InProgress"> | Date | string
  }

  export type InProgressOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type InProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InProgressWhereInput | InProgressWhereInput[]
    OR?: InProgressWhereInput[]
    NOT?: InProgressWhereInput | InProgressWhereInput[]
    image?: StringFilter<"InProgress"> | string
    title?: StringFilter<"InProgress"> | string
    description?: StringFilter<"InProgress"> | string
    author?: StringFilter<"InProgress"> | string
    pages?: IntFilter<"InProgress"> | number
    pubDate?: StringFilter<"InProgress"> | string
    category?: StringFilter<"InProgress"> | string
    rating?: StringFilter<"InProgress"> | string
    createdAt?: DateTimeFilter<"InProgress"> | Date | string
  }, "id">

  export type InProgressOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: InProgressCountOrderByAggregateInput
    _avg?: InProgressAvgOrderByAggregateInput
    _max?: InProgressMaxOrderByAggregateInput
    _min?: InProgressMinOrderByAggregateInput
    _sum?: InProgressSumOrderByAggregateInput
  }

  export type InProgressScalarWhereWithAggregatesInput = {
    AND?: InProgressScalarWhereWithAggregatesInput | InProgressScalarWhereWithAggregatesInput[]
    OR?: InProgressScalarWhereWithAggregatesInput[]
    NOT?: InProgressScalarWhereWithAggregatesInput | InProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InProgress"> | number
    image?: StringWithAggregatesFilter<"InProgress"> | string
    title?: StringWithAggregatesFilter<"InProgress"> | string
    description?: StringWithAggregatesFilter<"InProgress"> | string
    author?: StringWithAggregatesFilter<"InProgress"> | string
    pages?: IntWithAggregatesFilter<"InProgress"> | number
    pubDate?: StringWithAggregatesFilter<"InProgress"> | string
    category?: StringWithAggregatesFilter<"InProgress"> | string
    rating?: StringWithAggregatesFilter<"InProgress"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InProgress"> | Date | string
  }

  export type ToReadCreateInput = {
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type ToReadUncheckedCreateInput = {
    id?: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type ToReadUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToReadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToReadCreateManyInput = {
    id?: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type ToReadUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToReadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadCreateInput = {
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type ReadUncheckedCreateInput = {
    id?: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type ReadUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadCreateManyInput = {
    id?: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type ReadUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InProgressCreateInput = {
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type InProgressUncheckedCreateInput = {
    id?: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type InProgressUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InProgressCreateManyInput = {
    id?: number
    image: string
    title: string
    description: string
    author: string
    pages: number
    pubDate: string
    category: string
    rating: string
    createdAt?: Date | string
  }

  export type InProgressUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    pages?: IntFieldUpdateOperationsInput | number
    pubDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ToReadCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ToReadAvgOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type ToReadMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ToReadMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ToReadSumOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReadCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ReadAvgOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type ReadMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ReadMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ReadSumOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type InProgressCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type InProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type InProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type InProgressMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    pages?: SortOrder
    pubDate?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type InProgressSumOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}