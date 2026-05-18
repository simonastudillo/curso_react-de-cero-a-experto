import { describe, expect, test } from "vitest";
import { getHeroAction } from "./get-hero.action";

const BASE_URL = import.meta.env.VITE_API_URL;

describe("getHeroAction", () => {

   test("should fetch hero data and return with complete image URL", async () => {
      // Arrange
      const slug = "clark-kent";
      const objectExpected = {
         id: expect.any(String),
         name: expect.any(String),
         slug: expect.any(String),
         alias: expect.any(String),
         powers: expect.any(Array),
         description: expect.any(String),
         strength: expect.any(Number),
         intelligence: expect.any(Number),
         speed: expect.any(Number),
         durability: expect.any(Number),
         team: expect.any(String),
         image: expect.any(String),
         firstAppearance: expect.any(String),
         status: expect.any(String),
         category: expect.any(String),
         universe: expect.any(String),
      }
      // Act
      const hero = await getHeroAction(slug);
      // Assert
      expect(hero).toStrictEqual(objectExpected);
      expect(hero.image).toContain(`${BASE_URL}/images/`);
   });


   test("Should throw an error if hero not found", async () => {
      // Arrange
      const slug = "clark-kent2";
      // Act
      const hero = await getHeroAction(slug).catch((error) => {
         // Assert
         expect(error).toBeDefined();
         expect(error.response.status).toBe(404);
         expect(error.response.data.message).toBe("Hero not found");
      });
      expect(hero).toBeUndefined();
   });

});