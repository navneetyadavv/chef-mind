// packages/api/index.ts
import { Recipe } from "@repo/types";

export async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch("http://localhost:3000/api/recipes");
  return res.json();
}
