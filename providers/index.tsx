import {buildProvidersTree} from "@/utils/build-providers-tree";
import {TanStackProvider} from "./tanstack-provider";
import {SafeAreaProvider} from "react-native-safe-area-context";
// import {AuthProvider} from "@/providers/auth-provider";


export const ProvidersTree = buildProvidersTree([
    [SafeAreaProvider],
    [TanStackProvider],
    // [AuthProvider]
])