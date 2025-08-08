import React, { FC } from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import GapComponent from "@/components/ui/gap-component";
import FormField from "@/components/ui/forms/form-field";
import { useProductService } from "@/features/products/model/useProductService";
import { useRouter } from "expo-router";

const addProductSchema = z.object({
  productName: z.string().min(1, "Add a product name"),
  price: z.string().min(1, "Enter a valid price"),
  imageUrl: z.string().url("Invalid URL format")
});

type FormValue = z.infer<typeof addProductSchema>;

const AddProductForm: FC = () => {
  const {
    addProductMutation: { mutateAsync, isPending },
  } = useProductService();


  const form = useForm<FormValue>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      productName: "",
      price: '',
      imageUrl: "",
    },
  });

  const onSubmitHandler = async (data: FormValue) => {
    return await mutateAsync({
      name: data.productName,
      price: Number(data.price),
      imageurl: data.imageUrl
    }, {
    });
  };

  return (
    <View className="flex-1">
      <Container>
        <FormField
          control={form.control}
          name="productName"
          label="Product Name"
          placeholder="Enter the product name"
          keyboardType="email-address"
          autoCapitalize="none"
          error={form.formState.errors.productName}
        />
        <GapComponent height={10} />
        <FormField
          control={form.control}
          name="price"
          keyboardType="numeric"
          label="Price"
          placeholder="Enter Product price"
          error={form.formState.errors.price}
        />
        <GapComponent height={10} />
        <FormField
          control={form.control}
          name="imageUrl"
          label="Image URL"
          placeholder="Add Image URL"
          autoCapitalize="none"
          error={form.formState.errors.imageUrl}
        />
      </Container>

      <GapComponent height={20} />

      <Container>
        <Button
          size={"lg"}
          onPress={form.handleSubmit(onSubmitHandler)}
          loading={isPending}
          disabled={isPending}
        >
          {isPending ? "Adding product..." : "Save"}
        </Button>
      </Container>
    </View>
  );
};

export default AddProductForm;
