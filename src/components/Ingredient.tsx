import { useState } from "react";
import { Image, Pressable, PressableProps, Text } from "react-native";

export type IngredientsProps = {
    name: string;
    image: string;
    selected?: boolean;
}

export function Ingredient({name, image, selected = false, ...rest}: IngredientsProps & PressableProps) {
    const selectedStyle = selected ? "border-green-400 bg-green-200" : "border-gray-300"

    return (
        <Pressable className={selectedStyle + " border-2 rounded-full px-3 h-11 flex-row items-center gap-1.5"} {...rest}>
            <Image source={{uri: image}} className="mb-2 h-5 w-5"></Image>
            <Text className="font-medium">{name}</Text>
        </Pressable>
    )
}