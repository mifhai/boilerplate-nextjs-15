"use client";
import { useEffect, useState } from "react";

const componentNames = ["XIcon"];

export function Icons() {
  const [components, setComponents] = useState<React.ComponentType<{ width: string; height: string }>[]>([]);

  useEffect(() => {
    async function loadComponents() {
      try {
        const loadedComponents = await Promise.all(
          componentNames.map(async name => {
            // eslint-disable-next-line @next/next/no-assign-module-variable
            const module = { ...(await import(/* @vite-ignore */ `./${name}`)) };

            return module[`${name}`];
          }),
        );

        setComponents(loadedComponents);
      } catch (error) {
        console.error("Error loading components:", error);
      }
    }

    loadComponents();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {components.map((Component, index) => (
        <div
          key={componentNames[`${index}`]}
          className="flex h-[100px] w-[200px] flex-col items-center justify-center gap-2 rounded-md border bg-gray-100"
        >
          <Component width="40px" height="40px" />
          <p className="text-center text-xs font-semibold">{componentNames[`${index}`]}</p>
        </div>
      ))}
    </div>
  );
}
