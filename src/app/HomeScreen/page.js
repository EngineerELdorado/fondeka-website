import { redirect } from "next/navigation";

export default function HomeScreenRedirectPage({ searchParams = {} }) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      value.forEach((entry) => params.append(key, entry));
    } else if (value !== undefined) {
      params.set(key, value);
    }
  }

  const queryString = params.toString();

  redirect(queryString ? `/?${queryString}` : "/");
}
