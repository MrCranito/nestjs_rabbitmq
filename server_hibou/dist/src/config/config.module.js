"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigOrmModule = exports.appConfig = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./../../typeorm.config");
const config = {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
    port: parseInt(process.env.PORT) || 8080,
    uptime: process.uptime,
};
const appConfig = () => ({
    app: config,
});
exports.appConfig = appConfig;
let ConfigOrmModule = class ConfigOrmModule {
};
exports.ConfigOrmModule = ConfigOrmModule;
exports.ConfigOrmModule = ConfigOrmModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [exports.appConfig] }),
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.default),
        ],
        controllers: [],
        providers: [],
    })
], ConfigOrmModule);
//# sourceMappingURL=config.module.js.map