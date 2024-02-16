export interface IAppConfig {
    name: string;
    version: string;
    port: number;
    uptime: () => number;
}
export declare const appConfig: () => {
    app: IAppConfig;
};
export declare class ConfigOrmModule {
}
