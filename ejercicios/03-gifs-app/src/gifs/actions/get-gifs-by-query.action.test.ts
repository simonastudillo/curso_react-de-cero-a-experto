import { beforeEach, describe, expect, test } from "vitest";
import { GetGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphySearchResponseMock } from '../../../tests/mocks/giphy.response.data';

let mock = new AxiosMockAdapter(giphyApi);

describe('getGifsByQuery', () => {

   beforeEach(() => {
      mock = new AxiosMockAdapter(giphyApi);
   });

   // test('Should return a list of gifs', async () => {
   //    // Arrange
   //    const gifsLenghtExpected = 10;
   //    const objectExpected = {
   //       id: expect.any(String),
   //       height: expect.any(Number),
   //       width: expect.any(Number),
   //       title: expect.any(String),
   //       url: expect.any(String)
   //    };
   //    const gifs = await GetGifsByQuery('gokú');
   //    // Act
   //    const [gifs1] = gifs;

   //    // Assert
   //    expect(gifs1).toStrictEqual(objectExpected);
   //    expect(gifs.length).toBe(gifsLenghtExpected);
   // });

   test('Should return a list of gifs', async () => {
      // Arrange
      const gifsLenghtExpected = 10;
      mock.onGet('gifs/search/').reply(200, giphySearchResponseMock);
      // Act
      const gifs = await GetGifsByQuery('Gokú');
      // Assert
      expect(gifs.length).toBe(gifsLenghtExpected);
      gifs.forEach(gif => {
         expect(typeof gif.id).toBe('string');
         expect(typeof gif.title).toBe('string');
         expect(typeof gif.url).toBe('string');
         expect(typeof gif.width).toBe('number');
         expect(typeof gif.height).toBe('number');
      });
   });

   test('Should return an empty list of gifs if query is empty', async () => {
      // Arrange
      const gifsLenghtExpected = 0;
      mock.restore();
      // Act
      const gifs = await GetGifsByQuery('');
      // Assert
      expect(gifs.length).toBe(gifsLenghtExpected);
   });

   test('Should handle error when the API returns an error', async () => {
      // Arrange
      const gifsLenghtExpected = 0;
      mock.onGet('gifs/search/').reply(400, {
         message: 'Bad Request'
      });
      // Act
      const gifs = await GetGifsByQuery('Gokú');
      // Assert
      expect(gifs.length).toBe(gifsLenghtExpected);
   });

});