import {FC} from 'react'
import{  View } from "react-native";
import Container from "../ui/container";
import { ArrowLeftCircle } from "lucide-react-native";
import {Text}from "@/components/ui/rn-text";


type Props = {
    title: string
}

const ScreenTitle:FC<Props> = ({title}) => {
    return (

    <View>
      <Container>
        <View className={""}>
            <Text variant={"title_medium_semibold"}>{title}</Text>
        </View>
      </Container>
      <View className={"border-b border-gray-100"} />
    </View>
    )
}