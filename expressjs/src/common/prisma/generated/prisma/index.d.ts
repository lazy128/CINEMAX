
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model banner
 * 
 */
export type banner = $Result.DefaultSelection<Prisma.$bannerPayload>
/**
 * Model cum_rap
 * 
 */
export type cum_rap = $Result.DefaultSelection<Prisma.$cum_rapPayload>
/**
 * Model dat_ve
 * 
 */
export type dat_ve = $Result.DefaultSelection<Prisma.$dat_vePayload>
/**
 * Model ghe
 * 
 */
export type ghe = $Result.DefaultSelection<Prisma.$ghePayload>
/**
 * Model giao_dich
 * 
 */
export type giao_dich = $Result.DefaultSelection<Prisma.$giao_dichPayload>
/**
 * Model he_thong_rap
 * 
 */
export type he_thong_rap = $Result.DefaultSelection<Prisma.$he_thong_rapPayload>
/**
 * Model lich_chieu
 * 
 */
export type lich_chieu = $Result.DefaultSelection<Prisma.$lich_chieuPayload>
/**
 * Model nguoi_dung
 * 
 */
export type nguoi_dung = $Result.DefaultSelection<Prisma.$nguoi_dungPayload>
/**
 * Model phim
 * 
 */
export type phim = $Result.DefaultSelection<Prisma.$phimPayload>
/**
 * Model rap_phim
 * 
 */
