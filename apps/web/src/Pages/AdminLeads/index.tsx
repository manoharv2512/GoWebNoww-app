import { useEffect, useState } from "react";
import type { ContactLead, ContactLeadStatus } from "@gowebnow/shared";
import {
  Alert,
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { api, clearAuthToken, hasAuthToken, saveAuthToken } from "../../lib/api";

const statuses: ContactLeadStatus[] = ["NEW", "CONTACTED", "CLOSED"];

const AdminLeads = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(hasAuthToken());
  const [email, setEmail] = useState("admin@gowebnow.local");
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      let isActive = true;

      api
        .listContactLeads()
        .then((data) => {
          if (isActive) {
            setLeads(data);
          }
        })
        .catch((err: unknown) => {
          if (isActive) {
            setError(err instanceof Error ? err.message : "Failed to load leads");
          }
        });

      return () => {
        isActive = false;
      };
    }
  }, [isLoggedIn]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      const result = await api.login({ email, password });
      saveAuthToken(result.token);
      setIsLoggedIn(true);
      setMessage("Logged in successfully.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  }

  async function updateStatus(id: string, status: ContactLeadStatus) {
    setError("");
    const updated = await api.updateContactLeadStatus(id, status);
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? updated : lead)),
    );
  }

  async function deleteLead(id: string) {
    setError("");
    await api.deleteContactLead(id);
    setLeads((current) => current.filter((lead) => lead.id !== id));
  }

  function logout() {
    clearAuthToken();
    setIsLoggedIn(false);
    setLeads([]);
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h3" fontWeight={700}>
            Contact Leads
          </Typography>
          <Typography color="text.secondary">
            Review messages submitted from the website contact form.
          </Typography>
        </Box>

        {message && <Alert severity="success">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        {!isLoggedIn ? (
          <Paper component="form" onSubmit={handleLogin} sx={{ p: 3 }}>
            <Stack spacing={2}>
              <TextField
                label="Admin email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                helperText="Default local seed email is admin@gowebnow.local"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                helperText="Default local seed password is ChangeMe123!"
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Stack>
          </Paper>
        ) : (
          <>
            <Box>
              <Button variant="outlined" onClick={logout}>
                Logout
              </Button>
            </Box>

            <Stack spacing={2}>
              {leads.map((lead) => (
                <Paper key={lead.id} sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="h6">{lead.name}</Typography>
                      <Typography color="text.secondary">
                        {lead.email}
                        {lead.phone ? ` · ${lead.phone}` : ""}
                      </Typography>
                    </Box>
                    <Typography>{lead.message}</Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <TextField
                        select
                        label="Status"
                        value={lead.status}
                        onChange={(event) =>
                          void updateStatus(
                            lead.id,
                            event.target.value as ContactLeadStatus,
                          )
                        }
                        sx={{ minWidth: 180 }}
                      >
                        {statuses.map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </TextField>
                      <Button color="error" onClick={() => void deleteLead(lead.id)}>
                        Delete
                      </Button>
                    </Stack>
                  </Stack>
                </Paper>
              ))}

              {leads.length === 0 && (
                <Typography color="text.secondary">No leads yet.</Typography>
              )}
            </Stack>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default AdminLeads;
