"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpansionModule = void 0;
const common_1 = require("@nestjs/common");
const tag_model_1 = require("../tag/tag.model");
const article_model_1 = require("../article/article.model");
const comment_model_1 = require("../comment/comment.model");
const expansion_controller_1 = require("./expansion.controller");
const expansion_service_statistic_1 = require("./expansion.service.statistic");
const expansion_service_dbbackup_1 = require("./expansion.service.dbbackup");
const services = [expansion_service_statistic_1.StatisticService, expansion_service_dbbackup_1.DBBackupService];
let ExpansionModule = class ExpansionModule {
};
ExpansionModule = __decorate([
    (0, common_1.Module)({
        controllers: [expansion_controller_1.ExpansionController],
        providers: [tag_model_1.TagProvider, article_model_1.ArticleProvider, comment_model_1.CommentProvider, ...services],
        exports: services,
    })
], ExpansionModule);
exports.ExpansionModule = ExpansionModule;
//# sourceMappingURL=expansion.module.js.map