export type rap_phim = $Result.DefaultSelection<Prisma.$rap_phimPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banners
 * const banners = await prisma.banner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.banner`: Exposes CRUD operations for the **banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.bannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cum_rap`: Exposes CRUD operations for the **cum_rap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cum_raps
    * const cum_raps = await prisma.cum_rap.findMany()
    * ```
    */
  get cum_rap(): Prisma.cum_rapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dat_ve`: Exposes CRUD operations for the **dat_ve** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dat_ves
    * const dat_ves = await prisma.dat_ve.findMany()
    * ```
    */
  get dat_ve(): Prisma.dat_veDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ghe`: Exposes CRUD operations for the **ghe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ghes
    * const ghes = await prisma.ghe.findMany()
    * ```
    */
  get ghe(): Prisma.gheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giao_dich`: Exposes CRUD operations for the **giao_dich** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Giao_diches
    * const giao_diches = await prisma.giao_dich.findMany()
    * ```
    */
  get giao_dich(): Prisma.giao_dichDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.he_thong_rap`: Exposes CRUD operations for the **he_thong_rap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more He_thong_raps
    * const he_thong_raps = await prisma.he_thong_rap.findMany()
    * ```
    */
  get he_thong_rap(): Prisma.he_thong_rapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lich_chieu`: Exposes CRUD operations for the **lich_chieu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lich_chieus
    * const lich_chieus = await prisma.lich_chieu.findMany()
    * ```
    */
  get lich_chieu(): Prisma.lich_chieuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nguoi_dung`: Exposes CRUD operations for the **nguoi_dung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nguoi_dungs
    * const nguoi_dungs = await prisma.nguoi_dung.findMany()
    * ```
    */
  get nguoi_dung(): Prisma.nguoi_dungDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phim`: Exposes CRUD operations for the **phim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phims
    * const phims = await prisma.phim.findMany()
    * ```
    */
  get phim(): Prisma.phimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rap_phim`: Exposes CRUD operations for the **rap_phim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rap_phims
    * const rap_phims = await prisma.rap_phim.findMany()
    * ```
    */
  get rap_phim(): Prisma.rap_phimDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    banner: 'banner',
    cum_rap: 'cum_rap',
    dat_ve: 'dat_ve',
    ghe: 'ghe',
    giao_dich: 'giao_dich',
    he_thong_rap: 'he_thong_rap',
    lich_chieu: 'lich_chieu',
    nguoi_dung: 'nguoi_dung',
    phim: 'phim',
    rap_phim: 'rap_phim'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "banner" | "cum_rap" | "dat_ve" | "ghe" | "giao_dich" | "he_thong_rap" | "lich_chieu" | "nguoi_dung" | "phim" | "rap_phim"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      banner: {
        payload: Prisma.$bannerPayload<ExtArgs>
        fields: Prisma.bannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          findFirst: {
            args: Prisma.bannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          findMany: {
            args: Prisma.bannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>[]
          }
          create: {
            args: Prisma.bannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          createMany: {
            args: Prisma.bannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          update: {
            args: Prisma.bannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          deleteMany: {
            args: Prisma.bannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.bannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.bannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      cum_rap: {
        payload: Prisma.$cum_rapPayload<ExtArgs>
        fields: Prisma.cum_rapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cum_rapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cum_rapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload>
          }
          findFirst: {
            args: Prisma.cum_rapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cum_rapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload>
          }
          findMany: {
            args: Prisma.cum_rapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload>[]
          }
          create: {
            args: Prisma.cum_rapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload>
          }
          createMany: {
            args: Prisma.cum_rapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cum_rapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload>
          }
          update: {
            args: Prisma.cum_rapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload>
          }
          deleteMany: {
            args: Prisma.cum_rapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cum_rapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cum_rapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cum_rapPayload>
          }
          aggregate: {
            args: Prisma.Cum_rapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCum_rap>
          }
          groupBy: {
            args: Prisma.cum_rapGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cum_rapGroupByOutputType>[]
          }
          count: {
            args: Prisma.cum_rapCountArgs<ExtArgs>
            result: $Utils.Optional<Cum_rapCountAggregateOutputType> | number
          }
        }
      }
      dat_ve: {
        payload: Prisma.$dat_vePayload<ExtArgs>
        fields: Prisma.dat_veFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dat_veFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dat_veFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload>
          }
          findFirst: {
            args: Prisma.dat_veFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dat_veFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload>
          }
          findMany: {
            args: Prisma.dat_veFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload>[]
          }
          create: {
            args: Prisma.dat_veCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload>
          }
          createMany: {
            args: Prisma.dat_veCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dat_veDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload>
          }
          update: {
            args: Prisma.dat_veUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload>
          }
          deleteMany: {
            args: Prisma.dat_veDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dat_veUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dat_veUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dat_vePayload>
          }
          aggregate: {
            args: Prisma.Dat_veAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDat_ve>
          }
          groupBy: {
            args: Prisma.dat_veGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dat_veGroupByOutputType>[]
          }
          count: {
            args: Prisma.dat_veCountArgs<ExtArgs>
            result: $Utils.Optional<Dat_veCountAggregateOutputType> | number
          }
        }
      }
      ghe: {
        payload: Prisma.$ghePayload<ExtArgs>
        fields: Prisma.gheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload>
          }
          findFirst: {
            args: Prisma.gheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload>
          }
          findMany: {
            args: Prisma.gheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload>[]
          }
          create: {
            args: Prisma.gheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload>
          }
          createMany: {
            args: Prisma.gheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload>
          }
          update: {
            args: Prisma.gheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload>
          }
          deleteMany: {
            args: Prisma.gheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ghePayload>
          }
          aggregate: {
            args: Prisma.GheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGhe>
          }
          groupBy: {
            args: Prisma.gheGroupByArgs<ExtArgs>
            result: $Utils.Optional<GheGroupByOutputType>[]
          }
          count: {
            args: Prisma.gheCountArgs<ExtArgs>
            result: $Utils.Optional<GheCountAggregateOutputType> | number
          }
        }
      }
      giao_dich: {
        payload: Prisma.$giao_dichPayload<ExtArgs>
        fields: Prisma.giao_dichFieldRefs
        operations: {
          findUnique: {
            args: Prisma.giao_dichFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.giao_dichFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload>
          }
          findFirst: {
            args: Prisma.giao_dichFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.giao_dichFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload>
          }
          findMany: {
            args: Prisma.giao_dichFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload>[]
          }
          create: {
            args: Prisma.giao_dichCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload>
          }
          createMany: {
            args: Prisma.giao_dichCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.giao_dichDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload>
          }
          update: {
            args: Prisma.giao_dichUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload>
          }
          deleteMany: {
            args: Prisma.giao_dichDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.giao_dichUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.giao_dichUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$giao_dichPayload>
          }
          aggregate: {
            args: Prisma.Giao_dichAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiao_dich>
          }
          groupBy: {
            args: Prisma.giao_dichGroupByArgs<ExtArgs>
            result: $Utils.Optional<Giao_dichGroupByOutputType>[]
          }
          count: {
            args: Prisma.giao_dichCountArgs<ExtArgs>
            result: $Utils.Optional<Giao_dichCountAggregateOutputType> | number
          }
        }
      }
      he_thong_rap: {
        payload: Prisma.$he_thong_rapPayload<ExtArgs>
        fields: Prisma.he_thong_rapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.he_thong_rapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.he_thong_rapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload>
          }
          findFirst: {
            args: Prisma.he_thong_rapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.he_thong_rapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload>
          }
          findMany: {
            args: Prisma.he_thong_rapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload>[]
          }
          create: {
            args: Prisma.he_thong_rapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload>
          }
          createMany: {
            args: Prisma.he_thong_rapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.he_thong_rapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload>
          }
          update: {
            args: Prisma.he_thong_rapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload>
          }
          deleteMany: {
            args: Prisma.he_thong_rapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.he_thong_rapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.he_thong_rapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$he_thong_rapPayload>
          }
          aggregate: {
            args: Prisma.He_thong_rapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHe_thong_rap>
          }
          groupBy: {
            args: Prisma.he_thong_rapGroupByArgs<ExtArgs>
            result: $Utils.Optional<He_thong_rapGroupByOutputType>[]
          }
          count: {
            args: Prisma.he_thong_rapCountArgs<ExtArgs>
            result: $Utils.Optional<He_thong_rapCountAggregateOutputType> | number
          }
        }
      }
      lich_chieu: {
        payload: Prisma.$lich_chieuPayload<ExtArgs>
        fields: Prisma.lich_chieuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lich_chieuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lich_chieuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload>
          }
          findFirst: {
            args: Prisma.lich_chieuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lich_chieuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload>
          }
          findMany: {
            args: Prisma.lich_chieuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload>[]
          }
          create: {
            args: Prisma.lich_chieuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload>
          }
          createMany: {
            args: Prisma.lich_chieuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lich_chieuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload>
          }
          update: {
            args: Prisma.lich_chieuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload>
          }
          deleteMany: {
            args: Prisma.lich_chieuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lich_chieuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lich_chieuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lich_chieuPayload>
          }
          aggregate: {
            args: Prisma.Lich_chieuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLich_chieu>
          }
          groupBy: {
            args: Prisma.lich_chieuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lich_chieuGroupByOutputType>[]
          }
          count: {
            args: Prisma.lich_chieuCountArgs<ExtArgs>
            result: $Utils.Optional<Lich_chieuCountAggregateOutputType> | number
          }
        }
      }
      nguoi_dung: {
        payload: Prisma.$nguoi_dungPayload<ExtArgs>
        fields: Prisma.nguoi_dungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nguoi_dungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nguoi_dungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          findFirst: {
            args: Prisma.nguoi_dungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nguoi_dungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          findMany: {
            args: Prisma.nguoi_dungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>[]
          }
          create: {
            args: Prisma.nguoi_dungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          createMany: {
            args: Prisma.nguoi_dungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.nguoi_dungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          update: {
            args: Prisma.nguoi_dungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          deleteMany: {
            args: Prisma.nguoi_dungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nguoi_dungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.nguoi_dungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nguoi_dungPayload>
          }
          aggregate: {
            args: Prisma.Nguoi_dungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNguoi_dung>
          }
          groupBy: {
            args: Prisma.nguoi_dungGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nguoi_dungGroupByOutputType>[]
          }
          count: {
            args: Prisma.nguoi_dungCountArgs<ExtArgs>
            result: $Utils.Optional<Nguoi_dungCountAggregateOutputType> | number
          }
        }
      }
      phim: {
        payload: Prisma.$phimPayload<ExtArgs>
        fields: Prisma.phimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.phimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.phimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload>
          }
          findFirst: {
            args: Prisma.phimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.phimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload>
          }
          findMany: {
            args: Prisma.phimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload>[]
          }
          create: {
            args: Prisma.phimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload>
          }
          createMany: {
            args: Prisma.phimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.phimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload>
          }
          update: {
            args: Prisma.phimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload>
          }
          deleteMany: {
            args: Prisma.phimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.phimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.phimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phimPayload>
          }
          aggregate: {
            args: Prisma.PhimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhim>
          }
          groupBy: {
            args: Prisma.phimGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhimGroupByOutputType>[]
          }
          count: {
            args: Prisma.phimCountArgs<ExtArgs>
            result: $Utils.Optional<PhimCountAggregateOutputType> | number
          }
        }
      }
      rap_phim: {
        payload: Prisma.$rap_phimPayload<ExtArgs>
        fields: Prisma.rap_phimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rap_phimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rap_phimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload>
          }
          findFirst: {
            args: Prisma.rap_phimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rap_phimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload>
          }
          findMany: {
            args: Prisma.rap_phimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload>[]
          }
          create: {
            args: Prisma.rap_phimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload>
          }
          createMany: {
            args: Prisma.rap_phimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rap_phimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload>
          }
          update: {
            args: Prisma.rap_phimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload>
          }
          deleteMany: {
            args: Prisma.rap_phimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rap_phimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rap_phimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_phimPayload>
          }
          aggregate: {
            args: Prisma.Rap_phimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRap_phim>
          }
          groupBy: {
            args: Prisma.rap_phimGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rap_phimGroupByOutputType>[]
          }
          count: {
            args: Prisma.rap_phimCountArgs<ExtArgs>
            result: $Utils.Optional<Rap_phimCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    banner?: bannerOmit
    cum_rap?: cum_rapOmit
    dat_ve?: dat_veOmit
    ghe?: gheOmit
    giao_dich?: giao_dichOmit
    he_thong_rap?: he_thong_rapOmit
    lich_chieu?: lich_chieuOmit
    nguoi_dung?: nguoi_dungOmit
    phim?: phimOmit
    rap_phim?: rap_phimOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type Cum_rapCountOutputType
   */

  export type Cum_rapCountOutputType = {
    rap_phim: number
  }

  export type Cum_rapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rap_phim?: boolean | Cum_rapCountOutputTypeCountRap_phimArgs
  }

  // Custom InputTypes
  /**
   * Cum_rapCountOutputType without action
   */
  export type Cum_rapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cum_rapCountOutputType
     */
    select?: Cum_rapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cum_rapCountOutputType without action
   */
  export type Cum_rapCountOutputTypeCountRap_phimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rap_phimWhereInput
  }


  /**
   * Count Type GheCountOutputType
   */

  export type GheCountOutputType = {
    dat_ve: number
  }

  export type GheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dat_ve?: boolean | GheCountOutputTypeCountDat_veArgs
  }

  // Custom InputTypes
  /**
   * GheCountOutputType without action
   */
  export type GheCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GheCountOutputType
     */
    select?: GheCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GheCountOutputType without action
   */
  export type GheCountOutputTypeCountDat_veArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dat_veWhereInput
  }


  /**
   * Count Type He_thong_rapCountOutputType
   */

  export type He_thong_rapCountOutputType = {
    cum_rap: number
  }

  export type He_thong_rapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cum_rap?: boolean | He_thong_rapCountOutputTypeCountCum_rapArgs
  }

  // Custom InputTypes
  /**
   * He_thong_rapCountOutputType without action
   */
  export type He_thong_rapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the He_thong_rapCountOutputType
     */
    select?: He_thong_rapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * He_thong_rapCountOutputType without action
   */
  export type He_thong_rapCountOutputTypeCountCum_rapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cum_rapWhereInput
  }


  /**
   * Count Type Lich_chieuCountOutputType
   */

  export type Lich_chieuCountOutputType = {
    dat_ve: number
  }

  export type Lich_chieuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dat_ve?: boolean | Lich_chieuCountOutputTypeCountDat_veArgs
  }

  // Custom InputTypes
  /**
   * Lich_chieuCountOutputType without action
   */
  export type Lich_chieuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lich_chieuCountOutputType
     */
    select?: Lich_chieuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Lich_chieuCountOutputType without action
   */
  export type Lich_chieuCountOutputTypeCountDat_veArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dat_veWhereInput
  }


  /**
   * Count Type Nguoi_dungCountOutputType
   */

  export type Nguoi_dungCountOutputType = {
    dat_ve: number
  }

  export type Nguoi_dungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dat_ve?: boolean | Nguoi_dungCountOutputTypeCountDat_veArgs
  }

  // Custom InputTypes
  /**
   * Nguoi_dungCountOutputType without action
   */
  export type Nguoi_dungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nguoi_dungCountOutputType
     */
    select?: Nguoi_dungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Nguoi_dungCountOutputType without action
   */
  export type Nguoi_dungCountOutputTypeCountDat_veArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dat_veWhereInput
  }


  /**
   * Count Type PhimCountOutputType
   */

  export type PhimCountOutputType = {
    banner: number
    lich_chieu: number
  }

  export type PhimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banner?: boolean | PhimCountOutputTypeCountBannerArgs
    lich_chieu?: boolean | PhimCountOutputTypeCountLich_chieuArgs
  }

  // Custom InputTypes
  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhimCountOutputType
     */
    select?: PhimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeCountBannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bannerWhereInput
  }

  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeCountLich_chieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lich_chieuWhereInput
  }


  /**
   * Count Type Rap_phimCountOutputType
   */

  export type Rap_phimCountOutputType = {
    ghe: number
    lich_chieu: number
  }

  export type Rap_phimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ghe?: boolean | Rap_phimCountOutputTypeCountGheArgs
    lich_chieu?: boolean | Rap_phimCountOutputTypeCountLich_chieuArgs
  }

  // Custom InputTypes
  /**
   * Rap_phimCountOutputType without action
   */
  export type Rap_phimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rap_phimCountOutputType
     */
    select?: Rap_phimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Rap_phimCountOutputType without action
   */
  export type Rap_phimCountOutputTypeCountGheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gheWhereInput
  }

  /**
   * Rap_phimCountOutputType without action
   */
  export type Rap_phimCountOutputTypeCountLich_chieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lich_chieuWhereInput
  }


  /**
   * Models
   */

  /**
   * Model banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
  }

  export type BannerSumAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
  }

  export type BannerMinAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
    hinh_anh: string | null
  }

  export type BannerMaxAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
    hinh_anh: string | null
  }

  export type BannerCountAggregateOutputType = {
    ma_banner: number
    ma_phim: number
    hinh_anh: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
  }

  export type BannerSumAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
  }

  export type BannerMinAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
  }

  export type BannerMaxAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
  }

  export type BannerCountAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banner to aggregate.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type bannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bannerWhereInput
    orderBy?: bannerOrderByWithAggregationInput | bannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: bannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    ma_banner: number
    ma_phim: number
    hinh_anh: string
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends bannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type bannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_banner?: boolean
    ma_phim?: boolean
    hinh_anh?: boolean
    phim?: boolean | phimDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>



  export type bannerSelectScalar = {
    ma_banner?: boolean
    ma_phim?: boolean
    hinh_anh?: boolean
  }

  export type bannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_banner" | "ma_phim" | "hinh_anh", ExtArgs["result"]["banner"]>
  export type bannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phim?: boolean | phimDefaultArgs<ExtArgs>
  }

  export type $bannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banner"
    objects: {
      phim: Prisma.$phimPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_banner: number
      ma_phim: number
      hinh_anh: string
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type bannerGetPayload<S extends boolean | null | undefined | bannerDefaultArgs> = $Result.GetResult<Prisma.$bannerPayload, S>

  type bannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface bannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banner'], meta: { name: 'banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {bannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bannerFindUniqueArgs>(args: SelectSubset<T, bannerFindUniqueArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bannerFindUniqueOrThrowArgs>(args: SelectSubset<T, bannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bannerFindFirstArgs>(args?: SelectSubset<T, bannerFindFirstArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bannerFindFirstOrThrowArgs>(args?: SelectSubset<T, bannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `ma_banner`
     * const bannerWithMa_bannerOnly = await prisma.banner.findMany({ select: { ma_banner: true } })
     * 
     */
    findMany<T extends bannerFindManyArgs>(args?: SelectSubset<T, bannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {bannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends bannerCreateArgs>(args: SelectSubset<T, bannerCreateArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {bannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bannerCreateManyArgs>(args?: SelectSubset<T, bannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {bannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends bannerDeleteArgs>(args: SelectSubset<T, bannerDeleteArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {bannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bannerUpdateArgs>(args: SelectSubset<T, bannerUpdateArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {bannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bannerDeleteManyArgs>(args?: SelectSubset<T, bannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bannerUpdateManyArgs>(args: SelectSubset<T, bannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {bannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends bannerUpsertArgs>(args: SelectSubset<T, bannerUpsertArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends bannerCountArgs>(
      args?: Subset<T, bannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerGroupByArgs} args - Group by arguments.
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
      T extends bannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bannerGroupByArgs['orderBy'] }
        : { orderBy?: bannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banner model
   */
  readonly fields: bannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phim<T extends phimDefaultArgs<ExtArgs> = {}>(args?: Subset<T, phimDefaultArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the banner model
   */
  interface bannerFieldRefs {
    readonly ma_banner: FieldRef<"banner", 'Int'>
    readonly ma_phim: FieldRef<"banner", 'Int'>
    readonly hinh_anh: FieldRef<"banner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * banner findUnique
   */
  export type bannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner findUniqueOrThrow
   */
  export type bannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner findFirst
   */
  export type bannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner findFirstOrThrow
   */
  export type bannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner findMany
   */
  export type bannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner create
   */
  export type bannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * The data needed to create a banner.
     */
    data: XOR<bannerCreateInput, bannerUncheckedCreateInput>
  }

  /**
   * banner createMany
   */
  export type bannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banners.
     */
    data: bannerCreateManyInput | bannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banner update
   */
  export type bannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * The data needed to update a banner.
     */
    data: XOR<bannerUpdateInput, bannerUncheckedUpdateInput>
    /**
     * Choose, which banner to update.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner updateMany
   */
  export type bannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banners.
     */
    data: XOR<bannerUpdateManyMutationInput, bannerUncheckedUpdateManyInput>
    /**
     * Filter which banners to update
     */
    where?: bannerWhereInput
    /**
     * Limit how many banners to update.
     */
    limit?: number
  }

  /**
   * banner upsert
   */
  export type bannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * The filter to search for the banner to update in case it exists.
     */
    where: bannerWhereUniqueInput
    /**
     * In case the banner found by the `where` argument doesn't exist, create a new banner with this data.
     */
    create: XOR<bannerCreateInput, bannerUncheckedCreateInput>
    /**
     * In case the banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bannerUpdateInput, bannerUncheckedUpdateInput>
  }

  /**
   * banner delete
   */
  export type bannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    /**
     * Filter which banner to delete.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner deleteMany
   */
  export type bannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banners to delete
     */
    where?: bannerWhereInput
    /**
     * Limit how many banners to delete.
     */
    limit?: number
  }

  /**
   * banner without action
   */
  export type bannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
  }


  /**
   * Model cum_rap
   */

  export type AggregateCum_rap = {
    _count: Cum_rapCountAggregateOutputType | null
    _min: Cum_rapMinAggregateOutputType | null
    _max: Cum_rapMaxAggregateOutputType | null
  }

  export type Cum_rapMinAggregateOutputType = {
    ma_cum_rap: string | null
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: string | null
  }

  export type Cum_rapMaxAggregateOutputType = {
    ma_cum_rap: string | null
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: string | null
  }

  export type Cum_rapCountAggregateOutputType = {
    ma_cum_rap: number
    ten_cum_rap: number
    dia_chi: number
    ma_he_thong_rap: number
    _all: number
  }


  export type Cum_rapMinAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
  }

  export type Cum_rapMaxAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
  }

  export type Cum_rapCountAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
    _all?: true
  }

  export type Cum_rapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cum_rap to aggregate.
     */
    where?: cum_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cum_raps to fetch.
     */
    orderBy?: cum_rapOrderByWithRelationInput | cum_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cum_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cum_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cum_raps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cum_raps
    **/
    _count?: true | Cum_rapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cum_rapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cum_rapMaxAggregateInputType
  }

  export type GetCum_rapAggregateType<T extends Cum_rapAggregateArgs> = {
        [P in keyof T & keyof AggregateCum_rap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCum_rap[P]>
      : GetScalarType<T[P], AggregateCum_rap[P]>
  }




  export type cum_rapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cum_rapWhereInput
    orderBy?: cum_rapOrderByWithAggregationInput | cum_rapOrderByWithAggregationInput[]
    by: Cum_rapScalarFieldEnum[] | Cum_rapScalarFieldEnum
    having?: cum_rapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cum_rapCountAggregateInputType | true
    _min?: Cum_rapMinAggregateInputType
    _max?: Cum_rapMaxAggregateInputType
  }

  export type Cum_rapGroupByOutputType = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi: string | null
    ma_he_thong_rap: string
    _count: Cum_rapCountAggregateOutputType | null
    _min: Cum_rapMinAggregateOutputType | null
    _max: Cum_rapMaxAggregateOutputType | null
  }

  type GetCum_rapGroupByPayload<T extends cum_rapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cum_rapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cum_rapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cum_rapGroupByOutputType[P]>
            : GetScalarType<T[P], Cum_rapGroupByOutputType[P]>
        }
      >
    >


  export type cum_rapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_cum_rap?: boolean
    ten_cum_rap?: boolean
    dia_chi?: boolean
    ma_he_thong_rap?: boolean
    he_thong_rap?: boolean | he_thong_rapDefaultArgs<ExtArgs>
    rap_phim?: boolean | cum_rap$rap_phimArgs<ExtArgs>
    _count?: boolean | Cum_rapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cum_rap"]>



  export type cum_rapSelectScalar = {
    ma_cum_rap?: boolean
    ten_cum_rap?: boolean
    dia_chi?: boolean
    ma_he_thong_rap?: boolean
  }

  export type cum_rapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_cum_rap" | "ten_cum_rap" | "dia_chi" | "ma_he_thong_rap", ExtArgs["result"]["cum_rap"]>
  export type cum_rapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    he_thong_rap?: boolean | he_thong_rapDefaultArgs<ExtArgs>
    rap_phim?: boolean | cum_rap$rap_phimArgs<ExtArgs>
    _count?: boolean | Cum_rapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cum_rapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cum_rap"
    objects: {
      he_thong_rap: Prisma.$he_thong_rapPayload<ExtArgs>
      rap_phim: Prisma.$rap_phimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_cum_rap: string
      ten_cum_rap: string
      dia_chi: string | null
      ma_he_thong_rap: string
    }, ExtArgs["result"]["cum_rap"]>
    composites: {}
  }

  type cum_rapGetPayload<S extends boolean | null | undefined | cum_rapDefaultArgs> = $Result.GetResult<Prisma.$cum_rapPayload, S>

  type cum_rapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cum_rapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cum_rapCountAggregateInputType | true
    }

  export interface cum_rapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cum_rap'], meta: { name: 'cum_rap' } }
    /**
     * Find zero or one Cum_rap that matches the filter.
     * @param {cum_rapFindUniqueArgs} args - Arguments to find a Cum_rap
     * @example
     * // Get one Cum_rap
     * const cum_rap = await prisma.cum_rap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cum_rapFindUniqueArgs>(args: SelectSubset<T, cum_rapFindUniqueArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cum_rap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cum_rapFindUniqueOrThrowArgs} args - Arguments to find a Cum_rap
     * @example
     * // Get one Cum_rap
     * const cum_rap = await prisma.cum_rap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cum_rapFindUniqueOrThrowArgs>(args: SelectSubset<T, cum_rapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cum_rap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cum_rapFindFirstArgs} args - Arguments to find a Cum_rap
     * @example
     * // Get one Cum_rap
     * const cum_rap = await prisma.cum_rap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cum_rapFindFirstArgs>(args?: SelectSubset<T, cum_rapFindFirstArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cum_rap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cum_rapFindFirstOrThrowArgs} args - Arguments to find a Cum_rap
     * @example
     * // Get one Cum_rap
     * const cum_rap = await prisma.cum_rap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cum_rapFindFirstOrThrowArgs>(args?: SelectSubset<T, cum_rapFindFirstOrThrowArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cum_raps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cum_rapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cum_raps
     * const cum_raps = await prisma.cum_rap.findMany()
     * 
     * // Get first 10 Cum_raps
     * const cum_raps = await prisma.cum_rap.findMany({ take: 10 })
     * 
     * // Only select the `ma_cum_rap`
     * const cum_rapWithMa_cum_rapOnly = await prisma.cum_rap.findMany({ select: { ma_cum_rap: true } })
     * 
     */
    findMany<T extends cum_rapFindManyArgs>(args?: SelectSubset<T, cum_rapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cum_rap.
     * @param {cum_rapCreateArgs} args - Arguments to create a Cum_rap.
     * @example
     * // Create one Cum_rap
     * const Cum_rap = await prisma.cum_rap.create({
     *   data: {
     *     // ... data to create a Cum_rap
     *   }
     * })
     * 
     */
    create<T extends cum_rapCreateArgs>(args: SelectSubset<T, cum_rapCreateArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cum_raps.
     * @param {cum_rapCreateManyArgs} args - Arguments to create many Cum_raps.
     * @example
     * // Create many Cum_raps
     * const cum_rap = await prisma.cum_rap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cum_rapCreateManyArgs>(args?: SelectSubset<T, cum_rapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cum_rap.
     * @param {cum_rapDeleteArgs} args - Arguments to delete one Cum_rap.
     * @example
     * // Delete one Cum_rap
     * const Cum_rap = await prisma.cum_rap.delete({
     *   where: {
     *     // ... filter to delete one Cum_rap
     *   }
     * })
     * 
     */
    delete<T extends cum_rapDeleteArgs>(args: SelectSubset<T, cum_rapDeleteArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cum_rap.
     * @param {cum_rapUpdateArgs} args - Arguments to update one Cum_rap.
     * @example
     * // Update one Cum_rap
     * const cum_rap = await prisma.cum_rap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cum_rapUpdateArgs>(args: SelectSubset<T, cum_rapUpdateArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cum_raps.
     * @param {cum_rapDeleteManyArgs} args - Arguments to filter Cum_raps to delete.
     * @example
     * // Delete a few Cum_raps
     * const { count } = await prisma.cum_rap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cum_rapDeleteManyArgs>(args?: SelectSubset<T, cum_rapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cum_raps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cum_rapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cum_raps
     * const cum_rap = await prisma.cum_rap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cum_rapUpdateManyArgs>(args: SelectSubset<T, cum_rapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cum_rap.
     * @param {cum_rapUpsertArgs} args - Arguments to update or create a Cum_rap.
     * @example
     * // Update or create a Cum_rap
     * const cum_rap = await prisma.cum_rap.upsert({
     *   create: {
     *     // ... data to create a Cum_rap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cum_rap we want to update
     *   }
     * })
     */
    upsert<T extends cum_rapUpsertArgs>(args: SelectSubset<T, cum_rapUpsertArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cum_raps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cum_rapCountArgs} args - Arguments to filter Cum_raps to count.
     * @example
     * // Count the number of Cum_raps
     * const count = await prisma.cum_rap.count({
     *   where: {
     *     // ... the filter for the Cum_raps we want to count
     *   }
     * })
    **/
    count<T extends cum_rapCountArgs>(
      args?: Subset<T, cum_rapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cum_rapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cum_rap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cum_rapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cum_rapAggregateArgs>(args: Subset<T, Cum_rapAggregateArgs>): Prisma.PrismaPromise<GetCum_rapAggregateType<T>>

    /**
     * Group by Cum_rap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cum_rapGroupByArgs} args - Group by arguments.
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
      T extends cum_rapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cum_rapGroupByArgs['orderBy'] }
        : { orderBy?: cum_rapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cum_rapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCum_rapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cum_rap model
   */
  readonly fields: cum_rapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cum_rap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cum_rapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    he_thong_rap<T extends he_thong_rapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, he_thong_rapDefaultArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rap_phim<T extends cum_rap$rap_phimArgs<ExtArgs> = {}>(args?: Subset<T, cum_rap$rap_phimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cum_rap model
   */
  interface cum_rapFieldRefs {
    readonly ma_cum_rap: FieldRef<"cum_rap", 'String'>
    readonly ten_cum_rap: FieldRef<"cum_rap", 'String'>
    readonly dia_chi: FieldRef<"cum_rap", 'String'>
    readonly ma_he_thong_rap: FieldRef<"cum_rap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cum_rap findUnique
   */
  export type cum_rapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * Filter, which cum_rap to fetch.
     */
    where: cum_rapWhereUniqueInput
  }

  /**
   * cum_rap findUniqueOrThrow
   */
  export type cum_rapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * Filter, which cum_rap to fetch.
     */
    where: cum_rapWhereUniqueInput
  }

  /**
   * cum_rap findFirst
   */
  export type cum_rapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * Filter, which cum_rap to fetch.
     */
    where?: cum_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cum_raps to fetch.
     */
    orderBy?: cum_rapOrderByWithRelationInput | cum_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cum_raps.
     */
    cursor?: cum_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cum_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cum_raps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cum_raps.
     */
    distinct?: Cum_rapScalarFieldEnum | Cum_rapScalarFieldEnum[]
  }

  /**
   * cum_rap findFirstOrThrow
   */
  export type cum_rapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * Filter, which cum_rap to fetch.
     */
    where?: cum_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cum_raps to fetch.
     */
    orderBy?: cum_rapOrderByWithRelationInput | cum_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cum_raps.
     */
    cursor?: cum_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cum_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cum_raps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cum_raps.
     */
    distinct?: Cum_rapScalarFieldEnum | Cum_rapScalarFieldEnum[]
  }

  /**
   * cum_rap findMany
   */
  export type cum_rapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * Filter, which cum_raps to fetch.
     */
    where?: cum_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cum_raps to fetch.
     */
    orderBy?: cum_rapOrderByWithRelationInput | cum_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cum_raps.
     */
    cursor?: cum_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cum_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cum_raps.
     */
    skip?: number
    distinct?: Cum_rapScalarFieldEnum | Cum_rapScalarFieldEnum[]
  }

  /**
   * cum_rap create
   */
  export type cum_rapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * The data needed to create a cum_rap.
     */
    data: XOR<cum_rapCreateInput, cum_rapUncheckedCreateInput>
  }

  /**
   * cum_rap createMany
   */
  export type cum_rapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cum_raps.
     */
    data: cum_rapCreateManyInput | cum_rapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cum_rap update
   */
  export type cum_rapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * The data needed to update a cum_rap.
     */
    data: XOR<cum_rapUpdateInput, cum_rapUncheckedUpdateInput>
    /**
     * Choose, which cum_rap to update.
     */
    where: cum_rapWhereUniqueInput
  }

  /**
   * cum_rap updateMany
   */
  export type cum_rapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cum_raps.
     */
    data: XOR<cum_rapUpdateManyMutationInput, cum_rapUncheckedUpdateManyInput>
    /**
     * Filter which cum_raps to update
     */
    where?: cum_rapWhereInput
    /**
     * Limit how many cum_raps to update.
     */
    limit?: number
  }

  /**
   * cum_rap upsert
   */
  export type cum_rapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * The filter to search for the cum_rap to update in case it exists.
     */
    where: cum_rapWhereUniqueInput
    /**
     * In case the cum_rap found by the `where` argument doesn't exist, create a new cum_rap with this data.
     */
    create: XOR<cum_rapCreateInput, cum_rapUncheckedCreateInput>
    /**
     * In case the cum_rap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cum_rapUpdateInput, cum_rapUncheckedUpdateInput>
  }

  /**
   * cum_rap delete
   */
  export type cum_rapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    /**
     * Filter which cum_rap to delete.
     */
    where: cum_rapWhereUniqueInput
  }

  /**
   * cum_rap deleteMany
   */
  export type cum_rapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cum_raps to delete
     */
    where?: cum_rapWhereInput
    /**
     * Limit how many cum_raps to delete.
     */
    limit?: number
  }

  /**
   * cum_rap.rap_phim
   */
  export type cum_rap$rap_phimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    where?: rap_phimWhereInput
    orderBy?: rap_phimOrderByWithRelationInput | rap_phimOrderByWithRelationInput[]
    cursor?: rap_phimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rap_phimScalarFieldEnum | Rap_phimScalarFieldEnum[]
  }

  /**
   * cum_rap without action
   */
  export type cum_rapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
  }


  /**
   * Model dat_ve
   */

  export type AggregateDat_ve = {
    _count: Dat_veCountAggregateOutputType | null
    _avg: Dat_veAvgAggregateOutputType | null
    _sum: Dat_veSumAggregateOutputType | null
    _min: Dat_veMinAggregateOutputType | null
    _max: Dat_veMaxAggregateOutputType | null
  }

  export type Dat_veAvgAggregateOutputType = {
    id: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
  }

  export type Dat_veSumAggregateOutputType = {
    id: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
  }

  export type Dat_veMinAggregateOutputType = {
    id: number | null
    tai_khoan: string | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    ngay_dat: Date | null
  }

  export type Dat_veMaxAggregateOutputType = {
    id: number | null
    tai_khoan: string | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    ngay_dat: Date | null
  }

  export type Dat_veCountAggregateOutputType = {
    id: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    ngay_dat: number
    _all: number
  }


  export type Dat_veAvgAggregateInputType = {
    id?: true
    ma_lich_chieu?: true
    ma_ghe?: true
  }

  export type Dat_veSumAggregateInputType = {
    id?: true
    ma_lich_chieu?: true
    ma_ghe?: true
  }

  export type Dat_veMinAggregateInputType = {
    id?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    ngay_dat?: true
  }

  export type Dat_veMaxAggregateInputType = {
    id?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    ngay_dat?: true
  }

  export type Dat_veCountAggregateInputType = {
    id?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    ngay_dat?: true
    _all?: true
  }

  export type Dat_veAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dat_ve to aggregate.
     */
    where?: dat_veWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dat_ves to fetch.
     */
    orderBy?: dat_veOrderByWithRelationInput | dat_veOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dat_veWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dat_ves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dat_ves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dat_ves
    **/
    _count?: true | Dat_veCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dat_veAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dat_veSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dat_veMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dat_veMaxAggregateInputType
  }

  export type GetDat_veAggregateType<T extends Dat_veAggregateArgs> = {
        [P in keyof T & keyof AggregateDat_ve]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDat_ve[P]>
      : GetScalarType<T[P], AggregateDat_ve[P]>
  }




  export type dat_veGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dat_veWhereInput
    orderBy?: dat_veOrderByWithAggregationInput | dat_veOrderByWithAggregationInput[]
    by: Dat_veScalarFieldEnum[] | Dat_veScalarFieldEnum
    having?: dat_veScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dat_veCountAggregateInputType | true
    _avg?: Dat_veAvgAggregateInputType
    _sum?: Dat_veSumAggregateInputType
    _min?: Dat_veMinAggregateInputType
    _max?: Dat_veMaxAggregateInputType
  }

  export type Dat_veGroupByOutputType = {
    id: number
    tai_khoan: string
    ma_lich_chieu: number
    ma_ghe: number
    ngay_dat: Date
    _count: Dat_veCountAggregateOutputType | null
    _avg: Dat_veAvgAggregateOutputType | null
    _sum: Dat_veSumAggregateOutputType | null
    _min: Dat_veMinAggregateOutputType | null
    _max: Dat_veMaxAggregateOutputType | null
  }

  type GetDat_veGroupByPayload<T extends dat_veGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dat_veGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dat_veGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dat_veGroupByOutputType[P]>
            : GetScalarType<T[P], Dat_veGroupByOutputType[P]>
        }
      >
    >


  export type dat_veSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
    ngay_dat?: boolean
    ghe?: boolean | gheDefaultArgs<ExtArgs>
    lich_chieu?: boolean | lich_chieuDefaultArgs<ExtArgs>
    nguoi_dung?: boolean | nguoi_dungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dat_ve"]>



  export type dat_veSelectScalar = {
    id?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
    ngay_dat?: boolean
  }

  export type dat_veOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tai_khoan" | "ma_lich_chieu" | "ma_ghe" | "ngay_dat", ExtArgs["result"]["dat_ve"]>
  export type dat_veInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ghe?: boolean | gheDefaultArgs<ExtArgs>
    lich_chieu?: boolean | lich_chieuDefaultArgs<ExtArgs>
    nguoi_dung?: boolean | nguoi_dungDefaultArgs<ExtArgs>
  }

  export type $dat_vePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dat_ve"
    objects: {
      ghe: Prisma.$ghePayload<ExtArgs>
      lich_chieu: Prisma.$lich_chieuPayload<ExtArgs>
      nguoi_dung: Prisma.$nguoi_dungPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tai_khoan: string
      ma_lich_chieu: number
      ma_ghe: number
      ngay_dat: Date
    }, ExtArgs["result"]["dat_ve"]>
    composites: {}
  }

  type dat_veGetPayload<S extends boolean | null | undefined | dat_veDefaultArgs> = $Result.GetResult<Prisma.$dat_vePayload, S>

  type dat_veCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dat_veFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dat_veCountAggregateInputType | true
    }

  export interface dat_veDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dat_ve'], meta: { name: 'dat_ve' } }
    /**
     * Find zero or one Dat_ve that matches the filter.
     * @param {dat_veFindUniqueArgs} args - Arguments to find a Dat_ve
     * @example
     * // Get one Dat_ve
     * const dat_ve = await prisma.dat_ve.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dat_veFindUniqueArgs>(args: SelectSubset<T, dat_veFindUniqueArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dat_ve that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dat_veFindUniqueOrThrowArgs} args - Arguments to find a Dat_ve
     * @example
     * // Get one Dat_ve
     * const dat_ve = await prisma.dat_ve.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dat_veFindUniqueOrThrowArgs>(args: SelectSubset<T, dat_veFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dat_ve that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dat_veFindFirstArgs} args - Arguments to find a Dat_ve
     * @example
     * // Get one Dat_ve
     * const dat_ve = await prisma.dat_ve.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dat_veFindFirstArgs>(args?: SelectSubset<T, dat_veFindFirstArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dat_ve that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dat_veFindFirstOrThrowArgs} args - Arguments to find a Dat_ve
     * @example
     * // Get one Dat_ve
     * const dat_ve = await prisma.dat_ve.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dat_veFindFirstOrThrowArgs>(args?: SelectSubset<T, dat_veFindFirstOrThrowArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dat_ves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dat_veFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dat_ves
     * const dat_ves = await prisma.dat_ve.findMany()
     * 
     * // Get first 10 Dat_ves
     * const dat_ves = await prisma.dat_ve.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dat_veWithIdOnly = await prisma.dat_ve.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dat_veFindManyArgs>(args?: SelectSubset<T, dat_veFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dat_ve.
     * @param {dat_veCreateArgs} args - Arguments to create a Dat_ve.
     * @example
     * // Create one Dat_ve
     * const Dat_ve = await prisma.dat_ve.create({
     *   data: {
     *     // ... data to create a Dat_ve
     *   }
     * })
     * 
     */
    create<T extends dat_veCreateArgs>(args: SelectSubset<T, dat_veCreateArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dat_ves.
     * @param {dat_veCreateManyArgs} args - Arguments to create many Dat_ves.
     * @example
     * // Create many Dat_ves
     * const dat_ve = await prisma.dat_ve.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dat_veCreateManyArgs>(args?: SelectSubset<T, dat_veCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dat_ve.
     * @param {dat_veDeleteArgs} args - Arguments to delete one Dat_ve.
     * @example
     * // Delete one Dat_ve
     * const Dat_ve = await prisma.dat_ve.delete({
     *   where: {
     *     // ... filter to delete one Dat_ve
     *   }
     * })
     * 
     */
    delete<T extends dat_veDeleteArgs>(args: SelectSubset<T, dat_veDeleteArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dat_ve.
     * @param {dat_veUpdateArgs} args - Arguments to update one Dat_ve.
     * @example
     * // Update one Dat_ve
     * const dat_ve = await prisma.dat_ve.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dat_veUpdateArgs>(args: SelectSubset<T, dat_veUpdateArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dat_ves.
     * @param {dat_veDeleteManyArgs} args - Arguments to filter Dat_ves to delete.
     * @example
     * // Delete a few Dat_ves
     * const { count } = await prisma.dat_ve.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dat_veDeleteManyArgs>(args?: SelectSubset<T, dat_veDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dat_ves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dat_veUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dat_ves
     * const dat_ve = await prisma.dat_ve.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dat_veUpdateManyArgs>(args: SelectSubset<T, dat_veUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dat_ve.
     * @param {dat_veUpsertArgs} args - Arguments to update or create a Dat_ve.
     * @example
     * // Update or create a Dat_ve
     * const dat_ve = await prisma.dat_ve.upsert({
     *   create: {
     *     // ... data to create a Dat_ve
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dat_ve we want to update
     *   }
     * })
     */
    upsert<T extends dat_veUpsertArgs>(args: SelectSubset<T, dat_veUpsertArgs<ExtArgs>>): Prisma__dat_veClient<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dat_ves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dat_veCountArgs} args - Arguments to filter Dat_ves to count.
     * @example
     * // Count the number of Dat_ves
     * const count = await prisma.dat_ve.count({
     *   where: {
     *     // ... the filter for the Dat_ves we want to count
     *   }
     * })
    **/
    count<T extends dat_veCountArgs>(
      args?: Subset<T, dat_veCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dat_veCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dat_ve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dat_veAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dat_veAggregateArgs>(args: Subset<T, Dat_veAggregateArgs>): Prisma.PrismaPromise<GetDat_veAggregateType<T>>

    /**
     * Group by Dat_ve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dat_veGroupByArgs} args - Group by arguments.
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
      T extends dat_veGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dat_veGroupByArgs['orderBy'] }
        : { orderBy?: dat_veGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dat_veGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDat_veGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dat_ve model
   */
  readonly fields: dat_veFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dat_ve.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dat_veClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ghe<T extends gheDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gheDefaultArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lich_chieu<T extends lich_chieuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lich_chieuDefaultArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nguoi_dung<T extends nguoi_dungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, nguoi_dungDefaultArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the dat_ve model
   */
  interface dat_veFieldRefs {
    readonly id: FieldRef<"dat_ve", 'Int'>
    readonly tai_khoan: FieldRef<"dat_ve", 'String'>
    readonly ma_lich_chieu: FieldRef<"dat_ve", 'Int'>
    readonly ma_ghe: FieldRef<"dat_ve", 'Int'>
    readonly ngay_dat: FieldRef<"dat_ve", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * dat_ve findUnique
   */
  export type dat_veFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * Filter, which dat_ve to fetch.
     */
    where: dat_veWhereUniqueInput
  }

  /**
   * dat_ve findUniqueOrThrow
   */
  export type dat_veFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * Filter, which dat_ve to fetch.
     */
    where: dat_veWhereUniqueInput
  }

  /**
   * dat_ve findFirst
   */
  export type dat_veFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * Filter, which dat_ve to fetch.
     */
    where?: dat_veWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dat_ves to fetch.
     */
    orderBy?: dat_veOrderByWithRelationInput | dat_veOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dat_ves.
     */
    cursor?: dat_veWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dat_ves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dat_ves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dat_ves.
     */
    distinct?: Dat_veScalarFieldEnum | Dat_veScalarFieldEnum[]
  }

  /**
   * dat_ve findFirstOrThrow
   */
  export type dat_veFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * Filter, which dat_ve to fetch.
     */
    where?: dat_veWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dat_ves to fetch.
     */
    orderBy?: dat_veOrderByWithRelationInput | dat_veOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dat_ves.
     */
    cursor?: dat_veWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dat_ves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dat_ves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dat_ves.
     */
    distinct?: Dat_veScalarFieldEnum | Dat_veScalarFieldEnum[]
  }

  /**
   * dat_ve findMany
   */
  export type dat_veFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * Filter, which dat_ves to fetch.
     */
    where?: dat_veWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dat_ves to fetch.
     */
    orderBy?: dat_veOrderByWithRelationInput | dat_veOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dat_ves.
     */
    cursor?: dat_veWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dat_ves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dat_ves.
     */
    skip?: number
    distinct?: Dat_veScalarFieldEnum | Dat_veScalarFieldEnum[]
  }

  /**
   * dat_ve create
   */
  export type dat_veCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * The data needed to create a dat_ve.
     */
    data: XOR<dat_veCreateInput, dat_veUncheckedCreateInput>
  }

  /**
   * dat_ve createMany
   */
  export type dat_veCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dat_ves.
     */
    data: dat_veCreateManyInput | dat_veCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dat_ve update
   */
  export type dat_veUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * The data needed to update a dat_ve.
     */
    data: XOR<dat_veUpdateInput, dat_veUncheckedUpdateInput>
    /**
     * Choose, which dat_ve to update.
     */
    where: dat_veWhereUniqueInput
  }

  /**
   * dat_ve updateMany
   */
  export type dat_veUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dat_ves.
     */
    data: XOR<dat_veUpdateManyMutationInput, dat_veUncheckedUpdateManyInput>
    /**
     * Filter which dat_ves to update
     */
    where?: dat_veWhereInput
    /**
     * Limit how many dat_ves to update.
     */
    limit?: number
  }

  /**
   * dat_ve upsert
   */
  export type dat_veUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * The filter to search for the dat_ve to update in case it exists.
     */
    where: dat_veWhereUniqueInput
    /**
     * In case the dat_ve found by the `where` argument doesn't exist, create a new dat_ve with this data.
     */
    create: XOR<dat_veCreateInput, dat_veUncheckedCreateInput>
    /**
     * In case the dat_ve was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dat_veUpdateInput, dat_veUncheckedUpdateInput>
  }

  /**
   * dat_ve delete
   */
  export type dat_veDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    /**
     * Filter which dat_ve to delete.
     */
    where: dat_veWhereUniqueInput
  }

  /**
   * dat_ve deleteMany
   */
  export type dat_veDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dat_ves to delete
     */
    where?: dat_veWhereInput
    /**
     * Limit how many dat_ves to delete.
     */
    limit?: number
  }

  /**
   * dat_ve without action
   */
  export type dat_veDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
  }


  /**
   * Model ghe
   */

  export type AggregateGhe = {
    _count: GheCountAggregateOutputType | null
    _avg: GheAvgAggregateOutputType | null
    _sum: GheSumAggregateOutputType | null
    _min: GheMinAggregateOutputType | null
    _max: GheMaxAggregateOutputType | null
  }

  export type GheAvgAggregateOutputType = {
    ma_ghe: number | null
    ma_rap: number | null
  }

  export type GheSumAggregateOutputType = {
    ma_ghe: number | null
    ma_rap: number | null
  }

  export type GheMinAggregateOutputType = {
    ma_ghe: number | null
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
  }

  export type GheMaxAggregateOutputType = {
    ma_ghe: number | null
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
  }

  export type GheCountAggregateOutputType = {
    ma_ghe: number
    ten_ghe: number
    loai_ghe: number
    ma_rap: number
    _all: number
  }


  export type GheAvgAggregateInputType = {
    ma_ghe?: true
    ma_rap?: true
  }

  export type GheSumAggregateInputType = {
    ma_ghe?: true
    ma_rap?: true
  }

  export type GheMinAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
  }

  export type GheMaxAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
  }

  export type GheCountAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
    _all?: true
  }

  export type GheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ghe to aggregate.
     */
    where?: gheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ghes to fetch.
     */
    orderBy?: gheOrderByWithRelationInput | gheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ghes
    **/
    _count?: true | GheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GheMaxAggregateInputType
  }

  export type GetGheAggregateType<T extends GheAggregateArgs> = {
        [P in keyof T & keyof AggregateGhe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGhe[P]>
      : GetScalarType<T[P], AggregateGhe[P]>
  }




  export type gheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gheWhereInput
    orderBy?: gheOrderByWithAggregationInput | gheOrderByWithAggregationInput[]
    by: GheScalarFieldEnum[] | GheScalarFieldEnum
    having?: gheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GheCountAggregateInputType | true
    _avg?: GheAvgAggregateInputType
    _sum?: GheSumAggregateInputType
    _min?: GheMinAggregateInputType
    _max?: GheMaxAggregateInputType
  }

  export type GheGroupByOutputType = {
    ma_ghe: number
    ten_ghe: string
    loai_ghe: string
    ma_rap: number
    _count: GheCountAggregateOutputType | null
    _avg: GheAvgAggregateOutputType | null
    _sum: GheSumAggregateOutputType | null
    _min: GheMinAggregateOutputType | null
    _max: GheMaxAggregateOutputType | null
  }

  type GetGheGroupByPayload<T extends gheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GheGroupByOutputType[P]>
            : GetScalarType<T[P], GheGroupByOutputType[P]>
        }
      >
    >


  export type gheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_ghe?: boolean
    ten_ghe?: boolean
    loai_ghe?: boolean
    ma_rap?: boolean
    dat_ve?: boolean | ghe$dat_veArgs<ExtArgs>
    rap_phim?: boolean | rap_phimDefaultArgs<ExtArgs>
    _count?: boolean | GheCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ghe"]>



  export type gheSelectScalar = {
    ma_ghe?: boolean
    ten_ghe?: boolean
    loai_ghe?: boolean
    ma_rap?: boolean
  }

  export type gheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_ghe" | "ten_ghe" | "loai_ghe" | "ma_rap", ExtArgs["result"]["ghe"]>
  export type gheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dat_ve?: boolean | ghe$dat_veArgs<ExtArgs>
    rap_phim?: boolean | rap_phimDefaultArgs<ExtArgs>
    _count?: boolean | GheCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ghePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ghe"
    objects: {
      dat_ve: Prisma.$dat_vePayload<ExtArgs>[]
      rap_phim: Prisma.$rap_phimPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_ghe: number
      ten_ghe: string
      loai_ghe: string
      ma_rap: number
    }, ExtArgs["result"]["ghe"]>
    composites: {}
  }

  type gheGetPayload<S extends boolean | null | undefined | gheDefaultArgs> = $Result.GetResult<Prisma.$ghePayload, S>

  type gheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GheCountAggregateInputType | true
    }

  export interface gheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ghe'], meta: { name: 'ghe' } }
    /**
     * Find zero or one Ghe that matches the filter.
     * @param {gheFindUniqueArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gheFindUniqueArgs>(args: SelectSubset<T, gheFindUniqueArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ghe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gheFindUniqueOrThrowArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gheFindUniqueOrThrowArgs>(args: SelectSubset<T, gheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ghe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gheFindFirstArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gheFindFirstArgs>(args?: SelectSubset<T, gheFindFirstArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ghe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gheFindFirstOrThrowArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gheFindFirstOrThrowArgs>(args?: SelectSubset<T, gheFindFirstOrThrowArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ghes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ghes
     * const ghes = await prisma.ghe.findMany()
     * 
     * // Get first 10 Ghes
     * const ghes = await prisma.ghe.findMany({ take: 10 })
     * 
     * // Only select the `ma_ghe`
     * const gheWithMa_gheOnly = await prisma.ghe.findMany({ select: { ma_ghe: true } })
     * 
     */
    findMany<T extends gheFindManyArgs>(args?: SelectSubset<T, gheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ghe.
     * @param {gheCreateArgs} args - Arguments to create a Ghe.
     * @example
     * // Create one Ghe
     * const Ghe = await prisma.ghe.create({
     *   data: {
     *     // ... data to create a Ghe
     *   }
     * })
     * 
     */
    create<T extends gheCreateArgs>(args: SelectSubset<T, gheCreateArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ghes.
     * @param {gheCreateManyArgs} args - Arguments to create many Ghes.
     * @example
     * // Create many Ghes
     * const ghe = await prisma.ghe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gheCreateManyArgs>(args?: SelectSubset<T, gheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ghe.
     * @param {gheDeleteArgs} args - Arguments to delete one Ghe.
     * @example
     * // Delete one Ghe
     * const Ghe = await prisma.ghe.delete({
     *   where: {
     *     // ... filter to delete one Ghe
     *   }
     * })
     * 
     */
    delete<T extends gheDeleteArgs>(args: SelectSubset<T, gheDeleteArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ghe.
     * @param {gheUpdateArgs} args - Arguments to update one Ghe.
     * @example
     * // Update one Ghe
     * const ghe = await prisma.ghe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gheUpdateArgs>(args: SelectSubset<T, gheUpdateArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ghes.
     * @param {gheDeleteManyArgs} args - Arguments to filter Ghes to delete.
     * @example
     * // Delete a few Ghes
     * const { count } = await prisma.ghe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gheDeleteManyArgs>(args?: SelectSubset<T, gheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ghes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ghes
     * const ghe = await prisma.ghe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gheUpdateManyArgs>(args: SelectSubset<T, gheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ghe.
     * @param {gheUpsertArgs} args - Arguments to update or create a Ghe.
     * @example
     * // Update or create a Ghe
     * const ghe = await prisma.ghe.upsert({
     *   create: {
     *     // ... data to create a Ghe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ghe we want to update
     *   }
     * })
     */
    upsert<T extends gheUpsertArgs>(args: SelectSubset<T, gheUpsertArgs<ExtArgs>>): Prisma__gheClient<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ghes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gheCountArgs} args - Arguments to filter Ghes to count.
     * @example
     * // Count the number of Ghes
     * const count = await prisma.ghe.count({
     *   where: {
     *     // ... the filter for the Ghes we want to count
     *   }
     * })
    **/
    count<T extends gheCountArgs>(
      args?: Subset<T, gheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ghe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GheAggregateArgs>(args: Subset<T, GheAggregateArgs>): Prisma.PrismaPromise<GetGheAggregateType<T>>

    /**
     * Group by Ghe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gheGroupByArgs} args - Group by arguments.
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
      T extends gheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gheGroupByArgs['orderBy'] }
        : { orderBy?: gheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ghe model
   */
  readonly fields: gheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ghe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dat_ve<T extends ghe$dat_veArgs<ExtArgs> = {}>(args?: Subset<T, ghe$dat_veArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rap_phim<T extends rap_phimDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rap_phimDefaultArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ghe model
   */
  interface gheFieldRefs {
    readonly ma_ghe: FieldRef<"ghe", 'Int'>
    readonly ten_ghe: FieldRef<"ghe", 'String'>
    readonly loai_ghe: FieldRef<"ghe", 'String'>
    readonly ma_rap: FieldRef<"ghe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ghe findUnique
   */
  export type gheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * Filter, which ghe to fetch.
     */
    where: gheWhereUniqueInput
  }

  /**
   * ghe findUniqueOrThrow
   */
  export type gheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * Filter, which ghe to fetch.
     */
    where: gheWhereUniqueInput
  }

  /**
   * ghe findFirst
   */
  export type gheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * Filter, which ghe to fetch.
     */
    where?: gheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ghes to fetch.
     */
    orderBy?: gheOrderByWithRelationInput | gheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ghes.
     */
    cursor?: gheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ghes.
     */
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * ghe findFirstOrThrow
   */
  export type gheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * Filter, which ghe to fetch.
     */
    where?: gheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ghes to fetch.
     */
    orderBy?: gheOrderByWithRelationInput | gheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ghes.
     */
    cursor?: gheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ghes.
     */
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * ghe findMany
   */
  export type gheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * Filter, which ghes to fetch.
     */
    where?: gheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ghes to fetch.
     */
    orderBy?: gheOrderByWithRelationInput | gheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ghes.
     */
    cursor?: gheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ghes.
     */
    skip?: number
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * ghe create
   */
  export type gheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * The data needed to create a ghe.
     */
    data: XOR<gheCreateInput, gheUncheckedCreateInput>
  }

  /**
   * ghe createMany
   */
  export type gheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ghes.
     */
    data: gheCreateManyInput | gheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ghe update
   */
  export type gheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * The data needed to update a ghe.
     */
    data: XOR<gheUpdateInput, gheUncheckedUpdateInput>
    /**
     * Choose, which ghe to update.
     */
    where: gheWhereUniqueInput
  }

  /**
   * ghe updateMany
   */
  export type gheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ghes.
     */
    data: XOR<gheUpdateManyMutationInput, gheUncheckedUpdateManyInput>
    /**
     * Filter which ghes to update
     */
    where?: gheWhereInput
    /**
     * Limit how many ghes to update.
     */
    limit?: number
  }

  /**
   * ghe upsert
   */
  export type gheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * The filter to search for the ghe to update in case it exists.
     */
    where: gheWhereUniqueInput
    /**
     * In case the ghe found by the `where` argument doesn't exist, create a new ghe with this data.
     */
    create: XOR<gheCreateInput, gheUncheckedCreateInput>
    /**
     * In case the ghe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gheUpdateInput, gheUncheckedUpdateInput>
  }

  /**
   * ghe delete
   */
  export type gheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    /**
     * Filter which ghe to delete.
     */
    where: gheWhereUniqueInput
  }

  /**
   * ghe deleteMany
   */
  export type gheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ghes to delete
     */
    where?: gheWhereInput
    /**
     * Limit how many ghes to delete.
     */
    limit?: number
  }

  /**
   * ghe.dat_ve
   */
  export type ghe$dat_veArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    where?: dat_veWhereInput
    orderBy?: dat_veOrderByWithRelationInput | dat_veOrderByWithRelationInput[]
    cursor?: dat_veWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dat_veScalarFieldEnum | Dat_veScalarFieldEnum[]
  }

  /**
   * ghe without action
   */
  export type gheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
  }


  /**
   * Model giao_dich
   */

  export type AggregateGiao_dich = {
    _count: Giao_dichCountAggregateOutputType | null
    _avg: Giao_dichAvgAggregateOutputType | null
    _sum: Giao_dichSumAggregateOutputType | null
    _min: Giao_dichMinAggregateOutputType | null
    _max: Giao_dichMaxAggregateOutputType | null
  }

  export type Giao_dichAvgAggregateOutputType = {
    id: number | null
    ma_lich_chieu: number | null
    tong_tien: number | null
  }

  export type Giao_dichSumAggregateOutputType = {
    id: number | null
    ma_lich_chieu: number | null
    tong_tien: number | null
  }

  export type Giao_dichMinAggregateOutputType = {
    id: number | null
    tai_khoan: string | null
    ma_lich_chieu: number | null
    tong_tien: number | null
    noi_dung_ck: string | null
    ngay_giao_dich: Date | null
  }

  export type Giao_dichMaxAggregateOutputType = {
    id: number | null
    tai_khoan: string | null
    ma_lich_chieu: number | null
    tong_tien: number | null
    noi_dung_ck: string | null
    ngay_giao_dich: Date | null
  }

  export type Giao_dichCountAggregateOutputType = {
    id: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    noi_dung_ck: number
    ngay_giao_dich: number
    _all: number
  }


  export type Giao_dichAvgAggregateInputType = {
    id?: true
    ma_lich_chieu?: true
    tong_tien?: true
  }

  export type Giao_dichSumAggregateInputType = {
    id?: true
    ma_lich_chieu?: true
    tong_tien?: true
  }

  export type Giao_dichMinAggregateInputType = {
    id?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    noi_dung_ck?: true
    ngay_giao_dich?: true
  }

  export type Giao_dichMaxAggregateInputType = {
    id?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    noi_dung_ck?: true
    ngay_giao_dich?: true
  }

  export type Giao_dichCountAggregateInputType = {
    id?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    noi_dung_ck?: true
    ngay_giao_dich?: true
    _all?: true
  }

  export type Giao_dichAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which giao_dich to aggregate.
     */
    where?: giao_dichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giao_diches to fetch.
     */
    orderBy?: giao_dichOrderByWithRelationInput | giao_dichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: giao_dichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giao_diches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giao_diches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned giao_diches
    **/
    _count?: true | Giao_dichCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Giao_dichAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Giao_dichSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Giao_dichMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Giao_dichMaxAggregateInputType
  }

  export type GetGiao_dichAggregateType<T extends Giao_dichAggregateArgs> = {
        [P in keyof T & keyof AggregateGiao_dich]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiao_dich[P]>
      : GetScalarType<T[P], AggregateGiao_dich[P]>
  }




  export type giao_dichGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: giao_dichWhereInput
    orderBy?: giao_dichOrderByWithAggregationInput | giao_dichOrderByWithAggregationInput[]
    by: Giao_dichScalarFieldEnum[] | Giao_dichScalarFieldEnum
    having?: giao_dichScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Giao_dichCountAggregateInputType | true
    _avg?: Giao_dichAvgAggregateInputType
    _sum?: Giao_dichSumAggregateInputType
    _min?: Giao_dichMinAggregateInputType
    _max?: Giao_dichMaxAggregateInputType
  }

  export type Giao_dichGroupByOutputType = {
    id: number
    tai_khoan: string
    ma_lich_chieu: number
    tong_tien: number
    noi_dung_ck: string
    ngay_giao_dich: Date
    _count: Giao_dichCountAggregateOutputType | null
    _avg: Giao_dichAvgAggregateOutputType | null
    _sum: Giao_dichSumAggregateOutputType | null
    _min: Giao_dichMinAggregateOutputType | null
    _max: Giao_dichMaxAggregateOutputType | null
  }

  type GetGiao_dichGroupByPayload<T extends giao_dichGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Giao_dichGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Giao_dichGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Giao_dichGroupByOutputType[P]>
            : GetScalarType<T[P], Giao_dichGroupByOutputType[P]>
        }
      >
    >


  export type giao_dichSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    tong_tien?: boolean
    noi_dung_ck?: boolean
    ngay_giao_dich?: boolean
  }, ExtArgs["result"]["giao_dich"]>



  export type giao_dichSelectScalar = {
    id?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    tong_tien?: boolean
    noi_dung_ck?: boolean
    ngay_giao_dich?: boolean
  }

  export type giao_dichOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tai_khoan" | "ma_lich_chieu" | "tong_tien" | "noi_dung_ck" | "ngay_giao_dich", ExtArgs["result"]["giao_dich"]>

  export type $giao_dichPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "giao_dich"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tai_khoan: string
      ma_lich_chieu: number
      tong_tien: number
      noi_dung_ck: string
      ngay_giao_dich: Date
    }, ExtArgs["result"]["giao_dich"]>
    composites: {}
  }

  type giao_dichGetPayload<S extends boolean | null | undefined | giao_dichDefaultArgs> = $Result.GetResult<Prisma.$giao_dichPayload, S>

  type giao_dichCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<giao_dichFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Giao_dichCountAggregateInputType | true
    }

  export interface giao_dichDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['giao_dich'], meta: { name: 'giao_dich' } }
    /**
     * Find zero or one Giao_dich that matches the filter.
     * @param {giao_dichFindUniqueArgs} args - Arguments to find a Giao_dich
     * @example
     * // Get one Giao_dich
     * const giao_dich = await prisma.giao_dich.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends giao_dichFindUniqueArgs>(args: SelectSubset<T, giao_dichFindUniqueArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Giao_dich that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {giao_dichFindUniqueOrThrowArgs} args - Arguments to find a Giao_dich
     * @example
     * // Get one Giao_dich
     * const giao_dich = await prisma.giao_dich.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends giao_dichFindUniqueOrThrowArgs>(args: SelectSubset<T, giao_dichFindUniqueOrThrowArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Giao_dich that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giao_dichFindFirstArgs} args - Arguments to find a Giao_dich
     * @example
     * // Get one Giao_dich
     * const giao_dich = await prisma.giao_dich.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends giao_dichFindFirstArgs>(args?: SelectSubset<T, giao_dichFindFirstArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Giao_dich that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giao_dichFindFirstOrThrowArgs} args - Arguments to find a Giao_dich
     * @example
     * // Get one Giao_dich
     * const giao_dich = await prisma.giao_dich.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends giao_dichFindFirstOrThrowArgs>(args?: SelectSubset<T, giao_dichFindFirstOrThrowArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Giao_diches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giao_dichFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Giao_diches
     * const giao_diches = await prisma.giao_dich.findMany()
     * 
     * // Get first 10 Giao_diches
     * const giao_diches = await prisma.giao_dich.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giao_dichWithIdOnly = await prisma.giao_dich.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends giao_dichFindManyArgs>(args?: SelectSubset<T, giao_dichFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Giao_dich.
     * @param {giao_dichCreateArgs} args - Arguments to create a Giao_dich.
     * @example
     * // Create one Giao_dich
     * const Giao_dich = await prisma.giao_dich.create({
     *   data: {
     *     // ... data to create a Giao_dich
     *   }
     * })
     * 
     */
    create<T extends giao_dichCreateArgs>(args: SelectSubset<T, giao_dichCreateArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Giao_diches.
     * @param {giao_dichCreateManyArgs} args - Arguments to create many Giao_diches.
     * @example
     * // Create many Giao_diches
     * const giao_dich = await prisma.giao_dich.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends giao_dichCreateManyArgs>(args?: SelectSubset<T, giao_dichCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Giao_dich.
     * @param {giao_dichDeleteArgs} args - Arguments to delete one Giao_dich.
     * @example
     * // Delete one Giao_dich
     * const Giao_dich = await prisma.giao_dich.delete({
     *   where: {
     *     // ... filter to delete one Giao_dich
     *   }
     * })
     * 
     */
    delete<T extends giao_dichDeleteArgs>(args: SelectSubset<T, giao_dichDeleteArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Giao_dich.
     * @param {giao_dichUpdateArgs} args - Arguments to update one Giao_dich.
     * @example
     * // Update one Giao_dich
     * const giao_dich = await prisma.giao_dich.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends giao_dichUpdateArgs>(args: SelectSubset<T, giao_dichUpdateArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Giao_diches.
     * @param {giao_dichDeleteManyArgs} args - Arguments to filter Giao_diches to delete.
     * @example
     * // Delete a few Giao_diches
     * const { count } = await prisma.giao_dich.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends giao_dichDeleteManyArgs>(args?: SelectSubset<T, giao_dichDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Giao_diches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giao_dichUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Giao_diches
     * const giao_dich = await prisma.giao_dich.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends giao_dichUpdateManyArgs>(args: SelectSubset<T, giao_dichUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Giao_dich.
     * @param {giao_dichUpsertArgs} args - Arguments to update or create a Giao_dich.
     * @example
     * // Update or create a Giao_dich
     * const giao_dich = await prisma.giao_dich.upsert({
     *   create: {
     *     // ... data to create a Giao_dich
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Giao_dich we want to update
     *   }
     * })
     */
    upsert<T extends giao_dichUpsertArgs>(args: SelectSubset<T, giao_dichUpsertArgs<ExtArgs>>): Prisma__giao_dichClient<$Result.GetResult<Prisma.$giao_dichPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Giao_diches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giao_dichCountArgs} args - Arguments to filter Giao_diches to count.
     * @example
     * // Count the number of Giao_diches
     * const count = await prisma.giao_dich.count({
     *   where: {
     *     // ... the filter for the Giao_diches we want to count
     *   }
     * })
    **/
    count<T extends giao_dichCountArgs>(
      args?: Subset<T, giao_dichCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Giao_dichCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Giao_dich.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Giao_dichAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Giao_dichAggregateArgs>(args: Subset<T, Giao_dichAggregateArgs>): Prisma.PrismaPromise<GetGiao_dichAggregateType<T>>

    /**
     * Group by Giao_dich.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {giao_dichGroupByArgs} args - Group by arguments.
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
      T extends giao_dichGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: giao_dichGroupByArgs['orderBy'] }
        : { orderBy?: giao_dichGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, giao_dichGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiao_dichGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the giao_dich model
   */
  readonly fields: giao_dichFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for giao_dich.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__giao_dichClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the giao_dich model
   */
  interface giao_dichFieldRefs {
    readonly id: FieldRef<"giao_dich", 'Int'>
    readonly tai_khoan: FieldRef<"giao_dich", 'String'>
    readonly ma_lich_chieu: FieldRef<"giao_dich", 'Int'>
    readonly tong_tien: FieldRef<"giao_dich", 'Int'>
    readonly noi_dung_ck: FieldRef<"giao_dich", 'String'>
    readonly ngay_giao_dich: FieldRef<"giao_dich", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * giao_dich findUnique
   */
  export type giao_dichFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * Filter, which giao_dich to fetch.
     */
    where: giao_dichWhereUniqueInput
  }

  /**
   * giao_dich findUniqueOrThrow
   */
  export type giao_dichFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * Filter, which giao_dich to fetch.
     */
    where: giao_dichWhereUniqueInput
  }

  /**
   * giao_dich findFirst
   */
  export type giao_dichFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * Filter, which giao_dich to fetch.
     */
    where?: giao_dichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giao_diches to fetch.
     */
    orderBy?: giao_dichOrderByWithRelationInput | giao_dichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for giao_diches.
     */
    cursor?: giao_dichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giao_diches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giao_diches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of giao_diches.
     */
    distinct?: Giao_dichScalarFieldEnum | Giao_dichScalarFieldEnum[]
  }

  /**
   * giao_dich findFirstOrThrow
   */
  export type giao_dichFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * Filter, which giao_dich to fetch.
     */
    where?: giao_dichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giao_diches to fetch.
     */
    orderBy?: giao_dichOrderByWithRelationInput | giao_dichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for giao_diches.
     */
    cursor?: giao_dichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giao_diches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giao_diches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of giao_diches.
     */
    distinct?: Giao_dichScalarFieldEnum | Giao_dichScalarFieldEnum[]
  }

  /**
   * giao_dich findMany
   */
  export type giao_dichFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * Filter, which giao_diches to fetch.
     */
    where?: giao_dichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of giao_diches to fetch.
     */
    orderBy?: giao_dichOrderByWithRelationInput | giao_dichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing giao_diches.
     */
    cursor?: giao_dichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` giao_diches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` giao_diches.
     */
    skip?: number
    distinct?: Giao_dichScalarFieldEnum | Giao_dichScalarFieldEnum[]
  }

  /**
   * giao_dich create
   */
  export type giao_dichCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * The data needed to create a giao_dich.
     */
    data: XOR<giao_dichCreateInput, giao_dichUncheckedCreateInput>
  }

  /**
   * giao_dich createMany
   */
  export type giao_dichCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many giao_diches.
     */
    data: giao_dichCreateManyInput | giao_dichCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * giao_dich update
   */
  export type giao_dichUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * The data needed to update a giao_dich.
     */
    data: XOR<giao_dichUpdateInput, giao_dichUncheckedUpdateInput>
    /**
     * Choose, which giao_dich to update.
     */
    where: giao_dichWhereUniqueInput
  }

  /**
   * giao_dich updateMany
   */
  export type giao_dichUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update giao_diches.
     */
    data: XOR<giao_dichUpdateManyMutationInput, giao_dichUncheckedUpdateManyInput>
    /**
     * Filter which giao_diches to update
     */
    where?: giao_dichWhereInput
    /**
     * Limit how many giao_diches to update.
     */
    limit?: number
  }

  /**
   * giao_dich upsert
   */
  export type giao_dichUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * The filter to search for the giao_dich to update in case it exists.
     */
    where: giao_dichWhereUniqueInput
    /**
     * In case the giao_dich found by the `where` argument doesn't exist, create a new giao_dich with this data.
     */
    create: XOR<giao_dichCreateInput, giao_dichUncheckedCreateInput>
    /**
     * In case the giao_dich was found with the provided `where` argument, update it with this data.
     */
    update: XOR<giao_dichUpdateInput, giao_dichUncheckedUpdateInput>
  }

  /**
   * giao_dich delete
   */
  export type giao_dichDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
    /**
     * Filter which giao_dich to delete.
     */
    where: giao_dichWhereUniqueInput
  }

  /**
   * giao_dich deleteMany
   */
  export type giao_dichDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which giao_diches to delete
     */
    where?: giao_dichWhereInput
    /**
     * Limit how many giao_diches to delete.
     */
    limit?: number
  }

  /**
   * giao_dich without action
   */
  export type giao_dichDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the giao_dich
     */
    select?: giao_dichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the giao_dich
     */
    omit?: giao_dichOmit<ExtArgs> | null
  }


  /**
   * Model he_thong_rap
   */

  export type AggregateHe_thong_rap = {
    _count: He_thong_rapCountAggregateOutputType | null
    _min: He_thong_rapMinAggregateOutputType | null
    _max: He_thong_rapMaxAggregateOutputType | null
  }

  export type He_thong_rapMinAggregateOutputType = {
    ma_he_thong_rap: string | null
    ten_he_thong_rap: string | null
    logo: string | null
  }

  export type He_thong_rapMaxAggregateOutputType = {
    ma_he_thong_rap: string | null
    ten_he_thong_rap: string | null
    logo: string | null
  }

  export type He_thong_rapCountAggregateOutputType = {
    ma_he_thong_rap: number
    ten_he_thong_rap: number
    logo: number
    _all: number
  }


  export type He_thong_rapMinAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
  }

  export type He_thong_rapMaxAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
  }

  export type He_thong_rapCountAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
    _all?: true
  }

  export type He_thong_rapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which he_thong_rap to aggregate.
     */
    where?: he_thong_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of he_thong_raps to fetch.
     */
    orderBy?: he_thong_rapOrderByWithRelationInput | he_thong_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: he_thong_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` he_thong_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` he_thong_raps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned he_thong_raps
    **/
    _count?: true | He_thong_rapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: He_thong_rapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: He_thong_rapMaxAggregateInputType
  }

  export type GetHe_thong_rapAggregateType<T extends He_thong_rapAggregateArgs> = {
        [P in keyof T & keyof AggregateHe_thong_rap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHe_thong_rap[P]>
      : GetScalarType<T[P], AggregateHe_thong_rap[P]>
  }




  export type he_thong_rapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: he_thong_rapWhereInput
    orderBy?: he_thong_rapOrderByWithAggregationInput | he_thong_rapOrderByWithAggregationInput[]
    by: He_thong_rapScalarFieldEnum[] | He_thong_rapScalarFieldEnum
    having?: he_thong_rapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: He_thong_rapCountAggregateInputType | true
    _min?: He_thong_rapMinAggregateInputType
    _max?: He_thong_rapMaxAggregateInputType
  }

  export type He_thong_rapGroupByOutputType = {
    ma_he_thong_rap: string
    ten_he_thong_rap: string
    logo: string | null
    _count: He_thong_rapCountAggregateOutputType | null
    _min: He_thong_rapMinAggregateOutputType | null
    _max: He_thong_rapMaxAggregateOutputType | null
  }

  type GetHe_thong_rapGroupByPayload<T extends he_thong_rapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<He_thong_rapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof He_thong_rapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], He_thong_rapGroupByOutputType[P]>
            : GetScalarType<T[P], He_thong_rapGroupByOutputType[P]>
        }
      >
    >


  export type he_thong_rapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_he_thong_rap?: boolean
    ten_he_thong_rap?: boolean
    logo?: boolean
    cum_rap?: boolean | he_thong_rap$cum_rapArgs<ExtArgs>
    _count?: boolean | He_thong_rapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["he_thong_rap"]>



  export type he_thong_rapSelectScalar = {
    ma_he_thong_rap?: boolean
    ten_he_thong_rap?: boolean
    logo?: boolean
  }

  export type he_thong_rapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_he_thong_rap" | "ten_he_thong_rap" | "logo", ExtArgs["result"]["he_thong_rap"]>
  export type he_thong_rapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cum_rap?: boolean | he_thong_rap$cum_rapArgs<ExtArgs>
    _count?: boolean | He_thong_rapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $he_thong_rapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "he_thong_rap"
    objects: {
      cum_rap: Prisma.$cum_rapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_he_thong_rap: string
      ten_he_thong_rap: string
      logo: string | null
    }, ExtArgs["result"]["he_thong_rap"]>
    composites: {}
  }

  type he_thong_rapGetPayload<S extends boolean | null | undefined | he_thong_rapDefaultArgs> = $Result.GetResult<Prisma.$he_thong_rapPayload, S>

  type he_thong_rapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<he_thong_rapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: He_thong_rapCountAggregateInputType | true
    }

  export interface he_thong_rapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['he_thong_rap'], meta: { name: 'he_thong_rap' } }
    /**
     * Find zero or one He_thong_rap that matches the filter.
     * @param {he_thong_rapFindUniqueArgs} args - Arguments to find a He_thong_rap
     * @example
     * // Get one He_thong_rap
     * const he_thong_rap = await prisma.he_thong_rap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends he_thong_rapFindUniqueArgs>(args: SelectSubset<T, he_thong_rapFindUniqueArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one He_thong_rap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {he_thong_rapFindUniqueOrThrowArgs} args - Arguments to find a He_thong_rap
     * @example
     * // Get one He_thong_rap
     * const he_thong_rap = await prisma.he_thong_rap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends he_thong_rapFindUniqueOrThrowArgs>(args: SelectSubset<T, he_thong_rapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first He_thong_rap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {he_thong_rapFindFirstArgs} args - Arguments to find a He_thong_rap
     * @example
     * // Get one He_thong_rap
     * const he_thong_rap = await prisma.he_thong_rap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends he_thong_rapFindFirstArgs>(args?: SelectSubset<T, he_thong_rapFindFirstArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first He_thong_rap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {he_thong_rapFindFirstOrThrowArgs} args - Arguments to find a He_thong_rap
     * @example
     * // Get one He_thong_rap
     * const he_thong_rap = await prisma.he_thong_rap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends he_thong_rapFindFirstOrThrowArgs>(args?: SelectSubset<T, he_thong_rapFindFirstOrThrowArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more He_thong_raps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {he_thong_rapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all He_thong_raps
     * const he_thong_raps = await prisma.he_thong_rap.findMany()
     * 
     * // Get first 10 He_thong_raps
     * const he_thong_raps = await prisma.he_thong_rap.findMany({ take: 10 })
     * 
     * // Only select the `ma_he_thong_rap`
     * const he_thong_rapWithMa_he_thong_rapOnly = await prisma.he_thong_rap.findMany({ select: { ma_he_thong_rap: true } })
     * 
     */
    findMany<T extends he_thong_rapFindManyArgs>(args?: SelectSubset<T, he_thong_rapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a He_thong_rap.
     * @param {he_thong_rapCreateArgs} args - Arguments to create a He_thong_rap.
     * @example
     * // Create one He_thong_rap
     * const He_thong_rap = await prisma.he_thong_rap.create({
     *   data: {
     *     // ... data to create a He_thong_rap
     *   }
     * })
     * 
     */
    create<T extends he_thong_rapCreateArgs>(args: SelectSubset<T, he_thong_rapCreateArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many He_thong_raps.
     * @param {he_thong_rapCreateManyArgs} args - Arguments to create many He_thong_raps.
     * @example
     * // Create many He_thong_raps
     * const he_thong_rap = await prisma.he_thong_rap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends he_thong_rapCreateManyArgs>(args?: SelectSubset<T, he_thong_rapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a He_thong_rap.
     * @param {he_thong_rapDeleteArgs} args - Arguments to delete one He_thong_rap.
     * @example
     * // Delete one He_thong_rap
     * const He_thong_rap = await prisma.he_thong_rap.delete({
     *   where: {
     *     // ... filter to delete one He_thong_rap
     *   }
     * })
     * 
     */
    delete<T extends he_thong_rapDeleteArgs>(args: SelectSubset<T, he_thong_rapDeleteArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one He_thong_rap.
     * @param {he_thong_rapUpdateArgs} args - Arguments to update one He_thong_rap.
     * @example
     * // Update one He_thong_rap
     * const he_thong_rap = await prisma.he_thong_rap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends he_thong_rapUpdateArgs>(args: SelectSubset<T, he_thong_rapUpdateArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more He_thong_raps.
     * @param {he_thong_rapDeleteManyArgs} args - Arguments to filter He_thong_raps to delete.
     * @example
     * // Delete a few He_thong_raps
     * const { count } = await prisma.he_thong_rap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends he_thong_rapDeleteManyArgs>(args?: SelectSubset<T, he_thong_rapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more He_thong_raps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {he_thong_rapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many He_thong_raps
     * const he_thong_rap = await prisma.he_thong_rap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends he_thong_rapUpdateManyArgs>(args: SelectSubset<T, he_thong_rapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one He_thong_rap.
     * @param {he_thong_rapUpsertArgs} args - Arguments to update or create a He_thong_rap.
     * @example
     * // Update or create a He_thong_rap
     * const he_thong_rap = await prisma.he_thong_rap.upsert({
     *   create: {
     *     // ... data to create a He_thong_rap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the He_thong_rap we want to update
     *   }
     * })
     */
    upsert<T extends he_thong_rapUpsertArgs>(args: SelectSubset<T, he_thong_rapUpsertArgs<ExtArgs>>): Prisma__he_thong_rapClient<$Result.GetResult<Prisma.$he_thong_rapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of He_thong_raps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {he_thong_rapCountArgs} args - Arguments to filter He_thong_raps to count.
     * @example
     * // Count the number of He_thong_raps
     * const count = await prisma.he_thong_rap.count({
     *   where: {
     *     // ... the filter for the He_thong_raps we want to count
     *   }
     * })
    **/
    count<T extends he_thong_rapCountArgs>(
      args?: Subset<T, he_thong_rapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], He_thong_rapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a He_thong_rap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {He_thong_rapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends He_thong_rapAggregateArgs>(args: Subset<T, He_thong_rapAggregateArgs>): Prisma.PrismaPromise<GetHe_thong_rapAggregateType<T>>

    /**
     * Group by He_thong_rap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {he_thong_rapGroupByArgs} args - Group by arguments.
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
      T extends he_thong_rapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: he_thong_rapGroupByArgs['orderBy'] }
        : { orderBy?: he_thong_rapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, he_thong_rapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHe_thong_rapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the he_thong_rap model
   */
  readonly fields: he_thong_rapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for he_thong_rap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__he_thong_rapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cum_rap<T extends he_thong_rap$cum_rapArgs<ExtArgs> = {}>(args?: Subset<T, he_thong_rap$cum_rapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the he_thong_rap model
   */
  interface he_thong_rapFieldRefs {
    readonly ma_he_thong_rap: FieldRef<"he_thong_rap", 'String'>
    readonly ten_he_thong_rap: FieldRef<"he_thong_rap", 'String'>
    readonly logo: FieldRef<"he_thong_rap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * he_thong_rap findUnique
   */
  export type he_thong_rapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * Filter, which he_thong_rap to fetch.
     */
    where: he_thong_rapWhereUniqueInput
  }

  /**
   * he_thong_rap findUniqueOrThrow
   */
  export type he_thong_rapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * Filter, which he_thong_rap to fetch.
     */
    where: he_thong_rapWhereUniqueInput
  }

  /**
   * he_thong_rap findFirst
   */
  export type he_thong_rapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * Filter, which he_thong_rap to fetch.
     */
    where?: he_thong_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of he_thong_raps to fetch.
     */
    orderBy?: he_thong_rapOrderByWithRelationInput | he_thong_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for he_thong_raps.
     */
    cursor?: he_thong_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` he_thong_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` he_thong_raps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of he_thong_raps.
     */
    distinct?: He_thong_rapScalarFieldEnum | He_thong_rapScalarFieldEnum[]
  }

  /**
   * he_thong_rap findFirstOrThrow
   */
  export type he_thong_rapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * Filter, which he_thong_rap to fetch.
     */
    where?: he_thong_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of he_thong_raps to fetch.
     */
    orderBy?: he_thong_rapOrderByWithRelationInput | he_thong_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for he_thong_raps.
     */
    cursor?: he_thong_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` he_thong_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` he_thong_raps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of he_thong_raps.
     */
    distinct?: He_thong_rapScalarFieldEnum | He_thong_rapScalarFieldEnum[]
  }

  /**
   * he_thong_rap findMany
   */
  export type he_thong_rapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * Filter, which he_thong_raps to fetch.
     */
    where?: he_thong_rapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of he_thong_raps to fetch.
     */
    orderBy?: he_thong_rapOrderByWithRelationInput | he_thong_rapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing he_thong_raps.
     */
    cursor?: he_thong_rapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` he_thong_raps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` he_thong_raps.
     */
    skip?: number
    distinct?: He_thong_rapScalarFieldEnum | He_thong_rapScalarFieldEnum[]
  }

  /**
   * he_thong_rap create
   */
  export type he_thong_rapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * The data needed to create a he_thong_rap.
     */
    data: XOR<he_thong_rapCreateInput, he_thong_rapUncheckedCreateInput>
  }

  /**
   * he_thong_rap createMany
   */
  export type he_thong_rapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many he_thong_raps.
     */
    data: he_thong_rapCreateManyInput | he_thong_rapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * he_thong_rap update
   */
  export type he_thong_rapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * The data needed to update a he_thong_rap.
     */
    data: XOR<he_thong_rapUpdateInput, he_thong_rapUncheckedUpdateInput>
    /**
     * Choose, which he_thong_rap to update.
     */
    where: he_thong_rapWhereUniqueInput
  }

  /**
   * he_thong_rap updateMany
   */
  export type he_thong_rapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update he_thong_raps.
     */
    data: XOR<he_thong_rapUpdateManyMutationInput, he_thong_rapUncheckedUpdateManyInput>
    /**
     * Filter which he_thong_raps to update
     */
    where?: he_thong_rapWhereInput
    /**
     * Limit how many he_thong_raps to update.
     */
    limit?: number
  }

  /**
   * he_thong_rap upsert
   */
  export type he_thong_rapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * The filter to search for the he_thong_rap to update in case it exists.
     */
    where: he_thong_rapWhereUniqueInput
    /**
     * In case the he_thong_rap found by the `where` argument doesn't exist, create a new he_thong_rap with this data.
     */
    create: XOR<he_thong_rapCreateInput, he_thong_rapUncheckedCreateInput>
    /**
     * In case the he_thong_rap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<he_thong_rapUpdateInput, he_thong_rapUncheckedUpdateInput>
  }

  /**
   * he_thong_rap delete
   */
  export type he_thong_rapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
    /**
     * Filter which he_thong_rap to delete.
     */
    where: he_thong_rapWhereUniqueInput
  }

  /**
   * he_thong_rap deleteMany
   */
  export type he_thong_rapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which he_thong_raps to delete
     */
    where?: he_thong_rapWhereInput
    /**
     * Limit how many he_thong_raps to delete.
     */
    limit?: number
  }

  /**
   * he_thong_rap.cum_rap
   */
  export type he_thong_rap$cum_rapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cum_rap
     */
    select?: cum_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cum_rap
     */
    omit?: cum_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cum_rapInclude<ExtArgs> | null
    where?: cum_rapWhereInput
    orderBy?: cum_rapOrderByWithRelationInput | cum_rapOrderByWithRelationInput[]
    cursor?: cum_rapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cum_rapScalarFieldEnum | Cum_rapScalarFieldEnum[]
  }

  /**
   * he_thong_rap without action
   */
  export type he_thong_rapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the he_thong_rap
     */
    select?: he_thong_rapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the he_thong_rap
     */
    omit?: he_thong_rapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: he_thong_rapInclude<ExtArgs> | null
  }


  /**
   * Model lich_chieu
   */

  export type AggregateLich_chieu = {
    _count: Lich_chieuCountAggregateOutputType | null
    _avg: Lich_chieuAvgAggregateOutputType | null
    _sum: Lich_chieuSumAggregateOutputType | null
    _min: Lich_chieuMinAggregateOutputType | null
    _max: Lich_chieuMaxAggregateOutputType | null
  }

  export type Lich_chieuAvgAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    gia_ve: number | null
  }

  export type Lich_chieuSumAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    gia_ve: number | null
  }

  export type Lich_chieuMinAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
  }

  export type Lich_chieuMaxAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
  }

  export type Lich_chieuCountAggregateOutputType = {
    ma_lich_chieu: number
    ma_rap: number
    ma_phim: number
    ngay_gio_chieu: number
    gia_ve: number
    _all: number
  }


  export type Lich_chieuAvgAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    gia_ve?: true
  }

  export type Lich_chieuSumAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    gia_ve?: true
  }

  export type Lich_chieuMinAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
  }

  export type Lich_chieuMaxAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
  }

  export type Lich_chieuCountAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
    _all?: true
  }

  export type Lich_chieuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lich_chieu to aggregate.
     */
    where?: lich_chieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_chieus to fetch.
     */
    orderBy?: lich_chieuOrderByWithRelationInput | lich_chieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lich_chieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_chieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_chieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lich_chieus
    **/
    _count?: true | Lich_chieuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lich_chieuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lich_chieuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lich_chieuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lich_chieuMaxAggregateInputType
  }

  export type GetLich_chieuAggregateType<T extends Lich_chieuAggregateArgs> = {
        [P in keyof T & keyof AggregateLich_chieu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLich_chieu[P]>
      : GetScalarType<T[P], AggregateLich_chieu[P]>
  }




  export type lich_chieuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lich_chieuWhereInput
    orderBy?: lich_chieuOrderByWithAggregationInput | lich_chieuOrderByWithAggregationInput[]
    by: Lich_chieuScalarFieldEnum[] | Lich_chieuScalarFieldEnum
    having?: lich_chieuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lich_chieuCountAggregateInputType | true
    _avg?: Lich_chieuAvgAggregateInputType
    _sum?: Lich_chieuSumAggregateInputType
    _min?: Lich_chieuMinAggregateInputType
    _max?: Lich_chieuMaxAggregateInputType
  }

  export type Lich_chieuGroupByOutputType = {
    ma_lich_chieu: number
    ma_rap: number
    ma_phim: number
    ngay_gio_chieu: Date
    gia_ve: number
    _count: Lich_chieuCountAggregateOutputType | null
    _avg: Lich_chieuAvgAggregateOutputType | null
    _sum: Lich_chieuSumAggregateOutputType | null
    _min: Lich_chieuMinAggregateOutputType | null
    _max: Lich_chieuMaxAggregateOutputType | null
  }

  type GetLich_chieuGroupByPayload<T extends lich_chieuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lich_chieuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lich_chieuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lich_chieuGroupByOutputType[P]>
            : GetScalarType<T[P], Lich_chieuGroupByOutputType[P]>
        }
      >
    >


  export type lich_chieuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_lich_chieu?: boolean
    ma_rap?: boolean
    ma_phim?: boolean
    ngay_gio_chieu?: boolean
    gia_ve?: boolean
    dat_ve?: boolean | lich_chieu$dat_veArgs<ExtArgs>
    phim?: boolean | phimDefaultArgs<ExtArgs>
    rap_phim?: boolean | rap_phimDefaultArgs<ExtArgs>
    _count?: boolean | Lich_chieuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lich_chieu"]>



  export type lich_chieuSelectScalar = {
    ma_lich_chieu?: boolean
    ma_rap?: boolean
    ma_phim?: boolean
    ngay_gio_chieu?: boolean
    gia_ve?: boolean
  }

  export type lich_chieuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_lich_chieu" | "ma_rap" | "ma_phim" | "ngay_gio_chieu" | "gia_ve", ExtArgs["result"]["lich_chieu"]>
  export type lich_chieuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dat_ve?: boolean | lich_chieu$dat_veArgs<ExtArgs>
    phim?: boolean | phimDefaultArgs<ExtArgs>
    rap_phim?: boolean | rap_phimDefaultArgs<ExtArgs>
    _count?: boolean | Lich_chieuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $lich_chieuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lich_chieu"
    objects: {
      dat_ve: Prisma.$dat_vePayload<ExtArgs>[]
      phim: Prisma.$phimPayload<ExtArgs>
      rap_phim: Prisma.$rap_phimPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_lich_chieu: number
      ma_rap: number
      ma_phim: number
      ngay_gio_chieu: Date
      gia_ve: number
    }, ExtArgs["result"]["lich_chieu"]>
    composites: {}
  }

  type lich_chieuGetPayload<S extends boolean | null | undefined | lich_chieuDefaultArgs> = $Result.GetResult<Prisma.$lich_chieuPayload, S>

  type lich_chieuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lich_chieuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lich_chieuCountAggregateInputType | true
    }

  export interface lich_chieuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lich_chieu'], meta: { name: 'lich_chieu' } }
    /**
     * Find zero or one Lich_chieu that matches the filter.
     * @param {lich_chieuFindUniqueArgs} args - Arguments to find a Lich_chieu
     * @example
     * // Get one Lich_chieu
     * const lich_chieu = await prisma.lich_chieu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lich_chieuFindUniqueArgs>(args: SelectSubset<T, lich_chieuFindUniqueArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lich_chieu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lich_chieuFindUniqueOrThrowArgs} args - Arguments to find a Lich_chieu
     * @example
     * // Get one Lich_chieu
     * const lich_chieu = await prisma.lich_chieu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lich_chieuFindUniqueOrThrowArgs>(args: SelectSubset<T, lich_chieuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lich_chieu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_chieuFindFirstArgs} args - Arguments to find a Lich_chieu
     * @example
     * // Get one Lich_chieu
     * const lich_chieu = await prisma.lich_chieu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lich_chieuFindFirstArgs>(args?: SelectSubset<T, lich_chieuFindFirstArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lich_chieu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_chieuFindFirstOrThrowArgs} args - Arguments to find a Lich_chieu
     * @example
     * // Get one Lich_chieu
     * const lich_chieu = await prisma.lich_chieu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lich_chieuFindFirstOrThrowArgs>(args?: SelectSubset<T, lich_chieuFindFirstOrThrowArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lich_chieus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_chieuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lich_chieus
     * const lich_chieus = await prisma.lich_chieu.findMany()
     * 
     * // Get first 10 Lich_chieus
     * const lich_chieus = await prisma.lich_chieu.findMany({ take: 10 })
     * 
     * // Only select the `ma_lich_chieu`
     * const lich_chieuWithMa_lich_chieuOnly = await prisma.lich_chieu.findMany({ select: { ma_lich_chieu: true } })
     * 
     */
    findMany<T extends lich_chieuFindManyArgs>(args?: SelectSubset<T, lich_chieuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lich_chieu.
     * @param {lich_chieuCreateArgs} args - Arguments to create a Lich_chieu.
     * @example
     * // Create one Lich_chieu
     * const Lich_chieu = await prisma.lich_chieu.create({
     *   data: {
     *     // ... data to create a Lich_chieu
     *   }
     * })
     * 
     */
    create<T extends lich_chieuCreateArgs>(args: SelectSubset<T, lich_chieuCreateArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lich_chieus.
     * @param {lich_chieuCreateManyArgs} args - Arguments to create many Lich_chieus.
     * @example
     * // Create many Lich_chieus
     * const lich_chieu = await prisma.lich_chieu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lich_chieuCreateManyArgs>(args?: SelectSubset<T, lich_chieuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lich_chieu.
     * @param {lich_chieuDeleteArgs} args - Arguments to delete one Lich_chieu.
     * @example
     * // Delete one Lich_chieu
     * const Lich_chieu = await prisma.lich_chieu.delete({
     *   where: {
     *     // ... filter to delete one Lich_chieu
     *   }
     * })
     * 
     */
    delete<T extends lich_chieuDeleteArgs>(args: SelectSubset<T, lich_chieuDeleteArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lich_chieu.
     * @param {lich_chieuUpdateArgs} args - Arguments to update one Lich_chieu.
     * @example
     * // Update one Lich_chieu
     * const lich_chieu = await prisma.lich_chieu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lich_chieuUpdateArgs>(args: SelectSubset<T, lich_chieuUpdateArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lich_chieus.
     * @param {lich_chieuDeleteManyArgs} args - Arguments to filter Lich_chieus to delete.
     * @example
     * // Delete a few Lich_chieus
     * const { count } = await prisma.lich_chieu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lich_chieuDeleteManyArgs>(args?: SelectSubset<T, lich_chieuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lich_chieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_chieuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lich_chieus
     * const lich_chieu = await prisma.lich_chieu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lich_chieuUpdateManyArgs>(args: SelectSubset<T, lich_chieuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lich_chieu.
     * @param {lich_chieuUpsertArgs} args - Arguments to update or create a Lich_chieu.
     * @example
     * // Update or create a Lich_chieu
     * const lich_chieu = await prisma.lich_chieu.upsert({
     *   create: {
     *     // ... data to create a Lich_chieu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lich_chieu we want to update
     *   }
     * })
     */
    upsert<T extends lich_chieuUpsertArgs>(args: SelectSubset<T, lich_chieuUpsertArgs<ExtArgs>>): Prisma__lich_chieuClient<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lich_chieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_chieuCountArgs} args - Arguments to filter Lich_chieus to count.
     * @example
     * // Count the number of Lich_chieus
     * const count = await prisma.lich_chieu.count({
     *   where: {
     *     // ... the filter for the Lich_chieus we want to count
     *   }
     * })
    **/
    count<T extends lich_chieuCountArgs>(
      args?: Subset<T, lich_chieuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lich_chieuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lich_chieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lich_chieuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lich_chieuAggregateArgs>(args: Subset<T, Lich_chieuAggregateArgs>): Prisma.PrismaPromise<GetLich_chieuAggregateType<T>>

    /**
     * Group by Lich_chieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_chieuGroupByArgs} args - Group by arguments.
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
      T extends lich_chieuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lich_chieuGroupByArgs['orderBy'] }
        : { orderBy?: lich_chieuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lich_chieuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLich_chieuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lich_chieu model
   */
  readonly fields: lich_chieuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lich_chieu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lich_chieuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dat_ve<T extends lich_chieu$dat_veArgs<ExtArgs> = {}>(args?: Subset<T, lich_chieu$dat_veArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phim<T extends phimDefaultArgs<ExtArgs> = {}>(args?: Subset<T, phimDefaultArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rap_phim<T extends rap_phimDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rap_phimDefaultArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lich_chieu model
   */
  interface lich_chieuFieldRefs {
    readonly ma_lich_chieu: FieldRef<"lich_chieu", 'Int'>
    readonly ma_rap: FieldRef<"lich_chieu", 'Int'>
    readonly ma_phim: FieldRef<"lich_chieu", 'Int'>
    readonly ngay_gio_chieu: FieldRef<"lich_chieu", 'DateTime'>
    readonly gia_ve: FieldRef<"lich_chieu", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * lich_chieu findUnique
   */
  export type lich_chieuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * Filter, which lich_chieu to fetch.
     */
    where: lich_chieuWhereUniqueInput
  }

  /**
   * lich_chieu findUniqueOrThrow
   */
  export type lich_chieuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * Filter, which lich_chieu to fetch.
     */
    where: lich_chieuWhereUniqueInput
  }

  /**
   * lich_chieu findFirst
   */
  export type lich_chieuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * Filter, which lich_chieu to fetch.
     */
    where?: lich_chieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_chieus to fetch.
     */
    orderBy?: lich_chieuOrderByWithRelationInput | lich_chieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lich_chieus.
     */
    cursor?: lich_chieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_chieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_chieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lich_chieus.
     */
    distinct?: Lich_chieuScalarFieldEnum | Lich_chieuScalarFieldEnum[]
  }

  /**
   * lich_chieu findFirstOrThrow
   */
  export type lich_chieuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * Filter, which lich_chieu to fetch.
     */
    where?: lich_chieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_chieus to fetch.
     */
    orderBy?: lich_chieuOrderByWithRelationInput | lich_chieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lich_chieus.
     */
    cursor?: lich_chieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_chieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_chieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lich_chieus.
     */
    distinct?: Lich_chieuScalarFieldEnum | Lich_chieuScalarFieldEnum[]
  }

  /**
   * lich_chieu findMany
   */
  export type lich_chieuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * Filter, which lich_chieus to fetch.
     */
    where?: lich_chieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_chieus to fetch.
     */
    orderBy?: lich_chieuOrderByWithRelationInput | lich_chieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lich_chieus.
     */
    cursor?: lich_chieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_chieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_chieus.
     */
    skip?: number
    distinct?: Lich_chieuScalarFieldEnum | Lich_chieuScalarFieldEnum[]
  }

  /**
   * lich_chieu create
   */
  export type lich_chieuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * The data needed to create a lich_chieu.
     */
    data: XOR<lich_chieuCreateInput, lich_chieuUncheckedCreateInput>
  }

  /**
   * lich_chieu createMany
   */
  export type lich_chieuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lich_chieus.
     */
    data: lich_chieuCreateManyInput | lich_chieuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lich_chieu update
   */
  export type lich_chieuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * The data needed to update a lich_chieu.
     */
    data: XOR<lich_chieuUpdateInput, lich_chieuUncheckedUpdateInput>
    /**
     * Choose, which lich_chieu to update.
     */
    where: lich_chieuWhereUniqueInput
  }

  /**
   * lich_chieu updateMany
   */
  export type lich_chieuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lich_chieus.
     */
    data: XOR<lich_chieuUpdateManyMutationInput, lich_chieuUncheckedUpdateManyInput>
    /**
     * Filter which lich_chieus to update
     */
    where?: lich_chieuWhereInput
    /**
     * Limit how many lich_chieus to update.
     */
    limit?: number
  }

  /**
   * lich_chieu upsert
   */
  export type lich_chieuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * The filter to search for the lich_chieu to update in case it exists.
     */
    where: lich_chieuWhereUniqueInput
    /**
     * In case the lich_chieu found by the `where` argument doesn't exist, create a new lich_chieu with this data.
     */
    create: XOR<lich_chieuCreateInput, lich_chieuUncheckedCreateInput>
    /**
     * In case the lich_chieu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lich_chieuUpdateInput, lich_chieuUncheckedUpdateInput>
  }

  /**
   * lich_chieu delete
   */
  export type lich_chieuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    /**
     * Filter which lich_chieu to delete.
     */
    where: lich_chieuWhereUniqueInput
  }

  /**
   * lich_chieu deleteMany
   */
  export type lich_chieuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lich_chieus to delete
     */
    where?: lich_chieuWhereInput
    /**
     * Limit how many lich_chieus to delete.
     */
    limit?: number
  }

  /**
   * lich_chieu.dat_ve
   */
  export type lich_chieu$dat_veArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    where?: dat_veWhereInput
    orderBy?: dat_veOrderByWithRelationInput | dat_veOrderByWithRelationInput[]
    cursor?: dat_veWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dat_veScalarFieldEnum | Dat_veScalarFieldEnum[]
  }

  /**
   * lich_chieu without action
   */
  export type lich_chieuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
  }


  /**
   * Model nguoi_dung
   */

  export type AggregateNguoi_dung = {
    _count: Nguoi_dungCountAggregateOutputType | null
    _min: Nguoi_dungMinAggregateOutputType | null
    _max: Nguoi_dungMaxAggregateOutputType | null
  }

  export type Nguoi_dungMinAggregateOutputType = {
    tai_khoan: string | null
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    loai_nguoi_dung: string | null
    ma_nhom: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Nguoi_dungMaxAggregateOutputType = {
    tai_khoan: string | null
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    loai_nguoi_dung: string | null
    ma_nhom: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Nguoi_dungCountAggregateOutputType = {
    tai_khoan: number
    ho_ten: number
    email: number
    so_dt: number
    mat_khau: number
    loai_nguoi_dung: number
    ma_nhom: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Nguoi_dungMinAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    loai_nguoi_dung?: true
    ma_nhom?: true
    created_at?: true
    updated_at?: true
  }

  export type Nguoi_dungMaxAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    loai_nguoi_dung?: true
    ma_nhom?: true
    created_at?: true
    updated_at?: true
  }

  export type Nguoi_dungCountAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    loai_nguoi_dung?: true
    ma_nhom?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Nguoi_dungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nguoi_dung to aggregate.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nguoi_dungs
    **/
    _count?: true | Nguoi_dungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nguoi_dungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nguoi_dungMaxAggregateInputType
  }

  export type GetNguoi_dungAggregateType<T extends Nguoi_dungAggregateArgs> = {
        [P in keyof T & keyof AggregateNguoi_dung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNguoi_dung[P]>
      : GetScalarType<T[P], AggregateNguoi_dung[P]>
  }




  export type nguoi_dungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nguoi_dungWhereInput
    orderBy?: nguoi_dungOrderByWithAggregationInput | nguoi_dungOrderByWithAggregationInput[]
    by: Nguoi_dungScalarFieldEnum[] | Nguoi_dungScalarFieldEnum
    having?: nguoi_dungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nguoi_dungCountAggregateInputType | true
    _min?: Nguoi_dungMinAggregateInputType
    _max?: Nguoi_dungMaxAggregateInputType
  }

  export type Nguoi_dungGroupByOutputType = {
    tai_khoan: string
    ho_ten: string
    email: string
    so_dt: string
    mat_khau: string
    loai_nguoi_dung: string
    ma_nhom: string
    created_at: Date
    updated_at: Date
    _count: Nguoi_dungCountAggregateOutputType | null
    _min: Nguoi_dungMinAggregateOutputType | null
    _max: Nguoi_dungMaxAggregateOutputType | null
  }

  type GetNguoi_dungGroupByPayload<T extends nguoi_dungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nguoi_dungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nguoi_dungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nguoi_dungGroupByOutputType[P]>
            : GetScalarType<T[P], Nguoi_dungGroupByOutputType[P]>
        }
      >
    >


  export type nguoi_dungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tai_khoan?: boolean
    ho_ten?: boolean
    email?: boolean
    so_dt?: boolean
    mat_khau?: boolean
    loai_nguoi_dung?: boolean
    ma_nhom?: boolean
    created_at?: boolean
    updated_at?: boolean
    dat_ve?: boolean | nguoi_dung$dat_veArgs<ExtArgs>
    _count?: boolean | Nguoi_dungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nguoi_dung"]>



  export type nguoi_dungSelectScalar = {
    tai_khoan?: boolean
    ho_ten?: boolean
    email?: boolean
    so_dt?: boolean
    mat_khau?: boolean
    loai_nguoi_dung?: boolean
    ma_nhom?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type nguoi_dungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tai_khoan" | "ho_ten" | "email" | "so_dt" | "mat_khau" | "loai_nguoi_dung" | "ma_nhom" | "created_at" | "updated_at", ExtArgs["result"]["nguoi_dung"]>
  export type nguoi_dungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dat_ve?: boolean | nguoi_dung$dat_veArgs<ExtArgs>
    _count?: boolean | Nguoi_dungCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $nguoi_dungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nguoi_dung"
    objects: {
      dat_ve: Prisma.$dat_vePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tai_khoan: string
      ho_ten: string
      email: string
      so_dt: string
      mat_khau: string
      loai_nguoi_dung: string
      ma_nhom: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["nguoi_dung"]>
    composites: {}
  }

  type nguoi_dungGetPayload<S extends boolean | null | undefined | nguoi_dungDefaultArgs> = $Result.GetResult<Prisma.$nguoi_dungPayload, S>

  type nguoi_dungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nguoi_dungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nguoi_dungCountAggregateInputType | true
    }

  export interface nguoi_dungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nguoi_dung'], meta: { name: 'nguoi_dung' } }
    /**
     * Find zero or one Nguoi_dung that matches the filter.
     * @param {nguoi_dungFindUniqueArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nguoi_dungFindUniqueArgs>(args: SelectSubset<T, nguoi_dungFindUniqueArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nguoi_dung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nguoi_dungFindUniqueOrThrowArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nguoi_dungFindUniqueOrThrowArgs>(args: SelectSubset<T, nguoi_dungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nguoi_dung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungFindFirstArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nguoi_dungFindFirstArgs>(args?: SelectSubset<T, nguoi_dungFindFirstArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nguoi_dung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungFindFirstOrThrowArgs} args - Arguments to find a Nguoi_dung
     * @example
     * // Get one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nguoi_dungFindFirstOrThrowArgs>(args?: SelectSubset<T, nguoi_dungFindFirstOrThrowArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nguoi_dungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nguoi_dungs
     * const nguoi_dungs = await prisma.nguoi_dung.findMany()
     * 
     * // Get first 10 Nguoi_dungs
     * const nguoi_dungs = await prisma.nguoi_dung.findMany({ take: 10 })
     * 
     * // Only select the `tai_khoan`
     * const nguoi_dungWithTai_khoanOnly = await prisma.nguoi_dung.findMany({ select: { tai_khoan: true } })
     * 
     */
    findMany<T extends nguoi_dungFindManyArgs>(args?: SelectSubset<T, nguoi_dungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nguoi_dung.
     * @param {nguoi_dungCreateArgs} args - Arguments to create a Nguoi_dung.
     * @example
     * // Create one Nguoi_dung
     * const Nguoi_dung = await prisma.nguoi_dung.create({
     *   data: {
     *     // ... data to create a Nguoi_dung
     *   }
     * })
     * 
     */
    create<T extends nguoi_dungCreateArgs>(args: SelectSubset<T, nguoi_dungCreateArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nguoi_dungs.
     * @param {nguoi_dungCreateManyArgs} args - Arguments to create many Nguoi_dungs.
     * @example
     * // Create many Nguoi_dungs
     * const nguoi_dung = await prisma.nguoi_dung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nguoi_dungCreateManyArgs>(args?: SelectSubset<T, nguoi_dungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nguoi_dung.
     * @param {nguoi_dungDeleteArgs} args - Arguments to delete one Nguoi_dung.
     * @example
     * // Delete one Nguoi_dung
     * const Nguoi_dung = await prisma.nguoi_dung.delete({
     *   where: {
     *     // ... filter to delete one Nguoi_dung
     *   }
     * })
     * 
     */
    delete<T extends nguoi_dungDeleteArgs>(args: SelectSubset<T, nguoi_dungDeleteArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nguoi_dung.
     * @param {nguoi_dungUpdateArgs} args - Arguments to update one Nguoi_dung.
     * @example
     * // Update one Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nguoi_dungUpdateArgs>(args: SelectSubset<T, nguoi_dungUpdateArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nguoi_dungs.
     * @param {nguoi_dungDeleteManyArgs} args - Arguments to filter Nguoi_dungs to delete.
     * @example
     * // Delete a few Nguoi_dungs
     * const { count } = await prisma.nguoi_dung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nguoi_dungDeleteManyArgs>(args?: SelectSubset<T, nguoi_dungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nguoi_dungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nguoi_dungs
     * const nguoi_dung = await prisma.nguoi_dung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nguoi_dungUpdateManyArgs>(args: SelectSubset<T, nguoi_dungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nguoi_dung.
     * @param {nguoi_dungUpsertArgs} args - Arguments to update or create a Nguoi_dung.
     * @example
     * // Update or create a Nguoi_dung
     * const nguoi_dung = await prisma.nguoi_dung.upsert({
     *   create: {
     *     // ... data to create a Nguoi_dung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nguoi_dung we want to update
     *   }
     * })
     */
    upsert<T extends nguoi_dungUpsertArgs>(args: SelectSubset<T, nguoi_dungUpsertArgs<ExtArgs>>): Prisma__nguoi_dungClient<$Result.GetResult<Prisma.$nguoi_dungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nguoi_dungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungCountArgs} args - Arguments to filter Nguoi_dungs to count.
     * @example
     * // Count the number of Nguoi_dungs
     * const count = await prisma.nguoi_dung.count({
     *   where: {
     *     // ... the filter for the Nguoi_dungs we want to count
     *   }
     * })
    **/
    count<T extends nguoi_dungCountArgs>(
      args?: Subset<T, nguoi_dungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nguoi_dungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nguoi_dung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nguoi_dungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Nguoi_dungAggregateArgs>(args: Subset<T, Nguoi_dungAggregateArgs>): Prisma.PrismaPromise<GetNguoi_dungAggregateType<T>>

    /**
     * Group by Nguoi_dung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nguoi_dungGroupByArgs} args - Group by arguments.
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
      T extends nguoi_dungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nguoi_dungGroupByArgs['orderBy'] }
        : { orderBy?: nguoi_dungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nguoi_dungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNguoi_dungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nguoi_dung model
   */
  readonly fields: nguoi_dungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nguoi_dung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nguoi_dungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dat_ve<T extends nguoi_dung$dat_veArgs<ExtArgs> = {}>(args?: Subset<T, nguoi_dung$dat_veArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dat_vePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the nguoi_dung model
   */
  interface nguoi_dungFieldRefs {
    readonly tai_khoan: FieldRef<"nguoi_dung", 'String'>
    readonly ho_ten: FieldRef<"nguoi_dung", 'String'>
    readonly email: FieldRef<"nguoi_dung", 'String'>
    readonly so_dt: FieldRef<"nguoi_dung", 'String'>
    readonly mat_khau: FieldRef<"nguoi_dung", 'String'>
    readonly loai_nguoi_dung: FieldRef<"nguoi_dung", 'String'>
    readonly ma_nhom: FieldRef<"nguoi_dung", 'String'>
    readonly created_at: FieldRef<"nguoi_dung", 'DateTime'>
    readonly updated_at: FieldRef<"nguoi_dung", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nguoi_dung findUnique
   */
  export type nguoi_dungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung findUniqueOrThrow
   */
  export type nguoi_dungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung findFirst
   */
  export type nguoi_dungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nguoi_dungs.
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nguoi_dungs.
     */
    distinct?: Nguoi_dungScalarFieldEnum | Nguoi_dungScalarFieldEnum[]
  }

  /**
   * nguoi_dung findFirstOrThrow
   */
  export type nguoi_dungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dung to fetch.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nguoi_dungs.
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nguoi_dungs.
     */
    distinct?: Nguoi_dungScalarFieldEnum | Nguoi_dungScalarFieldEnum[]
  }

  /**
   * nguoi_dung findMany
   */
  export type nguoi_dungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter, which nguoi_dungs to fetch.
     */
    where?: nguoi_dungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nguoi_dungs to fetch.
     */
    orderBy?: nguoi_dungOrderByWithRelationInput | nguoi_dungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nguoi_dungs.
     */
    cursor?: nguoi_dungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nguoi_dungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nguoi_dungs.
     */
    skip?: number
    distinct?: Nguoi_dungScalarFieldEnum | Nguoi_dungScalarFieldEnum[]
  }

  /**
   * nguoi_dung create
   */
  export type nguoi_dungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * The data needed to create a nguoi_dung.
     */
    data: XOR<nguoi_dungCreateInput, nguoi_dungUncheckedCreateInput>
  }

  /**
   * nguoi_dung createMany
   */
  export type nguoi_dungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nguoi_dungs.
     */
    data: nguoi_dungCreateManyInput | nguoi_dungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nguoi_dung update
   */
  export type nguoi_dungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * The data needed to update a nguoi_dung.
     */
    data: XOR<nguoi_dungUpdateInput, nguoi_dungUncheckedUpdateInput>
    /**
     * Choose, which nguoi_dung to update.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung updateMany
   */
  export type nguoi_dungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nguoi_dungs.
     */
    data: XOR<nguoi_dungUpdateManyMutationInput, nguoi_dungUncheckedUpdateManyInput>
    /**
     * Filter which nguoi_dungs to update
     */
    where?: nguoi_dungWhereInput
    /**
     * Limit how many nguoi_dungs to update.
     */
    limit?: number
  }

  /**
   * nguoi_dung upsert
   */
  export type nguoi_dungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * The filter to search for the nguoi_dung to update in case it exists.
     */
    where: nguoi_dungWhereUniqueInput
    /**
     * In case the nguoi_dung found by the `where` argument doesn't exist, create a new nguoi_dung with this data.
     */
    create: XOR<nguoi_dungCreateInput, nguoi_dungUncheckedCreateInput>
    /**
     * In case the nguoi_dung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nguoi_dungUpdateInput, nguoi_dungUncheckedUpdateInput>
  }

  /**
   * nguoi_dung delete
   */
  export type nguoi_dungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
    /**
     * Filter which nguoi_dung to delete.
     */
    where: nguoi_dungWhereUniqueInput
  }

  /**
   * nguoi_dung deleteMany
   */
  export type nguoi_dungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nguoi_dungs to delete
     */
    where?: nguoi_dungWhereInput
    /**
     * Limit how many nguoi_dungs to delete.
     */
    limit?: number
  }

  /**
   * nguoi_dung.dat_ve
   */
  export type nguoi_dung$dat_veArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dat_ve
     */
    select?: dat_veSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dat_ve
     */
    omit?: dat_veOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dat_veInclude<ExtArgs> | null
    where?: dat_veWhereInput
    orderBy?: dat_veOrderByWithRelationInput | dat_veOrderByWithRelationInput[]
    cursor?: dat_veWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dat_veScalarFieldEnum | Dat_veScalarFieldEnum[]
  }

  /**
   * nguoi_dung without action
   */
  export type nguoi_dungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nguoi_dung
     */
    select?: nguoi_dungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nguoi_dung
     */
    omit?: nguoi_dungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nguoi_dungInclude<ExtArgs> | null
  }


  /**
   * Model phim
   */

  export type AggregatePhim = {
    _count: PhimCountAggregateOutputType | null
    _avg: PhimAvgAggregateOutputType | null
    _sum: PhimSumAggregateOutputType | null
    _min: PhimMinAggregateOutputType | null
    _max: PhimMaxAggregateOutputType | null
  }

  export type PhimAvgAggregateOutputType = {
    ma_phim: number | null
    danh_gia: number | null
  }

  export type PhimSumAggregateOutputType = {
    ma_phim: number | null
    danh_gia: number | null
  }

  export type PhimMinAggregateOutputType = {
    ma_phim: number | null
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
    ma_nhom: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    deleted_at: Date | null
    deleted_by: string | null
    is_deleted: boolean | null
  }

  export type PhimMaxAggregateOutputType = {
    ma_phim: number | null
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
    ma_nhom: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    deleted_at: Date | null
    deleted_by: string | null
    is_deleted: boolean | null
  }

  export type PhimCountAggregateOutputType = {
    ma_phim: number
    ten_phim: number
    trailer: number
    hinh_anh: number
    mo_ta: number
    ngay_khoi_chieu: number
    danh_gia: number
    hot: number
    dang_chieu: number
    sap_chieu: number
    ma_nhom: number
    created_at: number
    updated_at: number
    created_by: number
    deleted_at: number
    deleted_by: number
    is_deleted: number
    _all: number
  }


  export type PhimAvgAggregateInputType = {
    ma_phim?: true
    danh_gia?: true
  }

  export type PhimSumAggregateInputType = {
    ma_phim?: true
    danh_gia?: true
  }

  export type PhimMinAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
    ma_nhom?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    deleted_at?: true
    deleted_by?: true
    is_deleted?: true
  }

  export type PhimMaxAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
    ma_nhom?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    deleted_at?: true
    deleted_by?: true
    is_deleted?: true
  }

  export type PhimCountAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
    ma_nhom?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    deleted_at?: true
    deleted_by?: true
    is_deleted?: true
    _all?: true
  }

  export type PhimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phim to aggregate.
     */
    where?: phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phims to fetch.
     */
    orderBy?: phimOrderByWithRelationInput | phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phims
    **/
    _count?: true | PhimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhimMaxAggregateInputType
  }

  export type GetPhimAggregateType<T extends PhimAggregateArgs> = {
        [P in keyof T & keyof AggregatePhim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhim[P]>
      : GetScalarType<T[P], AggregatePhim[P]>
  }




  export type phimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phimWhereInput
    orderBy?: phimOrderByWithAggregationInput | phimOrderByWithAggregationInput[]
    by: PhimScalarFieldEnum[] | PhimScalarFieldEnum
    having?: phimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhimCountAggregateInputType | true
    _avg?: PhimAvgAggregateInputType
    _sum?: PhimSumAggregateInputType
    _min?: PhimMinAggregateInputType
    _max?: PhimMaxAggregateInputType
  }

  export type PhimGroupByOutputType = {
    ma_phim: number
    ten_phim: string
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number
    hot: boolean
    dang_chieu: boolean
    sap_chieu: boolean
    ma_nhom: string
    created_at: Date
    updated_at: Date
    created_by: string | null
    deleted_at: Date | null
    deleted_by: string | null
    is_deleted: boolean
    _count: PhimCountAggregateOutputType | null
    _avg: PhimAvgAggregateOutputType | null
    _sum: PhimSumAggregateOutputType | null
    _min: PhimMinAggregateOutputType | null
    _max: PhimMaxAggregateOutputType | null
  }

  type GetPhimGroupByPayload<T extends phimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhimGroupByOutputType[P]>
            : GetScalarType<T[P], PhimGroupByOutputType[P]>
        }
      >
    >


  export type phimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_phim?: boolean
    ten_phim?: boolean
    trailer?: boolean
    hinh_anh?: boolean
    mo_ta?: boolean
    ngay_khoi_chieu?: boolean
    danh_gia?: boolean
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    deleted_at?: boolean
    deleted_by?: boolean
    is_deleted?: boolean
    banner?: boolean | phim$bannerArgs<ExtArgs>
    lich_chieu?: boolean | phim$lich_chieuArgs<ExtArgs>
    _count?: boolean | PhimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phim"]>



  export type phimSelectScalar = {
    ma_phim?: boolean
    ten_phim?: boolean
    trailer?: boolean
    hinh_anh?: boolean
    mo_ta?: boolean
    ngay_khoi_chieu?: boolean
    danh_gia?: boolean
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    deleted_at?: boolean
    deleted_by?: boolean
    is_deleted?: boolean
  }

  export type phimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_phim" | "ten_phim" | "trailer" | "hinh_anh" | "mo_ta" | "ngay_khoi_chieu" | "danh_gia" | "hot" | "dang_chieu" | "sap_chieu" | "ma_nhom" | "created_at" | "updated_at" | "created_by" | "deleted_at" | "deleted_by" | "is_deleted", ExtArgs["result"]["phim"]>
  export type phimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banner?: boolean | phim$bannerArgs<ExtArgs>
    lich_chieu?: boolean | phim$lich_chieuArgs<ExtArgs>
    _count?: boolean | PhimCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $phimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "phim"
    objects: {
      banner: Prisma.$bannerPayload<ExtArgs>[]
      lich_chieu: Prisma.$lich_chieuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_phim: number
      ten_phim: string
      trailer: string | null
      hinh_anh: string | null
      mo_ta: string | null
      ngay_khoi_chieu: Date | null
      danh_gia: number
      hot: boolean
      dang_chieu: boolean
      sap_chieu: boolean
      ma_nhom: string
      created_at: Date
      updated_at: Date
      created_by: string | null
      deleted_at: Date | null
      deleted_by: string | null
      is_deleted: boolean
    }, ExtArgs["result"]["phim"]>
    composites: {}
  }

  type phimGetPayload<S extends boolean | null | undefined | phimDefaultArgs> = $Result.GetResult<Prisma.$phimPayload, S>

  type phimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<phimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhimCountAggregateInputType | true
    }

  export interface phimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['phim'], meta: { name: 'phim' } }
    /**
     * Find zero or one Phim that matches the filter.
     * @param {phimFindUniqueArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends phimFindUniqueArgs>(args: SelectSubset<T, phimFindUniqueArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {phimFindUniqueOrThrowArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends phimFindUniqueOrThrowArgs>(args: SelectSubset<T, phimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phimFindFirstArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends phimFindFirstArgs>(args?: SelectSubset<T, phimFindFirstArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phimFindFirstOrThrowArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends phimFindFirstOrThrowArgs>(args?: SelectSubset<T, phimFindFirstOrThrowArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phims
     * const phims = await prisma.phim.findMany()
     * 
     * // Get first 10 Phims
     * const phims = await prisma.phim.findMany({ take: 10 })
     * 
     * // Only select the `ma_phim`
     * const phimWithMa_phimOnly = await prisma.phim.findMany({ select: { ma_phim: true } })
     * 
     */
    findMany<T extends phimFindManyArgs>(args?: SelectSubset<T, phimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phim.
     * @param {phimCreateArgs} args - Arguments to create a Phim.
     * @example
     * // Create one Phim
     * const Phim = await prisma.phim.create({
     *   data: {
     *     // ... data to create a Phim
     *   }
     * })
     * 
     */
    create<T extends phimCreateArgs>(args: SelectSubset<T, phimCreateArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phims.
     * @param {phimCreateManyArgs} args - Arguments to create many Phims.
     * @example
     * // Create many Phims
     * const phim = await prisma.phim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends phimCreateManyArgs>(args?: SelectSubset<T, phimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phim.
     * @param {phimDeleteArgs} args - Arguments to delete one Phim.
     * @example
     * // Delete one Phim
     * const Phim = await prisma.phim.delete({
     *   where: {
     *     // ... filter to delete one Phim
     *   }
     * })
     * 
     */
    delete<T extends phimDeleteArgs>(args: SelectSubset<T, phimDeleteArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phim.
     * @param {phimUpdateArgs} args - Arguments to update one Phim.
     * @example
     * // Update one Phim
     * const phim = await prisma.phim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends phimUpdateArgs>(args: SelectSubset<T, phimUpdateArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phims.
     * @param {phimDeleteManyArgs} args - Arguments to filter Phims to delete.
     * @example
     * // Delete a few Phims
     * const { count } = await prisma.phim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends phimDeleteManyArgs>(args?: SelectSubset<T, phimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phims
     * const phim = await prisma.phim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends phimUpdateManyArgs>(args: SelectSubset<T, phimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phim.
     * @param {phimUpsertArgs} args - Arguments to update or create a Phim.
     * @example
     * // Update or create a Phim
     * const phim = await prisma.phim.upsert({
     *   create: {
     *     // ... data to create a Phim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phim we want to update
     *   }
     * })
     */
    upsert<T extends phimUpsertArgs>(args: SelectSubset<T, phimUpsertArgs<ExtArgs>>): Prisma__phimClient<$Result.GetResult<Prisma.$phimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phimCountArgs} args - Arguments to filter Phims to count.
     * @example
     * // Count the number of Phims
     * const count = await prisma.phim.count({
     *   where: {
     *     // ... the filter for the Phims we want to count
     *   }
     * })
    **/
    count<T extends phimCountArgs>(
      args?: Subset<T, phimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhimAggregateArgs>(args: Subset<T, PhimAggregateArgs>): Prisma.PrismaPromise<GetPhimAggregateType<T>>

    /**
     * Group by Phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phimGroupByArgs} args - Group by arguments.
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
      T extends phimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: phimGroupByArgs['orderBy'] }
        : { orderBy?: phimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, phimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the phim model
   */
  readonly fields: phimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for phim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__phimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banner<T extends phim$bannerArgs<ExtArgs> = {}>(args?: Subset<T, phim$bannerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lich_chieu<T extends phim$lich_chieuArgs<ExtArgs> = {}>(args?: Subset<T, phim$lich_chieuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the phim model
   */
  interface phimFieldRefs {
    readonly ma_phim: FieldRef<"phim", 'Int'>
    readonly ten_phim: FieldRef<"phim", 'String'>
    readonly trailer: FieldRef<"phim", 'String'>
    readonly hinh_anh: FieldRef<"phim", 'String'>
    readonly mo_ta: FieldRef<"phim", 'String'>
    readonly ngay_khoi_chieu: FieldRef<"phim", 'DateTime'>
    readonly danh_gia: FieldRef<"phim", 'Int'>
    readonly hot: FieldRef<"phim", 'Boolean'>
    readonly dang_chieu: FieldRef<"phim", 'Boolean'>
    readonly sap_chieu: FieldRef<"phim", 'Boolean'>
    readonly ma_nhom: FieldRef<"phim", 'String'>
    readonly created_at: FieldRef<"phim", 'DateTime'>
    readonly updated_at: FieldRef<"phim", 'DateTime'>
    readonly created_by: FieldRef<"phim", 'String'>
    readonly deleted_at: FieldRef<"phim", 'DateTime'>
    readonly deleted_by: FieldRef<"phim", 'String'>
    readonly is_deleted: FieldRef<"phim", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * phim findUnique
   */
  export type phimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * Filter, which phim to fetch.
     */
    where: phimWhereUniqueInput
  }

  /**
   * phim findUniqueOrThrow
   */
  export type phimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * Filter, which phim to fetch.
     */
    where: phimWhereUniqueInput
  }

  /**
   * phim findFirst
   */
  export type phimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * Filter, which phim to fetch.
     */
    where?: phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phims to fetch.
     */
    orderBy?: phimOrderByWithRelationInput | phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phims.
     */
    cursor?: phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phims.
     */
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * phim findFirstOrThrow
   */
  export type phimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * Filter, which phim to fetch.
     */
    where?: phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phims to fetch.
     */
    orderBy?: phimOrderByWithRelationInput | phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phims.
     */
    cursor?: phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phims.
     */
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * phim findMany
   */
  export type phimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * Filter, which phims to fetch.
     */
    where?: phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phims to fetch.
     */
    orderBy?: phimOrderByWithRelationInput | phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phims.
     */
    cursor?: phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phims.
     */
    skip?: number
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * phim create
   */
  export type phimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * The data needed to create a phim.
     */
    data: XOR<phimCreateInput, phimUncheckedCreateInput>
  }

  /**
   * phim createMany
   */
  export type phimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many phims.
     */
    data: phimCreateManyInput | phimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * phim update
   */
  export type phimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * The data needed to update a phim.
     */
    data: XOR<phimUpdateInput, phimUncheckedUpdateInput>
    /**
     * Choose, which phim to update.
     */
    where: phimWhereUniqueInput
  }

  /**
   * phim updateMany
   */
  export type phimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update phims.
     */
    data: XOR<phimUpdateManyMutationInput, phimUncheckedUpdateManyInput>
    /**
     * Filter which phims to update
     */
    where?: phimWhereInput
    /**
     * Limit how many phims to update.
     */
    limit?: number
  }

  /**
   * phim upsert
   */
  export type phimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * The filter to search for the phim to update in case it exists.
     */
    where: phimWhereUniqueInput
    /**
     * In case the phim found by the `where` argument doesn't exist, create a new phim with this data.
     */
    create: XOR<phimCreateInput, phimUncheckedCreateInput>
    /**
     * In case the phim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phimUpdateInput, phimUncheckedUpdateInput>
  }

  /**
   * phim delete
   */
  export type phimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
    /**
     * Filter which phim to delete.
     */
    where: phimWhereUniqueInput
  }

  /**
   * phim deleteMany
   */
  export type phimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phims to delete
     */
    where?: phimWhereInput
    /**
     * Limit how many phims to delete.
     */
    limit?: number
  }

  /**
   * phim.banner
   */
  export type phim$bannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bannerInclude<ExtArgs> | null
    where?: bannerWhereInput
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    cursor?: bannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * phim.lich_chieu
   */
  export type phim$lich_chieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    where?: lich_chieuWhereInput
    orderBy?: lich_chieuOrderByWithRelationInput | lich_chieuOrderByWithRelationInput[]
    cursor?: lich_chieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lich_chieuScalarFieldEnum | Lich_chieuScalarFieldEnum[]
  }

  /**
   * phim without action
   */
  export type phimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phim
     */
    select?: phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phim
     */
    omit?: phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phimInclude<ExtArgs> | null
  }


  /**
   * Model rap_phim
   */

  export type AggregateRap_phim = {
    _count: Rap_phimCountAggregateOutputType | null
    _avg: Rap_phimAvgAggregateOutputType | null
    _sum: Rap_phimSumAggregateOutputType | null
    _min: Rap_phimMinAggregateOutputType | null
    _max: Rap_phimMaxAggregateOutputType | null
  }

  export type Rap_phimAvgAggregateOutputType = {
    ma_rap: number | null
  }

  export type Rap_phimSumAggregateOutputType = {
    ma_rap: number | null
  }

  export type Rap_phimMinAggregateOutputType = {
    ma_rap: number | null
    ten_rap: string | null
    ma_cum_rap: string | null
  }

  export type Rap_phimMaxAggregateOutputType = {
    ma_rap: number | null
    ten_rap: string | null
    ma_cum_rap: string | null
  }

  export type Rap_phimCountAggregateOutputType = {
    ma_rap: number
    ten_rap: number
    ma_cum_rap: number
    _all: number
  }


  export type Rap_phimAvgAggregateInputType = {
    ma_rap?: true
  }

  export type Rap_phimSumAggregateInputType = {
    ma_rap?: true
  }

  export type Rap_phimMinAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
  }

  export type Rap_phimMaxAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
  }

  export type Rap_phimCountAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
    _all?: true
  }

  export type Rap_phimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rap_phim to aggregate.
     */
    where?: rap_phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_phims to fetch.
     */
    orderBy?: rap_phimOrderByWithRelationInput | rap_phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rap_phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rap_phims
    **/
    _count?: true | Rap_phimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rap_phimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rap_phimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rap_phimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rap_phimMaxAggregateInputType
  }

  export type GetRap_phimAggregateType<T extends Rap_phimAggregateArgs> = {
        [P in keyof T & keyof AggregateRap_phim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRap_phim[P]>
      : GetScalarType<T[P], AggregateRap_phim[P]>
  }




  export type rap_phimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rap_phimWhereInput
    orderBy?: rap_phimOrderByWithAggregationInput | rap_phimOrderByWithAggregationInput[]
    by: Rap_phimScalarFieldEnum[] | Rap_phimScalarFieldEnum
    having?: rap_phimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rap_phimCountAggregateInputType | true
    _avg?: Rap_phimAvgAggregateInputType
    _sum?: Rap_phimSumAggregateInputType
    _min?: Rap_phimMinAggregateInputType
    _max?: Rap_phimMaxAggregateInputType
  }

  export type Rap_phimGroupByOutputType = {
    ma_rap: number
    ten_rap: string
    ma_cum_rap: string
    _count: Rap_phimCountAggregateOutputType | null
    _avg: Rap_phimAvgAggregateOutputType | null
    _sum: Rap_phimSumAggregateOutputType | null
    _min: Rap_phimMinAggregateOutputType | null
    _max: Rap_phimMaxAggregateOutputType | null
  }

  type GetRap_phimGroupByPayload<T extends rap_phimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rap_phimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rap_phimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rap_phimGroupByOutputType[P]>
            : GetScalarType<T[P], Rap_phimGroupByOutputType[P]>
        }
      >
    >


  export type rap_phimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_rap?: boolean
    ten_rap?: boolean
    ma_cum_rap?: boolean
    ghe?: boolean | rap_phim$gheArgs<ExtArgs>
    lich_chieu?: boolean | rap_phim$lich_chieuArgs<ExtArgs>
    cum_rap?: boolean | cum_rapDefaultArgs<ExtArgs>
    _count?: boolean | Rap_phimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rap_phim"]>



  export type rap_phimSelectScalar = {
    ma_rap?: boolean
    ten_rap?: boolean
    ma_cum_rap?: boolean
  }

  export type rap_phimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_rap" | "ten_rap" | "ma_cum_rap", ExtArgs["result"]["rap_phim"]>
  export type rap_phimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ghe?: boolean | rap_phim$gheArgs<ExtArgs>
    lich_chieu?: boolean | rap_phim$lich_chieuArgs<ExtArgs>
    cum_rap?: boolean | cum_rapDefaultArgs<ExtArgs>
    _count?: boolean | Rap_phimCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rap_phimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rap_phim"
    objects: {
      ghe: Prisma.$ghePayload<ExtArgs>[]
      lich_chieu: Prisma.$lich_chieuPayload<ExtArgs>[]
      cum_rap: Prisma.$cum_rapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_rap: number
      ten_rap: string
      ma_cum_rap: string
    }, ExtArgs["result"]["rap_phim"]>
    composites: {}
  }

  type rap_phimGetPayload<S extends boolean | null | undefined | rap_phimDefaultArgs> = $Result.GetResult<Prisma.$rap_phimPayload, S>

  type rap_phimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rap_phimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rap_phimCountAggregateInputType | true
    }

  export interface rap_phimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rap_phim'], meta: { name: 'rap_phim' } }
    /**
     * Find zero or one Rap_phim that matches the filter.
     * @param {rap_phimFindUniqueArgs} args - Arguments to find a Rap_phim
     * @example
     * // Get one Rap_phim
     * const rap_phim = await prisma.rap_phim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rap_phimFindUniqueArgs>(args: SelectSubset<T, rap_phimFindUniqueArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rap_phim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rap_phimFindUniqueOrThrowArgs} args - Arguments to find a Rap_phim
     * @example
     * // Get one Rap_phim
     * const rap_phim = await prisma.rap_phim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rap_phimFindUniqueOrThrowArgs>(args: SelectSubset<T, rap_phimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rap_phim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_phimFindFirstArgs} args - Arguments to find a Rap_phim
     * @example
     * // Get one Rap_phim
     * const rap_phim = await prisma.rap_phim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rap_phimFindFirstArgs>(args?: SelectSubset<T, rap_phimFindFirstArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rap_phim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_phimFindFirstOrThrowArgs} args - Arguments to find a Rap_phim
     * @example
     * // Get one Rap_phim
     * const rap_phim = await prisma.rap_phim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rap_phimFindFirstOrThrowArgs>(args?: SelectSubset<T, rap_phimFindFirstOrThrowArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rap_phims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_phimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rap_phims
     * const rap_phims = await prisma.rap_phim.findMany()
     * 
     * // Get first 10 Rap_phims
     * const rap_phims = await prisma.rap_phim.findMany({ take: 10 })
     * 
     * // Only select the `ma_rap`
     * const rap_phimWithMa_rapOnly = await prisma.rap_phim.findMany({ select: { ma_rap: true } })
     * 
     */
    findMany<T extends rap_phimFindManyArgs>(args?: SelectSubset<T, rap_phimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rap_phim.
     * @param {rap_phimCreateArgs} args - Arguments to create a Rap_phim.
     * @example
     * // Create one Rap_phim
     * const Rap_phim = await prisma.rap_phim.create({
     *   data: {
     *     // ... data to create a Rap_phim
     *   }
     * })
     * 
     */
    create<T extends rap_phimCreateArgs>(args: SelectSubset<T, rap_phimCreateArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rap_phims.
     * @param {rap_phimCreateManyArgs} args - Arguments to create many Rap_phims.
     * @example
     * // Create many Rap_phims
     * const rap_phim = await prisma.rap_phim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rap_phimCreateManyArgs>(args?: SelectSubset<T, rap_phimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rap_phim.
     * @param {rap_phimDeleteArgs} args - Arguments to delete one Rap_phim.
     * @example
     * // Delete one Rap_phim
     * const Rap_phim = await prisma.rap_phim.delete({
     *   where: {
     *     // ... filter to delete one Rap_phim
     *   }
     * })
     * 
     */
    delete<T extends rap_phimDeleteArgs>(args: SelectSubset<T, rap_phimDeleteArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rap_phim.
     * @param {rap_phimUpdateArgs} args - Arguments to update one Rap_phim.
     * @example
     * // Update one Rap_phim
     * const rap_phim = await prisma.rap_phim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rap_phimUpdateArgs>(args: SelectSubset<T, rap_phimUpdateArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rap_phims.
     * @param {rap_phimDeleteManyArgs} args - Arguments to filter Rap_phims to delete.
     * @example
     * // Delete a few Rap_phims
     * const { count } = await prisma.rap_phim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rap_phimDeleteManyArgs>(args?: SelectSubset<T, rap_phimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rap_phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_phimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rap_phims
     * const rap_phim = await prisma.rap_phim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rap_phimUpdateManyArgs>(args: SelectSubset<T, rap_phimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rap_phim.
     * @param {rap_phimUpsertArgs} args - Arguments to update or create a Rap_phim.
     * @example
     * // Update or create a Rap_phim
     * const rap_phim = await prisma.rap_phim.upsert({
     *   create: {
     *     // ... data to create a Rap_phim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rap_phim we want to update
     *   }
     * })
     */
    upsert<T extends rap_phimUpsertArgs>(args: SelectSubset<T, rap_phimUpsertArgs<ExtArgs>>): Prisma__rap_phimClient<$Result.GetResult<Prisma.$rap_phimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rap_phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_phimCountArgs} args - Arguments to filter Rap_phims to count.
     * @example
     * // Count the number of Rap_phims
     * const count = await prisma.rap_phim.count({
     *   where: {
     *     // ... the filter for the Rap_phims we want to count
     *   }
     * })
    **/
    count<T extends rap_phimCountArgs>(
      args?: Subset<T, rap_phimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rap_phimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rap_phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rap_phimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rap_phimAggregateArgs>(args: Subset<T, Rap_phimAggregateArgs>): Prisma.PrismaPromise<GetRap_phimAggregateType<T>>

    /**
     * Group by Rap_phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_phimGroupByArgs} args - Group by arguments.
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
      T extends rap_phimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rap_phimGroupByArgs['orderBy'] }
        : { orderBy?: rap_phimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rap_phimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRap_phimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rap_phim model
   */
  readonly fields: rap_phimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rap_phim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rap_phimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ghe<T extends rap_phim$gheArgs<ExtArgs> = {}>(args?: Subset<T, rap_phim$gheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ghePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lich_chieu<T extends rap_phim$lich_chieuArgs<ExtArgs> = {}>(args?: Subset<T, rap_phim$lich_chieuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lich_chieuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cum_rap<T extends cum_rapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cum_rapDefaultArgs<ExtArgs>>): Prisma__cum_rapClient<$Result.GetResult<Prisma.$cum_rapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rap_phim model
   */
  interface rap_phimFieldRefs {
    readonly ma_rap: FieldRef<"rap_phim", 'Int'>
    readonly ten_rap: FieldRef<"rap_phim", 'String'>
    readonly ma_cum_rap: FieldRef<"rap_phim", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rap_phim findUnique
   */
  export type rap_phimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * Filter, which rap_phim to fetch.
     */
    where: rap_phimWhereUniqueInput
  }

  /**
   * rap_phim findUniqueOrThrow
   */
  export type rap_phimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * Filter, which rap_phim to fetch.
     */
    where: rap_phimWhereUniqueInput
  }

  /**
   * rap_phim findFirst
   */
  export type rap_phimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * Filter, which rap_phim to fetch.
     */
    where?: rap_phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_phims to fetch.
     */
    orderBy?: rap_phimOrderByWithRelationInput | rap_phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rap_phims.
     */
    cursor?: rap_phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rap_phims.
     */
    distinct?: Rap_phimScalarFieldEnum | Rap_phimScalarFieldEnum[]
  }

  /**
   * rap_phim findFirstOrThrow
   */
  export type rap_phimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * Filter, which rap_phim to fetch.
     */
    where?: rap_phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_phims to fetch.
     */
    orderBy?: rap_phimOrderByWithRelationInput | rap_phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rap_phims.
     */
    cursor?: rap_phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rap_phims.
     */
    distinct?: Rap_phimScalarFieldEnum | Rap_phimScalarFieldEnum[]
  }

  /**
   * rap_phim findMany
   */
  export type rap_phimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * Filter, which rap_phims to fetch.
     */
    where?: rap_phimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_phims to fetch.
     */
    orderBy?: rap_phimOrderByWithRelationInput | rap_phimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rap_phims.
     */
    cursor?: rap_phimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_phims.
     */
    skip?: number
    distinct?: Rap_phimScalarFieldEnum | Rap_phimScalarFieldEnum[]
  }

  /**
   * rap_phim create
   */
  export type rap_phimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * The data needed to create a rap_phim.
     */
    data: XOR<rap_phimCreateInput, rap_phimUncheckedCreateInput>
  }

  /**
   * rap_phim createMany
   */
  export type rap_phimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rap_phims.
     */
    data: rap_phimCreateManyInput | rap_phimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rap_phim update
   */
  export type rap_phimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * The data needed to update a rap_phim.
     */
    data: XOR<rap_phimUpdateInput, rap_phimUncheckedUpdateInput>
    /**
     * Choose, which rap_phim to update.
     */
    where: rap_phimWhereUniqueInput
  }

  /**
   * rap_phim updateMany
   */
  export type rap_phimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rap_phims.
     */
    data: XOR<rap_phimUpdateManyMutationInput, rap_phimUncheckedUpdateManyInput>
    /**
     * Filter which rap_phims to update
     */
    where?: rap_phimWhereInput
    /**
     * Limit how many rap_phims to update.
     */
    limit?: number
  }

  /**
   * rap_phim upsert
   */
  export type rap_phimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * The filter to search for the rap_phim to update in case it exists.
     */
    where: rap_phimWhereUniqueInput
    /**
     * In case the rap_phim found by the `where` argument doesn't exist, create a new rap_phim with this data.
     */
    create: XOR<rap_phimCreateInput, rap_phimUncheckedCreateInput>
    /**
     * In case the rap_phim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rap_phimUpdateInput, rap_phimUncheckedUpdateInput>
  }

  /**
   * rap_phim delete
   */
  export type rap_phimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
    /**
     * Filter which rap_phim to delete.
     */
    where: rap_phimWhereUniqueInput
  }

  /**
   * rap_phim deleteMany
   */
  export type rap_phimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rap_phims to delete
     */
    where?: rap_phimWhereInput
    /**
     * Limit how many rap_phims to delete.
     */
    limit?: number
  }

  /**
   * rap_phim.ghe
   */
  export type rap_phim$gheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ghe
     */
    select?: gheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ghe
     */
    omit?: gheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gheInclude<ExtArgs> | null
    where?: gheWhereInput
    orderBy?: gheOrderByWithRelationInput | gheOrderByWithRelationInput[]
    cursor?: gheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * rap_phim.lich_chieu
   */
  export type rap_phim$lich_chieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lich_chieu
     */
    select?: lich_chieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lich_chieu
     */
    omit?: lich_chieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lich_chieuInclude<ExtArgs> | null
    where?: lich_chieuWhereInput
    orderBy?: lich_chieuOrderByWithRelationInput | lich_chieuOrderByWithRelationInput[]
    cursor?: lich_chieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lich_chieuScalarFieldEnum | Lich_chieuScalarFieldEnum[]
  }

  /**
   * rap_phim without action
   */
  export type rap_phimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_phim
     */
    select?: rap_phimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_phim
     */
    omit?: rap_phimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rap_phimInclude<ExtArgs> | null
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


  export const BannerScalarFieldEnum: {
    ma_banner: 'ma_banner',
    ma_phim: 'ma_phim',
    hinh_anh: 'hinh_anh'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const Cum_rapScalarFieldEnum: {
    ma_cum_rap: 'ma_cum_rap',
    ten_cum_rap: 'ten_cum_rap',
    dia_chi: 'dia_chi',
    ma_he_thong_rap: 'ma_he_thong_rap'
  };

  export type Cum_rapScalarFieldEnum = (typeof Cum_rapScalarFieldEnum)[keyof typeof Cum_rapScalarFieldEnum]


  export const Dat_veScalarFieldEnum: {
    id: 'id',
    tai_khoan: 'tai_khoan',
    ma_lich_chieu: 'ma_lich_chieu',
    ma_ghe: 'ma_ghe',
    ngay_dat: 'ngay_dat'
  };

  export type Dat_veScalarFieldEnum = (typeof Dat_veScalarFieldEnum)[keyof typeof Dat_veScalarFieldEnum]


  export const GheScalarFieldEnum: {
    ma_ghe: 'ma_ghe',
    ten_ghe: 'ten_ghe',
    loai_ghe: 'loai_ghe',
    ma_rap: 'ma_rap'
  };

  export type GheScalarFieldEnum = (typeof GheScalarFieldEnum)[keyof typeof GheScalarFieldEnum]


  export const Giao_dichScalarFieldEnum: {
    id: 'id',
    tai_khoan: 'tai_khoan',
    ma_lich_chieu: 'ma_lich_chieu',
    tong_tien: 'tong_tien',
    noi_dung_ck: 'noi_dung_ck',
    ngay_giao_dich: 'ngay_giao_dich'
  };

  export type Giao_dichScalarFieldEnum = (typeof Giao_dichScalarFieldEnum)[keyof typeof Giao_dichScalarFieldEnum]


  export const He_thong_rapScalarFieldEnum: {
    ma_he_thong_rap: 'ma_he_thong_rap',
    ten_he_thong_rap: 'ten_he_thong_rap',
    logo: 'logo'
  };

  export type He_thong_rapScalarFieldEnum = (typeof He_thong_rapScalarFieldEnum)[keyof typeof He_thong_rapScalarFieldEnum]


  export const Lich_chieuScalarFieldEnum: {
    ma_lich_chieu: 'ma_lich_chieu',
    ma_rap: 'ma_rap',
    ma_phim: 'ma_phim',
    ngay_gio_chieu: 'ngay_gio_chieu',
    gia_ve: 'gia_ve'
  };

  export type Lich_chieuScalarFieldEnum = (typeof Lich_chieuScalarFieldEnum)[keyof typeof Lich_chieuScalarFieldEnum]


  export const Nguoi_dungScalarFieldEnum: {
    tai_khoan: 'tai_khoan',
    ho_ten: 'ho_ten',
    email: 'email',
    so_dt: 'so_dt',
    mat_khau: 'mat_khau',
    loai_nguoi_dung: 'loai_nguoi_dung',
    ma_nhom: 'ma_nhom',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Nguoi_dungScalarFieldEnum = (typeof Nguoi_dungScalarFieldEnum)[keyof typeof Nguoi_dungScalarFieldEnum]


  export const PhimScalarFieldEnum: {
    ma_phim: 'ma_phim',
    ten_phim: 'ten_phim',
    trailer: 'trailer',
    hinh_anh: 'hinh_anh',
    mo_ta: 'mo_ta',
    ngay_khoi_chieu: 'ngay_khoi_chieu',
    danh_gia: 'danh_gia',
    hot: 'hot',
    dang_chieu: 'dang_chieu',
    sap_chieu: 'sap_chieu',
    ma_nhom: 'ma_nhom',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    deleted_at: 'deleted_at',
    deleted_by: 'deleted_by',
    is_deleted: 'is_deleted'
  };

  export type PhimScalarFieldEnum = (typeof PhimScalarFieldEnum)[keyof typeof PhimScalarFieldEnum]


  export const Rap_phimScalarFieldEnum: {
    ma_rap: 'ma_rap',
    ten_rap: 'ten_rap',
    ma_cum_rap: 'ma_cum_rap'
  };

  export type Rap_phimScalarFieldEnum = (typeof Rap_phimScalarFieldEnum)[keyof typeof Rap_phimScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const bannerOrderByRelevanceFieldEnum: {
    hinh_anh: 'hinh_anh'
  };

  export type bannerOrderByRelevanceFieldEnum = (typeof bannerOrderByRelevanceFieldEnum)[keyof typeof bannerOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const cum_rapOrderByRelevanceFieldEnum: {
    ma_cum_rap: 'ma_cum_rap',
    ten_cum_rap: 'ten_cum_rap',
    dia_chi: 'dia_chi',
    ma_he_thong_rap: 'ma_he_thong_rap'
  };

  export type cum_rapOrderByRelevanceFieldEnum = (typeof cum_rapOrderByRelevanceFieldEnum)[keyof typeof cum_rapOrderByRelevanceFieldEnum]


  export const dat_veOrderByRelevanceFieldEnum: {
    tai_khoan: 'tai_khoan'
  };

  export type dat_veOrderByRelevanceFieldEnum = (typeof dat_veOrderByRelevanceFieldEnum)[keyof typeof dat_veOrderByRelevanceFieldEnum]


  export const gheOrderByRelevanceFieldEnum: {
    ten_ghe: 'ten_ghe',
    loai_ghe: 'loai_ghe'
  };

  export type gheOrderByRelevanceFieldEnum = (typeof gheOrderByRelevanceFieldEnum)[keyof typeof gheOrderByRelevanceFieldEnum]


  export const giao_dichOrderByRelevanceFieldEnum: {
    tai_khoan: 'tai_khoan',
    noi_dung_ck: 'noi_dung_ck'
  };

  export type giao_dichOrderByRelevanceFieldEnum = (typeof giao_dichOrderByRelevanceFieldEnum)[keyof typeof giao_dichOrderByRelevanceFieldEnum]


  export const he_thong_rapOrderByRelevanceFieldEnum: {
    ma_he_thong_rap: 'ma_he_thong_rap',
    ten_he_thong_rap: 'ten_he_thong_rap',
    logo: 'logo'
  };

  export type he_thong_rapOrderByRelevanceFieldEnum = (typeof he_thong_rapOrderByRelevanceFieldEnum)[keyof typeof he_thong_rapOrderByRelevanceFieldEnum]


  export const nguoi_dungOrderByRelevanceFieldEnum: {
    tai_khoan: 'tai_khoan',
    ho_ten: 'ho_ten',
    email: 'email',
    so_dt: 'so_dt',
    mat_khau: 'mat_khau',
    loai_nguoi_dung: 'loai_nguoi_dung',
    ma_nhom: 'ma_nhom'
  };

  export type nguoi_dungOrderByRelevanceFieldEnum = (typeof nguoi_dungOrderByRelevanceFieldEnum)[keyof typeof nguoi_dungOrderByRelevanceFieldEnum]


  export const phimOrderByRelevanceFieldEnum: {
    ten_phim: 'ten_phim',
    trailer: 'trailer',
    hinh_anh: 'hinh_anh',
    mo_ta: 'mo_ta',
    ma_nhom: 'ma_nhom',
    created_by: 'created_by',
    deleted_by: 'deleted_by'
  };

  export type phimOrderByRelevanceFieldEnum = (typeof phimOrderByRelevanceFieldEnum)[keyof typeof phimOrderByRelevanceFieldEnum]


  export const rap_phimOrderByRelevanceFieldEnum: {
    ten_rap: 'ten_rap',
    ma_cum_rap: 'ma_cum_rap'
  };

  export type rap_phimOrderByRelevanceFieldEnum = (typeof rap_phimOrderByRelevanceFieldEnum)[keyof typeof rap_phimOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type bannerWhereInput = {
    AND?: bannerWhereInput | bannerWhereInput[]
    OR?: bannerWhereInput[]
    NOT?: bannerWhereInput | bannerWhereInput[]
    ma_banner?: IntFilter<"banner"> | number
    ma_phim?: IntFilter<"banner"> | number
    hinh_anh?: StringFilter<"banner"> | string
    phim?: XOR<PhimScalarRelationFilter, phimWhereInput>
  }

  export type bannerOrderByWithRelationInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
    phim?: phimOrderByWithRelationInput
    _relevance?: bannerOrderByRelevanceInput
  }

  export type bannerWhereUniqueInput = Prisma.AtLeast<{
    ma_banner?: number
    AND?: bannerWhereInput | bannerWhereInput[]
    OR?: bannerWhereInput[]
    NOT?: bannerWhereInput | bannerWhereInput[]
    ma_phim?: IntFilter<"banner"> | number
    hinh_anh?: StringFilter<"banner"> | string
    phim?: XOR<PhimScalarRelationFilter, phimWhereInput>
  }, "ma_banner">

  export type bannerOrderByWithAggregationInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
    _count?: bannerCountOrderByAggregateInput
    _avg?: bannerAvgOrderByAggregateInput
    _max?: bannerMaxOrderByAggregateInput
    _min?: bannerMinOrderByAggregateInput
    _sum?: bannerSumOrderByAggregateInput
  }

  export type bannerScalarWhereWithAggregatesInput = {
    AND?: bannerScalarWhereWithAggregatesInput | bannerScalarWhereWithAggregatesInput[]
    OR?: bannerScalarWhereWithAggregatesInput[]
    NOT?: bannerScalarWhereWithAggregatesInput | bannerScalarWhereWithAggregatesInput[]
    ma_banner?: IntWithAggregatesFilter<"banner"> | number
    ma_phim?: IntWithAggregatesFilter<"banner"> | number
    hinh_anh?: StringWithAggregatesFilter<"banner"> | string
  }

  export type cum_rapWhereInput = {
    AND?: cum_rapWhereInput | cum_rapWhereInput[]
    OR?: cum_rapWhereInput[]
    NOT?: cum_rapWhereInput | cum_rapWhereInput[]
    ma_cum_rap?: StringFilter<"cum_rap"> | string
    ten_cum_rap?: StringFilter<"cum_rap"> | string
    dia_chi?: StringNullableFilter<"cum_rap"> | string | null
    ma_he_thong_rap?: StringFilter<"cum_rap"> | string
    he_thong_rap?: XOR<He_thong_rapScalarRelationFilter, he_thong_rapWhereInput>
    rap_phim?: Rap_phimListRelationFilter
  }

  export type cum_rapOrderByWithRelationInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrderInput | SortOrder
    ma_he_thong_rap?: SortOrder
    he_thong_rap?: he_thong_rapOrderByWithRelationInput
    rap_phim?: rap_phimOrderByRelationAggregateInput
    _relevance?: cum_rapOrderByRelevanceInput
  }

  export type cum_rapWhereUniqueInput = Prisma.AtLeast<{
    ma_cum_rap?: string
    AND?: cum_rapWhereInput | cum_rapWhereInput[]
    OR?: cum_rapWhereInput[]
    NOT?: cum_rapWhereInput | cum_rapWhereInput[]
    ten_cum_rap?: StringFilter<"cum_rap"> | string
    dia_chi?: StringNullableFilter<"cum_rap"> | string | null
    ma_he_thong_rap?: StringFilter<"cum_rap"> | string
    he_thong_rap?: XOR<He_thong_rapScalarRelationFilter, he_thong_rapWhereInput>
    rap_phim?: Rap_phimListRelationFilter
  }, "ma_cum_rap">

  export type cum_rapOrderByWithAggregationInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrderInput | SortOrder
    ma_he_thong_rap?: SortOrder
    _count?: cum_rapCountOrderByAggregateInput
    _max?: cum_rapMaxOrderByAggregateInput
    _min?: cum_rapMinOrderByAggregateInput
  }

  export type cum_rapScalarWhereWithAggregatesInput = {
    AND?: cum_rapScalarWhereWithAggregatesInput | cum_rapScalarWhereWithAggregatesInput[]
    OR?: cum_rapScalarWhereWithAggregatesInput[]
    NOT?: cum_rapScalarWhereWithAggregatesInput | cum_rapScalarWhereWithAggregatesInput[]
    ma_cum_rap?: StringWithAggregatesFilter<"cum_rap"> | string
    ten_cum_rap?: StringWithAggregatesFilter<"cum_rap"> | string
    dia_chi?: StringNullableWithAggregatesFilter<"cum_rap"> | string | null
    ma_he_thong_rap?: StringWithAggregatesFilter<"cum_rap"> | string
  }

  export type dat_veWhereInput = {
    AND?: dat_veWhereInput | dat_veWhereInput[]
    OR?: dat_veWhereInput[]
    NOT?: dat_veWhereInput | dat_veWhereInput[]
    id?: IntFilter<"dat_ve"> | number
    tai_khoan?: StringFilter<"dat_ve"> | string
    ma_lich_chieu?: IntFilter<"dat_ve"> | number
    ma_ghe?: IntFilter<"dat_ve"> | number
    ngay_dat?: DateTimeFilter<"dat_ve"> | Date | string
    ghe?: XOR<GheScalarRelationFilter, gheWhereInput>
    lich_chieu?: XOR<Lich_chieuScalarRelationFilter, lich_chieuWhereInput>
    nguoi_dung?: XOR<Nguoi_dungScalarRelationFilter, nguoi_dungWhereInput>
  }

  export type dat_veOrderByWithRelationInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    ngay_dat?: SortOrder
    ghe?: gheOrderByWithRelationInput
    lich_chieu?: lich_chieuOrderByWithRelationInput
    nguoi_dung?: nguoi_dungOrderByWithRelationInput
    _relevance?: dat_veOrderByRelevanceInput
  }

  export type dat_veWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ma_lich_chieu_ma_ghe?: dat_veMa_lich_chieuMa_gheCompoundUniqueInput
    AND?: dat_veWhereInput | dat_veWhereInput[]
    OR?: dat_veWhereInput[]
    NOT?: dat_veWhereInput | dat_veWhereInput[]
    tai_khoan?: StringFilter<"dat_ve"> | string
    ma_lich_chieu?: IntFilter<"dat_ve"> | number
    ma_ghe?: IntFilter<"dat_ve"> | number
    ngay_dat?: DateTimeFilter<"dat_ve"> | Date | string
    ghe?: XOR<GheScalarRelationFilter, gheWhereInput>
    lich_chieu?: XOR<Lich_chieuScalarRelationFilter, lich_chieuWhereInput>
    nguoi_dung?: XOR<Nguoi_dungScalarRelationFilter, nguoi_dungWhereInput>
  }, "id" | "ma_lich_chieu_ma_ghe">

  export type dat_veOrderByWithAggregationInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    ngay_dat?: SortOrder
    _count?: dat_veCountOrderByAggregateInput
    _avg?: dat_veAvgOrderByAggregateInput
    _max?: dat_veMaxOrderByAggregateInput
    _min?: dat_veMinOrderByAggregateInput
    _sum?: dat_veSumOrderByAggregateInput
  }

  export type dat_veScalarWhereWithAggregatesInput = {
    AND?: dat_veScalarWhereWithAggregatesInput | dat_veScalarWhereWithAggregatesInput[]
    OR?: dat_veScalarWhereWithAggregatesInput[]
    NOT?: dat_veScalarWhereWithAggregatesInput | dat_veScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dat_ve"> | number
    tai_khoan?: StringWithAggregatesFilter<"dat_ve"> | string
    ma_lich_chieu?: IntWithAggregatesFilter<"dat_ve"> | number
    ma_ghe?: IntWithAggregatesFilter<"dat_ve"> | number
    ngay_dat?: DateTimeWithAggregatesFilter<"dat_ve"> | Date | string
  }

  export type gheWhereInput = {
    AND?: gheWhereInput | gheWhereInput[]
    OR?: gheWhereInput[]
    NOT?: gheWhereInput | gheWhereInput[]
    ma_ghe?: IntFilter<"ghe"> | number
    ten_ghe?: StringFilter<"ghe"> | string
    loai_ghe?: StringFilter<"ghe"> | string
    ma_rap?: IntFilter<"ghe"> | number
    dat_ve?: Dat_veListRelationFilter
    rap_phim?: XOR<Rap_phimScalarRelationFilter, rap_phimWhereInput>
  }

  export type gheOrderByWithRelationInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
    dat_ve?: dat_veOrderByRelationAggregateInput
    rap_phim?: rap_phimOrderByWithRelationInput
    _relevance?: gheOrderByRelevanceInput
  }

  export type gheWhereUniqueInput = Prisma.AtLeast<{
    ma_ghe?: number
    ma_rap_ten_ghe?: gheMa_rapTen_gheCompoundUniqueInput
    AND?: gheWhereInput | gheWhereInput[]
    OR?: gheWhereInput[]
    NOT?: gheWhereInput | gheWhereInput[]
    ten_ghe?: StringFilter<"ghe"> | string
    loai_ghe?: StringFilter<"ghe"> | string
    ma_rap?: IntFilter<"ghe"> | number
    dat_ve?: Dat_veListRelationFilter
    rap_phim?: XOR<Rap_phimScalarRelationFilter, rap_phimWhereInput>
  }, "ma_ghe" | "ma_rap_ten_ghe">

  export type gheOrderByWithAggregationInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
    _count?: gheCountOrderByAggregateInput
    _avg?: gheAvgOrderByAggregateInput
    _max?: gheMaxOrderByAggregateInput
    _min?: gheMinOrderByAggregateInput
    _sum?: gheSumOrderByAggregateInput
  }

  export type gheScalarWhereWithAggregatesInput = {
    AND?: gheScalarWhereWithAggregatesInput | gheScalarWhereWithAggregatesInput[]
    OR?: gheScalarWhereWithAggregatesInput[]
    NOT?: gheScalarWhereWithAggregatesInput | gheScalarWhereWithAggregatesInput[]
    ma_ghe?: IntWithAggregatesFilter<"ghe"> | number
    ten_ghe?: StringWithAggregatesFilter<"ghe"> | string
    loai_ghe?: StringWithAggregatesFilter<"ghe"> | string
    ma_rap?: IntWithAggregatesFilter<"ghe"> | number
  }

  export type giao_dichWhereInput = {
    AND?: giao_dichWhereInput | giao_dichWhereInput[]
    OR?: giao_dichWhereInput[]
    NOT?: giao_dichWhereInput | giao_dichWhereInput[]
    id?: IntFilter<"giao_dich"> | number
    tai_khoan?: StringFilter<"giao_dich"> | string
    ma_lich_chieu?: IntFilter<"giao_dich"> | number
    tong_tien?: IntFilter<"giao_dich"> | number
    noi_dung_ck?: StringFilter<"giao_dich"> | string
    ngay_giao_dich?: DateTimeFilter<"giao_dich"> | Date | string
  }

  export type giao_dichOrderByWithRelationInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    noi_dung_ck?: SortOrder
    ngay_giao_dich?: SortOrder
    _relevance?: giao_dichOrderByRelevanceInput
  }

  export type giao_dichWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: giao_dichWhereInput | giao_dichWhereInput[]
    OR?: giao_dichWhereInput[]
    NOT?: giao_dichWhereInput | giao_dichWhereInput[]
    tai_khoan?: StringFilter<"giao_dich"> | string
    ma_lich_chieu?: IntFilter<"giao_dich"> | number
    tong_tien?: IntFilter<"giao_dich"> | number
    noi_dung_ck?: StringFilter<"giao_dich"> | string
    ngay_giao_dich?: DateTimeFilter<"giao_dich"> | Date | string
  }, "id">

  export type giao_dichOrderByWithAggregationInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    noi_dung_ck?: SortOrder
    ngay_giao_dich?: SortOrder
    _count?: giao_dichCountOrderByAggregateInput
    _avg?: giao_dichAvgOrderByAggregateInput
    _max?: giao_dichMaxOrderByAggregateInput
    _min?: giao_dichMinOrderByAggregateInput
    _sum?: giao_dichSumOrderByAggregateInput
  }

  export type giao_dichScalarWhereWithAggregatesInput = {
    AND?: giao_dichScalarWhereWithAggregatesInput | giao_dichScalarWhereWithAggregatesInput[]
    OR?: giao_dichScalarWhereWithAggregatesInput[]
    NOT?: giao_dichScalarWhereWithAggregatesInput | giao_dichScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"giao_dich"> | number
    tai_khoan?: StringWithAggregatesFilter<"giao_dich"> | string
    ma_lich_chieu?: IntWithAggregatesFilter<"giao_dich"> | number
    tong_tien?: IntWithAggregatesFilter<"giao_dich"> | number
    noi_dung_ck?: StringWithAggregatesFilter<"giao_dich"> | string
    ngay_giao_dich?: DateTimeWithAggregatesFilter<"giao_dich"> | Date | string
  }

  export type he_thong_rapWhereInput = {
    AND?: he_thong_rapWhereInput | he_thong_rapWhereInput[]
    OR?: he_thong_rapWhereInput[]
    NOT?: he_thong_rapWhereInput | he_thong_rapWhereInput[]
    ma_he_thong_rap?: StringFilter<"he_thong_rap"> | string
    ten_he_thong_rap?: StringFilter<"he_thong_rap"> | string
    logo?: StringNullableFilter<"he_thong_rap"> | string | null
    cum_rap?: Cum_rapListRelationFilter
  }

  export type he_thong_rapOrderByWithRelationInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrderInput | SortOrder
    cum_rap?: cum_rapOrderByRelationAggregateInput
    _relevance?: he_thong_rapOrderByRelevanceInput
  }

  export type he_thong_rapWhereUniqueInput = Prisma.AtLeast<{
    ma_he_thong_rap?: string
    AND?: he_thong_rapWhereInput | he_thong_rapWhereInput[]
    OR?: he_thong_rapWhereInput[]
    NOT?: he_thong_rapWhereInput | he_thong_rapWhereInput[]
    ten_he_thong_rap?: StringFilter<"he_thong_rap"> | string
    logo?: StringNullableFilter<"he_thong_rap"> | string | null
    cum_rap?: Cum_rapListRelationFilter
  }, "ma_he_thong_rap">

  export type he_thong_rapOrderByWithAggregationInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrderInput | SortOrder
    _count?: he_thong_rapCountOrderByAggregateInput
    _max?: he_thong_rapMaxOrderByAggregateInput
    _min?: he_thong_rapMinOrderByAggregateInput
  }

  export type he_thong_rapScalarWhereWithAggregatesInput = {
    AND?: he_thong_rapScalarWhereWithAggregatesInput | he_thong_rapScalarWhereWithAggregatesInput[]
    OR?: he_thong_rapScalarWhereWithAggregatesInput[]
    NOT?: he_thong_rapScalarWhereWithAggregatesInput | he_thong_rapScalarWhereWithAggregatesInput[]
    ma_he_thong_rap?: StringWithAggregatesFilter<"he_thong_rap"> | string
    ten_he_thong_rap?: StringWithAggregatesFilter<"he_thong_rap"> | string
    logo?: StringNullableWithAggregatesFilter<"he_thong_rap"> | string | null
  }

  export type lich_chieuWhereInput = {
    AND?: lich_chieuWhereInput | lich_chieuWhereInput[]
    OR?: lich_chieuWhereInput[]
    NOT?: lich_chieuWhereInput | lich_chieuWhereInput[]
    ma_lich_chieu?: IntFilter<"lich_chieu"> | number
    ma_rap?: IntFilter<"lich_chieu"> | number
    ma_phim?: IntFilter<"lich_chieu"> | number
    ngay_gio_chieu?: DateTimeFilter<"lich_chieu"> | Date | string
    gia_ve?: IntFilter<"lich_chieu"> | number
    dat_ve?: Dat_veListRelationFilter
    phim?: XOR<PhimScalarRelationFilter, phimWhereInput>
    rap_phim?: XOR<Rap_phimScalarRelationFilter, rap_phimWhereInput>
  }

  export type lich_chieuOrderByWithRelationInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
    dat_ve?: dat_veOrderByRelationAggregateInput
    phim?: phimOrderByWithRelationInput
    rap_phim?: rap_phimOrderByWithRelationInput
  }

  export type lich_chieuWhereUniqueInput = Prisma.AtLeast<{
    ma_lich_chieu?: number
    AND?: lich_chieuWhereInput | lich_chieuWhereInput[]
    OR?: lich_chieuWhereInput[]
    NOT?: lich_chieuWhereInput | lich_chieuWhereInput[]
    ma_rap?: IntFilter<"lich_chieu"> | number
    ma_phim?: IntFilter<"lich_chieu"> | number
    ngay_gio_chieu?: DateTimeFilter<"lich_chieu"> | Date | string
    gia_ve?: IntFilter<"lich_chieu"> | number
    dat_ve?: Dat_veListRelationFilter
    phim?: XOR<PhimScalarRelationFilter, phimWhereInput>
    rap_phim?: XOR<Rap_phimScalarRelationFilter, rap_phimWhereInput>
  }, "ma_lich_chieu">

  export type lich_chieuOrderByWithAggregationInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
    _count?: lich_chieuCountOrderByAggregateInput
    _avg?: lich_chieuAvgOrderByAggregateInput
    _max?: lich_chieuMaxOrderByAggregateInput
    _min?: lich_chieuMinOrderByAggregateInput
    _sum?: lich_chieuSumOrderByAggregateInput
  }

  export type lich_chieuScalarWhereWithAggregatesInput = {
    AND?: lich_chieuScalarWhereWithAggregatesInput | lich_chieuScalarWhereWithAggregatesInput[]
    OR?: lich_chieuScalarWhereWithAggregatesInput[]
    NOT?: lich_chieuScalarWhereWithAggregatesInput | lich_chieuScalarWhereWithAggregatesInput[]
    ma_lich_chieu?: IntWithAggregatesFilter<"lich_chieu"> | number
    ma_rap?: IntWithAggregatesFilter<"lich_chieu"> | number
    ma_phim?: IntWithAggregatesFilter<"lich_chieu"> | number
    ngay_gio_chieu?: DateTimeWithAggregatesFilter<"lich_chieu"> | Date | string
    gia_ve?: IntWithAggregatesFilter<"lich_chieu"> | number
  }

  export type nguoi_dungWhereInput = {
    AND?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    OR?: nguoi_dungWhereInput[]
    NOT?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    tai_khoan?: StringFilter<"nguoi_dung"> | string
    ho_ten?: StringFilter<"nguoi_dung"> | string
    email?: StringFilter<"nguoi_dung"> | string
    so_dt?: StringFilter<"nguoi_dung"> | string
    mat_khau?: StringFilter<"nguoi_dung"> | string
    loai_nguoi_dung?: StringFilter<"nguoi_dung"> | string
    ma_nhom?: StringFilter<"nguoi_dung"> | string
    created_at?: DateTimeFilter<"nguoi_dung"> | Date | string
    updated_at?: DateTimeFilter<"nguoi_dung"> | Date | string
    dat_ve?: Dat_veListRelationFilter
  }

  export type nguoi_dungOrderByWithRelationInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dat_ve?: dat_veOrderByRelationAggregateInput
    _relevance?: nguoi_dungOrderByRelevanceInput
  }

  export type nguoi_dungWhereUniqueInput = Prisma.AtLeast<{
    tai_khoan?: string
    email?: string
    AND?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    OR?: nguoi_dungWhereInput[]
    NOT?: nguoi_dungWhereInput | nguoi_dungWhereInput[]
    ho_ten?: StringFilter<"nguoi_dung"> | string
    so_dt?: StringFilter<"nguoi_dung"> | string
    mat_khau?: StringFilter<"nguoi_dung"> | string
    loai_nguoi_dung?: StringFilter<"nguoi_dung"> | string
    ma_nhom?: StringFilter<"nguoi_dung"> | string
    created_at?: DateTimeFilter<"nguoi_dung"> | Date | string
    updated_at?: DateTimeFilter<"nguoi_dung"> | Date | string
    dat_ve?: Dat_veListRelationFilter
  }, "tai_khoan" | "email">

  export type nguoi_dungOrderByWithAggregationInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: nguoi_dungCountOrderByAggregateInput
    _max?: nguoi_dungMaxOrderByAggregateInput
    _min?: nguoi_dungMinOrderByAggregateInput
  }

  export type nguoi_dungScalarWhereWithAggregatesInput = {
    AND?: nguoi_dungScalarWhereWithAggregatesInput | nguoi_dungScalarWhereWithAggregatesInput[]
    OR?: nguoi_dungScalarWhereWithAggregatesInput[]
    NOT?: nguoi_dungScalarWhereWithAggregatesInput | nguoi_dungScalarWhereWithAggregatesInput[]
    tai_khoan?: StringWithAggregatesFilter<"nguoi_dung"> | string
    ho_ten?: StringWithAggregatesFilter<"nguoi_dung"> | string
    email?: StringWithAggregatesFilter<"nguoi_dung"> | string
    so_dt?: StringWithAggregatesFilter<"nguoi_dung"> | string
    mat_khau?: StringWithAggregatesFilter<"nguoi_dung"> | string
    loai_nguoi_dung?: StringWithAggregatesFilter<"nguoi_dung"> | string
    ma_nhom?: StringWithAggregatesFilter<"nguoi_dung"> | string
    created_at?: DateTimeWithAggregatesFilter<"nguoi_dung"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"nguoi_dung"> | Date | string
  }

  export type phimWhereInput = {
    AND?: phimWhereInput | phimWhereInput[]
    OR?: phimWhereInput[]
    NOT?: phimWhereInput | phimWhereInput[]
    ma_phim?: IntFilter<"phim"> | number
    ten_phim?: StringFilter<"phim"> | string
    trailer?: StringNullableFilter<"phim"> | string | null
    hinh_anh?: StringNullableFilter<"phim"> | string | null
    mo_ta?: StringNullableFilter<"phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableFilter<"phim"> | Date | string | null
    danh_gia?: IntFilter<"phim"> | number
    hot?: BoolFilter<"phim"> | boolean
    dang_chieu?: BoolFilter<"phim"> | boolean
    sap_chieu?: BoolFilter<"phim"> | boolean
    ma_nhom?: StringFilter<"phim"> | string
    created_at?: DateTimeFilter<"phim"> | Date | string
    updated_at?: DateTimeFilter<"phim"> | Date | string
    created_by?: StringNullableFilter<"phim"> | string | null
    deleted_at?: DateTimeNullableFilter<"phim"> | Date | string | null
    deleted_by?: StringNullableFilter<"phim"> | string | null
    is_deleted?: BoolFilter<"phim"> | boolean
    banner?: BannerListRelationFilter
    lich_chieu?: Lich_chieuListRelationFilter
  }

  export type phimOrderByWithRelationInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    ngay_khoi_chieu?: SortOrderInput | SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    banner?: bannerOrderByRelationAggregateInput
    lich_chieu?: lich_chieuOrderByRelationAggregateInput
    _relevance?: phimOrderByRelevanceInput
  }

  export type phimWhereUniqueInput = Prisma.AtLeast<{
    ma_phim?: number
    AND?: phimWhereInput | phimWhereInput[]
    OR?: phimWhereInput[]
    NOT?: phimWhereInput | phimWhereInput[]
    ten_phim?: StringFilter<"phim"> | string
    trailer?: StringNullableFilter<"phim"> | string | null
    hinh_anh?: StringNullableFilter<"phim"> | string | null
    mo_ta?: StringNullableFilter<"phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableFilter<"phim"> | Date | string | null
    danh_gia?: IntFilter<"phim"> | number
    hot?: BoolFilter<"phim"> | boolean
    dang_chieu?: BoolFilter<"phim"> | boolean
    sap_chieu?: BoolFilter<"phim"> | boolean
    ma_nhom?: StringFilter<"phim"> | string
    created_at?: DateTimeFilter<"phim"> | Date | string
    updated_at?: DateTimeFilter<"phim"> | Date | string
    created_by?: StringNullableFilter<"phim"> | string | null
    deleted_at?: DateTimeNullableFilter<"phim"> | Date | string | null
    deleted_by?: StringNullableFilter<"phim"> | string | null
    is_deleted?: BoolFilter<"phim"> | boolean
    banner?: BannerListRelationFilter
    lich_chieu?: Lich_chieuListRelationFilter
  }, "ma_phim">

  export type phimOrderByWithAggregationInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    ngay_khoi_chieu?: SortOrderInput | SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: phimCountOrderByAggregateInput
    _avg?: phimAvgOrderByAggregateInput
    _max?: phimMaxOrderByAggregateInput
    _min?: phimMinOrderByAggregateInput
    _sum?: phimSumOrderByAggregateInput
  }

  export type phimScalarWhereWithAggregatesInput = {
    AND?: phimScalarWhereWithAggregatesInput | phimScalarWhereWithAggregatesInput[]
    OR?: phimScalarWhereWithAggregatesInput[]
    NOT?: phimScalarWhereWithAggregatesInput | phimScalarWhereWithAggregatesInput[]
    ma_phim?: IntWithAggregatesFilter<"phim"> | number
    ten_phim?: StringWithAggregatesFilter<"phim"> | string
    trailer?: StringNullableWithAggregatesFilter<"phim"> | string | null
    hinh_anh?: StringNullableWithAggregatesFilter<"phim"> | string | null
    mo_ta?: StringNullableWithAggregatesFilter<"phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableWithAggregatesFilter<"phim"> | Date | string | null
    danh_gia?: IntWithAggregatesFilter<"phim"> | number
    hot?: BoolWithAggregatesFilter<"phim"> | boolean
    dang_chieu?: BoolWithAggregatesFilter<"phim"> | boolean
    sap_chieu?: BoolWithAggregatesFilter<"phim"> | boolean
    ma_nhom?: StringWithAggregatesFilter<"phim"> | string
    created_at?: DateTimeWithAggregatesFilter<"phim"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"phim"> | Date | string
    created_by?: StringNullableWithAggregatesFilter<"phim"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"phim"> | Date | string | null
    deleted_by?: StringNullableWithAggregatesFilter<"phim"> | string | null
    is_deleted?: BoolWithAggregatesFilter<"phim"> | boolean
  }

  export type rap_phimWhereInput = {
    AND?: rap_phimWhereInput | rap_phimWhereInput[]
    OR?: rap_phimWhereInput[]
    NOT?: rap_phimWhereInput | rap_phimWhereInput[]
    ma_rap?: IntFilter<"rap_phim"> | number
    ten_rap?: StringFilter<"rap_phim"> | string
    ma_cum_rap?: StringFilter<"rap_phim"> | string
    ghe?: GheListRelationFilter
    lich_chieu?: Lich_chieuListRelationFilter
    cum_rap?: XOR<Cum_rapScalarRelationFilter, cum_rapWhereInput>
  }

  export type rap_phimOrderByWithRelationInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
    ghe?: gheOrderByRelationAggregateInput
    lich_chieu?: lich_chieuOrderByRelationAggregateInput
    cum_rap?: cum_rapOrderByWithRelationInput
    _relevance?: rap_phimOrderByRelevanceInput
  }

  export type rap_phimWhereUniqueInput = Prisma.AtLeast<{
    ma_rap?: number
    AND?: rap_phimWhereInput | rap_phimWhereInput[]
    OR?: rap_phimWhereInput[]
    NOT?: rap_phimWhereInput | rap_phimWhereInput[]
    ten_rap?: StringFilter<"rap_phim"> | string
    ma_cum_rap?: StringFilter<"rap_phim"> | string
    ghe?: GheListRelationFilter
    lich_chieu?: Lich_chieuListRelationFilter
    cum_rap?: XOR<Cum_rapScalarRelationFilter, cum_rapWhereInput>
  }, "ma_rap">

  export type rap_phimOrderByWithAggregationInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
    _count?: rap_phimCountOrderByAggregateInput
    _avg?: rap_phimAvgOrderByAggregateInput
    _max?: rap_phimMaxOrderByAggregateInput
    _min?: rap_phimMinOrderByAggregateInput
    _sum?: rap_phimSumOrderByAggregateInput
  }

  export type rap_phimScalarWhereWithAggregatesInput = {
    AND?: rap_phimScalarWhereWithAggregatesInput | rap_phimScalarWhereWithAggregatesInput[]
    OR?: rap_phimScalarWhereWithAggregatesInput[]
    NOT?: rap_phimScalarWhereWithAggregatesInput | rap_phimScalarWhereWithAggregatesInput[]
    ma_rap?: IntWithAggregatesFilter<"rap_phim"> | number
    ten_rap?: StringWithAggregatesFilter<"rap_phim"> | string
    ma_cum_rap?: StringWithAggregatesFilter<"rap_phim"> | string
  }

  export type bannerCreateInput = {
    hinh_anh: string
    phim: phimCreateNestedOneWithoutBannerInput
  }

  export type bannerUncheckedCreateInput = {
    ma_banner?: number
    ma_phim: number
    hinh_anh: string
  }

  export type bannerUpdateInput = {
    hinh_anh?: StringFieldUpdateOperationsInput | string
    phim?: phimUpdateOneRequiredWithoutBannerNestedInput
  }

  export type bannerUncheckedUpdateInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    ma_phim?: IntFieldUpdateOperationsInput | number
    hinh_anh?: StringFieldUpdateOperationsInput | string
  }

  export type bannerCreateManyInput = {
    ma_banner?: number
    ma_phim: number
    hinh_anh: string
  }

  export type bannerUpdateManyMutationInput = {
    hinh_anh?: StringFieldUpdateOperationsInput | string
  }

  export type bannerUncheckedUpdateManyInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    ma_phim?: IntFieldUpdateOperationsInput | number
    hinh_anh?: StringFieldUpdateOperationsInput | string
  }

  export type cum_rapCreateInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
    he_thong_rap: he_thong_rapCreateNestedOneWithoutCum_rapInput
    rap_phim?: rap_phimCreateNestedManyWithoutCum_rapInput
  }

  export type cum_rapUncheckedCreateInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
    ma_he_thong_rap: string
    rap_phim?: rap_phimUncheckedCreateNestedManyWithoutCum_rapInput
  }

  export type cum_rapUpdateInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    he_thong_rap?: he_thong_rapUpdateOneRequiredWithoutCum_rapNestedInput
    rap_phim?: rap_phimUpdateManyWithoutCum_rapNestedInput
  }

  export type cum_rapUncheckedUpdateInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
    rap_phim?: rap_phimUncheckedUpdateManyWithoutCum_rapNestedInput
  }

  export type cum_rapCreateManyInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
    ma_he_thong_rap: string
  }

  export type cum_rapUpdateManyMutationInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cum_rapUncheckedUpdateManyInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
  }

  export type dat_veCreateInput = {
    ngay_dat?: Date | string
    ghe: gheCreateNestedOneWithoutDat_veInput
    lich_chieu: lich_chieuCreateNestedOneWithoutDat_veInput
    nguoi_dung: nguoi_dungCreateNestedOneWithoutDat_veInput
  }

  export type dat_veUncheckedCreateInput = {
    id?: number
    tai_khoan: string
    ma_lich_chieu: number
    ma_ghe: number
    ngay_dat?: Date | string
  }

  export type dat_veUpdateInput = {
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
    ghe?: gheUpdateOneRequiredWithoutDat_veNestedInput
    lich_chieu?: lich_chieuUpdateOneRequiredWithoutDat_veNestedInput
    nguoi_dung?: nguoi_dungUpdateOneRequiredWithoutDat_veNestedInput
  }

  export type dat_veUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dat_veCreateManyInput = {
    id?: number
    tai_khoan: string
    ma_lich_chieu: number
    ma_ghe: number
    ngay_dat?: Date | string
  }

  export type dat_veUpdateManyMutationInput = {
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dat_veUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gheCreateInput = {
    ten_ghe: string
    loai_ghe?: string
    dat_ve?: dat_veCreateNestedManyWithoutGheInput
    rap_phim: rap_phimCreateNestedOneWithoutGheInput
  }

  export type gheUncheckedCreateInput = {
    ma_ghe?: number
    ten_ghe: string
    loai_ghe?: string
    ma_rap: number
    dat_ve?: dat_veUncheckedCreateNestedManyWithoutGheInput
  }

  export type gheUpdateInput = {
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
    dat_ve?: dat_veUpdateManyWithoutGheNestedInput
    rap_phim?: rap_phimUpdateOneRequiredWithoutGheNestedInput
  }

  export type gheUncheckedUpdateInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
    ma_rap?: IntFieldUpdateOperationsInput | number
    dat_ve?: dat_veUncheckedUpdateManyWithoutGheNestedInput
  }

  export type gheCreateManyInput = {
    ma_ghe?: number
    ten_ghe: string
    loai_ghe?: string
    ma_rap: number
  }

  export type gheUpdateManyMutationInput = {
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
  }

  export type gheUncheckedUpdateManyInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
    ma_rap?: IntFieldUpdateOperationsInput | number
  }

  export type giao_dichCreateInput = {
    tai_khoan: string
    ma_lich_chieu: number
    tong_tien: number
    noi_dung_ck: string
    ngay_giao_dich?: Date | string
  }

  export type giao_dichUncheckedCreateInput = {
    id?: number
    tai_khoan: string
    ma_lich_chieu: number
    tong_tien: number
    noi_dung_ck: string
    ngay_giao_dich?: Date | string
  }

  export type giao_dichUpdateInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    noi_dung_ck?: StringFieldUpdateOperationsInput | string
    ngay_giao_dich?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type giao_dichUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    noi_dung_ck?: StringFieldUpdateOperationsInput | string
    ngay_giao_dich?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type giao_dichCreateManyInput = {
    id?: number
    tai_khoan: string
    ma_lich_chieu: number
    tong_tien: number
    noi_dung_ck: string
    ngay_giao_dich?: Date | string
  }

  export type giao_dichUpdateManyMutationInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    noi_dung_ck?: StringFieldUpdateOperationsInput | string
    ngay_giao_dich?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type giao_dichUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    noi_dung_ck?: StringFieldUpdateOperationsInput | string
    ngay_giao_dich?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type he_thong_rapCreateInput = {
    ma_he_thong_rap: string
    ten_he_thong_rap: string
    logo?: string | null
    cum_rap?: cum_rapCreateNestedManyWithoutHe_thong_rapInput
  }

  export type he_thong_rapUncheckedCreateInput = {
    ma_he_thong_rap: string
    ten_he_thong_rap: string
    logo?: string | null
    cum_rap?: cum_rapUncheckedCreateNestedManyWithoutHe_thong_rapInput
  }

  export type he_thong_rapUpdateInput = {
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
    ten_he_thong_rap?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    cum_rap?: cum_rapUpdateManyWithoutHe_thong_rapNestedInput
  }

  export type he_thong_rapUncheckedUpdateInput = {
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
    ten_he_thong_rap?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    cum_rap?: cum_rapUncheckedUpdateManyWithoutHe_thong_rapNestedInput
  }

  export type he_thong_rapCreateManyInput = {
    ma_he_thong_rap: string
    ten_he_thong_rap: string
    logo?: string | null
  }

  export type he_thong_rapUpdateManyMutationInput = {
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
    ten_he_thong_rap?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type he_thong_rapUncheckedUpdateManyInput = {
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
    ten_he_thong_rap?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lich_chieuCreateInput = {
    ngay_gio_chieu: Date | string
    gia_ve: number
    dat_ve?: dat_veCreateNestedManyWithoutLich_chieuInput
    phim: phimCreateNestedOneWithoutLich_chieuInput
    rap_phim: rap_phimCreateNestedOneWithoutLich_chieuInput
  }

  export type lich_chieuUncheckedCreateInput = {
    ma_lich_chieu?: number
    ma_rap: number
    ma_phim: number
    ngay_gio_chieu: Date | string
    gia_ve: number
    dat_ve?: dat_veUncheckedCreateNestedManyWithoutLich_chieuInput
  }

  export type lich_chieuUpdateInput = {
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
    dat_ve?: dat_veUpdateManyWithoutLich_chieuNestedInput
    phim?: phimUpdateOneRequiredWithoutLich_chieuNestedInput
    rap_phim?: rap_phimUpdateOneRequiredWithoutLich_chieuNestedInput
  }

  export type lich_chieuUncheckedUpdateInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: IntFieldUpdateOperationsInput | number
    ma_phim?: IntFieldUpdateOperationsInput | number
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
    dat_ve?: dat_veUncheckedUpdateManyWithoutLich_chieuNestedInput
  }

  export type lich_chieuCreateManyInput = {
    ma_lich_chieu?: number
    ma_rap: number
    ma_phim: number
    ngay_gio_chieu: Date | string
    gia_ve: number
  }

  export type lich_chieuUpdateManyMutationInput = {
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
  }

  export type lich_chieuUncheckedUpdateManyInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: IntFieldUpdateOperationsInput | number
    ma_phim?: IntFieldUpdateOperationsInput | number
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
  }

  export type nguoi_dungCreateInput = {
    tai_khoan: string
    ho_ten: string
    email: string
    so_dt: string
    mat_khau: string
    loai_nguoi_dung?: string
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    dat_ve?: dat_veCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungUncheckedCreateInput = {
    tai_khoan: string
    ho_ten: string
    email: string
    so_dt: string
    mat_khau: string
    loai_nguoi_dung?: string
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    dat_ve?: dat_veUncheckedCreateNestedManyWithoutNguoi_dungInput
  }

  export type nguoi_dungUpdateInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ho_ten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    so_dt?: StringFieldUpdateOperationsInput | string
    mat_khau?: StringFieldUpdateOperationsInput | string
    loai_nguoi_dung?: StringFieldUpdateOperationsInput | string
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dat_ve?: dat_veUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungUncheckedUpdateInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ho_ten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    so_dt?: StringFieldUpdateOperationsInput | string
    mat_khau?: StringFieldUpdateOperationsInput | string
    loai_nguoi_dung?: StringFieldUpdateOperationsInput | string
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dat_ve?: dat_veUncheckedUpdateManyWithoutNguoi_dungNestedInput
  }

  export type nguoi_dungCreateManyInput = {
    tai_khoan: string
    ho_ten: string
    email: string
    so_dt: string
    mat_khau: string
    loai_nguoi_dung?: string
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type nguoi_dungUpdateManyMutationInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ho_ten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    so_dt?: StringFieldUpdateOperationsInput | string
    mat_khau?: StringFieldUpdateOperationsInput | string
    loai_nguoi_dung?: StringFieldUpdateOperationsInput | string
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nguoi_dungUncheckedUpdateManyInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ho_ten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    so_dt?: StringFieldUpdateOperationsInput | string
    mat_khau?: StringFieldUpdateOperationsInput | string
    loai_nguoi_dung?: StringFieldUpdateOperationsInput | string
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type phimCreateInput = {
    ten_phim: string
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string | null
    deleted_at?: Date | string | null
    deleted_by?: string | null
    is_deleted?: boolean
    banner?: bannerCreateNestedManyWithoutPhimInput
    lich_chieu?: lich_chieuCreateNestedManyWithoutPhimInput
  }

  export type phimUncheckedCreateInput = {
    ma_phim?: number
    ten_phim: string
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string | null
    deleted_at?: Date | string | null
    deleted_by?: string | null
    is_deleted?: boolean
    banner?: bannerUncheckedCreateNestedManyWithoutPhimInput
    lich_chieu?: lich_chieuUncheckedCreateNestedManyWithoutPhimInput
  }

  export type phimUpdateInput = {
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    banner?: bannerUpdateManyWithoutPhimNestedInput
    lich_chieu?: lich_chieuUpdateManyWithoutPhimNestedInput
  }

  export type phimUncheckedUpdateInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    banner?: bannerUncheckedUpdateManyWithoutPhimNestedInput
    lich_chieu?: lich_chieuUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type phimCreateManyInput = {
    ma_phim?: number
    ten_phim: string
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string | null
    deleted_at?: Date | string | null
    deleted_by?: string | null
    is_deleted?: boolean
  }

  export type phimUpdateManyMutationInput = {
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type phimUncheckedUpdateManyInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rap_phimCreateInput = {
    ten_rap: string
    ghe?: gheCreateNestedManyWithoutRap_phimInput
    lich_chieu?: lich_chieuCreateNestedManyWithoutRap_phimInput
    cum_rap: cum_rapCreateNestedOneWithoutRap_phimInput
  }

  export type rap_phimUncheckedCreateInput = {
    ma_rap?: number
    ten_rap: string
    ma_cum_rap: string
    ghe?: gheUncheckedCreateNestedManyWithoutRap_phimInput
    lich_chieu?: lich_chieuUncheckedCreateNestedManyWithoutRap_phimInput
  }

  export type rap_phimUpdateInput = {
    ten_rap?: StringFieldUpdateOperationsInput | string
    ghe?: gheUpdateManyWithoutRap_phimNestedInput
    lich_chieu?: lich_chieuUpdateManyWithoutRap_phimNestedInput
    cum_rap?: cum_rapUpdateOneRequiredWithoutRap_phimNestedInput
  }

  export type rap_phimUncheckedUpdateInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: StringFieldUpdateOperationsInput | string
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ghe?: gheUncheckedUpdateManyWithoutRap_phimNestedInput
    lich_chieu?: lich_chieuUncheckedUpdateManyWithoutRap_phimNestedInput
  }

  export type rap_phimCreateManyInput = {
    ma_rap?: number
    ten_rap: string
    ma_cum_rap: string
  }

  export type rap_phimUpdateManyMutationInput = {
    ten_rap?: StringFieldUpdateOperationsInput | string
  }

  export type rap_phimUncheckedUpdateManyInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: StringFieldUpdateOperationsInput | string
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PhimScalarRelationFilter = {
    is?: phimWhereInput
    isNot?: phimWhereInput
  }

  export type bannerOrderByRelevanceInput = {
    fields: bannerOrderByRelevanceFieldEnum | bannerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bannerCountOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type bannerAvgOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
  }

  export type bannerMaxOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type bannerMinOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type bannerSumOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type He_thong_rapScalarRelationFilter = {
    is?: he_thong_rapWhereInput
    isNot?: he_thong_rapWhereInput
  }

  export type Rap_phimListRelationFilter = {
    every?: rap_phimWhereInput
    some?: rap_phimWhereInput
    none?: rap_phimWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rap_phimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cum_rapOrderByRelevanceInput = {
    fields: cum_rapOrderByRelevanceFieldEnum | cum_rapOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cum_rapCountOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type cum_rapMaxOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type cum_rapMinOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GheScalarRelationFilter = {
    is?: gheWhereInput
    isNot?: gheWhereInput
  }

  export type Lich_chieuScalarRelationFilter = {
    is?: lich_chieuWhereInput
    isNot?: lich_chieuWhereInput
  }

  export type Nguoi_dungScalarRelationFilter = {
    is?: nguoi_dungWhereInput
    isNot?: nguoi_dungWhereInput
  }

  export type dat_veOrderByRelevanceInput = {
    fields: dat_veOrderByRelevanceFieldEnum | dat_veOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type dat_veMa_lich_chieuMa_gheCompoundUniqueInput = {
    ma_lich_chieu: number
    ma_ghe: number
  }

  export type dat_veCountOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    ngay_dat?: SortOrder
  }

  export type dat_veAvgOrderByAggregateInput = {
    id?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
  }

  export type dat_veMaxOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    ngay_dat?: SortOrder
  }

  export type dat_veMinOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    ngay_dat?: SortOrder
  }

  export type dat_veSumOrderByAggregateInput = {
    id?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Dat_veListRelationFilter = {
    every?: dat_veWhereInput
    some?: dat_veWhereInput
    none?: dat_veWhereInput
  }

  export type Rap_phimScalarRelationFilter = {
    is?: rap_phimWhereInput
    isNot?: rap_phimWhereInput
  }

  export type dat_veOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gheOrderByRelevanceInput = {
    fields: gheOrderByRelevanceFieldEnum | gheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gheMa_rapTen_gheCompoundUniqueInput = {
    ma_rap: number
    ten_ghe: string
  }

  export type gheCountOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type gheAvgOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type gheMaxOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type gheMinOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type gheSumOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type giao_dichOrderByRelevanceInput = {
    fields: giao_dichOrderByRelevanceFieldEnum | giao_dichOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type giao_dichCountOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    noi_dung_ck?: SortOrder
    ngay_giao_dich?: SortOrder
  }

  export type giao_dichAvgOrderByAggregateInput = {
    id?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
  }

  export type giao_dichMaxOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    noi_dung_ck?: SortOrder
    ngay_giao_dich?: SortOrder
  }

  export type giao_dichMinOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    noi_dung_ck?: SortOrder
    ngay_giao_dich?: SortOrder
  }

  export type giao_dichSumOrderByAggregateInput = {
    id?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
  }

  export type Cum_rapListRelationFilter = {
    every?: cum_rapWhereInput
    some?: cum_rapWhereInput
    none?: cum_rapWhereInput
  }

  export type cum_rapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type he_thong_rapOrderByRelevanceInput = {
    fields: he_thong_rapOrderByRelevanceFieldEnum | he_thong_rapOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type he_thong_rapCountOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type he_thong_rapMaxOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type he_thong_rapMinOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type lich_chieuCountOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type lich_chieuAvgOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    gia_ve?: SortOrder
  }

  export type lich_chieuMaxOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type lich_chieuMinOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type lich_chieuSumOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    gia_ve?: SortOrder
  }

  export type nguoi_dungOrderByRelevanceInput = {
    fields: nguoi_dungOrderByRelevanceFieldEnum | nguoi_dungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type nguoi_dungCountOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type nguoi_dungMaxOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type nguoi_dungMinOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BannerListRelationFilter = {
    every?: bannerWhereInput
    some?: bannerWhereInput
    none?: bannerWhereInput
  }

  export type Lich_chieuListRelationFilter = {
    every?: lich_chieuWhereInput
    some?: lich_chieuWhereInput
    none?: lich_chieuWhereInput
  }

  export type bannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lich_chieuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type phimOrderByRelevanceInput = {
    fields: phimOrderByRelevanceFieldEnum | phimOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type phimCountOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    deleted_at?: SortOrder
    deleted_by?: SortOrder
    is_deleted?: SortOrder
  }

  export type phimAvgOrderByAggregateInput = {
    ma_phim?: SortOrder
    danh_gia?: SortOrder
  }

  export type phimMaxOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    deleted_at?: SortOrder
    deleted_by?: SortOrder
    is_deleted?: SortOrder
  }

  export type phimMinOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    ma_nhom?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    deleted_at?: SortOrder
    deleted_by?: SortOrder
    is_deleted?: SortOrder
  }

  export type phimSumOrderByAggregateInput = {
    ma_phim?: SortOrder
    danh_gia?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GheListRelationFilter = {
    every?: gheWhereInput
    some?: gheWhereInput
    none?: gheWhereInput
  }

  export type Cum_rapScalarRelationFilter = {
    is?: cum_rapWhereInput
    isNot?: cum_rapWhereInput
  }

  export type gheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rap_phimOrderByRelevanceInput = {
    fields: rap_phimOrderByRelevanceFieldEnum | rap_phimOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rap_phimCountOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type rap_phimAvgOrderByAggregateInput = {
    ma_rap?: SortOrder
  }

  export type rap_phimMaxOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type rap_phimMinOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type rap_phimSumOrderByAggregateInput = {
    ma_rap?: SortOrder
  }

  export type phimCreateNestedOneWithoutBannerInput = {
    create?: XOR<phimCreateWithoutBannerInput, phimUncheckedCreateWithoutBannerInput>
    connectOrCreate?: phimCreateOrConnectWithoutBannerInput
    connect?: phimWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type phimUpdateOneRequiredWithoutBannerNestedInput = {
    create?: XOR<phimCreateWithoutBannerInput, phimUncheckedCreateWithoutBannerInput>
    connectOrCreate?: phimCreateOrConnectWithoutBannerInput
    upsert?: phimUpsertWithoutBannerInput
    connect?: phimWhereUniqueInput
    update?: XOR<XOR<phimUpdateToOneWithWhereWithoutBannerInput, phimUpdateWithoutBannerInput>, phimUncheckedUpdateWithoutBannerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type he_thong_rapCreateNestedOneWithoutCum_rapInput = {
    create?: XOR<he_thong_rapCreateWithoutCum_rapInput, he_thong_rapUncheckedCreateWithoutCum_rapInput>
    connectOrCreate?: he_thong_rapCreateOrConnectWithoutCum_rapInput
    connect?: he_thong_rapWhereUniqueInput
  }

  export type rap_phimCreateNestedManyWithoutCum_rapInput = {
    create?: XOR<rap_phimCreateWithoutCum_rapInput, rap_phimUncheckedCreateWithoutCum_rapInput> | rap_phimCreateWithoutCum_rapInput[] | rap_phimUncheckedCreateWithoutCum_rapInput[]
    connectOrCreate?: rap_phimCreateOrConnectWithoutCum_rapInput | rap_phimCreateOrConnectWithoutCum_rapInput[]
    createMany?: rap_phimCreateManyCum_rapInputEnvelope
    connect?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
  }

  export type rap_phimUncheckedCreateNestedManyWithoutCum_rapInput = {
    create?: XOR<rap_phimCreateWithoutCum_rapInput, rap_phimUncheckedCreateWithoutCum_rapInput> | rap_phimCreateWithoutCum_rapInput[] | rap_phimUncheckedCreateWithoutCum_rapInput[]
    connectOrCreate?: rap_phimCreateOrConnectWithoutCum_rapInput | rap_phimCreateOrConnectWithoutCum_rapInput[]
    createMany?: rap_phimCreateManyCum_rapInputEnvelope
    connect?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type he_thong_rapUpdateOneRequiredWithoutCum_rapNestedInput = {
    create?: XOR<he_thong_rapCreateWithoutCum_rapInput, he_thong_rapUncheckedCreateWithoutCum_rapInput>
    connectOrCreate?: he_thong_rapCreateOrConnectWithoutCum_rapInput
    upsert?: he_thong_rapUpsertWithoutCum_rapInput
    connect?: he_thong_rapWhereUniqueInput
    update?: XOR<XOR<he_thong_rapUpdateToOneWithWhereWithoutCum_rapInput, he_thong_rapUpdateWithoutCum_rapInput>, he_thong_rapUncheckedUpdateWithoutCum_rapInput>
  }

  export type rap_phimUpdateManyWithoutCum_rapNestedInput = {
    create?: XOR<rap_phimCreateWithoutCum_rapInput, rap_phimUncheckedCreateWithoutCum_rapInput> | rap_phimCreateWithoutCum_rapInput[] | rap_phimUncheckedCreateWithoutCum_rapInput[]
    connectOrCreate?: rap_phimCreateOrConnectWithoutCum_rapInput | rap_phimCreateOrConnectWithoutCum_rapInput[]
    upsert?: rap_phimUpsertWithWhereUniqueWithoutCum_rapInput | rap_phimUpsertWithWhereUniqueWithoutCum_rapInput[]
    createMany?: rap_phimCreateManyCum_rapInputEnvelope
    set?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    disconnect?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    delete?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    connect?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    update?: rap_phimUpdateWithWhereUniqueWithoutCum_rapInput | rap_phimUpdateWithWhereUniqueWithoutCum_rapInput[]
    updateMany?: rap_phimUpdateManyWithWhereWithoutCum_rapInput | rap_phimUpdateManyWithWhereWithoutCum_rapInput[]
    deleteMany?: rap_phimScalarWhereInput | rap_phimScalarWhereInput[]
  }

  export type rap_phimUncheckedUpdateManyWithoutCum_rapNestedInput = {
    create?: XOR<rap_phimCreateWithoutCum_rapInput, rap_phimUncheckedCreateWithoutCum_rapInput> | rap_phimCreateWithoutCum_rapInput[] | rap_phimUncheckedCreateWithoutCum_rapInput[]
    connectOrCreate?: rap_phimCreateOrConnectWithoutCum_rapInput | rap_phimCreateOrConnectWithoutCum_rapInput[]
    upsert?: rap_phimUpsertWithWhereUniqueWithoutCum_rapInput | rap_phimUpsertWithWhereUniqueWithoutCum_rapInput[]
    createMany?: rap_phimCreateManyCum_rapInputEnvelope
    set?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    disconnect?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    delete?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    connect?: rap_phimWhereUniqueInput | rap_phimWhereUniqueInput[]
    update?: rap_phimUpdateWithWhereUniqueWithoutCum_rapInput | rap_phimUpdateWithWhereUniqueWithoutCum_rapInput[]
    updateMany?: rap_phimUpdateManyWithWhereWithoutCum_rapInput | rap_phimUpdateManyWithWhereWithoutCum_rapInput[]
    deleteMany?: rap_phimScalarWhereInput | rap_phimScalarWhereInput[]
  }

  export type gheCreateNestedOneWithoutDat_veInput = {
    create?: XOR<gheCreateWithoutDat_veInput, gheUncheckedCreateWithoutDat_veInput>
    connectOrCreate?: gheCreateOrConnectWithoutDat_veInput
    connect?: gheWhereUniqueInput
  }

  export type lich_chieuCreateNestedOneWithoutDat_veInput = {
    create?: XOR<lich_chieuCreateWithoutDat_veInput, lich_chieuUncheckedCreateWithoutDat_veInput>
    connectOrCreate?: lich_chieuCreateOrConnectWithoutDat_veInput
    connect?: lich_chieuWhereUniqueInput
  }

  export type nguoi_dungCreateNestedOneWithoutDat_veInput = {
    create?: XOR<nguoi_dungCreateWithoutDat_veInput, nguoi_dungUncheckedCreateWithoutDat_veInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutDat_veInput
    connect?: nguoi_dungWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type gheUpdateOneRequiredWithoutDat_veNestedInput = {
    create?: XOR<gheCreateWithoutDat_veInput, gheUncheckedCreateWithoutDat_veInput>
    connectOrCreate?: gheCreateOrConnectWithoutDat_veInput
    upsert?: gheUpsertWithoutDat_veInput
    connect?: gheWhereUniqueInput
    update?: XOR<XOR<gheUpdateToOneWithWhereWithoutDat_veInput, gheUpdateWithoutDat_veInput>, gheUncheckedUpdateWithoutDat_veInput>
  }

  export type lich_chieuUpdateOneRequiredWithoutDat_veNestedInput = {
    create?: XOR<lich_chieuCreateWithoutDat_veInput, lich_chieuUncheckedCreateWithoutDat_veInput>
    connectOrCreate?: lich_chieuCreateOrConnectWithoutDat_veInput
    upsert?: lich_chieuUpsertWithoutDat_veInput
    connect?: lich_chieuWhereUniqueInput
    update?: XOR<XOR<lich_chieuUpdateToOneWithWhereWithoutDat_veInput, lich_chieuUpdateWithoutDat_veInput>, lich_chieuUncheckedUpdateWithoutDat_veInput>
  }

  export type nguoi_dungUpdateOneRequiredWithoutDat_veNestedInput = {
    create?: XOR<nguoi_dungCreateWithoutDat_veInput, nguoi_dungUncheckedCreateWithoutDat_veInput>
    connectOrCreate?: nguoi_dungCreateOrConnectWithoutDat_veInput
    upsert?: nguoi_dungUpsertWithoutDat_veInput
    connect?: nguoi_dungWhereUniqueInput
    update?: XOR<XOR<nguoi_dungUpdateToOneWithWhereWithoutDat_veInput, nguoi_dungUpdateWithoutDat_veInput>, nguoi_dungUncheckedUpdateWithoutDat_veInput>
  }

  export type dat_veCreateNestedManyWithoutGheInput = {
    create?: XOR<dat_veCreateWithoutGheInput, dat_veUncheckedCreateWithoutGheInput> | dat_veCreateWithoutGheInput[] | dat_veUncheckedCreateWithoutGheInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutGheInput | dat_veCreateOrConnectWithoutGheInput[]
    createMany?: dat_veCreateManyGheInputEnvelope
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
  }

  export type rap_phimCreateNestedOneWithoutGheInput = {
    create?: XOR<rap_phimCreateWithoutGheInput, rap_phimUncheckedCreateWithoutGheInput>
    connectOrCreate?: rap_phimCreateOrConnectWithoutGheInput
    connect?: rap_phimWhereUniqueInput
  }

  export type dat_veUncheckedCreateNestedManyWithoutGheInput = {
    create?: XOR<dat_veCreateWithoutGheInput, dat_veUncheckedCreateWithoutGheInput> | dat_veCreateWithoutGheInput[] | dat_veUncheckedCreateWithoutGheInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutGheInput | dat_veCreateOrConnectWithoutGheInput[]
    createMany?: dat_veCreateManyGheInputEnvelope
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
  }

  export type dat_veUpdateManyWithoutGheNestedInput = {
    create?: XOR<dat_veCreateWithoutGheInput, dat_veUncheckedCreateWithoutGheInput> | dat_veCreateWithoutGheInput[] | dat_veUncheckedCreateWithoutGheInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutGheInput | dat_veCreateOrConnectWithoutGheInput[]
    upsert?: dat_veUpsertWithWhereUniqueWithoutGheInput | dat_veUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: dat_veCreateManyGheInputEnvelope
    set?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    disconnect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    delete?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    update?: dat_veUpdateWithWhereUniqueWithoutGheInput | dat_veUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: dat_veUpdateManyWithWhereWithoutGheInput | dat_veUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
  }

  export type rap_phimUpdateOneRequiredWithoutGheNestedInput = {
    create?: XOR<rap_phimCreateWithoutGheInput, rap_phimUncheckedCreateWithoutGheInput>
    connectOrCreate?: rap_phimCreateOrConnectWithoutGheInput
    upsert?: rap_phimUpsertWithoutGheInput
    connect?: rap_phimWhereUniqueInput
    update?: XOR<XOR<rap_phimUpdateToOneWithWhereWithoutGheInput, rap_phimUpdateWithoutGheInput>, rap_phimUncheckedUpdateWithoutGheInput>
  }

  export type dat_veUncheckedUpdateManyWithoutGheNestedInput = {
    create?: XOR<dat_veCreateWithoutGheInput, dat_veUncheckedCreateWithoutGheInput> | dat_veCreateWithoutGheInput[] | dat_veUncheckedCreateWithoutGheInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutGheInput | dat_veCreateOrConnectWithoutGheInput[]
    upsert?: dat_veUpsertWithWhereUniqueWithoutGheInput | dat_veUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: dat_veCreateManyGheInputEnvelope
    set?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    disconnect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    delete?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    update?: dat_veUpdateWithWhereUniqueWithoutGheInput | dat_veUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: dat_veUpdateManyWithWhereWithoutGheInput | dat_veUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
  }

  export type cum_rapCreateNestedManyWithoutHe_thong_rapInput = {
    create?: XOR<cum_rapCreateWithoutHe_thong_rapInput, cum_rapUncheckedCreateWithoutHe_thong_rapInput> | cum_rapCreateWithoutHe_thong_rapInput[] | cum_rapUncheckedCreateWithoutHe_thong_rapInput[]
    connectOrCreate?: cum_rapCreateOrConnectWithoutHe_thong_rapInput | cum_rapCreateOrConnectWithoutHe_thong_rapInput[]
    createMany?: cum_rapCreateManyHe_thong_rapInputEnvelope
    connect?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
  }

  export type cum_rapUncheckedCreateNestedManyWithoutHe_thong_rapInput = {
    create?: XOR<cum_rapCreateWithoutHe_thong_rapInput, cum_rapUncheckedCreateWithoutHe_thong_rapInput> | cum_rapCreateWithoutHe_thong_rapInput[] | cum_rapUncheckedCreateWithoutHe_thong_rapInput[]
    connectOrCreate?: cum_rapCreateOrConnectWithoutHe_thong_rapInput | cum_rapCreateOrConnectWithoutHe_thong_rapInput[]
    createMany?: cum_rapCreateManyHe_thong_rapInputEnvelope
    connect?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
  }

  export type cum_rapUpdateManyWithoutHe_thong_rapNestedInput = {
    create?: XOR<cum_rapCreateWithoutHe_thong_rapInput, cum_rapUncheckedCreateWithoutHe_thong_rapInput> | cum_rapCreateWithoutHe_thong_rapInput[] | cum_rapUncheckedCreateWithoutHe_thong_rapInput[]
    connectOrCreate?: cum_rapCreateOrConnectWithoutHe_thong_rapInput | cum_rapCreateOrConnectWithoutHe_thong_rapInput[]
    upsert?: cum_rapUpsertWithWhereUniqueWithoutHe_thong_rapInput | cum_rapUpsertWithWhereUniqueWithoutHe_thong_rapInput[]
    createMany?: cum_rapCreateManyHe_thong_rapInputEnvelope
    set?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    disconnect?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    delete?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    connect?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    update?: cum_rapUpdateWithWhereUniqueWithoutHe_thong_rapInput | cum_rapUpdateWithWhereUniqueWithoutHe_thong_rapInput[]
    updateMany?: cum_rapUpdateManyWithWhereWithoutHe_thong_rapInput | cum_rapUpdateManyWithWhereWithoutHe_thong_rapInput[]
    deleteMany?: cum_rapScalarWhereInput | cum_rapScalarWhereInput[]
  }

  export type cum_rapUncheckedUpdateManyWithoutHe_thong_rapNestedInput = {
    create?: XOR<cum_rapCreateWithoutHe_thong_rapInput, cum_rapUncheckedCreateWithoutHe_thong_rapInput> | cum_rapCreateWithoutHe_thong_rapInput[] | cum_rapUncheckedCreateWithoutHe_thong_rapInput[]
    connectOrCreate?: cum_rapCreateOrConnectWithoutHe_thong_rapInput | cum_rapCreateOrConnectWithoutHe_thong_rapInput[]
    upsert?: cum_rapUpsertWithWhereUniqueWithoutHe_thong_rapInput | cum_rapUpsertWithWhereUniqueWithoutHe_thong_rapInput[]
    createMany?: cum_rapCreateManyHe_thong_rapInputEnvelope
    set?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    disconnect?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    delete?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    connect?: cum_rapWhereUniqueInput | cum_rapWhereUniqueInput[]
    update?: cum_rapUpdateWithWhereUniqueWithoutHe_thong_rapInput | cum_rapUpdateWithWhereUniqueWithoutHe_thong_rapInput[]
    updateMany?: cum_rapUpdateManyWithWhereWithoutHe_thong_rapInput | cum_rapUpdateManyWithWhereWithoutHe_thong_rapInput[]
    deleteMany?: cum_rapScalarWhereInput | cum_rapScalarWhereInput[]
  }

  export type dat_veCreateNestedManyWithoutLich_chieuInput = {
    create?: XOR<dat_veCreateWithoutLich_chieuInput, dat_veUncheckedCreateWithoutLich_chieuInput> | dat_veCreateWithoutLich_chieuInput[] | dat_veUncheckedCreateWithoutLich_chieuInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutLich_chieuInput | dat_veCreateOrConnectWithoutLich_chieuInput[]
    createMany?: dat_veCreateManyLich_chieuInputEnvelope
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
  }

  export type phimCreateNestedOneWithoutLich_chieuInput = {
    create?: XOR<phimCreateWithoutLich_chieuInput, phimUncheckedCreateWithoutLich_chieuInput>
    connectOrCreate?: phimCreateOrConnectWithoutLich_chieuInput
    connect?: phimWhereUniqueInput
  }

  export type rap_phimCreateNestedOneWithoutLich_chieuInput = {
    create?: XOR<rap_phimCreateWithoutLich_chieuInput, rap_phimUncheckedCreateWithoutLich_chieuInput>
    connectOrCreate?: rap_phimCreateOrConnectWithoutLich_chieuInput
    connect?: rap_phimWhereUniqueInput
  }

  export type dat_veUncheckedCreateNestedManyWithoutLich_chieuInput = {
    create?: XOR<dat_veCreateWithoutLich_chieuInput, dat_veUncheckedCreateWithoutLich_chieuInput> | dat_veCreateWithoutLich_chieuInput[] | dat_veUncheckedCreateWithoutLich_chieuInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutLich_chieuInput | dat_veCreateOrConnectWithoutLich_chieuInput[]
    createMany?: dat_veCreateManyLich_chieuInputEnvelope
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
  }

  export type dat_veUpdateManyWithoutLich_chieuNestedInput = {
    create?: XOR<dat_veCreateWithoutLich_chieuInput, dat_veUncheckedCreateWithoutLich_chieuInput> | dat_veCreateWithoutLich_chieuInput[] | dat_veUncheckedCreateWithoutLich_chieuInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutLich_chieuInput | dat_veCreateOrConnectWithoutLich_chieuInput[]
    upsert?: dat_veUpsertWithWhereUniqueWithoutLich_chieuInput | dat_veUpsertWithWhereUniqueWithoutLich_chieuInput[]
    createMany?: dat_veCreateManyLich_chieuInputEnvelope
    set?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    disconnect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    delete?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    update?: dat_veUpdateWithWhereUniqueWithoutLich_chieuInput | dat_veUpdateWithWhereUniqueWithoutLich_chieuInput[]
    updateMany?: dat_veUpdateManyWithWhereWithoutLich_chieuInput | dat_veUpdateManyWithWhereWithoutLich_chieuInput[]
    deleteMany?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
  }

  export type phimUpdateOneRequiredWithoutLich_chieuNestedInput = {
    create?: XOR<phimCreateWithoutLich_chieuInput, phimUncheckedCreateWithoutLich_chieuInput>
    connectOrCreate?: phimCreateOrConnectWithoutLich_chieuInput
    upsert?: phimUpsertWithoutLich_chieuInput
    connect?: phimWhereUniqueInput
    update?: XOR<XOR<phimUpdateToOneWithWhereWithoutLich_chieuInput, phimUpdateWithoutLich_chieuInput>, phimUncheckedUpdateWithoutLich_chieuInput>
  }

  export type rap_phimUpdateOneRequiredWithoutLich_chieuNestedInput = {
    create?: XOR<rap_phimCreateWithoutLich_chieuInput, rap_phimUncheckedCreateWithoutLich_chieuInput>
    connectOrCreate?: rap_phimCreateOrConnectWithoutLich_chieuInput
    upsert?: rap_phimUpsertWithoutLich_chieuInput
    connect?: rap_phimWhereUniqueInput
    update?: XOR<XOR<rap_phimUpdateToOneWithWhereWithoutLich_chieuInput, rap_phimUpdateWithoutLich_chieuInput>, rap_phimUncheckedUpdateWithoutLich_chieuInput>
  }

  export type dat_veUncheckedUpdateManyWithoutLich_chieuNestedInput = {
    create?: XOR<dat_veCreateWithoutLich_chieuInput, dat_veUncheckedCreateWithoutLich_chieuInput> | dat_veCreateWithoutLich_chieuInput[] | dat_veUncheckedCreateWithoutLich_chieuInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutLich_chieuInput | dat_veCreateOrConnectWithoutLich_chieuInput[]
    upsert?: dat_veUpsertWithWhereUniqueWithoutLich_chieuInput | dat_veUpsertWithWhereUniqueWithoutLich_chieuInput[]
    createMany?: dat_veCreateManyLich_chieuInputEnvelope
    set?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    disconnect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    delete?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    update?: dat_veUpdateWithWhereUniqueWithoutLich_chieuInput | dat_veUpdateWithWhereUniqueWithoutLich_chieuInput[]
    updateMany?: dat_veUpdateManyWithWhereWithoutLich_chieuInput | dat_veUpdateManyWithWhereWithoutLich_chieuInput[]
    deleteMany?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
  }

  export type dat_veCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<dat_veCreateWithoutNguoi_dungInput, dat_veUncheckedCreateWithoutNguoi_dungInput> | dat_veCreateWithoutNguoi_dungInput[] | dat_veUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutNguoi_dungInput | dat_veCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: dat_veCreateManyNguoi_dungInputEnvelope
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
  }

  export type dat_veUncheckedCreateNestedManyWithoutNguoi_dungInput = {
    create?: XOR<dat_veCreateWithoutNguoi_dungInput, dat_veUncheckedCreateWithoutNguoi_dungInput> | dat_veCreateWithoutNguoi_dungInput[] | dat_veUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutNguoi_dungInput | dat_veCreateOrConnectWithoutNguoi_dungInput[]
    createMany?: dat_veCreateManyNguoi_dungInputEnvelope
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
  }

  export type dat_veUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<dat_veCreateWithoutNguoi_dungInput, dat_veUncheckedCreateWithoutNguoi_dungInput> | dat_veCreateWithoutNguoi_dungInput[] | dat_veUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutNguoi_dungInput | dat_veCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: dat_veUpsertWithWhereUniqueWithoutNguoi_dungInput | dat_veUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: dat_veCreateManyNguoi_dungInputEnvelope
    set?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    disconnect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    delete?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    update?: dat_veUpdateWithWhereUniqueWithoutNguoi_dungInput | dat_veUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: dat_veUpdateManyWithWhereWithoutNguoi_dungInput | dat_veUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
  }

  export type dat_veUncheckedUpdateManyWithoutNguoi_dungNestedInput = {
    create?: XOR<dat_veCreateWithoutNguoi_dungInput, dat_veUncheckedCreateWithoutNguoi_dungInput> | dat_veCreateWithoutNguoi_dungInput[] | dat_veUncheckedCreateWithoutNguoi_dungInput[]
    connectOrCreate?: dat_veCreateOrConnectWithoutNguoi_dungInput | dat_veCreateOrConnectWithoutNguoi_dungInput[]
    upsert?: dat_veUpsertWithWhereUniqueWithoutNguoi_dungInput | dat_veUpsertWithWhereUniqueWithoutNguoi_dungInput[]
    createMany?: dat_veCreateManyNguoi_dungInputEnvelope
    set?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    disconnect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    delete?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    connect?: dat_veWhereUniqueInput | dat_veWhereUniqueInput[]
    update?: dat_veUpdateWithWhereUniqueWithoutNguoi_dungInput | dat_veUpdateWithWhereUniqueWithoutNguoi_dungInput[]
    updateMany?: dat_veUpdateManyWithWhereWithoutNguoi_dungInput | dat_veUpdateManyWithWhereWithoutNguoi_dungInput[]
    deleteMany?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
  }

  export type bannerCreateNestedManyWithoutPhimInput = {
    create?: XOR<bannerCreateWithoutPhimInput, bannerUncheckedCreateWithoutPhimInput> | bannerCreateWithoutPhimInput[] | bannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutPhimInput | bannerCreateOrConnectWithoutPhimInput[]
    createMany?: bannerCreateManyPhimInputEnvelope
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
  }

  export type lich_chieuCreateNestedManyWithoutPhimInput = {
    create?: XOR<lich_chieuCreateWithoutPhimInput, lich_chieuUncheckedCreateWithoutPhimInput> | lich_chieuCreateWithoutPhimInput[] | lich_chieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutPhimInput | lich_chieuCreateOrConnectWithoutPhimInput[]
    createMany?: lich_chieuCreateManyPhimInputEnvelope
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
  }

  export type bannerUncheckedCreateNestedManyWithoutPhimInput = {
    create?: XOR<bannerCreateWithoutPhimInput, bannerUncheckedCreateWithoutPhimInput> | bannerCreateWithoutPhimInput[] | bannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutPhimInput | bannerCreateOrConnectWithoutPhimInput[]
    createMany?: bannerCreateManyPhimInputEnvelope
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
  }

  export type lich_chieuUncheckedCreateNestedManyWithoutPhimInput = {
    create?: XOR<lich_chieuCreateWithoutPhimInput, lich_chieuUncheckedCreateWithoutPhimInput> | lich_chieuCreateWithoutPhimInput[] | lich_chieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutPhimInput | lich_chieuCreateOrConnectWithoutPhimInput[]
    createMany?: lich_chieuCreateManyPhimInputEnvelope
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type bannerUpdateManyWithoutPhimNestedInput = {
    create?: XOR<bannerCreateWithoutPhimInput, bannerUncheckedCreateWithoutPhimInput> | bannerCreateWithoutPhimInput[] | bannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutPhimInput | bannerCreateOrConnectWithoutPhimInput[]
    upsert?: bannerUpsertWithWhereUniqueWithoutPhimInput | bannerUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: bannerCreateManyPhimInputEnvelope
    set?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    disconnect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    delete?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    update?: bannerUpdateWithWhereUniqueWithoutPhimInput | bannerUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: bannerUpdateManyWithWhereWithoutPhimInput | bannerUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: bannerScalarWhereInput | bannerScalarWhereInput[]
  }

  export type lich_chieuUpdateManyWithoutPhimNestedInput = {
    create?: XOR<lich_chieuCreateWithoutPhimInput, lich_chieuUncheckedCreateWithoutPhimInput> | lich_chieuCreateWithoutPhimInput[] | lich_chieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutPhimInput | lich_chieuCreateOrConnectWithoutPhimInput[]
    upsert?: lich_chieuUpsertWithWhereUniqueWithoutPhimInput | lich_chieuUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: lich_chieuCreateManyPhimInputEnvelope
    set?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    disconnect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    delete?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    update?: lich_chieuUpdateWithWhereUniqueWithoutPhimInput | lich_chieuUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: lich_chieuUpdateManyWithWhereWithoutPhimInput | lich_chieuUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: lich_chieuScalarWhereInput | lich_chieuScalarWhereInput[]
  }

  export type bannerUncheckedUpdateManyWithoutPhimNestedInput = {
    create?: XOR<bannerCreateWithoutPhimInput, bannerUncheckedCreateWithoutPhimInput> | bannerCreateWithoutPhimInput[] | bannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: bannerCreateOrConnectWithoutPhimInput | bannerCreateOrConnectWithoutPhimInput[]
    upsert?: bannerUpsertWithWhereUniqueWithoutPhimInput | bannerUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: bannerCreateManyPhimInputEnvelope
    set?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    disconnect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    delete?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    connect?: bannerWhereUniqueInput | bannerWhereUniqueInput[]
    update?: bannerUpdateWithWhereUniqueWithoutPhimInput | bannerUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: bannerUpdateManyWithWhereWithoutPhimInput | bannerUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: bannerScalarWhereInput | bannerScalarWhereInput[]
  }

  export type lich_chieuUncheckedUpdateManyWithoutPhimNestedInput = {
    create?: XOR<lich_chieuCreateWithoutPhimInput, lich_chieuUncheckedCreateWithoutPhimInput> | lich_chieuCreateWithoutPhimInput[] | lich_chieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutPhimInput | lich_chieuCreateOrConnectWithoutPhimInput[]
    upsert?: lich_chieuUpsertWithWhereUniqueWithoutPhimInput | lich_chieuUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: lich_chieuCreateManyPhimInputEnvelope
    set?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    disconnect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    delete?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    update?: lich_chieuUpdateWithWhereUniqueWithoutPhimInput | lich_chieuUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: lich_chieuUpdateManyWithWhereWithoutPhimInput | lich_chieuUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: lich_chieuScalarWhereInput | lich_chieuScalarWhereInput[]
  }

  export type gheCreateNestedManyWithoutRap_phimInput = {
    create?: XOR<gheCreateWithoutRap_phimInput, gheUncheckedCreateWithoutRap_phimInput> | gheCreateWithoutRap_phimInput[] | gheUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: gheCreateOrConnectWithoutRap_phimInput | gheCreateOrConnectWithoutRap_phimInput[]
    createMany?: gheCreateManyRap_phimInputEnvelope
    connect?: gheWhereUniqueInput | gheWhereUniqueInput[]
  }

  export type lich_chieuCreateNestedManyWithoutRap_phimInput = {
    create?: XOR<lich_chieuCreateWithoutRap_phimInput, lich_chieuUncheckedCreateWithoutRap_phimInput> | lich_chieuCreateWithoutRap_phimInput[] | lich_chieuUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutRap_phimInput | lich_chieuCreateOrConnectWithoutRap_phimInput[]
    createMany?: lich_chieuCreateManyRap_phimInputEnvelope
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
  }

  export type cum_rapCreateNestedOneWithoutRap_phimInput = {
    create?: XOR<cum_rapCreateWithoutRap_phimInput, cum_rapUncheckedCreateWithoutRap_phimInput>
    connectOrCreate?: cum_rapCreateOrConnectWithoutRap_phimInput
    connect?: cum_rapWhereUniqueInput
  }

  export type gheUncheckedCreateNestedManyWithoutRap_phimInput = {
    create?: XOR<gheCreateWithoutRap_phimInput, gheUncheckedCreateWithoutRap_phimInput> | gheCreateWithoutRap_phimInput[] | gheUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: gheCreateOrConnectWithoutRap_phimInput | gheCreateOrConnectWithoutRap_phimInput[]
    createMany?: gheCreateManyRap_phimInputEnvelope
    connect?: gheWhereUniqueInput | gheWhereUniqueInput[]
  }

  export type lich_chieuUncheckedCreateNestedManyWithoutRap_phimInput = {
    create?: XOR<lich_chieuCreateWithoutRap_phimInput, lich_chieuUncheckedCreateWithoutRap_phimInput> | lich_chieuCreateWithoutRap_phimInput[] | lich_chieuUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutRap_phimInput | lich_chieuCreateOrConnectWithoutRap_phimInput[]
    createMany?: lich_chieuCreateManyRap_phimInputEnvelope
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
  }

  export type gheUpdateManyWithoutRap_phimNestedInput = {
    create?: XOR<gheCreateWithoutRap_phimInput, gheUncheckedCreateWithoutRap_phimInput> | gheCreateWithoutRap_phimInput[] | gheUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: gheCreateOrConnectWithoutRap_phimInput | gheCreateOrConnectWithoutRap_phimInput[]
    upsert?: gheUpsertWithWhereUniqueWithoutRap_phimInput | gheUpsertWithWhereUniqueWithoutRap_phimInput[]
    createMany?: gheCreateManyRap_phimInputEnvelope
    set?: gheWhereUniqueInput | gheWhereUniqueInput[]
    disconnect?: gheWhereUniqueInput | gheWhereUniqueInput[]
    delete?: gheWhereUniqueInput | gheWhereUniqueInput[]
    connect?: gheWhereUniqueInput | gheWhereUniqueInput[]
    update?: gheUpdateWithWhereUniqueWithoutRap_phimInput | gheUpdateWithWhereUniqueWithoutRap_phimInput[]
    updateMany?: gheUpdateManyWithWhereWithoutRap_phimInput | gheUpdateManyWithWhereWithoutRap_phimInput[]
    deleteMany?: gheScalarWhereInput | gheScalarWhereInput[]
  }

  export type lich_chieuUpdateManyWithoutRap_phimNestedInput = {
    create?: XOR<lich_chieuCreateWithoutRap_phimInput, lich_chieuUncheckedCreateWithoutRap_phimInput> | lich_chieuCreateWithoutRap_phimInput[] | lich_chieuUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutRap_phimInput | lich_chieuCreateOrConnectWithoutRap_phimInput[]
    upsert?: lich_chieuUpsertWithWhereUniqueWithoutRap_phimInput | lich_chieuUpsertWithWhereUniqueWithoutRap_phimInput[]
    createMany?: lich_chieuCreateManyRap_phimInputEnvelope
    set?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    disconnect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    delete?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    update?: lich_chieuUpdateWithWhereUniqueWithoutRap_phimInput | lich_chieuUpdateWithWhereUniqueWithoutRap_phimInput[]
    updateMany?: lich_chieuUpdateManyWithWhereWithoutRap_phimInput | lich_chieuUpdateManyWithWhereWithoutRap_phimInput[]
    deleteMany?: lich_chieuScalarWhereInput | lich_chieuScalarWhereInput[]
  }

  export type cum_rapUpdateOneRequiredWithoutRap_phimNestedInput = {
    create?: XOR<cum_rapCreateWithoutRap_phimInput, cum_rapUncheckedCreateWithoutRap_phimInput>
    connectOrCreate?: cum_rapCreateOrConnectWithoutRap_phimInput
    upsert?: cum_rapUpsertWithoutRap_phimInput
    connect?: cum_rapWhereUniqueInput
    update?: XOR<XOR<cum_rapUpdateToOneWithWhereWithoutRap_phimInput, cum_rapUpdateWithoutRap_phimInput>, cum_rapUncheckedUpdateWithoutRap_phimInput>
  }

  export type gheUncheckedUpdateManyWithoutRap_phimNestedInput = {
    create?: XOR<gheCreateWithoutRap_phimInput, gheUncheckedCreateWithoutRap_phimInput> | gheCreateWithoutRap_phimInput[] | gheUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: gheCreateOrConnectWithoutRap_phimInput | gheCreateOrConnectWithoutRap_phimInput[]
    upsert?: gheUpsertWithWhereUniqueWithoutRap_phimInput | gheUpsertWithWhereUniqueWithoutRap_phimInput[]
    createMany?: gheCreateManyRap_phimInputEnvelope
    set?: gheWhereUniqueInput | gheWhereUniqueInput[]
    disconnect?: gheWhereUniqueInput | gheWhereUniqueInput[]
    delete?: gheWhereUniqueInput | gheWhereUniqueInput[]
    connect?: gheWhereUniqueInput | gheWhereUniqueInput[]
    update?: gheUpdateWithWhereUniqueWithoutRap_phimInput | gheUpdateWithWhereUniqueWithoutRap_phimInput[]
    updateMany?: gheUpdateManyWithWhereWithoutRap_phimInput | gheUpdateManyWithWhereWithoutRap_phimInput[]
    deleteMany?: gheScalarWhereInput | gheScalarWhereInput[]
  }

  export type lich_chieuUncheckedUpdateManyWithoutRap_phimNestedInput = {
    create?: XOR<lich_chieuCreateWithoutRap_phimInput, lich_chieuUncheckedCreateWithoutRap_phimInput> | lich_chieuCreateWithoutRap_phimInput[] | lich_chieuUncheckedCreateWithoutRap_phimInput[]
    connectOrCreate?: lich_chieuCreateOrConnectWithoutRap_phimInput | lich_chieuCreateOrConnectWithoutRap_phimInput[]
    upsert?: lich_chieuUpsertWithWhereUniqueWithoutRap_phimInput | lich_chieuUpsertWithWhereUniqueWithoutRap_phimInput[]
    createMany?: lich_chieuCreateManyRap_phimInputEnvelope
    set?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    disconnect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    delete?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    connect?: lich_chieuWhereUniqueInput | lich_chieuWhereUniqueInput[]
    update?: lich_chieuUpdateWithWhereUniqueWithoutRap_phimInput | lich_chieuUpdateWithWhereUniqueWithoutRap_phimInput[]
    updateMany?: lich_chieuUpdateManyWithWhereWithoutRap_phimInput | lich_chieuUpdateManyWithWhereWithoutRap_phimInput[]
    deleteMany?: lich_chieuScalarWhereInput | lich_chieuScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type phimCreateWithoutBannerInput = {
    ten_phim: string
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string | null
    deleted_at?: Date | string | null
    deleted_by?: string | null
    is_deleted?: boolean
    lich_chieu?: lich_chieuCreateNestedManyWithoutPhimInput
  }

  export type phimUncheckedCreateWithoutBannerInput = {
    ma_phim?: number
    ten_phim: string
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string | null
    deleted_at?: Date | string | null
    deleted_by?: string | null
    is_deleted?: boolean
    lich_chieu?: lich_chieuUncheckedCreateNestedManyWithoutPhimInput
  }

  export type phimCreateOrConnectWithoutBannerInput = {
    where: phimWhereUniqueInput
    create: XOR<phimCreateWithoutBannerInput, phimUncheckedCreateWithoutBannerInput>
  }

  export type phimUpsertWithoutBannerInput = {
    update: XOR<phimUpdateWithoutBannerInput, phimUncheckedUpdateWithoutBannerInput>
    create: XOR<phimCreateWithoutBannerInput, phimUncheckedCreateWithoutBannerInput>
    where?: phimWhereInput
  }

  export type phimUpdateToOneWithWhereWithoutBannerInput = {
    where?: phimWhereInput
    data: XOR<phimUpdateWithoutBannerInput, phimUncheckedUpdateWithoutBannerInput>
  }

  export type phimUpdateWithoutBannerInput = {
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    lich_chieu?: lich_chieuUpdateManyWithoutPhimNestedInput
  }

  export type phimUncheckedUpdateWithoutBannerInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    lich_chieu?: lich_chieuUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type he_thong_rapCreateWithoutCum_rapInput = {
    ma_he_thong_rap: string
    ten_he_thong_rap: string
    logo?: string | null
  }

  export type he_thong_rapUncheckedCreateWithoutCum_rapInput = {
    ma_he_thong_rap: string
    ten_he_thong_rap: string
    logo?: string | null
  }

  export type he_thong_rapCreateOrConnectWithoutCum_rapInput = {
    where: he_thong_rapWhereUniqueInput
    create: XOR<he_thong_rapCreateWithoutCum_rapInput, he_thong_rapUncheckedCreateWithoutCum_rapInput>
  }

  export type rap_phimCreateWithoutCum_rapInput = {
    ten_rap: string
    ghe?: gheCreateNestedManyWithoutRap_phimInput
    lich_chieu?: lich_chieuCreateNestedManyWithoutRap_phimInput
  }

  export type rap_phimUncheckedCreateWithoutCum_rapInput = {
    ma_rap?: number
    ten_rap: string
    ghe?: gheUncheckedCreateNestedManyWithoutRap_phimInput
    lich_chieu?: lich_chieuUncheckedCreateNestedManyWithoutRap_phimInput
  }

  export type rap_phimCreateOrConnectWithoutCum_rapInput = {
    where: rap_phimWhereUniqueInput
    create: XOR<rap_phimCreateWithoutCum_rapInput, rap_phimUncheckedCreateWithoutCum_rapInput>
  }

  export type rap_phimCreateManyCum_rapInputEnvelope = {
    data: rap_phimCreateManyCum_rapInput | rap_phimCreateManyCum_rapInput[]
    skipDuplicates?: boolean
  }

  export type he_thong_rapUpsertWithoutCum_rapInput = {
    update: XOR<he_thong_rapUpdateWithoutCum_rapInput, he_thong_rapUncheckedUpdateWithoutCum_rapInput>
    create: XOR<he_thong_rapCreateWithoutCum_rapInput, he_thong_rapUncheckedCreateWithoutCum_rapInput>
    where?: he_thong_rapWhereInput
  }

  export type he_thong_rapUpdateToOneWithWhereWithoutCum_rapInput = {
    where?: he_thong_rapWhereInput
    data: XOR<he_thong_rapUpdateWithoutCum_rapInput, he_thong_rapUncheckedUpdateWithoutCum_rapInput>
  }

  export type he_thong_rapUpdateWithoutCum_rapInput = {
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
    ten_he_thong_rap?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type he_thong_rapUncheckedUpdateWithoutCum_rapInput = {
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
    ten_he_thong_rap?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rap_phimUpsertWithWhereUniqueWithoutCum_rapInput = {
    where: rap_phimWhereUniqueInput
    update: XOR<rap_phimUpdateWithoutCum_rapInput, rap_phimUncheckedUpdateWithoutCum_rapInput>
    create: XOR<rap_phimCreateWithoutCum_rapInput, rap_phimUncheckedCreateWithoutCum_rapInput>
  }

  export type rap_phimUpdateWithWhereUniqueWithoutCum_rapInput = {
    where: rap_phimWhereUniqueInput
    data: XOR<rap_phimUpdateWithoutCum_rapInput, rap_phimUncheckedUpdateWithoutCum_rapInput>
  }

  export type rap_phimUpdateManyWithWhereWithoutCum_rapInput = {
    where: rap_phimScalarWhereInput
    data: XOR<rap_phimUpdateManyMutationInput, rap_phimUncheckedUpdateManyWithoutCum_rapInput>
  }

  export type rap_phimScalarWhereInput = {
    AND?: rap_phimScalarWhereInput | rap_phimScalarWhereInput[]
    OR?: rap_phimScalarWhereInput[]
    NOT?: rap_phimScalarWhereInput | rap_phimScalarWhereInput[]
    ma_rap?: IntFilter<"rap_phim"> | number
    ten_rap?: StringFilter<"rap_phim"> | string
    ma_cum_rap?: StringFilter<"rap_phim"> | string
  }

  export type gheCreateWithoutDat_veInput = {
    ten_ghe: string
    loai_ghe?: string
    rap_phim: rap_phimCreateNestedOneWithoutGheInput
  }

  export type gheUncheckedCreateWithoutDat_veInput = {
    ma_ghe?: number
    ten_ghe: string
    loai_ghe?: string
    ma_rap: number
  }

  export type gheCreateOrConnectWithoutDat_veInput = {
    where: gheWhereUniqueInput
    create: XOR<gheCreateWithoutDat_veInput, gheUncheckedCreateWithoutDat_veInput>
  }

  export type lich_chieuCreateWithoutDat_veInput = {
    ngay_gio_chieu: Date | string
    gia_ve: number
    phim: phimCreateNestedOneWithoutLich_chieuInput
    rap_phim: rap_phimCreateNestedOneWithoutLich_chieuInput
  }

  export type lich_chieuUncheckedCreateWithoutDat_veInput = {
    ma_lich_chieu?: number
    ma_rap: number
    ma_phim: number
    ngay_gio_chieu: Date | string
    gia_ve: number
  }

  export type lich_chieuCreateOrConnectWithoutDat_veInput = {
    where: lich_chieuWhereUniqueInput
    create: XOR<lich_chieuCreateWithoutDat_veInput, lich_chieuUncheckedCreateWithoutDat_veInput>
  }

  export type nguoi_dungCreateWithoutDat_veInput = {
    tai_khoan: string
    ho_ten: string
    email: string
    so_dt: string
    mat_khau: string
    loai_nguoi_dung?: string
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type nguoi_dungUncheckedCreateWithoutDat_veInput = {
    tai_khoan: string
    ho_ten: string
    email: string
    so_dt: string
    mat_khau: string
    loai_nguoi_dung?: string
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type nguoi_dungCreateOrConnectWithoutDat_veInput = {
    where: nguoi_dungWhereUniqueInput
    create: XOR<nguoi_dungCreateWithoutDat_veInput, nguoi_dungUncheckedCreateWithoutDat_veInput>
  }

  export type gheUpsertWithoutDat_veInput = {
    update: XOR<gheUpdateWithoutDat_veInput, gheUncheckedUpdateWithoutDat_veInput>
    create: XOR<gheCreateWithoutDat_veInput, gheUncheckedCreateWithoutDat_veInput>
    where?: gheWhereInput
  }

  export type gheUpdateToOneWithWhereWithoutDat_veInput = {
    where?: gheWhereInput
    data: XOR<gheUpdateWithoutDat_veInput, gheUncheckedUpdateWithoutDat_veInput>
  }

  export type gheUpdateWithoutDat_veInput = {
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
    rap_phim?: rap_phimUpdateOneRequiredWithoutGheNestedInput
  }

  export type gheUncheckedUpdateWithoutDat_veInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
    ma_rap?: IntFieldUpdateOperationsInput | number
  }

  export type lich_chieuUpsertWithoutDat_veInput = {
    update: XOR<lich_chieuUpdateWithoutDat_veInput, lich_chieuUncheckedUpdateWithoutDat_veInput>
    create: XOR<lich_chieuCreateWithoutDat_veInput, lich_chieuUncheckedCreateWithoutDat_veInput>
    where?: lich_chieuWhereInput
  }

  export type lich_chieuUpdateToOneWithWhereWithoutDat_veInput = {
    where?: lich_chieuWhereInput
    data: XOR<lich_chieuUpdateWithoutDat_veInput, lich_chieuUncheckedUpdateWithoutDat_veInput>
  }

  export type lich_chieuUpdateWithoutDat_veInput = {
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
    phim?: phimUpdateOneRequiredWithoutLich_chieuNestedInput
    rap_phim?: rap_phimUpdateOneRequiredWithoutLich_chieuNestedInput
  }

  export type lich_chieuUncheckedUpdateWithoutDat_veInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: IntFieldUpdateOperationsInput | number
    ma_phim?: IntFieldUpdateOperationsInput | number
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
  }

  export type nguoi_dungUpsertWithoutDat_veInput = {
    update: XOR<nguoi_dungUpdateWithoutDat_veInput, nguoi_dungUncheckedUpdateWithoutDat_veInput>
    create: XOR<nguoi_dungCreateWithoutDat_veInput, nguoi_dungUncheckedCreateWithoutDat_veInput>
    where?: nguoi_dungWhereInput
  }

  export type nguoi_dungUpdateToOneWithWhereWithoutDat_veInput = {
    where?: nguoi_dungWhereInput
    data: XOR<nguoi_dungUpdateWithoutDat_veInput, nguoi_dungUncheckedUpdateWithoutDat_veInput>
  }

  export type nguoi_dungUpdateWithoutDat_veInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ho_ten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    so_dt?: StringFieldUpdateOperationsInput | string
    mat_khau?: StringFieldUpdateOperationsInput | string
    loai_nguoi_dung?: StringFieldUpdateOperationsInput | string
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nguoi_dungUncheckedUpdateWithoutDat_veInput = {
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ho_ten?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    so_dt?: StringFieldUpdateOperationsInput | string
    mat_khau?: StringFieldUpdateOperationsInput | string
    loai_nguoi_dung?: StringFieldUpdateOperationsInput | string
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dat_veCreateWithoutGheInput = {
    ngay_dat?: Date | string
    lich_chieu: lich_chieuCreateNestedOneWithoutDat_veInput
    nguoi_dung: nguoi_dungCreateNestedOneWithoutDat_veInput
  }

  export type dat_veUncheckedCreateWithoutGheInput = {
    id?: number
    tai_khoan: string
    ma_lich_chieu: number
    ngay_dat?: Date | string
  }

  export type dat_veCreateOrConnectWithoutGheInput = {
    where: dat_veWhereUniqueInput
    create: XOR<dat_veCreateWithoutGheInput, dat_veUncheckedCreateWithoutGheInput>
  }

  export type dat_veCreateManyGheInputEnvelope = {
    data: dat_veCreateManyGheInput | dat_veCreateManyGheInput[]
    skipDuplicates?: boolean
  }

  export type rap_phimCreateWithoutGheInput = {
    ten_rap: string
    lich_chieu?: lich_chieuCreateNestedManyWithoutRap_phimInput
    cum_rap: cum_rapCreateNestedOneWithoutRap_phimInput
  }

  export type rap_phimUncheckedCreateWithoutGheInput = {
    ma_rap?: number
    ten_rap: string
    ma_cum_rap: string
    lich_chieu?: lich_chieuUncheckedCreateNestedManyWithoutRap_phimInput
  }

  export type rap_phimCreateOrConnectWithoutGheInput = {
    where: rap_phimWhereUniqueInput
    create: XOR<rap_phimCreateWithoutGheInput, rap_phimUncheckedCreateWithoutGheInput>
  }

  export type dat_veUpsertWithWhereUniqueWithoutGheInput = {
    where: dat_veWhereUniqueInput
    update: XOR<dat_veUpdateWithoutGheInput, dat_veUncheckedUpdateWithoutGheInput>
    create: XOR<dat_veCreateWithoutGheInput, dat_veUncheckedCreateWithoutGheInput>
  }

  export type dat_veUpdateWithWhereUniqueWithoutGheInput = {
    where: dat_veWhereUniqueInput
    data: XOR<dat_veUpdateWithoutGheInput, dat_veUncheckedUpdateWithoutGheInput>
  }

  export type dat_veUpdateManyWithWhereWithoutGheInput = {
    where: dat_veScalarWhereInput
    data: XOR<dat_veUpdateManyMutationInput, dat_veUncheckedUpdateManyWithoutGheInput>
  }

  export type dat_veScalarWhereInput = {
    AND?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
    OR?: dat_veScalarWhereInput[]
    NOT?: dat_veScalarWhereInput | dat_veScalarWhereInput[]
    id?: IntFilter<"dat_ve"> | number
    tai_khoan?: StringFilter<"dat_ve"> | string
    ma_lich_chieu?: IntFilter<"dat_ve"> | number
    ma_ghe?: IntFilter<"dat_ve"> | number
    ngay_dat?: DateTimeFilter<"dat_ve"> | Date | string
  }

  export type rap_phimUpsertWithoutGheInput = {
    update: XOR<rap_phimUpdateWithoutGheInput, rap_phimUncheckedUpdateWithoutGheInput>
    create: XOR<rap_phimCreateWithoutGheInput, rap_phimUncheckedCreateWithoutGheInput>
    where?: rap_phimWhereInput
  }

  export type rap_phimUpdateToOneWithWhereWithoutGheInput = {
    where?: rap_phimWhereInput
    data: XOR<rap_phimUpdateWithoutGheInput, rap_phimUncheckedUpdateWithoutGheInput>
  }

  export type rap_phimUpdateWithoutGheInput = {
    ten_rap?: StringFieldUpdateOperationsInput | string
    lich_chieu?: lich_chieuUpdateManyWithoutRap_phimNestedInput
    cum_rap?: cum_rapUpdateOneRequiredWithoutRap_phimNestedInput
  }

  export type rap_phimUncheckedUpdateWithoutGheInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: StringFieldUpdateOperationsInput | string
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    lich_chieu?: lich_chieuUncheckedUpdateManyWithoutRap_phimNestedInput
  }

  export type cum_rapCreateWithoutHe_thong_rapInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
    rap_phim?: rap_phimCreateNestedManyWithoutCum_rapInput
  }

  export type cum_rapUncheckedCreateWithoutHe_thong_rapInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
    rap_phim?: rap_phimUncheckedCreateNestedManyWithoutCum_rapInput
  }

  export type cum_rapCreateOrConnectWithoutHe_thong_rapInput = {
    where: cum_rapWhereUniqueInput
    create: XOR<cum_rapCreateWithoutHe_thong_rapInput, cum_rapUncheckedCreateWithoutHe_thong_rapInput>
  }

  export type cum_rapCreateManyHe_thong_rapInputEnvelope = {
    data: cum_rapCreateManyHe_thong_rapInput | cum_rapCreateManyHe_thong_rapInput[]
    skipDuplicates?: boolean
  }

  export type cum_rapUpsertWithWhereUniqueWithoutHe_thong_rapInput = {
    where: cum_rapWhereUniqueInput
    update: XOR<cum_rapUpdateWithoutHe_thong_rapInput, cum_rapUncheckedUpdateWithoutHe_thong_rapInput>
    create: XOR<cum_rapCreateWithoutHe_thong_rapInput, cum_rapUncheckedCreateWithoutHe_thong_rapInput>
  }

  export type cum_rapUpdateWithWhereUniqueWithoutHe_thong_rapInput = {
    where: cum_rapWhereUniqueInput
    data: XOR<cum_rapUpdateWithoutHe_thong_rapInput, cum_rapUncheckedUpdateWithoutHe_thong_rapInput>
  }

  export type cum_rapUpdateManyWithWhereWithoutHe_thong_rapInput = {
    where: cum_rapScalarWhereInput
    data: XOR<cum_rapUpdateManyMutationInput, cum_rapUncheckedUpdateManyWithoutHe_thong_rapInput>
  }

  export type cum_rapScalarWhereInput = {
    AND?: cum_rapScalarWhereInput | cum_rapScalarWhereInput[]
    OR?: cum_rapScalarWhereInput[]
    NOT?: cum_rapScalarWhereInput | cum_rapScalarWhereInput[]
    ma_cum_rap?: StringFilter<"cum_rap"> | string
    ten_cum_rap?: StringFilter<"cum_rap"> | string
    dia_chi?: StringNullableFilter<"cum_rap"> | string | null
    ma_he_thong_rap?: StringFilter<"cum_rap"> | string
  }

  export type dat_veCreateWithoutLich_chieuInput = {
    ngay_dat?: Date | string
    ghe: gheCreateNestedOneWithoutDat_veInput
    nguoi_dung: nguoi_dungCreateNestedOneWithoutDat_veInput
  }

  export type dat_veUncheckedCreateWithoutLich_chieuInput = {
    id?: number
    tai_khoan: string
    ma_ghe: number
    ngay_dat?: Date | string
  }

  export type dat_veCreateOrConnectWithoutLich_chieuInput = {
    where: dat_veWhereUniqueInput
    create: XOR<dat_veCreateWithoutLich_chieuInput, dat_veUncheckedCreateWithoutLich_chieuInput>
  }

  export type dat_veCreateManyLich_chieuInputEnvelope = {
    data: dat_veCreateManyLich_chieuInput | dat_veCreateManyLich_chieuInput[]
    skipDuplicates?: boolean
  }

  export type phimCreateWithoutLich_chieuInput = {
    ten_phim: string
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string | null
    deleted_at?: Date | string | null
    deleted_by?: string | null
    is_deleted?: boolean
    banner?: bannerCreateNestedManyWithoutPhimInput
  }

  export type phimUncheckedCreateWithoutLich_chieuInput = {
    ma_phim?: number
    ten_phim: string
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    ma_nhom?: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string | null
    deleted_at?: Date | string | null
    deleted_by?: string | null
    is_deleted?: boolean
    banner?: bannerUncheckedCreateNestedManyWithoutPhimInput
  }

  export type phimCreateOrConnectWithoutLich_chieuInput = {
    where: phimWhereUniqueInput
    create: XOR<phimCreateWithoutLich_chieuInput, phimUncheckedCreateWithoutLich_chieuInput>
  }

  export type rap_phimCreateWithoutLich_chieuInput = {
    ten_rap: string
    ghe?: gheCreateNestedManyWithoutRap_phimInput
    cum_rap: cum_rapCreateNestedOneWithoutRap_phimInput
  }

  export type rap_phimUncheckedCreateWithoutLich_chieuInput = {
    ma_rap?: number
    ten_rap: string
    ma_cum_rap: string
    ghe?: gheUncheckedCreateNestedManyWithoutRap_phimInput
  }

  export type rap_phimCreateOrConnectWithoutLich_chieuInput = {
    where: rap_phimWhereUniqueInput
    create: XOR<rap_phimCreateWithoutLich_chieuInput, rap_phimUncheckedCreateWithoutLich_chieuInput>
  }

  export type dat_veUpsertWithWhereUniqueWithoutLich_chieuInput = {
    where: dat_veWhereUniqueInput
    update: XOR<dat_veUpdateWithoutLich_chieuInput, dat_veUncheckedUpdateWithoutLich_chieuInput>
    create: XOR<dat_veCreateWithoutLich_chieuInput, dat_veUncheckedCreateWithoutLich_chieuInput>
  }

  export type dat_veUpdateWithWhereUniqueWithoutLich_chieuInput = {
    where: dat_veWhereUniqueInput
    data: XOR<dat_veUpdateWithoutLich_chieuInput, dat_veUncheckedUpdateWithoutLich_chieuInput>
  }

  export type dat_veUpdateManyWithWhereWithoutLich_chieuInput = {
    where: dat_veScalarWhereInput
    data: XOR<dat_veUpdateManyMutationInput, dat_veUncheckedUpdateManyWithoutLich_chieuInput>
  }

  export type phimUpsertWithoutLich_chieuInput = {
    update: XOR<phimUpdateWithoutLich_chieuInput, phimUncheckedUpdateWithoutLich_chieuInput>
    create: XOR<phimCreateWithoutLich_chieuInput, phimUncheckedCreateWithoutLich_chieuInput>
    where?: phimWhereInput
  }

  export type phimUpdateToOneWithWhereWithoutLich_chieuInput = {
    where?: phimWhereInput
    data: XOR<phimUpdateWithoutLich_chieuInput, phimUncheckedUpdateWithoutLich_chieuInput>
  }

  export type phimUpdateWithoutLich_chieuInput = {
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    banner?: bannerUpdateManyWithoutPhimNestedInput
  }

  export type phimUncheckedUpdateWithoutLich_chieuInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: StringFieldUpdateOperationsInput | string
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: IntFieldUpdateOperationsInput | number
    hot?: BoolFieldUpdateOperationsInput | boolean
    dang_chieu?: BoolFieldUpdateOperationsInput | boolean
    sap_chieu?: BoolFieldUpdateOperationsInput | boolean
    ma_nhom?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    banner?: bannerUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type rap_phimUpsertWithoutLich_chieuInput = {
    update: XOR<rap_phimUpdateWithoutLich_chieuInput, rap_phimUncheckedUpdateWithoutLich_chieuInput>
    create: XOR<rap_phimCreateWithoutLich_chieuInput, rap_phimUncheckedCreateWithoutLich_chieuInput>
    where?: rap_phimWhereInput
  }

  export type rap_phimUpdateToOneWithWhereWithoutLich_chieuInput = {
    where?: rap_phimWhereInput
    data: XOR<rap_phimUpdateWithoutLich_chieuInput, rap_phimUncheckedUpdateWithoutLich_chieuInput>
  }

  export type rap_phimUpdateWithoutLich_chieuInput = {
    ten_rap?: StringFieldUpdateOperationsInput | string
    ghe?: gheUpdateManyWithoutRap_phimNestedInput
    cum_rap?: cum_rapUpdateOneRequiredWithoutRap_phimNestedInput
  }

  export type rap_phimUncheckedUpdateWithoutLich_chieuInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: StringFieldUpdateOperationsInput | string
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ghe?: gheUncheckedUpdateManyWithoutRap_phimNestedInput
  }

  export type dat_veCreateWithoutNguoi_dungInput = {
    ngay_dat?: Date | string
    ghe: gheCreateNestedOneWithoutDat_veInput
    lich_chieu: lich_chieuCreateNestedOneWithoutDat_veInput
  }

  export type dat_veUncheckedCreateWithoutNguoi_dungInput = {
    id?: number
    ma_lich_chieu: number
    ma_ghe: number
    ngay_dat?: Date | string
  }

  export type dat_veCreateOrConnectWithoutNguoi_dungInput = {
    where: dat_veWhereUniqueInput
    create: XOR<dat_veCreateWithoutNguoi_dungInput, dat_veUncheckedCreateWithoutNguoi_dungInput>
  }

  export type dat_veCreateManyNguoi_dungInputEnvelope = {
    data: dat_veCreateManyNguoi_dungInput | dat_veCreateManyNguoi_dungInput[]
    skipDuplicates?: boolean
  }

  export type dat_veUpsertWithWhereUniqueWithoutNguoi_dungInput = {
    where: dat_veWhereUniqueInput
    update: XOR<dat_veUpdateWithoutNguoi_dungInput, dat_veUncheckedUpdateWithoutNguoi_dungInput>
    create: XOR<dat_veCreateWithoutNguoi_dungInput, dat_veUncheckedCreateWithoutNguoi_dungInput>
  }

  export type dat_veUpdateWithWhereUniqueWithoutNguoi_dungInput = {
    where: dat_veWhereUniqueInput
    data: XOR<dat_veUpdateWithoutNguoi_dungInput, dat_veUncheckedUpdateWithoutNguoi_dungInput>
  }

  export type dat_veUpdateManyWithWhereWithoutNguoi_dungInput = {
    where: dat_veScalarWhereInput
    data: XOR<dat_veUpdateManyMutationInput, dat_veUncheckedUpdateManyWithoutNguoi_dungInput>
  }

  export type bannerCreateWithoutPhimInput = {
    hinh_anh: string
  }

  export type bannerUncheckedCreateWithoutPhimInput = {
    ma_banner?: number
    hinh_anh: string
  }

  export type bannerCreateOrConnectWithoutPhimInput = {
    where: bannerWhereUniqueInput
    create: XOR<bannerCreateWithoutPhimInput, bannerUncheckedCreateWithoutPhimInput>
  }

  export type bannerCreateManyPhimInputEnvelope = {
    data: bannerCreateManyPhimInput | bannerCreateManyPhimInput[]
    skipDuplicates?: boolean
  }

  export type lich_chieuCreateWithoutPhimInput = {
    ngay_gio_chieu: Date | string
    gia_ve: number
    dat_ve?: dat_veCreateNestedManyWithoutLich_chieuInput
    rap_phim: rap_phimCreateNestedOneWithoutLich_chieuInput
  }

  export type lich_chieuUncheckedCreateWithoutPhimInput = {
    ma_lich_chieu?: number
    ma_rap: number
    ngay_gio_chieu: Date | string
    gia_ve: number
    dat_ve?: dat_veUncheckedCreateNestedManyWithoutLich_chieuInput
  }

  export type lich_chieuCreateOrConnectWithoutPhimInput = {
    where: lich_chieuWhereUniqueInput
    create: XOR<lich_chieuCreateWithoutPhimInput, lich_chieuUncheckedCreateWithoutPhimInput>
  }

  export type lich_chieuCreateManyPhimInputEnvelope = {
    data: lich_chieuCreateManyPhimInput | lich_chieuCreateManyPhimInput[]
    skipDuplicates?: boolean
  }

  export type bannerUpsertWithWhereUniqueWithoutPhimInput = {
    where: bannerWhereUniqueInput
    update: XOR<bannerUpdateWithoutPhimInput, bannerUncheckedUpdateWithoutPhimInput>
    create: XOR<bannerCreateWithoutPhimInput, bannerUncheckedCreateWithoutPhimInput>
  }

  export type bannerUpdateWithWhereUniqueWithoutPhimInput = {
    where: bannerWhereUniqueInput
    data: XOR<bannerUpdateWithoutPhimInput, bannerUncheckedUpdateWithoutPhimInput>
  }

  export type bannerUpdateManyWithWhereWithoutPhimInput = {
    where: bannerScalarWhereInput
    data: XOR<bannerUpdateManyMutationInput, bannerUncheckedUpdateManyWithoutPhimInput>
  }

  export type bannerScalarWhereInput = {
    AND?: bannerScalarWhereInput | bannerScalarWhereInput[]
    OR?: bannerScalarWhereInput[]
    NOT?: bannerScalarWhereInput | bannerScalarWhereInput[]
    ma_banner?: IntFilter<"banner"> | number
    ma_phim?: IntFilter<"banner"> | number
    hinh_anh?: StringFilter<"banner"> | string
  }

  export type lich_chieuUpsertWithWhereUniqueWithoutPhimInput = {
    where: lich_chieuWhereUniqueInput
    update: XOR<lich_chieuUpdateWithoutPhimInput, lich_chieuUncheckedUpdateWithoutPhimInput>
    create: XOR<lich_chieuCreateWithoutPhimInput, lich_chieuUncheckedCreateWithoutPhimInput>
  }

  export type lich_chieuUpdateWithWhereUniqueWithoutPhimInput = {
    where: lich_chieuWhereUniqueInput
    data: XOR<lich_chieuUpdateWithoutPhimInput, lich_chieuUncheckedUpdateWithoutPhimInput>
  }

  export type lich_chieuUpdateManyWithWhereWithoutPhimInput = {
    where: lich_chieuScalarWhereInput
    data: XOR<lich_chieuUpdateManyMutationInput, lich_chieuUncheckedUpdateManyWithoutPhimInput>
  }

  export type lich_chieuScalarWhereInput = {
    AND?: lich_chieuScalarWhereInput | lich_chieuScalarWhereInput[]
    OR?: lich_chieuScalarWhereInput[]
    NOT?: lich_chieuScalarWhereInput | lich_chieuScalarWhereInput[]
    ma_lich_chieu?: IntFilter<"lich_chieu"> | number
    ma_rap?: IntFilter<"lich_chieu"> | number
    ma_phim?: IntFilter<"lich_chieu"> | number
    ngay_gio_chieu?: DateTimeFilter<"lich_chieu"> | Date | string
    gia_ve?: IntFilter<"lich_chieu"> | number
  }

  export type gheCreateWithoutRap_phimInput = {
    ten_ghe: string
    loai_ghe?: string
    dat_ve?: dat_veCreateNestedManyWithoutGheInput
  }

  export type gheUncheckedCreateWithoutRap_phimInput = {
    ma_ghe?: number
    ten_ghe: string
    loai_ghe?: string
    dat_ve?: dat_veUncheckedCreateNestedManyWithoutGheInput
  }

  export type gheCreateOrConnectWithoutRap_phimInput = {
    where: gheWhereUniqueInput
    create: XOR<gheCreateWithoutRap_phimInput, gheUncheckedCreateWithoutRap_phimInput>
  }

  export type gheCreateManyRap_phimInputEnvelope = {
    data: gheCreateManyRap_phimInput | gheCreateManyRap_phimInput[]
    skipDuplicates?: boolean
  }

  export type lich_chieuCreateWithoutRap_phimInput = {
    ngay_gio_chieu: Date | string
    gia_ve: number
    dat_ve?: dat_veCreateNestedManyWithoutLich_chieuInput
    phim: phimCreateNestedOneWithoutLich_chieuInput
  }

  export type lich_chieuUncheckedCreateWithoutRap_phimInput = {
    ma_lich_chieu?: number
    ma_phim: number
    ngay_gio_chieu: Date | string
    gia_ve: number
    dat_ve?: dat_veUncheckedCreateNestedManyWithoutLich_chieuInput
  }

  export type lich_chieuCreateOrConnectWithoutRap_phimInput = {
    where: lich_chieuWhereUniqueInput
    create: XOR<lich_chieuCreateWithoutRap_phimInput, lich_chieuUncheckedCreateWithoutRap_phimInput>
  }

  export type lich_chieuCreateManyRap_phimInputEnvelope = {
    data: lich_chieuCreateManyRap_phimInput | lich_chieuCreateManyRap_phimInput[]
    skipDuplicates?: boolean
  }

  export type cum_rapCreateWithoutRap_phimInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
    he_thong_rap: he_thong_rapCreateNestedOneWithoutCum_rapInput
  }

  export type cum_rapUncheckedCreateWithoutRap_phimInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
    ma_he_thong_rap: string
  }

  export type cum_rapCreateOrConnectWithoutRap_phimInput = {
    where: cum_rapWhereUniqueInput
    create: XOR<cum_rapCreateWithoutRap_phimInput, cum_rapUncheckedCreateWithoutRap_phimInput>
  }

  export type gheUpsertWithWhereUniqueWithoutRap_phimInput = {
    where: gheWhereUniqueInput
    update: XOR<gheUpdateWithoutRap_phimInput, gheUncheckedUpdateWithoutRap_phimInput>
    create: XOR<gheCreateWithoutRap_phimInput, gheUncheckedCreateWithoutRap_phimInput>
  }

  export type gheUpdateWithWhereUniqueWithoutRap_phimInput = {
    where: gheWhereUniqueInput
    data: XOR<gheUpdateWithoutRap_phimInput, gheUncheckedUpdateWithoutRap_phimInput>
  }

  export type gheUpdateManyWithWhereWithoutRap_phimInput = {
    where: gheScalarWhereInput
    data: XOR<gheUpdateManyMutationInput, gheUncheckedUpdateManyWithoutRap_phimInput>
  }

  export type gheScalarWhereInput = {
    AND?: gheScalarWhereInput | gheScalarWhereInput[]
    OR?: gheScalarWhereInput[]
    NOT?: gheScalarWhereInput | gheScalarWhereInput[]
    ma_ghe?: IntFilter<"ghe"> | number
    ten_ghe?: StringFilter<"ghe"> | string
    loai_ghe?: StringFilter<"ghe"> | string
    ma_rap?: IntFilter<"ghe"> | number
  }

  export type lich_chieuUpsertWithWhereUniqueWithoutRap_phimInput = {
    where: lich_chieuWhereUniqueInput
    update: XOR<lich_chieuUpdateWithoutRap_phimInput, lich_chieuUncheckedUpdateWithoutRap_phimInput>
    create: XOR<lich_chieuCreateWithoutRap_phimInput, lich_chieuUncheckedCreateWithoutRap_phimInput>
  }

  export type lich_chieuUpdateWithWhereUniqueWithoutRap_phimInput = {
    where: lich_chieuWhereUniqueInput
    data: XOR<lich_chieuUpdateWithoutRap_phimInput, lich_chieuUncheckedUpdateWithoutRap_phimInput>
  }

  export type lich_chieuUpdateManyWithWhereWithoutRap_phimInput = {
    where: lich_chieuScalarWhereInput
    data: XOR<lich_chieuUpdateManyMutationInput, lich_chieuUncheckedUpdateManyWithoutRap_phimInput>
  }

  export type cum_rapUpsertWithoutRap_phimInput = {
    update: XOR<cum_rapUpdateWithoutRap_phimInput, cum_rapUncheckedUpdateWithoutRap_phimInput>
    create: XOR<cum_rapCreateWithoutRap_phimInput, cum_rapUncheckedCreateWithoutRap_phimInput>
    where?: cum_rapWhereInput
  }

  export type cum_rapUpdateToOneWithWhereWithoutRap_phimInput = {
    where?: cum_rapWhereInput
    data: XOR<cum_rapUpdateWithoutRap_phimInput, cum_rapUncheckedUpdateWithoutRap_phimInput>
  }

  export type cum_rapUpdateWithoutRap_phimInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    he_thong_rap?: he_thong_rapUpdateOneRequiredWithoutCum_rapNestedInput
  }

  export type cum_rapUncheckedUpdateWithoutRap_phimInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: StringFieldUpdateOperationsInput | string
  }

  export type rap_phimCreateManyCum_rapInput = {
    ma_rap?: number
    ten_rap: string
  }

  export type rap_phimUpdateWithoutCum_rapInput = {
    ten_rap?: StringFieldUpdateOperationsInput | string
    ghe?: gheUpdateManyWithoutRap_phimNestedInput
    lich_chieu?: lich_chieuUpdateManyWithoutRap_phimNestedInput
  }

  export type rap_phimUncheckedUpdateWithoutCum_rapInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: StringFieldUpdateOperationsInput | string
    ghe?: gheUncheckedUpdateManyWithoutRap_phimNestedInput
    lich_chieu?: lich_chieuUncheckedUpdateManyWithoutRap_phimNestedInput
  }

  export type rap_phimUncheckedUpdateManyWithoutCum_rapInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: StringFieldUpdateOperationsInput | string
  }

  export type dat_veCreateManyGheInput = {
    id?: number
    tai_khoan: string
    ma_lich_chieu: number
    ngay_dat?: Date | string
  }

  export type dat_veUpdateWithoutGheInput = {
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
    lich_chieu?: lich_chieuUpdateOneRequiredWithoutDat_veNestedInput
    nguoi_dung?: nguoi_dungUpdateOneRequiredWithoutDat_veNestedInput
  }

  export type dat_veUncheckedUpdateWithoutGheInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dat_veUncheckedUpdateManyWithoutGheInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cum_rapCreateManyHe_thong_rapInput = {
    ma_cum_rap: string
    ten_cum_rap: string
    dia_chi?: string | null
  }

  export type cum_rapUpdateWithoutHe_thong_rapInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    rap_phim?: rap_phimUpdateManyWithoutCum_rapNestedInput
  }

  export type cum_rapUncheckedUpdateWithoutHe_thong_rapInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    rap_phim?: rap_phimUncheckedUpdateManyWithoutCum_rapNestedInput
  }

  export type cum_rapUncheckedUpdateManyWithoutHe_thong_rapInput = {
    ma_cum_rap?: StringFieldUpdateOperationsInput | string
    ten_cum_rap?: StringFieldUpdateOperationsInput | string
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dat_veCreateManyLich_chieuInput = {
    id?: number
    tai_khoan: string
    ma_ghe: number
    ngay_dat?: Date | string
  }

  export type dat_veUpdateWithoutLich_chieuInput = {
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
    ghe?: gheUpdateOneRequiredWithoutDat_veNestedInput
    nguoi_dung?: nguoi_dungUpdateOneRequiredWithoutDat_veNestedInput
  }

  export type dat_veUncheckedUpdateWithoutLich_chieuInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dat_veUncheckedUpdateManyWithoutLich_chieuInput = {
    id?: IntFieldUpdateOperationsInput | number
    tai_khoan?: StringFieldUpdateOperationsInput | string
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dat_veCreateManyNguoi_dungInput = {
    id?: number
    ma_lich_chieu: number
    ma_ghe: number
    ngay_dat?: Date | string
  }

  export type dat_veUpdateWithoutNguoi_dungInput = {
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
    ghe?: gheUpdateOneRequiredWithoutDat_veNestedInput
    lich_chieu?: lich_chieuUpdateOneRequiredWithoutDat_veNestedInput
  }

  export type dat_veUncheckedUpdateWithoutNguoi_dungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dat_veUncheckedUpdateManyWithoutNguoi_dungInput = {
    id?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ngay_dat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bannerCreateManyPhimInput = {
    ma_banner?: number
    hinh_anh: string
  }

  export type lich_chieuCreateManyPhimInput = {
    ma_lich_chieu?: number
    ma_rap: number
    ngay_gio_chieu: Date | string
    gia_ve: number
  }

  export type bannerUpdateWithoutPhimInput = {
    hinh_anh?: StringFieldUpdateOperationsInput | string
  }

  export type bannerUncheckedUpdateWithoutPhimInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    hinh_anh?: StringFieldUpdateOperationsInput | string
  }

  export type bannerUncheckedUpdateManyWithoutPhimInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    hinh_anh?: StringFieldUpdateOperationsInput | string
  }

  export type lich_chieuUpdateWithoutPhimInput = {
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
    dat_ve?: dat_veUpdateManyWithoutLich_chieuNestedInput
    rap_phim?: rap_phimUpdateOneRequiredWithoutLich_chieuNestedInput
  }

  export type lich_chieuUncheckedUpdateWithoutPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: IntFieldUpdateOperationsInput | number
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
    dat_ve?: dat_veUncheckedUpdateManyWithoutLich_chieuNestedInput
  }

  export type lich_chieuUncheckedUpdateManyWithoutPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: IntFieldUpdateOperationsInput | number
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
  }

  export type gheCreateManyRap_phimInput = {
    ma_ghe?: number
    ten_ghe: string
    loai_ghe?: string
  }

  export type lich_chieuCreateManyRap_phimInput = {
    ma_lich_chieu?: number
    ma_phim: number
    ngay_gio_chieu: Date | string
    gia_ve: number
  }

  export type gheUpdateWithoutRap_phimInput = {
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
    dat_ve?: dat_veUpdateManyWithoutGheNestedInput
  }

  export type gheUncheckedUpdateWithoutRap_phimInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
    dat_ve?: dat_veUncheckedUpdateManyWithoutGheNestedInput
  }

  export type gheUncheckedUpdateManyWithoutRap_phimInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: StringFieldUpdateOperationsInput | string
    loai_ghe?: StringFieldUpdateOperationsInput | string
  }

  export type lich_chieuUpdateWithoutRap_phimInput = {
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
    dat_ve?: dat_veUpdateManyWithoutLich_chieuNestedInput
    phim?: phimUpdateOneRequiredWithoutLich_chieuNestedInput
  }

  export type lich_chieuUncheckedUpdateWithoutRap_phimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_phim?: IntFieldUpdateOperationsInput | number
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
    dat_ve?: dat_veUncheckedUpdateManyWithoutLich_chieuNestedInput
  }

  export type lich_chieuUncheckedUpdateManyWithoutRap_phimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_phim?: IntFieldUpdateOperationsInput | number
    ngay_gio_chieu?: DateTimeFieldUpdateOperationsInput | Date | string
    gia_ve?: IntFieldUpdateOperationsInput | number
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