import React from 'react';
import {Text,ActivityIndicator, Pressable, PressableProps, View} from 'react-native';
import {twMerge} from 'tailwind-merge';
import {cva, type VariantProps} from 'class-variance-authority';
import {FONT} from "@/constants/font-family";

const buttonVariants = cva(
    'flex-row items-center justify-center rounded-md px-4 py-2 shadow-sm',
    {
        variants: {
            variant: {
                primary: 'bg-[#181818]',
                secondary: 'bg-gray-500 active:bg-gray-700',
                outline: 'border border-gray-300 bg-transparent',
                ghost: 'bg-transparent',
                destructive: 'bg-red-500 active:bg-red-700',
            },
            size: {
                sm: 'h-8 px-3 text-sm',
                md: 'h-10 px-4',
                lg: 'h-12 px-6 text-lg',
                primary: 'h-[44px]'
            },
            fullWidth: {
                true: 'w-full',
            },
            disabled: {
                true: 'opacity-50',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

const textVariants = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-gray-900',
    ghost: 'text-gray-900',
    destructive: 'text-white',
};

const spinnerColors = {
    primary: '#ffffff',
    secondary: '#ffffff',
    outline: '#6b7280',
    ghost: '#6b7280',
    destructive: '#ffffff',
};

interface ButtonProps
    extends PressableProps,
        VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
    textClassName?: string;
}

const ButtonComponent = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size,
            fullWidth,
            disabled = false,
            loading = false,
            leftIcon,
            rightIcon,
            className,
            textClassName,
            ...props
        },
        ref
    ) => {
        return (
            <Pressable
                ref={ref}
                disabled={disabled || loading}
                className={twMerge(
                    className,
                    buttonVariants({variant, size, fullWidth, disabled})
                )}
                {...props}
            >
                {loading && (
                    <ActivityIndicator
                        size="small"
                        color={spinnerColors[variant ?? 'primary']}
                        style={{marginRight: 8}}
                    />
                )}

                {!loading && leftIcon && <View style={{marginRight: 8}}>{leftIcon}</View>}

                <Text
                    style={{
                        fontFamily: FONT.MontserratMedium
                    }}
                    className={twMerge(
                        'font-medium text-center ',
                        textVariants[variant ?? 'primary'],
                        textClassName
                    )}
                >
                    {children}
                </Text>

                {!loading && rightIcon && <View style={{marginLeft: 8}}>{rightIcon}</View>}
            </Pressable>
        );
    }
);

ButtonComponent.displayName = 'Button';

export default ButtonComponent;

export {buttonVariants};
