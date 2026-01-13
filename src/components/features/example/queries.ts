import { infiniteQueryOptions, queryOptions, useMutation } from "@tanstack/react-query";

import { EXAMPLE } from "@/constants/query-key";
import { cleanQuery } from "@/utils/text";

import { createExample, getExample } from "./actions";

import type { ExampleQuery } from "./types";

export const ExampleKeys = {
  all: () => [EXAMPLE],
  infiniteLists: () => [...ExampleKeys.all(), "INFINITE_LISTS"],
  infiniteList: (query: ExampleQuery) =>
    infiniteQueryOptions({
      queryKey: [...ExampleKeys.infiniteLists(), cleanQuery(query)],
      queryFn: ({ pageParam }) => getExample({ ...query, skip: pageParam.toString() }),
      initialPageParam: 0,
      getNextPageParam: lastPage => {
        if (lastPage.products.length < 5) {
          return undefined;
        }

        return lastPage.skip + 5;
      },
    }),
  details: (query: ExampleQuery) =>
    queryOptions({
      queryKey: [...ExampleKeys.all(), cleanQuery(query)],
      queryFn: () => getExample(query),
    }),
};

export function useCreateExample() {
  return useMutation({ mutationFn: createExample });
}
