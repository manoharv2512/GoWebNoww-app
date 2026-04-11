import { motion } from "framer-motion";
import { Box, Typography, Grid, Chip, Card, CardContent } from "@mui/material";

import menuImg from "../../../assets/TheSandwichCo/menu-sandwiches.jpg";

const menuItems = [
  {
    name: "The Classic Club",
    desc: "Turkey, bacon, lettuce, tomato, mayo on toasted sourdough",
    price: "$12.50",
    tag: "Bestseller",
  },
  {
    name: "Smoky BBQ Pulled Pork",
    desc: "Slow-cooked pulled pork, coleslaw, pickles on brioche",
    price: "$13.50",
    tag: "",
  },
  {
    name: "Caprese Panini",
    desc: "Fresh mozzarella, tomato, basil, balsamic on ciabatta",
    price: "$11.00",
    tag: "Vegetarian",
  },
  {
    name: "Spicy Chicken Wrap",
    desc: "Grilled chicken, sriracha mayo, avocado, mixed greens",
    price: "$12.00",
    tag: "",
  },
  {
    name: "Garden Veggie Delight",
    desc: "Hummus, roasted veggies, feta, spinach on whole grain",
    price: "$10.50",
    tag: "Vegan Option",
  },
  {
    name: "Philly Cheesesteak",
    desc: "Shaved beef, peppers, onions, provolone on hoagie roll",
    price: "$14.00",
    tag: "Popular",
  },
];

const Menu = () => {
  return (
    <Box id="menu" sx={{ py: 10, px: 2, backgroundColor: "#f9f9f9" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              Our Menu
            </Typography>
            <Typography color="text.secondary" maxWidth="500px" mx="auto">
              Fresh ingredients, bold flavours — crafted daily with love.
            </Typography>
          </Box>
        </motion.div>

        {/* Menu Items */}
        <Grid container spacing={3}>
          {menuItems.map((item, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    p: 2,
                  }}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Typography variant="h6" fontWeight="600">
                        {item.name}
                      </Typography>

                      {item.tag && (
                        <Chip
                          label={item.tag}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      )}
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="primary"
                    sx={{ ml: 2, whiteSpace: "nowrap" }}
                  >
                    {item.price}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Image */}
        <Box
          component="img"
          src={menuImg}
          alt="Menu"
          sx={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: 4,
            boxShadow: 3,
          }}
        />
      </Box>
    </Box>
  );
};

export default Menu;
