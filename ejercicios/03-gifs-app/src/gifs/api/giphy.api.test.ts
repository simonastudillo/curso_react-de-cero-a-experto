import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphyApi', () => {

   test('Should be configured correctly', () => {
      const params = giphyApi.defaults.params;

      expect(giphyApi.defaults.baseURL).toBe(`https://api.giphy.com/v1/`);
      expect(giphyApi.defaults.params.lang).toBeDefined();
      expect(giphyApi.defaults.params.api_key).toBeDefined();

      expect(params).toStrictEqual({
         lang: 'es',
         api_key: import.meta.env.VITE_GIPHY_API
      });
   });

});