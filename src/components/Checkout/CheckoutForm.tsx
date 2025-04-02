"use client";

import React, { useState } from "react";
import { useCart } from "@/contexts/cartContext";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { EnrichedCartItem } from "@/types/cart";

const CheckoutForm = () => {
  const { enrichedCartItems, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement payment processing
    console.log("Form submitted:", formData);
  };

  const getItemImage = (item: EnrichedCartItem): string => {
    if (!item.product?.colorVariants) {
      return "/placeholder-image.jpg";
    }

    const colorVariant = item.product.colorVariants.find(
      (variant) => variant._id === item.colorId
    );
    return colorVariant?.mainImage || "/placeholder-image.jpg";
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Checkout
      </Typography>
      <Grid container spacing={4}>
        {/* Left side - Form */}
        <Grid item xs={12} md={8}>
          <Box component="form" onSubmit={handleSubmit}>
            {/* Contact Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Contact Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    fullWidth
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    fullWidth
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Shipping Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Shipping Address
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="address"
                    fullWidth
                    label="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="city"
                    fullWidth
                    label="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="zipCode"
                    fullWidth
                    label="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="country"
                    fullWidth
                    label="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Payment Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Payment Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="cardNumber"
                    fullWidth
                    label="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="expiryDate"
                    fullWidth
                    label="MM/YY"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="cvv"
                    fullWidth
                    label="CVV"
                    type="password"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                py: 2,
                bgcolor: "#272727",
                "&:hover": { bgcolor: "#3a3a3a" },
                fontWeight: "bold",
              }}
            >
              Pay ${cartTotal.toFixed(2)}
            </Button>
          </Box>
        </Grid>

        {/* Right side - Order Summary */}
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: "#f5f5f5", p: 3, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Order Summary
            </Typography>
            <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
              {enrichedCartItems?.map((item: EnrichedCartItem) => (
                <Box key={item._id} sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                    <Box sx={{ position: "relative", width: 60, height: 60 }}>
                      <Image
                        src={getItemImage(item)}
                        alt={item.product?.title || "Product"}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.product?.title || "Product"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Quantity: {item.quantity}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Subtotal</Typography>
              <Typography>${cartTotal.toFixed(2)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Shipping</Typography>
              <Typography>Free</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                ${cartTotal.toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutForm;
