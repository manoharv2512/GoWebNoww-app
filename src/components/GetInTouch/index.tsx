import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  email: string;
  description: string;
};

const GetInTouch: React.FC = () => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Add your form submission logic here
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 6 },
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <Grid container spacing={6}>
        {/* Left Section - Contact Info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
              marginBottom: 4,
              color: theme.palette.text.primary,
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginBottom: 6,
              color: theme.palette.text.secondary,
              fontSize: "1.1rem",
            }}
          >
            Have questions or want to learn more about our Digital Services?
            Reach out anytime!
          </Typography>

          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Phone
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              +91 9075172459
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: 600, marginBottom: 1 }}
            >
              Email
            </Typography>
            <Typography variant="body1">
              getinfo.gowebnow@gmail.com
            </Typography>
          </Box>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Name Field */}
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name*"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    placeholder="Your Full Name"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                      },
                    }}
                  />
                )}
              />

              {/* Phone Field */}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone*"
                    variant="outlined"
                    fullWidth
                    placeholder="Enter contact"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                      },
                    }}
                  />
                )}
              />

              {/* Email Field */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    placeholder="Enter email"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                      },
                    }}
                  />
                )}
              />

              {/* Description Field */}
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                    placeholder="Write Description"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                      },
                    }}
                  />
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  padding: "12px 24px",
                  backgroundColor: "#1976d2",
                  borderRadius: 25,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  alignSelf: "flex-start",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                Send Feedback
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;
