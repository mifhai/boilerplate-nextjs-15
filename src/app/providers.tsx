"use client";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { theme } from "@/configs/mantine-theme";
import { getQueryClient } from "@/configs/tanstack-query-client";

import type * as React from "react";

export function Providers(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        {props.children}
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
