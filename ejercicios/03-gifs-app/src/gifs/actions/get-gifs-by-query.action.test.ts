import { describe, expect, test } from "vitest";
import { GetGifsByQuery } from "./get-gifs-by-query.action";

describe('getGifsByQuery', () => {

   test('Should return a list of gifs', async () => {
      // Arrange
      const gifsLenghtExpected = 10;
      const objectExpected = {
         id: expect.any(String),
         height: expect.any(Number),
         width: expect.any(Number),
         title: expect.any(String),
         url: expect.any(String)
      };
      const gifs = await GetGifsByQuery('gokú');
      // Act
      const [gifs1] = gifs;

      // Assert
      expect(gifs1).toStrictEqual(objectExpected);
      expect(gifs.length).toBe(gifsLenghtExpected);
   });

});