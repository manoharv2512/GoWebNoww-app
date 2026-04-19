import type {
  ContactLead,
  ContactLeadStatus,
  CreateContactLeadInput,
} from "@gowebnow/shared";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";
const TOKEN_KEY = "gowebnow_admin_token";

type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
};

async function request<T>(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem(TOKEN_KEY);
  let response: Response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new Error(
      `Cannot reach API at ${API_URL}. Start the backend with npm run dev:api.`,
    );
  }

  if (!response.ok) {
    const payload = await response.json().catch(() => undefined);
    throw new Error(payload?.message ?? "API request failed");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export function saveAuthToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAuthToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function hasAuthToken() {
  return Boolean(localStorage.getItem(TOKEN_KEY));
}

export const api = {
  login(input: { email: string; password: string }) {
    return request<LoginResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },
  createContactLead(input: CreateContactLeadInput) {
    return request<ContactLead>("/api/contact-leads", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },
  listContactLeads() {
    return request<ContactLead[]>("/api/contact-leads");
  },
  updateContactLeadStatus(id: string, status: ContactLeadStatus) {
    return request<ContactLead>(`/api/contact-leads/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  },
  deleteContactLead(id: string) {
    return request<void>(`/api/contact-leads/${id}`, {
      method: "DELETE",
    });
  },
};
