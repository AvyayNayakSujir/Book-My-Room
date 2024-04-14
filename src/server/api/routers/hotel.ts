import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const hotelRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.hotel.findMany();
  }),
  getByName: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotel.findFirst({ where: { name: input } });
  }),
  getByCity: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotel.findMany({ where: { city: input } });
  }),
  getByCountry: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotel.findMany({ where: { country: input } });
  }),
  addHotel: protectedProcedure
    .input(z.object({ name: z.string().min(1).max(60),
      city: z.string().min(1).max(60),
      country: z.string().min(1).max(60),
      description: z.string().min(1).max(255),
      star_rating: z.number().min(1).max(5),
      ammenities : z.string().min(1).max(255),
     }))
    .mutation(async ({ ctx, input }) => {
      const hotel = await ctx.db.hotel.create({ data: {
        name: input.name,
        city: input.city,
        country: input.country,
        description: input.description,
        star_rating: input.star_rating,
        ammenities: input.ammenities,
      } });

      return hotel;
    }),
});
