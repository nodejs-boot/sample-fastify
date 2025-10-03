import {Action, AuthorizationChecker} from "@nodeboot/context";
import {Component} from "@nodeboot/core";
import {FastifyReply, FastifyRequest} from "fastify";
import {Inject} from "@nodeboot/di";
import {Logger} from "winston";

@Component()
export class DefaultAuthorizationResolver implements AuthorizationChecker<FastifyRequest, FastifyReply> {
    @Inject()
    private logger: Logger;

    async check(_: Action<FastifyRequest, FastifyReply>, roles: string[]): Promise<boolean> {
        // here you can use request/response objects from action
        // also if decorator defines roles it needs to access the action
        // you can use them to provide granular access check
        // checker must return either boolean (true or false)
        // either promise that resolves a boolean value
        // demo code:
        this.logger.info(`Checking authorization`);
        //const user = await getEntityManager().findOneByToken(User, token);
        const user = {
            roles: ["USER", "ADMIN"],
        };
        if (user && !roles.length) return true;
        return user && roles.find(role => user.roles.indexOf(role) !== -1) !== undefined;
    }
}
