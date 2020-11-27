"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var core_1 = require("@mikro-orm/core");
var type_graphql_1 = require("type-graphql");
var User = /** @class */ (function () {
    function User() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    __decorate([
        type_graphql_1.Field(),
        core_1.PrimaryKey()
    ], User.prototype, "id");
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        core_1.Property({ type: "date" })
    ], User.prototype, "createdAt");
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        core_1.Property({ type: "date", onUpdate: function () { return new Date(); } })
    ], User.prototype, "updatedAt");
    __decorate([
        type_graphql_1.Field(),
        core_1.Property({ type: "text", unique: true })
    ], User.prototype, "username");
    __decorate([
        core_1.Property({ type: "text" })
    ], User.prototype, "password");
    User = __decorate([
        type_graphql_1.ObjectType(),
        core_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
