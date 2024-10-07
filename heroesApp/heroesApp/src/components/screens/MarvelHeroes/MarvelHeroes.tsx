import { useEffect, useState } from "react";
import { heroesData } from "../../../data/heroes";
import { IHeroes } from "../../../types/Heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const MarvelHeroes = () => {

    const [heroes, setHeroes] = useState<IHeroes[]>([]);
    const handleGetHeroesMarvel = ()=>{
        const result = heroesData.filter((hero)=> hero.publisher === "Marvel Comics")
        setHeroes(result);
    }
    useEffect(()=>{
        handleGetHeroesMarvel();
    },[]);

    return (
        <ListHeroes heroes={heroes} title="Heroes Marvel Comics" />
    )
}
