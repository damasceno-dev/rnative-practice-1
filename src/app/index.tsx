import { Ingredient } from '@/components/Ingredient'
import { Selected } from '@/components/Selected';
import { services } from '@/services';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react'
import {Alert, ScrollView, Text, View} from 'react-native'
export default function Index() {

    const [selected, setSelected] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

    function handleToggleSelected(value:string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        } 
        setSelected((state) => [...state, value])
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => setSelected([])}
        ])
    }

    function handleSearch() {
        router.navigate('/recipes/' + selected);
    }

    useEffect(() => {
        services.ingredients.findAll().then(setIngredients)
    }, [])

    return (
        <View className='flex-1 p-6'>
            <Text className='title text-4xl leading-10 mt-11 font-bold'>
                Escolha {"\n"}
                <Text className='text-4xl font-regular'>os produtos</Text>
            </Text>
            <Text className='subtitle text-base font-regular mt-4 mb-8 text-gray-500'>Descubra receitas beseadas no produrtos que você escolheu.</Text>

            
        <ScrollView className="p-3 ml-3"
            contentContainerStyle={{flexWrap: "wrap", flexDirection: "row", paddingBottom: 200, gap: 14}}
        >
            {ingredients.map((item) => {
            return ( 
                <Ingredient 
                    key={item.id} 
                    name={item.name} 
                    image={`${services.storage.imagePath}/${item.image}`}
                    selected={selected.includes(String(item.id))}
                    onPress={() => handleToggleSelected(String(item.id))} 
                />
            )})}
        </ScrollView>

        {selected.length > 0 && (
            <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch}></Selected>
        )}
        </View>
    )
}