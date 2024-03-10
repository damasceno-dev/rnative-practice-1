import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Animated, { BounceIn, BounceInDown, BounceInRight, SlideInDown, SlideInUp } from "react-native-reanimated";
import { Button } from "./Button";

type Props = {
    quantity: number;
    onClear: () => void;
    onSearch: () => void;
}

export function Selected({quantity, onClear, onSearch}:Props) {
    return (
        <Animated.View entering={SlideInDown.duration(500)} className='container bg-black p-6 rounded-lg absolute bottom-8 w-full self-center'>
            <View className='header flex-row justify-between items-center mb-9'>
                <Text className="label text-white text-sm font-regular">{quantity} ingredientes selecionados</Text>
                <MaterialIcons name='close' size={24} onPress={onClear} color={'#9ca3af'}></MaterialIcons>
            </View>

            <Button title="Encontrar" onPress={onSearch}></Button>
        </Animated.View>
    )
}