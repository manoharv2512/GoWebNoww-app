import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  Grid,
} from "@mui/material";
// import ratingbg from "../../../assets/TheSandwichCo/Rating_bg.jpeg";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const reviews = [
  {
    name: "Lavanya Admane",
    text: "The sandwiches were super fresh and tasty! Loved the quick service and clean packaging. Definitely ordering again.great ho sandwich company team!",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Shashank Vishwakarma",
    text: "Very unique taste and love to have it more and more got best thing to try in nagpur on this very first time i and my friend love it so much nice service and polite work place",
    rating: 5,
    date: "3 month ago",
  },
  {
    name: "swati Talreja",
    text: "We tried bunza and London cheese toast both very good fresh and good quality food ...pocket friendly place loved the ambience and best food",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Rushikesh Thakur",
    text: "It's awesome test, guys I truly appreciate and recommend this shop best sandwiches test.",
    rating: 5,
    date: "3 week ago",
  },
  {
    name: "Ashu Mittal",
    text: "Very good taste, many varieties of sandwiches, pizza, momos and many more. Would absolutely recommend it.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Ram Dhamdar",
    text: "Great place to have fun with your friends and family in budget",
    rating: 5,
    date: "2 weeks ago",
  },
];

const Reviews = () => {
  return (
    <Box
      id="reviews"
      sx={{ py: 10, px: 2, backgroundColor: "#f9f9f9", position: "relative" }}
    >
      <Container maxWidth="lg">
        {/* <Box
          component="img"
          src={ratingbg}
          alt="BG"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        /> */}
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight="bold" mb={2} zIndex={12}>
              What Our Customers Say
            </Typography>

            <Stack direction="row" justifyContent="center" spacing={0.5} mb={1}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} color="primary" />
              ))}
            </Stack>

            <Typography color="text.secondary">
              4.9 out of 5 based on 100+ reviews
            </Typography>
          </Box>
        </motion.div>

        {/* Reviews Grid */}
        <Grid container spacing={3}>
          {reviews.map((r, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={r.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <CardContent>
                    {/* Quote Icon */}
                    <FormatQuoteIcon
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontSize: 32,
                        color: "rgba(0,0,0,0.1)",
                      }}
                    />

                    {/* Rating */}
                    <Stack direction="row" spacing={0.5} mb={2}>
                      {[...Array(r.rating)].map((_, j) => (
                        <StarIcon key={j} color="primary" fontSize="small" />
                      ))}
                      {[...Array(5 - r.rating)].map((_, j) => (
                        <StarBorderIcon key={j} fontSize="small" />
                      ))}
                    </Stack>

                    {/* Review Text */}
                    <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                      "{r.text}"
                    </Typography>

                    {/* Footer */}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography fontWeight="600" fontSize="0.9rem">
                        {r.name}
                      </Typography>

                      <Typography variant="caption" color="text.secondary">
                        {r.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
