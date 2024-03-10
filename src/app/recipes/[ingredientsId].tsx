import { Ingredients } from "@/components/Ingredients";
import { Recipe } from "@/components/Recipe";
import { services } from "@/services";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Recipes() {
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
    const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
    const params = useLocalSearchParams<{ingredientsId: string}>();
    const ingredientsId = params.ingredientsId.split(',');

    useEffect(() => {
        services.ingredients.findByIds(ingredientsId).then(setIngredients)
    }, [])

    useEffect(() => {
        services.recipes.findByIngredientsIds(ingredientsId).then(setRecipes)
    }, [])

    return (
        <View className="container flex-1">
            <View className="header px-8 pt-16 mb-5">
                <MaterialIcons name='arrow-back' size={32} onPress={() => router.back()}></MaterialIcons>
                <Text className="title text-2xl font-bold mt-8">Ingredientes</Text>
            </View>

            <Ingredients ingredients={ingredients}></Ingredients>

            <FlatList
                data={recipes}
                keyExtractor={recipe => recipe.id}
                renderItem={({item}) => <Recipe recipe={item} onPress={() => router.navigate("/recipe/" + item.id)}></Recipe>}
                style={{padding: 32}}
                contentContainerStyle={{gap: 16}}
                columnWrapperStyle={{gap: 16}}
                numColumns={2}
            />
        </View>
    )
}