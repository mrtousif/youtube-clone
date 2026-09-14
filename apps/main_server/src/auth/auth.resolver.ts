import { UseGuards } from '@nestjs/common';
import { Args, Field, Int, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from './current-user.decorator';
import { GqlJwtAuthGuard } from './jwt.guard';
import { AuthService } from './auth.service';
import { access } from 'fs';

@ObjectType()
class PurchasedItemResult {
    @Field({ nullable: true })
    itemId?: number;
    @Field({ nullable: true })
    secret?: string;
    @Field({ nullable: true })
    remainingCoins?: number;
    @Field({ nullable: true })
    error?: string;
}

@UseGuards(GqlJwtAuthGuard)
@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Query((_) => String)
    health() {
        return 'healthy';
    }

    @Query((_) => PurchasedItemResult)
    async purchaseItem(
        @Args({ name: 'itemId', type: () => Int }) itemId: number,
        @CurrentUser() user: { userId: number }
    ): Promise<PurchasedItemResult> {
        console.log(user);
        // const { accessToken } = user;

        try {
            // const userInfo = await this.authService.getUserInfo(accessToken);

            // return {
            //     itemId,
            //     remainingCoins: purchaseResult.buyer.coins,
            //     secret: purchaseResult.purchase.item.secret,
            // };
            return;
        } catch (e) {
            return {
                error: e,
            };
        }
    }
}