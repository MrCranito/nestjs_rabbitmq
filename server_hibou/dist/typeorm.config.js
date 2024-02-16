"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.runOptions = void 0;
exports.runOptions = {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5434'),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    migrations: ['dist/src/migrations/*.js'],
    ssl: {
        rejectUnauthorized: false
    }
};
const testOptions = {
    ...exports.runOptions,
    entities: [__dirname + '/src/**/*.entity.ts'],
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5434'),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    synchronize: true,
    migrations: [__dirname + '/src/migrations/*.ts'],
    logging: 'all',
};
exports.default = process.env.NODE_ENV === 'development' ? testOptions : exports.runOptions;
function getConfig() {
    return process.env.NODE_ENV === 'development' ? testOptions : exports.runOptions;
}
exports.getConfig = getConfig;
//# sourceMappingURL=typeorm.config.js.map