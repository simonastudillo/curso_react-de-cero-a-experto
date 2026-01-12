import { beforeEach, describe, expect, test } from "vitest";
import { getHeroesByPageAction } from "./get-heroes-by-page.action";
import AxiosMockAdapter from 'axios-mock-adapter';
import { heroApi } from "../api/hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

describe("getSummaryAction", () => {

   const heroesApiMock = new AxiosMockAdapter(heroApi);

   beforeEach(() => {
      heroesApiMock.reset();
   });

   test("Should return default heroes", async () => {
      // Assert
      const page = 1;
      heroesApiMock.onGet('/').reply(200, {
         total: 10,
         pages: 2,
         heroes: [
            {
               image: '1.jpg'
            },
            {
               image: '2.jpg'
            },
            {
               image: '3.jpg'
            },
            {
               image: '4.jpg'
            },
         ]
      });
      // Act
      const response = await getHeroesByPageAction(page);
      // Arrange
      expect(response).toEqual({
         total: 10,
         pages: 2,
         heroes: [
            {
               image: `${BASE_URL}/images/1.jpg`
            },
            {
               image: `${BASE_URL}/images/2.jpg`
            },
            {
               image: `${BASE_URL}/images/3.jpg`
            },
            {
               image: `${BASE_URL}/images/4.jpg`
            },
         ]
      });
   });

   test("Should return the correct heroes when page is not a number", async () => {
      // Assert
      const page = 'abc' as unknown as number;
      const responseObject = {
         total: 10,
         pages: 1,
         heroes: []
      };
      const defaultParams = { category: 'all', limit: 6, offset: 0 };

      heroesApiMock.onGet('/').reply(200, responseObject);
      heroesApiMock.resetHistory();
      // Act
      const response = await getHeroesByPageAction(page);
      // Arrange
      const params = heroesApiMock.history.get[0].params;
      expect(params).toStrictEqual(defaultParams);
   });

   test("Should return the correct heroes when page is a string number", async () => {
      // Assert
      const page = '5' as unknown as number;
      const responseObject = {
         total: 10,
         pages: 1,
         heroes: []
      };
      const defaultParams = { category: 'all', limit: 6, offset: 24 };

      heroesApiMock.onGet('/').reply(200, responseObject);
      heroesApiMock.resetHistory();
      // Act
      const response = await getHeroesByPageAction(page);
      // Arrange
      const params = heroesApiMock.history.get[0].params;
      expect(params).toStrictEqual(defaultParams);
   });

   test("Should call the api with the correct params", async () => {
      // Assert
      const page = '5' as unknown as number;
      const limit = 10;
      const category = 'heroes';
      const expectedOffset = (5 - 1) * limit;
      const responseObject = {
         total: 10,
         pages: 1,
         heroes: []
      };
      const defaultParams = { category: category, limit: limit, offset: expectedOffset };

      heroesApiMock.onGet('/').reply(200, responseObject);
      heroesApiMock.resetHistory();
      // Act
      const response = await getHeroesByPageAction(page, limit, category);
      // Arrange
      const params = heroesApiMock.history.get[0].params;
      expect(params).toStrictEqual(defaultParams);
   });

});