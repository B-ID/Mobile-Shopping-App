import {View} from "react-native";
import React from "react";
import {useAuthMutations} from "@/features/auth/model/useAuthMutations";
import FormField from "@/components/ui/forms/form-field";
import GapComponent from "@/components/ui/gap-component";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "@/components/ui/button";

const signUpSchema = z
    .object({
        email: z.string().email({message: 'Enter a valid email address'}),
        password: z.string().min(1, "Enter a valid password"),
    })
    .required();

type FormValue = z.infer<typeof signUpSchema>;


const SignupForm = () => {
    const {
        signUpMutation: {mutateAsync, isPending},
    } = useAuthMutations();

    const form = useForm<FormValue>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmitHandler = async (data: FormValue) => {
        await mutateAsync({
            email: data.email,
            password: data.password
        });
    };

    return (
        <View>
            <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                error={form.formState.errors.email}
            />
            <GapComponent height={10}/>
            <FormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                error={form.formState.errors.password}
            />
            <GapComponent height={24}/>
            <Button textClassName={'text-white text-lg'} variant={'primary'} size={'primary'} loading={isPending} onPress={form.handleSubmit(onSubmitHandler)}>
                {isPending ? 'Submitting..' : 'Sign Up'}
            </Button>
        </View>
    );
};

export default SignupForm;
